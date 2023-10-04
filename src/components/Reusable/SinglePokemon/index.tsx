import { useQuery } from '@tanstack/react-query'
import { getPokemonSingle } from '../../../helpers/tanStackQuerySingle'
import clsx from 'clsx'

import Loader from '../../../layout/Loader'

import LinkIcon from '../../../assets/img/open-link.svg'
import { AbilityObj } from '../../../types/interfaces'
import {
    SinglePokemonWrap,
    ErrorWrap,
    LoadingText,
    LoaderWrap,
    PokemonImg,
    TitleWrap,
    PokemonName,
    LinkImg,
    PokemonHeight,
    AbilityWrap,
    AbilityInner,
} from './style'

interface Props {
    pokemonId: number
    imgLoader: boolean
    onLoadImg: () => void
}

const SinglePokemon = ({ pokemonId, imgLoader, onLoadImg }: Props) => {
    //Calling helper function which is enabling tanstack-query pagination functionality
    const { isError, isLoading, data } = useQuery({
        queryKey: ['pokemon', pokemonId],
        queryFn: () => getPokemonSingle(pokemonId),
    })

    return (
        <>
            {isError ? (
                <ErrorWrap>Error, data fetching failed</ErrorWrap>
            ) : isLoading ? (
                <LoadingText>Selected pokemon’s data is loading...</LoadingText>
            ) : (
                <SinglePokemonWrap>
                    <LoaderWrap className={clsx(!imgLoader && 'hide')}>
                        <Loader />
                    </LoaderWrap>
                    <PokemonImg
                        src={
                            data?.pokemon.sprites.other.dream_world
                                .front_default
                        }
                        alt={data?.pokemon.name}
                        onLoad={onLoadImg}
                        className={clsx(imgLoader && 'hide')}
                    />
                    <TitleWrap>
                        <PokemonName>{data?.pokemon.name}</PokemonName>
                        <LinkImg src={LinkIcon} alt={data?.pokemon.name} />
                    </TitleWrap>
                    <PokemonHeight>
                        height: {data?.pokemon.height}
                    </PokemonHeight>
                    <PokemonHeight>
                        weight: {data?.pokemon.weight}
                    </PokemonHeight>
                    <PokemonHeight>abilities:</PokemonHeight>
                    <AbilityWrap>
                        {data?.pokemon.abilities.map(
                            (singleAbility: AbilityObj, index: number) => (
                                <AbilityInner key={index}>
                                    {singleAbility.ability.name}
                                </AbilityInner>
                            )
                        )}
                    </AbilityWrap>
                </SinglePokemonWrap>
            )}
        </>
    )
}

export default SinglePokemon
