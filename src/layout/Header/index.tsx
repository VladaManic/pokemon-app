import { useContext } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import CaughtPokemonsContext from '../../context/CaughtPokemonsContext'

import backIcon from '../../assets/img/back-icon.svg'
import {
    HeaderWrap,
    BackIcon,
    TitleWrap,
    CaughtWrap,
    CaughtInner,
} from './style'

const Header = () => {
    const { pathname } = useLocation()
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)

    return (
        <HeaderWrap>
            {pathname.includes('/pokemon/') && (
                <NavLink to={`/home/`} end className="back-link">
                    <BackIcon src={backIcon} alt="Back to home page" />
                </NavLink>
            )}
            <TitleWrap>Pokemon App</TitleWrap>
            {(pathname === '/home/' || pathname.includes('/pokemon/')) && (
                <CaughtWrap>
                    <CaughtInner>
                        {caughtPokemonsCtx.caughtPokemonsCount}
                    </CaughtInner>
                </CaughtWrap>
            )}
        </HeaderWrap>
    )
}

export default Header
