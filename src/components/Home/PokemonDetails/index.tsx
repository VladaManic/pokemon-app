import PokemonCard from '../PokemonCard'

import { PokemonDetailsWrap, NoPokemonWrap } from './style'

interface Props {
    pokemonId: number
}

const PokemonDetails = ({ pokemonId }: Props) => {
    return (
        <PokemonDetailsWrap>
            {pokemonId === 0 ? (
                <NoPokemonWrap>Select pokemon to see its details</NoPokemonWrap>
            ) : (
                <PokemonCard pokemonId={pokemonId} />
            )}
        </PokemonDetailsWrap>
    )
}

export default PokemonDetails
