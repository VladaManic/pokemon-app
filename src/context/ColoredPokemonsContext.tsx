/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, PropsWithChildren } from 'react'
import { ColoredPokemonsCtxProps, PokemonObj } from '../types/interfaces'
import { PER_PAGE } from '../utils/perPage'

const ColoredPokemonsContext = createContext<ColoredPokemonsCtxProps>({
    pokemons: [],
    pagePokemons: [],
    page: 1,
    setPokemons: (pokemons: PokemonObj[]) => {
        null
    },
    setPagePokemons: (pokemons: PokemonObj[]) => {
        null
    },
    setPage: (page: number) => {
        null
    },
})

export const ColoredPokemonsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
    const [currentPokemons, setCurrentPokemons] = useState<PokemonObj[]>([])
    const [currentPagePokemons, setCurrentPagePokemons] = useState<
        PokemonObj[] | never[]
    >([])
    const [currentPage, setCurrentPage] = useState<number>(1)

    //Setting all pokemons of concrete color in context
    const setPokemonsHandler = (pokemons: PokemonObj[]) => {
        setCurrentPokemons(pokemons)
    }

    //Setting layout of 8 current pokemons
    const setPagePokemonsHandler = (pokemons: PokemonObj[]) => {
        setCurrentPagePokemons(pokemons)
    }

    const setPageHandler = (page: number) => {
        //Setting current page
        setCurrentPage(page)
        const offset = (page - 1) * PER_PAGE
        const pokemonLayout = offset + PER_PAGE
        //Setting layout of 8 current pokemons
        setCurrentPagePokemons(currentPokemons.slice(offset, pokemonLayout))
    }

    const context = {
        pokemons: currentPokemons,
        pagePokemons: currentPagePokemons,
        page: currentPage,
        setPokemons: setPokemonsHandler,
        setPagePokemons: setPagePokemonsHandler,
        setPage: setPageHandler,
    }

    return (
        <ColoredPokemonsContext.Provider value={context}>
            {children}
        </ColoredPokemonsContext.Provider>
    )
}

export default ColoredPokemonsContext
