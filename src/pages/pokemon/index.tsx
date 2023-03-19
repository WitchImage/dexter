import type { NextPage } from 'next';
import Head from 'next/head';
import type { Pokemon } from 'pokenode-ts';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props, any> = ({ pokemon }: Props) => {
    return (
        <main>
            <Head>
                <title>Dexter</title>
            </Head>
        </main>
    );
};

export default PokemonPage;
