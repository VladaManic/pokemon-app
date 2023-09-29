import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const FilterBarWrap = styled.div`
    padding-right: 25px;
    padding-left: 25px;
`

export const FilterBarInner = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid ${color.barBorderGray};
`

export const ErrorWrap = styled.div`
    display: flex;
    align-items: center;
`

export const ErrorMessage = styled.p`
    margin-right: 10px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: ${color.errorRed};
`

export const LoadingMessage = styled.p`
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    color: ${color.loadingGray};
`
