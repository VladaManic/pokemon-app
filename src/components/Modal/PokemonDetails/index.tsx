import { useContext } from 'react'
import CaughtPokemonsContext from '../../../context/CaughtPokemonsContext'
import isStorageSupported from '../../../utils/isStorageSupported'
import { format } from 'date-fns'

import ReleaseIcon from '../../../assets/img/pokeball-no-color.svg'
import {
    DetailsWrap,
    DetailsCard,
    DetailsTitle,
    DetailsText,
    DetailsEmpty,
    DetailsName,
    DetailsTime,
    DetailsSpan1,
    DetailsSpan2,
    ExitWrap,
    ReleaseBtn,
    ReleaseImg,
    ReleaseText,
    ExitBtn,
} from './style'

import { PokemonHoverObj } from '../../../types/interfaces'

interface Props {
    hoveredPokemon: PokemonHoverObj | null
    onClickClose: React.MouseEventHandler<HTMLButtonElement>
    onClickRelease: React.MouseEventHandler<HTMLButtonElement>
}

const PokemonDetails = ({
    hoveredPokemon,
    onClickClose,
    onClickRelease,
}: Props) => {
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)
    const userData =
        isStorageSupported('localStorage') &&
        localStorage.getItem('pokemon-app')

    return (
        <DetailsWrap>
            {hoveredPokemon === null ? (
                <DetailsCard>
                    <DetailsTitle>
                        Hi,{' '}
                        {userData !== null &&
                            JSON.parse(userData || '').fullname}
                    </DetailsTitle>
                    {caughtPokemonsCtx.alreadyCaught.length !== 0 ? (
                        <DetailsText>
                            Hover over pokemon to see some info
                        </DetailsText>
                    ) : (
                        <DetailsEmpty>
                            Your PokeStorage empty, go catch some pokemons.
                        </DetailsEmpty>
                    )}
                </DetailsCard>
            ) : (
                <DetailsCard>
                    <DetailsName>{hoveredPokemon?.name}</DetailsName>
                    <DetailsTime>
                        <DetailsSpan1>Caught:</DetailsSpan1>
                        <DetailsSpan2>
                            {hoveredPokemon.time !== undefined &&
                                format(
                                    parseInt(hoveredPokemon.time),
                                    'dd MMMM yy, k:mm'
                                )}
                        </DetailsSpan2>
                    </DetailsTime>
                </DetailsCard>
            )}
            <ExitWrap>
                {caughtPokemonsCtx.alreadyCaught.length !== 0 ? (
                    <ReleaseBtn onClick={onClickRelease}>
                        <ReleaseImg src={ReleaseIcon} alt="Pokebal icon" />
                        <ReleaseText>Release All</ReleaseText>
                    </ReleaseBtn>
                ) : (
                    <div></div>
                )}
                <ExitBtn onClick={onClickClose}>Exit</ExitBtn>
            </ExitWrap>
        </DetailsWrap>
    )
}

export default PokemonDetails
