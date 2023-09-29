import { useContext } from 'react'
import LoadingContext from '../../../context/LoadingContext'

import FetchAgainBtn from '../FetchAgainBtn'

import {
    FilterBarWrap,
    FilterBarInner,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
} from './style'

interface Props {
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const FilterBar = ({ onClickBtn }: Props) => {
    const loadingCtx = useContext(LoadingContext)

    return (
        <FilterBarWrap>
            <FilterBarInner>
                {loadingCtx.fetchError ? (
                    <ErrorWrap>
                        <ErrorMessage>error while fetching</ErrorMessage>
                        <FetchAgainBtn onClickBtn={onClickBtn} />
                    </ErrorWrap>
                ) : !loadingCtx.isFetched ? (
                    <LoadingMessage>Filter list is loading</LoadingMessage>
                ) : (
                    <p>Allright</p>
                )}
            </FilterBarInner>
        </FilterBarWrap>
    )
}

export default FilterBar
