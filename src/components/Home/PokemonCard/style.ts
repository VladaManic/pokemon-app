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
