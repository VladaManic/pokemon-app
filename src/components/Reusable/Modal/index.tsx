import ReactDom from 'react-dom'

import { Overlay, ModalWrap } from './style'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({ children, onClose }: Props) => {
    return ReactDom.createPortal(
        <>
            <Overlay onClick={onClose} />
            <ModalWrap>{children}</ModalWrap>
        </>,
        document.body
    )
}

export default Modal
