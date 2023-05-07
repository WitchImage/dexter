export type PokemonType =
    | 'normal'
    | 'fire'
    | 'fire'
    | 'water'
    | 'electric'
    | 'grass'
    | 'ice'
    | 'poison'
    | 'flying'
    | 'psychic'
    | 'bug'
    | 'rock'
    | 'fighting'
    | 'ghost'
    | 'dragon'
    | 'dark'
    | 'steel'
    | 'fairy';

export interface SimplePokemon {
    id: number;
    name: string;
    type: PokemonType;
    image: string;
}
