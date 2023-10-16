import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ImgWrap = styled.div`
    display: flex;
    align-items: center;
    height: 65px;
    margin-top: 15px;
    //margin-right: 20px;
    margin-bottom: 15px;
`

export const LoaderWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    &.hide {
        display: none;
    }
`

export const LoaderInner = styled.div`
    width: 30px !important;
    height: 30px !important;
    border: 6px solid ${color.defaultBg};
    border-radius: 50%;
    border-top: 6px solid ${color.headerPurple};
    border-right: 6px solid ${color.headerPurple};
    background: none !important;
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

export const PokemonImg = styled.img`
    margin-right: auto;
    margin-left: auto;
    height: 100%;

    &.hide {
        display: none;
    }
`
