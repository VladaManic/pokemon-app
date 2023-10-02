import { PokemonObj } from '../../../types/interfaces'
import {
    PokemonWrap,
    PokemonName,
    PokemonIndexWrap,
    PokemonIndexInner,
} from './style'

interface Props {
    singlePokemon: PokemonObj
}

const PokemonItem = ({ singlePokemon }: Props) => {
    const url = singlePokemon.url
    const pokemonNo = url.split('/')[6]

    return (
        <PokemonWrap>
            <PokemonName>{singlePokemon.name}</PokemonName>
            <PokemonIndexWrap>
                <PokemonIndexInner>{pokemonNo}</PokemonIndexInner>
            </PokemonIndexWrap>
        </PokemonWrap>
    )
}

export default PokemonItem
