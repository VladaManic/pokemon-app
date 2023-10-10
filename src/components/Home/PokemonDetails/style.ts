import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const PokemonDetailsWrap = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    border: 1px solid ${color.borderGray};
    box-shadow: 1px 1px 5px 0 ${color.borderGray};
`

export const NoPokemonWrap = styled.h2`
    width: 141px;
    margin: auto;
    font-size: 19px;
    line-height: 22px;
    font-weight: 700;
    color: ${color.detailsGray};
`
