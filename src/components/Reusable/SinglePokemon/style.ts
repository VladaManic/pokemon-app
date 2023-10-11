import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ErrorWrap = styled.h2`
    margin: auto;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: ${color.errorRed};
`

export const LoadingText = styled.div`
    width: 180px;
    margin: auto;
    font-size: 19px;
    line-height: 22px;
    font-weight: 400;
    color: ${color.detailsGray};
    text-align: center;
`

export const SinglePokemonWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
`

export const CatchButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    transition: all 0.4s ease;

    &.temporary-disabled {
        pointer-events: none;
        opacity: 0.3;
    }

    &.disabled-btn {
        pointer-events: none;
        opacity: 0;
    }

    &:hover {
        opacity: 0.6;
    }
`

export const IdWrap = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    box-shadow: 0 2px 2px 0 ${color.borderGray};
`

export const IdInner = styled.p`
    margin: auto;
`

export const CatchImg = styled.img`
    width: 47px;
`

export const LoaderWrap = styled.div`
    margin-top: 30px;

    &.hide {
        display: none;
    }

    .loader-inner {
        width: 60px !important;
        height: 60px !important;
    }
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
    transition: all 0.4s ease;

    .nav-link:hover {
        opacity: 0.6;
    }
`

export const CaughtImg = styled.img`
    margin-right: 5px;
`

export const PokemonName = styled.h2`
    font-size: 20px;
    line-height: 23px;
`

export const LinkImg = styled.img`
    margin-bottom: -3px;
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
    margin-bottom: 25px;
    margin-left; 10px;
    border: 1px solid ${color.abilityGray};
    border-radius: 20px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
`

export const InitiateWrap = styled.div`
    margin: 0 auto 25px auto;
    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`

export const PokeballIcon = styled.img`
    width: 70px;
    height: 70px;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
`

export const SuccessWrap = styled.div`
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
`

export const SuccessText = styled.span`
    color: ${color.successGreen};
`

export const SuccessTime = styled.span`
    font-weight: 400;
`

export const FailWrap = styled.div`
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    color: ${color.failRed};
`

export const TimeWrap = styled.p`
    font-size: 12px;
    line-height: 14px;
`

export const TextInner = styled.span`
    color: ${color.loadingGray};
`

export const TimeInner = styled.span`
    color: ${color.submitGray};
`
