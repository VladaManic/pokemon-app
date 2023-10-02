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
                    <PokemonsList pokemons={data} />
                    <PokemonDetails />
                </ContentInner>
            )}
        </ContentWrap>
    )
}

export default Content
