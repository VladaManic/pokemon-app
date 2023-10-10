import { useContext } from 'react'
import ColoredPokemonsContext from '../../../context/ColoredPokemonsContext'
import clsx from 'clsx'
import { PER_PAGE } from '../../../constants/perPage'

import prevIcon from '../../../assets/img/prev-icon.svg'
import nextIcon from '../../../assets/img/next-icon.svg'

interface Props {
    isError: boolean
    isLoading: boolean
    page: number
    total: number
    selectedColor: number
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
    selectedColor,
    onPageChange,
}: Props) => {
    const coloredPokemonsCtx = useContext(ColoredPokemonsContext)
    const pageCount = Math.ceil(total / PER_PAGE)

    return (
        <PaginationWrap>
            {!isError &&
                !isLoading &&
                //Pagination buttons for all pokemons fetched, without filtration by color
                (selectedColor === 0 ? (
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
                            className={clsx(
                                page === pageCount && 'btn-disabled'
                            )}
                            disabled={page === pageCount}
                            onClick={() => {
                                onPageChange(page + 1)
                            }}
                        >
                            <NextImg src={nextIcon} alt="Next icon" />
                        </NextBtn>
                    </PaginationInner>
                ) : (
                    //Pagination buttons for pokemons filtered by color
                    <PaginationInner>
                        <PrevBtn
                            id="pagination-prev"
                            className={clsx(
                                coloredPokemonsCtx.page === 1 && 'btn-disabled'
                            )}
                            disabled={coloredPokemonsCtx.page === 1}
                            onClick={() => {
                                coloredPokemonsCtx.setPage(
                                    coloredPokemonsCtx.page - 1
                                )
                            }}
                        >
                            <PrevImg src={prevIcon} alt="Prev icon" />
                        </PrevBtn>
                        <CurrentPageWrap>
                            <CurrentPage>{coloredPokemonsCtx.page}</CurrentPage>
                        </CurrentPageWrap>
                        <NextBtn
                            id="pagination-next"
                            className={clsx(
                                coloredPokemonsCtx.page === pageCount &&
                                    'btn-disabled'
                            )}
                            disabled={coloredPokemonsCtx.page === pageCount}
                            onClick={() => {
                                coloredPokemonsCtx.setPage(
                                    coloredPokemonsCtx.page + 1
                                )
                            }}
                        >
                            <NextImg src={nextIcon} alt="Next icon" />
                        </NextBtn>
                    </PaginationInner>
                ))}
        </PaginationWrap>
    )
}

export default Pagination
