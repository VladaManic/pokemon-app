import { Routes, Route } from 'react-router-dom'

import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Single from '../../pages/Single'

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home/" element={<Home />} />
                <Route path="/pokemon/:id" element={<Single />} />
            </Routes>
        </>
    )
}

export default Main
