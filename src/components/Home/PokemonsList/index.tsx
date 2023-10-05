import { useContext } from 'react'
import ColoredPokemonsContext from '../../../context/ColoredPokemonsContext'

import PokemonItem from '../PokemonItem'

import { PokemonObj } from '../../../types/interfaces'
import { PokemonListWrap } from './style'

interface Props {
    pokemons: PokemonObj[]
    selectedColor: number
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const PokemonsList = ({ pokemons, selectedColor, onClick }: Props) => {
    const coloredPokemonsCtx = useContext(ColoredPokemonsContext)

    return (
        <>
            {selectedColor === 0 ? (
                <PokemonListWrap>
                    {pokemons.map(
                        (singlePokemon: PokemonObj, index: number) => (
                            <PokemonItem
                                key={index}
                                singlePokemon={singlePokemon}
                                onClick={onClick}
                            />
                        )
                    )}
                </PokemonListWrap>
            ) : (
                <PokemonListWrap>
                    {coloredPokemonsCtx.pagePokemons.map(
                        (singlePokemon: PokemonObj, index: number) => (
                            <PokemonItem
                                key={index}
                                singlePokemon={singlePokemon}
                                onClick={onClick}
                            />
                        )
                    )}
                </PokemonListWrap>
            )}
        </>
    )
}

export default PokemonsList
