import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPokemonList } from '../../helpers/tanStackQuery'

import FilterBar from '../../components/Home/FilterBar'
import Content from '../../components/Home/Content'
import TotalBar from '../../components/Home/TotalBar'
import Pagination from '../../components/Home/Pagination'

import { HomeWrap } from './style'

const Home = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    //Calling helper function which is enabling tanstack-query pagination functionality
    const { isError, isLoading, data } = useQuery({
        queryKey: ['pokemons', currentPage],
        queryFn: () => getPokemonList(currentPage),
    })

    const onClickHandler = async () => {
        console.log('try again')
    }

    const onPageChangeHandler = (param: number) => {
        setCurrentPage(param)
    }

    return (
        <HomeWrap>
            <FilterBar
                onClickBtn={onClickHandler}
                isError={isError}
                isLoading={isLoading}
            />
            <Content
                onClickBtn={onClickHandler}
                isError={isError}
                isLoading={isLoading}
                data={data?.pokemons}
            />
            <TotalBar
                isError={isError}
                isLoading={isLoading}
                total={data?.totalPokemons}
            />
            <Pagination
                isError={isError}
                isLoading={isLoading}
                page={currentPage}
                total={data?.totalPokemons}
                onPageChange={onPageChangeHandler}
            />
        </HomeWrap>
    )
}

export default Home
