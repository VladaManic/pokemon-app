/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, PropsWithChildren } from 'react'
import { CaughtPokemonsCtxProps } from '../types/interfaces'
import isStorageSupported from '../utils/isStorageSupported'

const CaughtPokemonsContext = createContext<CaughtPokemonsCtxProps>({
    alreadyCaught: [],
    catchingDone: false,
    catchingSuccess: true,
    setAlreadyCaught: (id: number) => {
        null
    },
    setCatchingDone: (param: boolean) => {
        null
    },
    setCatchingSuccess: (param: boolean) => {
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
    }
    const [currentAlreadyCaught, setCurrentAlreadyCaught] = useState<
        [] | number[]
    >(caughtPokemons)
    const [currentCatchingDone, setCurrentCatchingDone] =
        useState<boolean>(false)
    const [currentCatchingSuccess, setCurrentCatchingSuccess] =
        useState<boolean>(true)

    const setAlreadyCaughtHandler = (id: number) => {
        //Adding new caught pokemon to already caught
        setCurrentAlreadyCaught([...currentAlreadyCaught, id])
    }

    //Is caching process done
    const setCatchingDoneHandler = (param: boolean) => {
        setCurrentCatchingDone(param)
    }

    //Is pokemon caught or not
    const setCatchingSuccessHandler = (param: boolean) => {
        setCurrentCatchingSuccess(param)
    }

    const context = {
        alreadyCaught: currentAlreadyCaught,
        catchingDone: currentCatchingDone,
        catchingSuccess: currentCatchingSuccess,
        setAlreadyCaught: setAlreadyCaughtHandler,
        setCatchingDone: setCatchingDoneHandler,
        setCatchingSuccess: setCatchingSuccessHandler,
    }

    return (
        <CaughtPokemonsContext.Provider value={context}>
            {children}
        </CaughtPokemonsContext.Provider>
    )
}

export default CaughtPokemonsContext
