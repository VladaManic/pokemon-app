import { PER_PAGE } from '../utils/perPage'

export const getPokemonList = async (page: number) => {
    const offset = (page - 1) * PER_PAGE
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${PER_PAGE}`
    )
    const data = await response.json()
    return { pokemons: data, totalPokemons: data.count }
}
