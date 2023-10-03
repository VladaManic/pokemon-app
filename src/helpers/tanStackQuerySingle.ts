import axios from 'axios'

export const getPokemonSingle = async (pokemonId: number) => {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    )
    const data = await response.data
    return { pokemon: data }
}
