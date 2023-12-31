import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPokemonColors } from '../../../api/requests'

import FetchAgainBtn from '../../Reusable/FetchAgainBtn'

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
import { ColorObj } from '../../../types/interfaces'

interface Props {
    onChangeColor: React.ChangeEventHandler<HTMLSelectElement>
}

const FilterBar = ({ onChangeColor }: Props) => {
    const [refetchTrigger, setRefetchTrigger] = useState<boolean>(true)

    //Calling helper function which is enabling tanstack-query fetch available colors functionality
    const { isError, isLoading, data } = useQuery({
        queryKey: ['Colors', refetchTrigger],
        queryFn: () => getPokemonColors(),
    })

    //Refetch if error when trying fo get available colors for filter dropdown
    const onClickHandler = () => {
        setRefetchTrigger(!refetchTrigger)
    }

    return (
        <FilterBarWrap>
            <FilterBarInner>
                {isError ? (
                    <ErrorWrap>
                        <ErrorMessage>error while fetching</ErrorMessage>
                        <FetchAgainBtn onClickBtn={onClickHandler} />
                    </ErrorWrap>
                ) : isLoading ? (
                    <LoadingMessage>Filter list is loading</LoadingMessage>
                ) : (
                    <FilterWrap>
                        <FilterText>Filter by color:</FilterText>
                        <SelectWrap>
                            <SelectInner
                                defaultValue=""
                                onChange={onChangeColor}
                            >
                                <OptionWrap value="0"></OptionWrap>
                                {data.colors.results.map(
                                    (color: ColorObj, index: number) => (
                                        <OptionWrap
                                            key={color.name}
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
