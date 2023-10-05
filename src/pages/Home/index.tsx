import { useState, useEffect, useContext } from 'react'
import ColoredPokemonsContext from '../../context/ColoredPokemonsContext'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getPokemonList } from '../../helpers/tanStackQuery'

import FilterBar from '../../components/Home/FilterBar'
import Content from '../../components/Home/Content'
import TotalBar from '../../components/Home/TotalBar'
import Pagination from '../../components/Home/Pagination'

import { HomeWrap } from './style'

const Home = () => {
    const coloredPokemonsCtx = useContext(ColoredPokemonsContext)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedColor, setSelectedColor] = useState<number>(0)

    //Calling helper function which is enabling tanstack-query pagination functionality
    const { isError, isLoading, data } = useQuery({
        queryKey: ['pokemons', currentPage, selectedColor],
        queryFn: () =>
            getPokemonList(coloredPokemonsCtx, currentPage, selectedColor),
    })

    const onClickHandler = async () => {
        console.log('try again')
    }

    const fetchData = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon-color/1')
            .then((res) => {
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const onPageChangeHandler = (param: number) => {
        setCurrentPage(param)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.value
        setSelectedColor(parseInt(id))
        setCurrentPage(1)
        coloredPokemonsCtx.setPage(1)
    }

    return (
        <HomeWrap>
            <FilterBar
                onClickBtn={onClickHandler}
                onChangeColor={onChangeHandler}
            />
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
