import { useContext } from 'react'
import ColoredPokemonsContext from '../../../context/ColoredPokemonsContext'

import PokemonItem from '../PokemonItem'

import { PokemonListWrap } from './style'
import { PokemonObj } from '../../../types/interfaces'

interface Props {
    pokemons: PokemonObj[]
    selectedColor: number
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const PokemonsList = ({ pokemons, selectedColor, onClick }: Props) => {
    const coloredPokemonsCtx = useContext(ColoredPokemonsContext)
    //Mapping different data depending on if color is selected or not
    const data =
        selectedColor === 0 ? pokemons : coloredPokemonsCtx.pagePokemons

    return (
        <PokemonListWrap>
            {data.map((singlePokemon: PokemonObj, index: number) => (
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
