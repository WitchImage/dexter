import type { PokemonType } from '@/types/pokemon-types';
import { pokemonBackgrounds } from '@/utils/pokemon-backgrounds';
import type { Pokemon } from 'pokenode-ts';
import type { FC } from 'react';
import styles from './pokemon-card.module.css';
import Image from 'next/image';
import { capitalizeFirstLetter } from '@/utils/capitalize';

interface Props {
    pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    const pokemonType = pokemon.types[0].type.name as PokemonType;
    const pokemonImage =
        pokemon.sprites.other?.['official-artwork'].front_default ?? '';
    const pokemonName = capitalizeFirstLetter(pokemon.name);

    return (
        <div
            className={`${styles.pokemonCard} ${pokemonBackgrounds[pokemonType]}`}
        >
            <h2 className={styles.h2}>{pokemonName}</h2>
            <div className={styles.imageContainer}>
                <Image
                    src={pokemonImage}
                    alt={'Pokemon image'}
                    fill
                />
            </div>
        </div>
    );
};

export default PokemonCard;
