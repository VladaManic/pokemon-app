import PokemonItem from '../PokemonItem'

import { PokemonObj } from '../../../types/interfaces'
import { PokemonListWrap } from './style'

interface Props {
    pokemons: PokemonObj[]
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const PokemonsList = ({ pokemons, onClick }: Props) => {
    return (
        <PokemonListWrap>
            {pokemons.map((singlePokemon: PokemonObj, index: number) => (
                <PokemonItem
                    key={index}
                    singlePokemon={singlePokemon}
                    onClick={onClick}
                />
            ))}
        </PokemonListWrap>
    )
}

export default PokemonsList
