import { getPokemonByName } from '@services/pokemons-services';
import { GetServerSideProps } from 'next';

interface Props {
    pokemon: any;
}

export default function Pokemons(props: Props) {
    return (
        <main className='m-0'>
            <p>{JSON.stringify(props.pokemon)}</p>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async context => {
    const charmander = await getPokemonByName('charmander');
    return {
        props: {
            pokemon: charmander,
        },
    };
};
