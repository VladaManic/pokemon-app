import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ListWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 355px;
`

export const ImgWrap = styled.div`
    display: flex;
    width: 105px;
    height: 105px;
    margin-right: 17px;
    margin-bottom: 40px;
    border: 1px solid ${color.itemGray};
    border-radius: 8px;
    background-color: ${color.bgGray};
    box-shadow: 1px 1px 5px 0 ${color.borderGray};

    &:nth-of-type(3n) {
        margin-right: 0;
    }
`

export const ImgPlaceholder = styled.img`
    width: 70%;
    height: 70%;
    margin: auto;
`
