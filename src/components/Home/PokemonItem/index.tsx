import Loader from '../../Reusable/LoaderImg'

import {
    PokemonWrap,
    PokemonInner,
    LoaderWrapper,
    PokemonName,
    PokemonIndexWrap,
    PokemonIndexInner,
} from './style'
import { PokemonObj } from '../../../types/interfaces'

interface Props {
    singlePokemon: PokemonObj
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const PokemonItem = ({ singlePokemon, onClick }: Props) => {
    const url = singlePokemon.url
    const pokemonNo = url.split('/')[6]

    return (
        <PokemonWrap id={pokemonNo} onClick={onClick}>
            <PokemonInner>
                <LoaderWrapper className="loader-wrap">
                    <Loader
                        src={
                            `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/` +
                            pokemonNo +
                            `.svg`
                        }
                        alt={singlePokemon.name}
                    />
                </LoaderWrapper>
                <PokemonName>{singlePokemon.name}</PokemonName>
            </PokemonInner>
            <PokemonIndexWrap className="index-wrap">
                <PokemonIndexInner className="index-inner">
                    {pokemonNo}
                </PokemonIndexInner>
            </PokemonIndexWrap>
        </PokemonWrap>
    )
}

export default PokemonItem
