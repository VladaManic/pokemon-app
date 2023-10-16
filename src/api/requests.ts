/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { ColoredPokemonsCtxProps } from '../types/interfaces'
import { PER_PAGE } from '../constants/perPage'

export const getPokemonList = async (
    coloredPokemonsCtx: ColoredPokemonsCtxProps,
    page: number,
    selectedColor: number
) => {
    const offset = (page - 1) * PER_PAGE
    let data, res, count
    //Fetching pokemons without color selected, just paginated
    if (selectedColor === 0) {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${PER_PAGE}`
        )
        data = await response.data
        res = data.results
        count = data.count
        //Fetching pokemons filtered by color
    } else {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-color/${selectedColor}`
        )
        data = await response.data
        //Setting all pokemons of concrete color in context
        coloredPokemonsCtx.setPokemons(data.pokemon_species)
        res = data.pokemon_species.slice(0, 8)
        //Setting layout of 8 current pokemons
        coloredPokemonsCtx.setPagePokemons(res)
        count = data.pokemon_species.length
        //Adding array with pokemons of selected color
        coloredPokemonsCtx.setAlreadyClickedColorPokemons(
            selectedColor,
            data.pokemon_species,
            res
        )
    }

    return { pokemons: res, totalPokemons: count }
}

//Fetching single pokemon data
export const getPokemonSingle = async (
    pokemonId: number | string | undefined
) => {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    )
    const data = await response.data
    return { pokemon: data }
}

//Fetching all available colors for dropdown
export const getPokemonColors = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/`)
    const data = await response.data
    return { colors: data }
}
