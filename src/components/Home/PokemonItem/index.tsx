import { PokemonObj } from '../../../types/interfaces'
import { PokemonWrap, PokemonName } from './style'

interface Props {
    singlePokemon: PokemonObj
}

const PokemonItem = ({ singlePokemon }: Props) => {
    return (
        <PokemonWrap>
            <PokemonName>{singlePokemon.name}</PokemonName>
        </PokemonWrap>
    )
}

export default PokemonItem
