import { useEffect, useContext } from 'react'
import LoadingContext from '../../context/LoadingContext'
import axios from 'axios'

import FilterBar from '../../components/Home/FilterBar'
import Content from '../../components/Home/Content'
import TotalBar from '../../components/Home/TotalBar'
import Pagination from '../../components/Home/Pagination'

import { HomeWrap } from './style'

const Home = () => {
    const loadingCtx = useContext(LoadingContext)

    const fetchData = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/')
            .then((res) => {
                loadingCtx.setIsFetched(true)
                console.log(res.data)
            })
            .catch(function (error) {
                loadingCtx.setIsFetched(true)
                loadingCtx.setFetchError(true)
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const onClickHandler = () => {
        loadingCtx.setFetchError(false)
        loadingCtx.setIsFetched(false)
        fetchData()
    }

    return (
        <HomeWrap>
            <FilterBar onClickBtn={onClickHandler} />
            <Content onClickBtn={onClickHandler} />
            <TotalBar />
            <Pagination />
        </HomeWrap>
    )
}

export default Home
