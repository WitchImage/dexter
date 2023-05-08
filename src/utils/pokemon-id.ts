export function convertNumberToPokemonId(idNumber: number) {
    const pokemonId = idNumber.toString();

    if (pokemonId.length === 1) return '00' + pokemonId;
    else if (pokemonId.length === 2) return '0' + pokemonId;
    return pokemonId;
}
