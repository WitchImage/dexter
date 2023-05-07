import type { SimplePokemon } from '@/types/pokemon-types';
import { pokemonBackgrounds } from '@/utils/pokemon-backgrounds';
import type { FC } from 'react';
import styles from './pokemon-card.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SimplePokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    const pokemonType = pokemon.type;
    const pokemonImage = pokemon.image;
    const pokemonName = pokemon.name;

    const router = useRouter();

    return (
        <div
            className={`${styles.pokemonCard} ${pokemonBackgrounds[pokemonType]}`}
            onClick={() => router.push(`/pokemon/${pokemonName.toLowerCase()}`)}
        >
            <h2 className={styles.pokemonName}>{pokemonName}</h2>
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
