import type { Pokemon } from 'pokenode-ts';
import type { FC } from 'react';
import styles from './pokemon-card.module.css';

interface Props {
    pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <div className={`${styles.pokemonCard} flyingBackground`}>
            <p>hola</p>
        </div>
    );
};

export default PokemonCard;
