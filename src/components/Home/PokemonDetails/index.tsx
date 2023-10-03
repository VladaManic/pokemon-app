import { useState } from 'react'

import { PokemonDetailsWrap, NoPokemonWrap } from './style'

const PokemonDetails = () => {
    const [chosenPokemon, setChosenPokemon] = useState<number>(0)

    return (
        <PokemonDetailsWrap>
            {chosenPokemon === 0 ? (
                <NoPokemonWrap>Select pokemon to see its details</NoPokemonWrap>
            ) : (
                <p>Allright</p>
            )}
        </PokemonDetailsWrap>
    )
}

export default PokemonDetails
