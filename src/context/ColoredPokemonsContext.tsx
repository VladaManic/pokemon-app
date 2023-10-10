/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, PropsWithChildren } from 'react'
import {
    ColoredPokemonsCtxProps,
    PokemonObj,
    PokemonsByColor,
} from '../types/interfaces'
import { PER_PAGE } from '../utils/perPage'

const ColoredPokemonsContext = createContext<ColoredPokemonsCtxProps>({
    //All pokemons of current selected color
    pokemons: [],
    //First 8 pokemons of current selected color
    pagePokemons: [],
    //Selected color
    page: 1,
    //Array with pokemons of colors that are already clicked
    alreadyClickedColorPokemons: [],
    setPokemons: (pokemons: PokemonObj[]) => {
        null
    },
    setPagePokemons: (pokemons: PokemonObj[]) => {
        null
    },
    setPage: (page: number) => {
        null
    },
    setAlreadyClickedColorPokemons: (
        id: number,
        pokemons: PokemonObj[],
        pagePokemos: PokemonObj[]
    ) => {
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
    const [
        currentAlreadyClickedColorPokemons,
        setCurrentAlreadyClickedColorPokemons,
    ] = useState<PokemonsByColor[]>([])

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

    //Setting all pokemons of color that is clicked once to 'already clicked color' array
    const setAlreadyClickedColorPokemonsHandler = (
        id: number,
        pokemons: PokemonObj[],
        pagePokemons: PokemonObj[]
    ) => {
        const newPokemons = [
            ...currentAlreadyClickedColorPokemons,
            {
                id: id,
                pagePokemons: pagePokemons,
                pokemons: pokemons,
            },
        ]
        setCurrentAlreadyClickedColorPokemons(newPokemons)
    }

    const context = {
        pokemons: currentPokemons,
        pagePokemons: currentPagePokemons,
        page: currentPage,
        alreadyClickedColorPokemons: currentAlreadyClickedColorPokemons,
        setPokemons: setPokemonsHandler,
        setPagePokemons: setPagePokemonsHandler,
        setPage: setPageHandler,
        setAlreadyClickedColorPokemons: setAlreadyClickedColorPokemonsHandler,
    }

    return (
        <ColoredPokemonsContext.Provider value={context}>
            {children}
        </ColoredPokemonsContext.Provider>
    )
}

export default ColoredPokemonsContext
