/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, PropsWithChildren } from 'react'

const LoadingContext = createContext({
    isFetched: false,
    fetchError: false,
    setIsFetched: (param: boolean) => {
        null
    },
    setFetchError: (param: boolean) => {
        null
    },
})

export const LoadingContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
    const [currentIsFetched, setCurrentIsFetched] = useState<boolean>(false)
    const [currentFetchError, setCurrentFetchError] = useState<boolean>(false)

    const setIsFetched = (param: boolean) => {
        setCurrentIsFetched(param)
    }

    const setFetchError = (param: boolean) => {
        setCurrentFetchError(param)
    }

    const context = {
        isFetched: currentIsFetched,
        fetchError: currentFetchError,
        setIsFetched: setCurrentIsFetched,
        setFetchError: setCurrentFetchError,
    }

    return (
        <LoadingContext.Provider value={context}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext
