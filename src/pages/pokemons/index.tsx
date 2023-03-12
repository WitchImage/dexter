import { PokemonCard } from '@/components';
import { getPokemons } from '@services/pokemons-services';
import type { GetServerSideProps, NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';

interface Props {
    pokemons: Pokemon[];
}

const Pokemons: NextPage<Props, any> = ({ pokemons }: Props) => {
    return (
        <main className='m-0'>
            <PokemonCard pokemon={pokemons[0]} />
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const pokemons: Pokemon[] = await getPokemons({ perPage: 10, offset: 10 });

    return {
        props: {
            pokemons,
        },
    };
};

export default Pokemons;
