/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, PropsWithChildren } from 'react'
import { CaughtPokemonsCtxProps, CaughtPokemon } from '../types/interfaces'
import isStorageSupported from '../utils/isStorageSupported'

const CaughtPokemonsContext = createContext<CaughtPokemonsCtxProps>({
    alreadyCaught: [],
    catchingDone: false,
    setAlreadyCaught: (data: CaughtPokemon[]) => {
        null
    },
    setCatchingDone: (param: boolean) => {
        null
    },
})

export const CaughtPokemonsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
    let caughtPokemons
    //Checking if local-storage is available
    if (isStorageSupported('localStorage')) {
        try {
            //Returning from localStorage already caught pokemons
            caughtPokemons = JSON.parse(
                localStorage.getItem('caught-pokemons') || ''
            )
        } catch (err) {
            //No caught pokemons jet
            caughtPokemons = []
        }
    } else {
        caughtPokemons = []
    }
    const [currentAlreadyCaught, setCurrentAlreadyCaught] = useState<
        [] | CaughtPokemon[]
    >(caughtPokemons)
    const [currentCatchingDone, setCurrentCatchingDone] =
        useState<boolean>(false)

    //Replacing already caught pokemons with new set
    const setAlreadyCaughtHandler = (data: CaughtPokemon[]) => {
        setCurrentAlreadyCaught(data)
    }

    //Is catching process done
    const setCatchingDoneHandler = (param: boolean) => {
        setCurrentCatchingDone(param)
    }

    const context = {
        alreadyCaught: currentAlreadyCaught,
        catchingDone: currentCatchingDone,
        setAlreadyCaught: setAlreadyCaughtHandler,
        setCatchingDone: setCatchingDoneHandler,
    }

    return (
        <CaughtPokemonsContext.Provider value={context}>
            {children}
        </CaughtPokemonsContext.Provider>
    )
}

export default CaughtPokemonsContext
