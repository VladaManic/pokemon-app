import styled from 'styled-components'
import { color } from '../../shared/styles/variables'

export const SingleWrap = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`

export const BackgroundWrap = styled.div`
    height: 100%;
    margin: auto;
`

export const BackgroundInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.05;
`

export const SingleInner = styled.div`
    display: flex;
    height: 500px;
    width: 440px;
    margin-top: 60px;
    border: 1px solid ${color.borderGray};
    border-radius: 8px;
    background-color: ${color.defaultBg};
    box-shadow: 1px 1px 5px 0 ${color.borderGray};
    z-index: 2;
`

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
