import clsx from 'clsx'
import { PER_PAGE } from '../../../utils/perPage'

import prevIcon from '../../../assets/img/prev-icon.svg'
import nextIcon from '../../../assets/img/next-icon.svg'

interface Props {
    isError: boolean
    isLoading: boolean
    page: number
    total: number
    onPageChange(param: number): void
}
import {
    PaginationWrap,
    PaginationInner,
    PrevBtn,
    PrevImg,
    CurrentPageWrap,
    CurrentPage,
    NextBtn,
    NextImg,
} from './style'

const Pagination = ({
    isError,
    isLoading,
    page,
    total,
    onPageChange,
}: Props) => {
    const pageCount = Math.ceil(total / PER_PAGE)

    return (
        <PaginationWrap>
            {!isError && !isLoading && (
                <PaginationInner>
                    <PrevBtn
                        id="pagination-prev"
                        className={clsx(page === 1 && 'btn-disabled')}
                        disabled={page === 1}
                        onClick={() => {
                            onPageChange(page - 1)
                        }}
                    >
                        <PrevImg src={prevIcon} alt="Prev icon" />
                    </PrevBtn>
                    <CurrentPageWrap>
                        <CurrentPage>{page}</CurrentPage>
                    </CurrentPageWrap>
                    <NextBtn
                        id="pagination-next"
                        className={clsx(page === pageCount && 'btn-disabled')}
                        disabled={page === pageCount}
                        onClick={() => {
                            onPageChange(page + 1)
                        }}
                    >
                        <NextImg src={nextIcon} alt="Next icon" />
                    </NextBtn>
                </PaginationInner>
            )}
        </PaginationWrap>
    )
}

export default Pagination
