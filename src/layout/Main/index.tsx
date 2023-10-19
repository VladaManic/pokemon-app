import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import isStorageSupported from '../../utils/isStorageSupported'

import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Single from '../../pages/Single'
import Page404 from '../../pages/Page404'

import { MainWrap, LocalStorageErrorWrap } from './style'

const Main = () => {
    const [localStorageError, setLocalStorageError] = useState<string>('')

    useEffect(() => {
        //Checking if local-storage is available
        !isStorageSupported('localStorage') &&
            setLocalStorageError('No local storage is available!')
    }, [])

    return (
        <MainWrap>
            {localStorageError !== '' && (
                <LocalStorageErrorWrap>
                    {localStorageError}
                </LocalStorageErrorWrap>
            )}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home/" element={<Home />} />
                <Route path="/pokemon/:pokemonName" element={<Single />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </MainWrap>
    )
}

export default Main
