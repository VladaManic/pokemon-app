import styled from 'styled-components'
import { color } from '../../shared/styles/variables'

export const Page404Wrap = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`

export const Page404Inner = styled.div`
    margin: auto;

    .go-home {
        display: flex;
        justify-content: center;
        text-decoration: none;
    }
`

export const NotFoundText = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    text-align: center;
    color: ${color.releaseRed};
`

export const ReturnBtn = styled.button`
    width: 125px;
    padding: 14px 20px;
    border: 2px solid ${color.submitGray};
    border-radius: 400px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    color: ${color.submitGray};
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.6;
    }
`
