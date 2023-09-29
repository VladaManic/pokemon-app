import styled from 'styled-components'
import { color } from '../../shared/styles/variables'

export const HeaderWrap = styled.header`
    position: relative;
    padding: 9px;
    background-color: ${color.headerPurple};
    text-align: center;

    .back-link {
        position: absolute;
        left: 21px;
        top: 21px;
    }
`
export const BackIcon = styled.img``

export const TitleWrap = styled.h1`
    color: ${color.defaultWhite};
`

export const CaughtWrap = styled.div`
    position: absolute;
    top: 14px;
    right: 21px;
    display: flex;
    width: 28px;
    height: 28px;
    border-radius: 50px;
    background-color: ${color.defaultBg};
`

export const CaughtInner = styled.p`
    margin: auto;
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    color: ${color.submitGray};
`
