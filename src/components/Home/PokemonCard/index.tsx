import { useQuery } from '@tanstack/react-query'
import { getPokemonSingle } from '../../../api/requests'

import SinglePokemon from '../../Reusable/SinglePokemon'

import { ErrorWrap, LoadingText } from './style'

interface Props {
    pokemonId: number
    imgLoader: boolean
    onLoadImg: () => void
}

const PokemonCard = ({ pokemonId, imgLoader, onLoadImg }: Props) => {
    //Calling helper function which is enabling tanstack-query single pokemon fetch functionality
    const { isError, isLoading, data, dataUpdatedAt } = useQuery({
        queryKey: ['Pokemon', pokemonId],
        queryFn: () => getPokemonSingle(pokemonId),
    })

    return (
        <>
            {isError ? (
                <ErrorWrap>Error, data fetching failed</ErrorWrap>
            ) : isLoading ? (
                <LoadingText>Selected pokemon’s data is loading...</LoadingText>
            ) : (
                <SinglePokemon
                    pokemonId={pokemonId}
                    imgLoader={imgLoader}
                    onLoadImg={onLoadImg}
                    data={data}
                    dataUpdatedAt={dataUpdatedAt}
                />
            )}
        </>
    )
}

export default PokemonCard
