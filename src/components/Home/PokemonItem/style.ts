import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const PokemonWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 48%;
    padding: 10px;
    padding-right: 15px;
    margin-right: 25px;
    margin-bottom: 25px;
    border: 1px solid ${color.borderGray};
    border-radius: 8px;
    box-shadow: 1px 1px 5px 0 ${color.borderGray};

    &:nth-of-type(4),
    &:nth-of-type(8) {
        margin-bottom: 0;
    }
`

export const PokemonInner = styled.div`
    display: flex;
    align-items: center;
`

export const PokemonImg = styled.img``

export const PokemonName = styled.p`
    font-size: 16px;
    line-height: 19px;
`

export const PokemonIndexWrap = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    box-shadow: 0 2px 2px 0 ${color.borderGray};
`

export const PokemonIndexInner = styled.p`
    margin: auto;
`
