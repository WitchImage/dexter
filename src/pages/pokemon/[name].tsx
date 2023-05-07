import PokemonDetails from '@/components/pokemons/pokemon-details';
import { getSimplePokemonByName } from '@/services/pokemons-services';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import type { Pokemon } from 'pokenode-ts';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props, any> = ({ pokemon }: Props) => {
    console.log(pokemon);

    return (
        <main>
            <Head>
                <title>Dexter</title>
            </Head>
            <PokemonDetails pokemon={pokemon} />
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const { name: pokemonName } = context.query;
    console.log(pokemonName);
    const pokemon: Pokemon = await getSimplePokemonByName(
        pokemonName as string
    );

    return {
        props: {
            pokemon,
        },
    };
};

export default PokemonPage;
