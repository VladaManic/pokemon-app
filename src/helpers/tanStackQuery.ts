import axios from 'axios'
import { PER_PAGE } from '../utils/perPage'

export const getPokemonList = async (page: number) => {
    const offset = (page - 1) * PER_PAGE
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${PER_PAGE}`
    )
    const data = await response.data
    return { pokemons: data, totalPokemons: data.count }
}
