import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${color.overlayGray};
    z-index: 1000;
`

export const ModalWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`
