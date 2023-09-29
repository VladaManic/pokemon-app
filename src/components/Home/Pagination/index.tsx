import { PER_PAGE } from '../../../utils/perPage'

import prevIcon from '../../../assets/img/prev-icon.svg'
import nextIcon from '../../../assets/img/next-icon.svg'

interface Props {
    page: number
    total: number
    onPageChange(param: number): React.MouseEventHandler<HTMLButtonElement>
}
import {
    PaginationWrap,
    PaginationInner,
    PrevBtn,
    PrevImg,
    CurrentPage,
    NextBtn,
    NextImg,
} from './style'

const Pagination = ({ page, total, onPageChange }: Props) => {
    const pageCount = Math.ceil(total / PER_PAGE)

    return (
        <PaginationWrap>
            <PaginationInner>
                <PrevBtn
                    disabled={page === 1}
                    onClick={() => {
                        onPageChange(page - 1)
                    }}
                >
                    <PrevImg src={prevIcon} alt="Prev icon" />
                </PrevBtn>
                <CurrentPage>{page}</CurrentPage>
                <NextBtn
                    disabled={page === pageCount}
                    onClick={() => {
                        onPageChange(page + 1)
                    }}
                >
                    <NextImg src={nextIcon} alt="Next icon" />
                </NextBtn>
            </PaginationInner>
        </PaginationWrap>
    )
}

export default Pagination
