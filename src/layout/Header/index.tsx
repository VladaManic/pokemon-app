import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CaughtPokemonsContext from '../../context/CaughtPokemonsContext'

import Modal from '../../components/Reusable/Modal'
import PokestorageModal from '../../components/Modal/PokestorageModal'

import backIcon from '../../assets/img/back-icon.svg'
import {
    HeaderWrap,
    BackIcon,
    TitleWrap,
    CaughtWrap,
    CaughtInner,
} from './style'

const Header = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)

    //On click count number btn in right corner of header
    const onClickHandler = () => {
        //Opening modal
        setOpenModal(true)
        //Reset catching process for try with new pokemon
        caughtPokemonsCtx.setCatchingDone(false)
    }

    //On click modal overlay, closes modal
    const onCloseHandler = () => {
        setOpenModal(false)
    }

    return (
        <>
            <HeaderWrap>
                {/* {pathname.includes('/pokemon/') && ( */}
                <NavLink to={`/home`} end className="back-link">
                    <BackIcon src={backIcon} alt="Back to home page" />
                </NavLink>
                {/* )} */}
                <TitleWrap>Pokemon App</TitleWrap>
                {/* {pathname !== '/' && ( */}
                <CaughtWrap onClick={onClickHandler}>
                    <CaughtInner>
                        {caughtPokemonsCtx.alreadyCaught.length}
                    </CaughtInner>
                </CaughtWrap>
                {/* )} */}
            </HeaderWrap>
            {openModal && (
                <Modal onClose={onCloseHandler}>
                    <PokestorageModal onClickClose={onCloseHandler} />
                </Modal>
            )}
        </>
    )
}

export default Header
