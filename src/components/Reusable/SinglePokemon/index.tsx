import { useEffect, useContext, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import CaughtPokemonsContext from '../../../context/CaughtPokemonsContext'
import clsx from 'clsx'
import { format } from 'date-fns'

import Loader from '../../../components/Reusable/Loader'

import CatchIcon from '../../../assets/img/catch.svg'
import SuccessIcon from '../../../assets/img/successfully-caught.svg'
import LinkIcon from '../../../assets/img/open-link.svg'
import {
    SinglePokemonWrap,
    CatchButton,
    CatchImg,
    IdWrap,
    IdInner,
    LoaderWrap,
    PokemonImg,
    TitleWrap,
    CaughtImg,
    PokemonName,
    LinkImg,
    PokemonHeight,
    AbilityWrap,
    AbilityInner,
    InitiateWrap,
    PokeballIcon,
    SuccessWrap,
    SuccessText,
    SuccessTime,
    FailWrap,
    FullStorage,
    TimeWrap,
    TextInner,
    TimeInner,
} from './style'
import { SinglePokemonObj, AbilityObj } from '../../../types/interfaces'

interface Props {
    pokemonId: number
    imgLoader: boolean
    onLoadImg: () => void
    data: SinglePokemonObj
    dataUpdatedAt: number
}

const SinglePokemon = ({
    pokemonId,
    imgLoader,
    onLoadImg,
    data,
    dataUpdatedAt,
}: Props) => {
    const [catchingLoading, setCatchingLoading] = useState<boolean>(false)
    const [catchingSuccess, setCatchingSuccess] = useState<boolean>(true)
    const [catchTime, setCatchTime] = useState<Date | number>(0)
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)
    //Get URL
    const { pathname } = useLocation()

    useEffect(() => {
        //Adding new caught pokemon to localStorage
        localStorage.setItem(
            'caught-pokemons',
            JSON.stringify(caughtPokemonsCtx.alreadyCaught)
        )
    }, [caughtPokemonsCtx.alreadyCaught])

    //Click on catch btn
    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const id = parseInt(e.currentTarget.name)
        //Possibility of 50%
        const lottery = Math.random() < 0.5
        setCatchingLoading(true)
        //Reset catching process for new try
        caughtPokemonsCtx.setCatchingDone(false)
        setTimeout(() => {
            setCatchingLoading(false)
            caughtPokemonsCtx.setCatchingDone(true)
            if (lottery) {
                //Add new pokemon to array of already caught
                caughtPokemonsCtx.setAlreadyCaught(id)
                //Success message set
                setCatchingSuccess(true)
                //Setting current time as time of catching
                const now = new Date()
                setCatchTime(now)
            } else {
                //Fail message set
                setCatchingSuccess(false)
            }
        }, 3000)
    }

    return (
        <SinglePokemonWrap>
            <CatchButton
                className={clsx(
                    caughtPokemonsCtx.alreadyCaught.filter(
                        (id: number) => id === pokemonId
                    ).length !== 0 && 'disabled-btn',
                    catchingLoading && 'temporary-disabled',
                    caughtPokemonsCtx.alreadyCaught.length === 9 &&
                        'temporary-disabled'
                )}
                name={pokemonId.toString()}
                onClick={onClickHandler}
            >
                <CatchImg src={CatchIcon} alt="Catch icon" />
            </CatchButton>
            <IdWrap>
                <IdInner className="index-inner">{data?.pokemon.id}</IdInner>
            </IdWrap>
            <LoaderWrap className={clsx(!imgLoader && 'hide')}>
                <Loader />
            </LoaderWrap>
            <PokemonImg
                src={data?.pokemon.sprites.other.dream_world.front_default}
                alt={data?.pokemon.name}
                onLoad={onLoadImg}
                className={clsx(imgLoader && 'hide')}
            />
            <TitleWrap>
                {caughtPokemonsCtx.alreadyCaught.filter(
                    (id: number) => id === pokemonId
                ).length !== 0 && (
                    <CaughtImg src={SuccessIcon} alt="Success icon" />
                )}
                <PokemonName>{data?.pokemon.name}</PokemonName>
                {!pathname.includes('/pokemon/') && (
                    <NavLink
                        to={`/pokemon/${data?.pokemon.name}`}
                        className="nav-link"
                    >
                        <LinkImg src={LinkIcon} alt={data?.pokemon.name} />
                    </NavLink>
                )}
            </TitleWrap>
            <PokemonHeight>height: {data?.pokemon.height}</PokemonHeight>
            <PokemonHeight>weight: {data?.pokemon.weight}</PokemonHeight>
            <PokemonHeight>abilities:</PokemonHeight>
            <AbilityWrap>
                {data?.pokemon.abilities.map((singleAbility: AbilityObj) => (
                    <AbilityInner key={singleAbility.ability.name}>
                        {singleAbility.ability.name}
                    </AbilityInner>
                ))}
            </AbilityWrap>
            {catchingLoading && (
                <InitiateWrap>
                    <PokeballIcon src={CatchIcon} alt="Pokeball loader" />
                </InitiateWrap>
            )}
            {caughtPokemonsCtx.catchingDone && (
                <InitiateWrap>
                    {catchingSuccess ? (
                        <SuccessWrap>
                            <SuccessText>catched:&nbsp;</SuccessText>
                            <SuccessTime>
                                {format(catchTime, 'dd MMMM yy, k:mm')}
                            </SuccessTime>
                        </SuccessWrap>
                    ) : (
                        <FailWrap>catching failed, try again</FailWrap>
                    )}
                </InitiateWrap>
            )}
            {caughtPokemonsCtx.alreadyCaught.length === 9 && (
                <InitiateWrap>
                    <FullStorage>Poke Storage full!</FullStorage>
                </InitiateWrap>
            )}
            <TimeWrap>
                <TextInner>Data fetched:&nbsp;</TextInner>
                <TimeInner>
                    {format(dataUpdatedAt, 'dd MMMM yy, k:mm:ss')}
                </TimeInner>
            </TimeWrap>
        </SinglePokemonWrap>
    )
}

export default SinglePokemon
