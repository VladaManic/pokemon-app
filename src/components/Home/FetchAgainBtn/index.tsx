import { ErrorBtn } from './style'

interface Props {
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const FetchAgainBtn = ({ onClickBtn }: Props) => {
    return <ErrorBtn onClick={onClickBtn}>Try again</ErrorBtn>
}

export default FetchAgainBtn
