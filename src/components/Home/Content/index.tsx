import { useState } from 'react'

import FetchAgainBtn from '../FetchAgainBtn'
import PokemonsList from '../PokemonsList'
import PokemonDetails from '../PokemonDetails'

import { PokemonObj } from '../../../types/interfaces'
import {
    ContentWrap,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
    ContentInner,
} from './style'

interface Props {
    isError: boolean
    isLoading: boolean
    data: PokemonObj[]
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const Content = ({ isError, isLoading, data, onClickBtn }: Props) => {
    const [chosenPokemon, setChosenPokemon] = useState<number>(0)
    const [imgLoader, setImgLoader] = useState<boolean>(true)

    const onClickHandler = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        const id = parseInt(e.currentTarget.id)
        setChosenPokemon(id)
        setImgLoader(true)
    }

    const setImgLoaderHandler = () => {
        console.log('load')
        setImgLoader(false)
    }

    return (
        <ContentWrap>
            {isError ? (
                <ErrorWrap>
                    <ErrorMessage>Error, data fetching failed</ErrorMessage>
                    <FetchAgainBtn onClickBtn={onClickBtn} />
                </ErrorWrap>
            ) : isLoading ? (
                <LoadingMessage>Searching for pokemons...</LoadingMessage>
            ) : (
                <ContentInner>
                    <PokemonsList pokemons={data} onClick={onClickHandler} />
                    <PokemonDetails
                        pokemonId={chosenPokemon}
                        imgLoader={imgLoader}
                        onLoadImg={setImgLoaderHandler}
                    />
                </ContentInner>
            )}
        </ContentWrap>
    )
}

export default Content
