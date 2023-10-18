import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ItemWrap = styled.div`
    position: relative;
    width: 105px;
    height: 105px;
    margin-right: 17px;
    margin-bottom: 40px;
    border: 1px solid ${color.itemGray};
    border-radius: 8px;
    box-shadow: 1px 1px 5px 0 ${color.borderGray};
    cursor: pointer;

    &:nth-of-type(3n) {
        margin-right: 0;
    }
`

export const ButtonWrap = styled.button`
    position: absolute;
    top: -16px;
    right: -16px;
    display: flex;
    width: 32px;
    height: 32px;
    border: 1px solid ${color.removePink};
    border-radius: 50px;
    background-color: ${color.defaultBg};
    z-index; 100;
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.4;
    }
`

export const CloseIcon = styled.p`
    margin: auto;
    font-weight: 700;
`

export const ImgWrap = styled.div`
    height: 60px;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
`

export const PokemonImg = styled.img`
    height: 100%;
`

export const PokemonName = styled.p`
    line-height: 14px;
    font-weight: 700;
    text-align: center;
    color: ${color.cardGray};
`
