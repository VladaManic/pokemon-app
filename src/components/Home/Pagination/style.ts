import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`

export const PaginationInner = styled.div`
    display: flex;
    height: 32px;

    #pagination-prev,
    #pagination-next {
        width: 32px;
        height: 32px;
        border: 1px solid ${color.paginationGray};
        border-radius: 4px;

        &.btn-disabled {
            background-color: ${color.disableGray};
            cursor: auto;
        }
    }
`

export const PrevBtn = styled.button`
    margin-right: 5px;
`

export const PrevImg = styled.img``

export const CurrentPageWrap = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    border: 1px solid ${color.paginationGray};
    border-radius: 4px;
`

export const CurrentPage = styled.p`
    margin: auto;
    font-sizeL 14px;
    line-height: 20px;
    font-weight: 700;
    text-align: center;
`

export const NextBtn = styled.button`
    margin-left: 5px;
`

export const NextImg = styled.img``
