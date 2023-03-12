import type { Pagination, UtilityResponse } from '@/types/';
import type { Pokemon } from 'pokenode-ts';
import { pokemonAPI, utilityAPI } from './pokemon-request';
import { POKE_API_URL } from './urls';

export async function getPokemonByName(name: string): Promise<Pokemon> {
    return await pokemonAPI
        .getPokemonByName(name)
        .then(data => data)
        .catch(err => err);
}

export async function getPokemons({
    perPage,
    offset,
}: Pagination): Promise<Pokemon[]> {
    if (POKE_API_URL) {
        return await utilityAPI
            .getResourceByUrl(
                `${POKE_API_URL}/pokemon?limit=${perPage}&offset=${offset}`
            )
            .then(async (data: UtilityResponse) => {
                const pokemons: Pokemon[] = [];
                for (const result of data.results) {
                    const pokemon = await getPokemonByName(result.name);
                    pokemons.push(pokemon);
                }
                return pokemons;
            })
            .catch(err => err);
    }
    return [];
}
