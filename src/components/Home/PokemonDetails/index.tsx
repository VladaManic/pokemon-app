import SinglePokemon from '../../Reusable/SinglePokemon'

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
                <SinglePokemon pokemonId={pokemonId} />
            )}
        </PokemonDetailsWrap>
    )
}

export default PokemonDetails
