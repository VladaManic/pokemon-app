/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext, useEffect } from 'react'
import ColoredPokemonsContext from '../../context/ColoredPokemonsContext'
import { useQuery } from '@tanstack/react-query'
import { getPokemonList } from '../../helpers/tanStackQuery'
import axios from 'axios'

import FilterBar from '../../components/Home/FilterBar'
import Content from '../../components/Home/Content'
import TotalBar from '../../components/Home/TotalBar'
import Pagination from '../../components/Home/Pagination'

import { HomeWrap } from './style'

const Home = () => {
    const coloredPokemonsCtx = useContext(ColoredPokemonsContext)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedColor, setSelectedColor] = useState<number>(0)

    //Calling helper function which is enabling tanstack-query pagination and filter by color functionality
    const { isError, isLoading, data, dataUpdatedAt } = useQuery({
        queryKey: [
            'Pokemons',
            'Page: ' + currentPage,
            'Color: ' + selectedColor,
        ],
        queryFn: () =>
            getPokemonList(coloredPokemonsCtx, currentPage, selectedColor),
        //cacheTime: 15 * (60 * 1000), // 15 mins of caching data in local cache (if cacheTime not set, default is 5min)
    })

    //Refetch if error when trying fo get paginated list of all pokemons
    const onClickHandler = async () => {
        await setCurrentPage(0)
        setCurrentPage(1)
    }

    //Testing purposes
    // const fetchData = () => {
    //     axios
    //         .get('https://pokeapi.co/api/v2/pokemon/')
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    //Changing current page when fetching from API with page by page
    const onPageChangeHandler = (param: number) => {
        setCurrentPage(param)
    }

    //Changing selected color when clicking in filter dropdown
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.value
        setSelectedColor(parseInt(id))
        setCurrentPage(1)
        coloredPokemonsCtx.setPage(1)
    }

    return (
        <HomeWrap>
            <FilterBar onChangeColor={onChangeHandler} />
            <Content
                isError={isError}
                isLoading={isLoading}
                data={data?.pokemons}
                selectedColor={selectedColor}
                onClickBtn={onClickHandler}
            />
            <TotalBar
                isError={isError}
                isLoading={isLoading}
                total={data?.totalPokemons}
                dataUpdatedAt={dataUpdatedAt}
            />
            <Pagination
                isError={isError}
                isLoading={isLoading}
                page={currentPage}
                total={data?.totalPokemons}
                selectedColor={selectedColor}
                onPageChange={onPageChangeHandler}
            />
        </HomeWrap>
    )
}

export default Home
