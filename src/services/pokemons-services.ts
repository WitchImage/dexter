import { POKE_API_URL } from './urls';

export async function getPokemonByName(name: string): Promise<any> {
    return fetch(`${POKE_API_URL}/pokemon/${name}`, { method: 'GET' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('🙌', data);
            return data;
        })
        .catch(err => err);
}
