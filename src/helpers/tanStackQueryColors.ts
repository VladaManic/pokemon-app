import axios from 'axios'

export const getPokemonColors = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/`)
    const data = await response.data
    return { colors: data }
}
