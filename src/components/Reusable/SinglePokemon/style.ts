import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const SinglePokemonWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
`

export const ErrorWrap = styled.h2`
    margin: auto;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: ${color.errorRed};
`

export const LoaderWrap = styled.div`
    margin: auto;
`

export const PokemonImg = styled.img`
    max-width: 100px;
    margin: 10px auto;
`

export const TitleWrap = styled.div`
    display: flex;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
`

export const PokemonName = styled.h2`
    font-size: 20px;
    line-height: 23px;
`

export const LinkImg = styled.img`
    margin-left: 5px;
`

export const PokemonHeight = styled.p`
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    color: ${color.heightGray};
`

export const AbilityWrap = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
`

export const AbilityInner = styled.div`
    width: 83px;
		margin-right: 10px;
		margin-left; 10px;
    border: 1px solid ${color.abilityGray};
    border-radius: 20px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
`
