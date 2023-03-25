// import { type PokemonType } from '@/types/pokemon-types';
import { type FC } from 'react';
import styles from './pokemon-details.module.css';

interface Props {
    pokemon: any;
}

const PokemonDetails: FC<Props> = ({ pokemon }) => {
    return (
        <div className={styles.container}>
            <p>hola</p>
        </div>
    );
};

export default PokemonDetails;
