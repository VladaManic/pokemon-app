import { useContext } from 'react'
import CaughtPokemonsContext from '../../../context/CaughtPokemonsContext'

import PokemonItem from '../PokemonItem'

import { CaughtPokemon } from '../../../types/interfaces'
import PokeballImg from '../../../assets/img/pokeball-placeholder.svg'
import { ListWrap, ImgWrap, ImgPlaceholder } from './style'

interface Props {
    loopTimes: number
    onClickRemove: React.MouseEventHandler<HTMLButtonElement>
    onHoverPokemon: React.MouseEventHandler<HTMLDivElement>
    onHoverOutPokemon: React.MouseEventHandler<HTMLDivElement>
}

const PokemonList = ({
    loopTimes,
    onClickRemove,
    onHoverPokemon,
    onHoverOutPokemon,
}: Props) => {
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)

    return (
        <ListWrap>
            {caughtPokemonsCtx.alreadyCaught.map((pokemon: CaughtPokemon) => (
                <PokemonItem
                    key={pokemon.id}
                    pokemonData={pokemon}
                    onClickRemove={onClickRemove}
                    onHoverPokemon={onHoverPokemon}
                    onHoverOutPokemon={onHoverOutPokemon}
                />
            ))}
            {[...Array(loopTimes)].map((x, index) => (
                <ImgWrap key={index}>
                    <ImgPlaceholder
                        src={PokeballImg}
                        alt="Pokeball placeholder"
                    />
                </ImgWrap>
            ))}
        </ListWrap>
    )
}

export default PokemonList
