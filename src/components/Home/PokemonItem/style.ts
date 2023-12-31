import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const LoaderWrapper = styled.div`
    .img-wrap {
        margin-top: 0;
        margin-right: 20px;
        margin-bottom: 0;
    }
`

export const PokemonWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    height: 22%;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 2%;
    border: 1px solid ${color.borderGray};
    border-radius: 8px;
    box-shadow: 1px 1px 5px 0 ${color.borderGray};
    transition: all 0.4s ease;

    &:nth-of-type(4),
    &:nth-of-type(8) {
        margin-bottom: 0;
    }

    &:hover {
        background-color: ${color.hoverPurple};
        border: 1px solid ${color.borderPurple};
        cursor: pointer;

        .index-wrap {
            background-color: ${color.defaultBg};
        }
    }
`

export const PokemonInner = styled.div`
    display: flex;
    align-items: center;
`

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
    transition: all 0.4s ease;
`

export const PokemonIndexInner = styled.p`
    margin: auto;
`
