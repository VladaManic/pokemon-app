import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPokemonSingle } from '../../api/requests'

import SinglePokemon from '../../components/Reusable/SinglePokemon'

import BgImage from '../../assets/img/bg-img.png'
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
    const [imgLoader, setImgLoader] = useState<boolean>(true)

    //Calling helper function which is enabling tanstack-query single pokemon fetch functionality
    const { isError, isLoading, data, dataUpdatedAt } = useQuery({
        queryKey: ['Pokemon', pokemonName],
        queryFn: () => getPokemonSingle(pokemonName),
    })

    return (
        <SingleWrap>
            <BackgroundWrap>
                <BackgroundInner>
                    <BackgroundImg src={BgImage} alt="Pokemon image" />
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
                            imgLoader={imgLoader}
                            onLoadImg={() => setImgLoader(false)}
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
