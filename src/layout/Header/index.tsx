import { useLocation, NavLink } from 'react-router-dom'

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
                    <CaughtInner>0</CaughtInner>
                </CaughtWrap>
            )}
        </HeaderWrap>
    )
}

export default Header
