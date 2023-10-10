import SinglePokemon from '../../Reusable/SinglePokemon'

import { PokemonDetailsWrap, NoPokemonWrap } from './style'

interface Props {
    pokemonId: number
    imgLoader: boolean
    onLoadImg: () => void
}

const PokemonDetails = ({ pokemonId, imgLoader, onLoadImg }: Props) => {
    return (
        <PokemonDetailsWrap>
            {pokemonId === 0 ? (
                <NoPokemonWrap>Select pokemon to see its details</NoPokemonWrap>
            ) : (
                <SinglePokemon
                    pokemonId={pokemonId}
                    imgLoader={imgLoader}
                    onLoadImg={onLoadImg}
                />
            )}
        </PokemonDetailsWrap>
    )
}

export default PokemonDetails
