import FetchAgainBtn from '../FetchAgainBtn'

import {
    FilterBarWrap,
    FilterBarInner,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
} from './style'

interface Props {
    isError: boolean
    isLoading: boolean
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const FilterBar = ({ isError, isLoading, onClickBtn }: Props) => {
    return (
        <FilterBarWrap>
            <FilterBarInner>
                {isError ? (
                    <ErrorWrap>
                        <ErrorMessage>error while fetching</ErrorMessage>
                        <FetchAgainBtn onClickBtn={onClickBtn} />
                    </ErrorWrap>
                ) : isLoading ? (
                    <LoadingMessage>Filter list is loading</LoadingMessage>
                ) : (
                    <p>Allright</p>
                )}
            </FilterBarInner>
        </FilterBarWrap>
    )
}

export default FilterBar
