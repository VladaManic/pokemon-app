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

export type SpritesObj = {
    other: { dream_world: { front_default: string } }
}

export type SinglePokemonObj = {
    pokemon: {
        id: number
        name: string
        height: number
        weight: number
        abilities: AbilityObj[]
        sprites: SpritesObj
    }
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

export type ColoredPokemonsCtxProps = {
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

export type CaughtPokemon = {
    id: number
    url: string
    name: string
    timeCaught: Date | number
}

export type CaughtPokemonsCtxProps = {
    alreadyCaught: [] | CaughtPokemon[]
    catchingDone: boolean
    setAlreadyCaught: (data: CaughtPokemon) => void
    setCatchingDone: (param: boolean) => void
}
