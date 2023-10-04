/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { getPokemonColors } from '../../../helpers/tanStackQueryColors'

import FetchAgainBtn from '../FetchAgainBtn'

import { ColorObj } from '../../../types/interfaces'
import {
    FilterBarWrap,
    FilterBarInner,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
    FilterWrap,
    FilterText,
    SelectWrap,
    SelectInner,
    OptionWrap,
} from './style'

interface Props {
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const FilterBar = ({ onClickBtn }: Props) => {
    //Calling helper function which is enabling tanstack-query fetch available colors functionality
    const { isError, isLoading, data } = useQuery({
        queryKey: ['colors'],
        queryFn: () => getPokemonColors(),
    })

    const onChangeHandler = (e: any) => {
        console.log(e.currentTarget.value)
    }

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
                    <FilterWrap>
                        <FilterText>Filter by color:</FilterText>
                        <SelectWrap>
                            <SelectInner
                                defaultValue=""
                                onChange={onChangeHandler}
                            >
                                <OptionWrap disabled></OptionWrap>
                                {data.colors.results.map(
                                    (color: ColorObj, index: number) => (
                                        <OptionWrap
                                            key={index}
                                            value={index + 1}
                                        >
                                            {color.name}
                                        </OptionWrap>
                                    )
                                )}
                            </SelectInner>
                        </SelectWrap>
                    </FilterWrap>
                )}
            </FilterBarInner>
        </FilterBarWrap>
    )
}

export default FilterBar
