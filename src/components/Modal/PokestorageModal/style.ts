import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ModalInner = styled.div`
    position: relative;
    display: flex;
    width: 795px;
    height: 403px;
    padding: 40px;
    border-radius: 8px;
    background-color: ${color.defaultBg};
`

export const PokeballBg = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`
