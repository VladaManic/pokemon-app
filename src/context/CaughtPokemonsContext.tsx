/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, PropsWithChildren } from 'react'
import { CaughtPokemonsCtxProps } from '../types/interfaces'
import isStorageSupported from '../utils/isStorageSupported'

const CaughtPokemonsContext = createContext<CaughtPokemonsCtxProps>({
    caughtPokemonsCount: 0,
    setCount: (count: number) => {
        null
    },
})

export const CaughtPokemonsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
    let caughtPokemonsLength
    //Checking if local-storage is available
    if (isStorageSupported('localStorage')) {
        try {
            //Returning from localStorage already caught pokemons
            caughtPokemonsLength = JSON.parse(
                localStorage.getItem('caught-pokemons') || ''
            ).length
        } catch (err) {
            //No caught pokemons jet
            caughtPokemonsLength = 0
        }
    }
    const [currentCaughtPokemonsCount, setCurrentCaughtPokemonsCount] =
        useState<number>(caughtPokemonsLength)

    const setCountHandler = (count: number) => {
        setCurrentCaughtPokemonsCount(count)
    }

    const context = {
        caughtPokemonsCount: currentCaughtPokemonsCount,
        setCount: setCountHandler,
    }

    return (
        <CaughtPokemonsContext.Provider value={context}>
            {children}
        </CaughtPokemonsContext.Provider>
    )
}

export default CaughtPokemonsContext
