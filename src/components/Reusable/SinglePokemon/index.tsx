import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import CaughtPokemonsContext from '../../../context/CaughtPokemonsContext'
import { getPokemonSingle } from '../../../api/requests'
import isStorageSupported from '../../../utils/isStorageSupported'
import clsx from 'clsx'
import { format } from 'date-fns'

import Loader from '../../../components/Reusable/Loader'

import catchIcon from '../../../assets/img/catch.svg'
import LinkIcon from '../../../assets/img/open-link.svg'
import {
    ErrorWrap,
    LoadingText,
    SinglePokemonWrap,
    CatchButton,
    CatchImg,
    IdWrap,
    IdInner,
    LoaderWrap,
    PokemonImg,
    TitleWrap,
    PokemonName,
    LinkImg,
    PokemonHeight,
    AbilityWrap,
    AbilityInner,
    TimeWrap,
    TextInner,
    TimeInner,
} from './style'
import { AbilityObj } from '../../../types/interfaces'

interface Props {
    pokemonId: number
    imgLoader: boolean
    onLoadImg: () => void
}

const SinglePokemon = ({ pokemonId, imgLoader, onLoadImg }: Props) => {
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)
    let caughtPokemons
    //Checking if local-storage is available
    if (isStorageSupported('localStorage')) {
        try {
            //Returning from localStorage already caught pokemons
            caughtPokemons = JSON.parse(
                localStorage.getItem('caught-pokemons') || ''
            )
        } catch (err) {
            //No caught pokemons jet
            caughtPokemons = []
        }
    }
    const [alreadyCaught, setAlreadyCaught] = useState<[] | number[]>(
        caughtPokemons
    )

    //Calling helper function which is enabling tanstack-query single pokemon fetch functionality
    const { isError, isLoading, data, dataUpdatedAt } = useQuery({
        queryKey: ['Pokemon', pokemonId],
        queryFn: () => getPokemonSingle(pokemonId),
    })

    useEffect(() => {
        //Adding new caught pokemon to localStorage
        localStorage.setItem('caught-pokemons', JSON.stringify(alreadyCaught))
    }, [alreadyCaught])

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const id = parseInt(e.currentTarget.name)
        //Possibility of 50%
        const lottery = Math.random() < 0.5
        if (lottery) {
            //Add new pokemon to state
            setAlreadyCaught([...alreadyCaught, id])
            //Incrementing count number in header by one
            caughtPokemonsCtx.setCount(
                caughtPokemonsCtx.caughtPokemonsCount + 1
            )
        }
    }

    return (
        <>
            {isError ? (
                <ErrorWrap>Error, data fetching failed</ErrorWrap>
            ) : isLoading ? (
                <LoadingText>Selected pokemon’s data is loading...</LoadingText>
            ) : (
                <SinglePokemonWrap>
                    <CatchButton
                        className={clsx(
                            alreadyCaught.filter(
                                (id: number) => id === pokemonId
                            ).length !== 0 && 'disabled-btn'
                        )}
                        name={pokemonId.toString()}
                        onClick={onClickHandler}
                    >
                        <CatchImg src={catchIcon} alt="Catch icon" />
                    </CatchButton>
                    <IdWrap>
                        <IdInner className="index-inner">
                            {data?.pokemon.id}
                        </IdInner>
                    </IdWrap>
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
                        <NavLink
                            to={`/pokemon/${data?.pokemon.name}`}
                            className="nav-link"
                        >
                            <LinkImg src={LinkIcon} alt={data?.pokemon.name} />
                        </NavLink>
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
                            (singleAbility: AbilityObj) => (
                                <AbilityInner key={singleAbility.ability.name}>
                                    {singleAbility.ability.name}
                                </AbilityInner>
                            )
                        )}
                    </AbilityWrap>
                    <TimeWrap>
                        <TextInner>Data fetched: &nbsp;</TextInner>
                        <TimeInner>
                            {format(dataUpdatedAt, 'dd MMMM yy, k:mm:ss')}
                        </TimeInner>
                    </TimeWrap>
                </SinglePokemonWrap>
            )}
        </>
    )
}

export default SinglePokemon
