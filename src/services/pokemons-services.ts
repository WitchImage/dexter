import type { Pagination, UtilityResponse } from '@/types/';
import { pokemonAPI, utilityAPI } from './pokemon-request';
import { POKE_API_URL } from './urls';
import { type SimplePokemon, type PokemonType } from '@/types/pokemon-types';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { type Pokemon } from 'pokenode-ts';

export async function getSimplePokemonByName(
    name: string
): Promise<SimplePokemon> {
    return await pokemonAPI
        .getPokemonByName(name)
        .then(data => {
            return {
                id: data.id,
                type: data.types[0].type.name as PokemonType,
                image:
                    data.sprites.other?.['official-artwork'].front_default ??
                    '',
                name: capitalizeFirstLetter(data.name),
            };
        })
        .catch(err => err);
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
    return await pokemonAPI
        .getPokemonByName(name)
        .then(data => data)
        .catch(err => err);
}

export async function getPokemons({
    perPage,
    page,
}: Pagination): Promise<SimplePokemon[]> {
    if (POKE_API_URL) {
        const offset: number = page === 1 ? 0 : page * perPage;

        return await utilityAPI
            .getResourceByUrl(
                `${POKE_API_URL}/pokemon?limit=${perPage}&offset=${offset}`
            )
            .then(async (data: UtilityResponse) => {
                const pokemonsPromises: Array<Promise<SimplePokemon>> = [];
                for (const result of data.results) {
                    pokemonsPromises.push(getSimplePokemonByName(result.name));
                }
                const pokemons: SimplePokemon[] = await Promise.all(
                    pokemonsPromises
                );
                return pokemons;
            })
            .catch(err => err);
    }
    return [];
}
