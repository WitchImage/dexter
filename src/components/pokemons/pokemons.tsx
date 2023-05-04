import type { Pokemon } from 'pokenode-ts';
import type { FC } from 'react';
import styles from './pokemons.module.css';
import Image from 'next/image';
import PokemonCard from '../cards/pokemon-card';
import { Pagination } from '..';

interface Props {
    pokemons: Pokemon[];
}

const Pokemons: FC<Props> = ({ pokemons }) => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.h1}>
                    <Image
                        src={'/logo.png'}
                        alt={''}
                        height={50}
                        width={50}
                    />
                    Dexter
                </h1>
            </header>
            <section className={styles.container}>
                <div className={styles.pokemonsContainer}>
                    {pokemons.map(pokemon => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    ))}
                </div>
            </section>
            <div
                style={{
                    position: 'fixed',
                    display: 'flex',
                    placeContent: 'center',
                    bottom: 0,
                    width: '100%',
                }}
            >
                <Pagination
                    currentPage={1}
                    initPage={1}
                    lastPage={10}
                />
            </div>
        </>
    );
};

export default Pokemons;
