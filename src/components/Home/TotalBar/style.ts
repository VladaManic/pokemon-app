import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const TotalBarWrap = styled.div`
    padding-right: 25px;
    padding-left: 25px;
`

export const TotalInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    border-bottom: 1px solid ${color.barBorderGray};
`

export const ErrorMessage = styled.h2`
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: ${color.errorRed};
`

export const LoadingMessage = styled.h2`
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: ${color.loadingGray};
`

export const LoadingTotalSpan = styled.span`
    color: ${color.submitGray};
`
