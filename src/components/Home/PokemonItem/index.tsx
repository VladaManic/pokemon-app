import { PokemonObj } from '../../../types/interfaces'
import {
    PokemonWrap,
    PokemonInner,
    PokemonImg,
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
            <PokemonInner>
                <PokemonImg
                    src={
                        `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/` +
                        pokemonNo +
                        `.svg`
                    }
                    alt={singlePokemon.name}
                />
                <PokemonName>{singlePokemon.name}</PokemonName>
            </PokemonInner>
            <PokemonIndexWrap>
                <PokemonIndexInner>{pokemonNo}</PokemonIndexInner>
            </PokemonIndexWrap>
        </PokemonWrap>
    )
}

export default PokemonItem
