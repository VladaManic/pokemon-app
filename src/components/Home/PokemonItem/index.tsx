import { useState } from 'react'

import Loader from '../../../layout/Loader'

import { PokemonObj } from '../../../types/interfaces'
import {
    PokemonWrap,
    PokemonInner,
    ImgWrap,
    LoaderWrap,
    PokemonImg,
    PokemonName,
    PokemonIndexWrap,
    PokemonIndexInner,
} from './style'

interface Props {
    singlePokemon: PokemonObj
}

const PokemonItem = ({ singlePokemon }: Props) => {
    const [imgLoader, setImgLoader] = useState<boolean>(true)
    const url = singlePokemon.url
    const pokemonNo = url.split('/')[6]

    return (
        <PokemonWrap>
            <PokemonInner>
                <ImgWrap>
                    <LoaderWrap
                        style={{ display: imgLoader ? 'block' : 'none' }}
                    >
                        <Loader />
                    </LoaderWrap>
                    <PokemonImg
                        src={
                            `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/` +
                            pokemonNo +
                            `.svg`
                        }
                        alt={singlePokemon.name}
                        onLoad={() => setImgLoader(false)}
                        style={{ display: imgLoader ? 'none' : 'block' }}
                    />
                </ImgWrap>
                <PokemonName>{singlePokemon.name}</PokemonName>
            </PokemonInner>
            <PokemonIndexWrap>
                <PokemonIndexInner>{pokemonNo}</PokemonIndexInner>
            </PokemonIndexWrap>
        </PokemonWrap>
    )
}

export default PokemonItem
