import { useState, useContext } from 'react'
import CaughtPokemonsContext from '../../../context/CaughtPokemonsContext'

import FetchAgainBtn from '../../Reusable/FetchAgainBtn'
import PokemonsList from '../PokemonsList'
import PokemonDetails from '../PokemonDetails'

import {
    ContentWrap,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
    ContentInner,
} from './style'
import { PokemonObj } from '../../../types/interfaces'

interface Props {
    isError: boolean
    isLoading: boolean
    data: PokemonObj[]
    selectedColor: number
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const Content = ({
    isError,
    isLoading,
    data,
    selectedColor,
    onClickBtn,
}: Props) => {
    const [chosenPokemon, setChosenPokemon] = useState<number>(0)
    const [imgLoader, setImgLoader] = useState<boolean>(true)
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)

    //Clicking on pokemon from layout to open it's details
    const onClickHandler = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        const id = parseInt(e.currentTarget.id)
        setChosenPokemon(id)
        setImgLoader(true)
        //Reset catching process for try with new pokemon
        caughtPokemonsCtx.setCatchingDone(false)
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
                    <PokemonsList
                        pokemons={data}
                        selectedColor={selectedColor}
                        onClick={onClickHandler}
                    />
                    <PokemonDetails
                        pokemonId={chosenPokemon}
                        imgLoader={imgLoader}
                        onLoadImg={() => setImgLoader(false)}
                    />
                </ContentInner>
            )}
        </ContentWrap>
    )
}

export default Content
