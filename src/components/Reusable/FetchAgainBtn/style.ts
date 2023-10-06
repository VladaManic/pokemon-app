import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ErrorBtn = styled.button`
    width: 115px;
    padding: 14px 20px;
    border: 2px solid ${color.submitGray};
    border-radius: 400px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    color: ${color.submitGray};

    &:hover {
        opacity: 0.6;
    }
`
