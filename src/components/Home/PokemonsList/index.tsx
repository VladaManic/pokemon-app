import PokemonItem from '../PokemonItem'

import { PokemonObj } from '../../../types/interfaces'
import { PokemonListWrap } from './style'

interface Props {
    pokemons: PokemonObj[]
}

const PokemonsList = ({ pokemons }: Props) => {
    return (
        <PokemonListWrap>
            {pokemons.map((singlePokemon: PokemonObj, index: number) => (
                <PokemonItem key={index} singlePokemon={singlePokemon} />
            ))}
        </PokemonListWrap>
    )
}

export default PokemonsList
