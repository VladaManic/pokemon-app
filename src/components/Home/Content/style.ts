import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ContentWrap = styled.div`
    display: flex;
    flex: 1;
`

export const ErrorWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

export const ErrorMessage = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: ${color.errorRed};
`

export const LoadingMessage = styled.h2`
    margin: auto;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: ${color.loadingGray};
`

export const ContentInner = styled.div`
    display: flex;
    width: 100%;
    padding: 25px;
`
