export type FormData = {
    fullname: string
    age: number
    email: string
}

export type PokemonObj = {
    name: string
    url: string
}

export type AbilityObj = {
    ability: { name: string; url: string }
    is_hidden: boolean
    slot: number
}

export type ColorObj = {
    name: string
    url: string
}

export type PokemonsByColor = {
    id: number
    pokemons: PokemonObj[]
    pagePokemons: PokemonObj[]
}

export interface ColoredPokemonsCtxProps {
    pokemons: PokemonObj[]
    pagePokemons: PokemonObj[]
    page: number
    alreadyClickedColorPokemons: PokemonsByColor[]
    setPokemons: (pokemons: PokemonObj[]) => void
    setPagePokemons: (pokemons: PokemonObj[]) => void
    setPage: (page: number) => void
    setAlreadyClickedColorPokemons: (
        id: number,
        pokemons: PokemonObj[],
        pagePokemons: PokemonObj[]
    ) => void
}

export interface CaughtPokemonsCtxProps {
    alreadyCaught: [] | number[]
    setAlreadyCaught: (id: number) => void
}
