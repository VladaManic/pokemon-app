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

export interface ColoredPokemonsCtxProps {
    pokemons: PokemonObj[]
    pagePokemons: PokemonObj[]
    page: number
    setPokemons: (data: PokemonObj[]) => void
    setPagePokemons: (data: PokemonObj[]) => void
    setPage: (page: number) => void
}
