import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'
import arrowImg from '../../../assets/img/select-arrow.svg'

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

export const FilterWrap = styled.div`
    display: flex;
    align-items: center;
`

export const FilterText = styled.p`
    margin-right: 10px;
    font-size: 16px;
    line-height: 19px;
    color: ${color.labelGray};
`

export const SelectWrap = styled.div``

export const SelectInner = styled.select`
    width: 145px;
    height: 32px;
    padding-left: 5px;
    background-color: ${color.defaultBg};
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${arrowImg});
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 12px;
    border: 1px solid ${color.borderGray};
    border-radius: 8px;
    font-size: 16px;
    line-height: 19px;
    color: ${color.labelGray};
    box-shadow: 1px 1px 5px 0 ${color.borderGray};
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

export const OptionWrap = styled.option`
    cursor: pointer;
`
