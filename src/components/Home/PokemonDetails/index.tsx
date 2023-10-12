import PokemonCard from '../PokemonCard'

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
                <PokemonCard
                    pokemonId={pokemonId}
                    imgLoader={imgLoader}
                    onLoadImg={onLoadImg}
                />
            )}
        </PokemonDetailsWrap>
    )
}

export default PokemonDetails
