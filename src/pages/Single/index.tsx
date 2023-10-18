import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPokemonSingle } from '../../api/requests'
import isStorageSupported from '../../utils/isStorageSupported'

import SinglePokemon from '../../components/Reusable/SinglePokemon'

import {
    SingleWrap,
    BackgroundWrap,
    BackgroundInner,
    BackgroundImg,
    SingleInner,
    ErrorWrap,
    LoadingText,
} from './style'

const Single = () => {
    //Getting param from URL
    const { pokemonName } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (isStorageSupported('localStorage')) {
            //Redirecting to Login page if user is not logged in
            localStorage.getItem('pokemon-app') === null && navigate('/')
        }
    }, [])

    //Calling helper function which is enabling tanstack-query single pokemon fetch functionality
    const { isError, isLoading, data, dataUpdatedAt } = useQuery({
        queryKey: ['Pokemon', pokemonName],
        queryFn: () => getPokemonSingle(pokemonName),
    })

    return (
        <SingleWrap>
            <BackgroundWrap>
                <BackgroundInner>
                    <BackgroundImg
                        src={
                            data?.pokemon.sprites.other.dream_world
                                .front_default
                        }
                        alt="Pokemon image"
                    />
                </BackgroundInner>
                <SingleInner>
                    {isError ? (
                        <ErrorWrap>Error, data fetching failed</ErrorWrap>
                    ) : isLoading ? (
                        <LoadingText>
                            Selected pokemon’s data is loading...
                        </LoadingText>
                    ) : (
                        <SinglePokemon
                            pokemonId={data?.pokemon.id}
                            data={data}
                            dataUpdatedAt={dataUpdatedAt}
                        />
                    )}
                </SingleInner>
            </BackgroundWrap>
        </SingleWrap>
    )
}

export default Single
