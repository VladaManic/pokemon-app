import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const PokemonWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 48%;
    height: 73px;
    padding: 10px;
    border: 1px solid ${color.borderGray};
    border-radius: 8px;
    box-shadow: 1px 1px 5px 0 ${color.borderGray};
`

export const PokemonName = styled.p`
    font-size: 16px;
    line-height: 19px;
`

export const PokemonIndexWrap = styled.div`
    width: 20px;
    height: 20px;
`

export const PokemonIndexInner = styled.p``
