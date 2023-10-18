import { Routes, Route } from 'react-router-dom'

import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Single from '../../pages/Single'
import Page404 from '../../pages/Page404'

import { MainWrap } from './style'

const Main = () => {
    return (
        <MainWrap>
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
