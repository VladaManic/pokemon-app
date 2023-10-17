import { useState, useContext } from 'react'
import CaughtPokemonsContext from '../../../context/CaughtPokemonsContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import isStorageSupported from '../../../utils/isStorageSupported'
import { TOASTIFY_PARAMS } from '../../../constants/toastifyConstant'

import PokemonList from '../PokemonList'
import PokemonDetails from '../PokemonDetails'

import { PokemonHoverObj, CaughtPokemon } from '../../../types/interfaces'
import PokeballImg from '../../../assets/img/pokeball.png'
import { ModalInner, PokeballBg } from './style'

interface Props {
    onClickClose: React.MouseEventHandler<HTMLButtonElement>
}

const PokestorageModal = ({ onClickClose }: Props) => {
    const [hoveredPokemon, setHoveredPokemon] =
        useState<null | PokemonHoverObj>(null)
    const caughtPokemonsCtx = useContext(CaughtPokemonsContext)
    const pokemonsCount = caughtPokemonsCtx.alreadyCaught.length
    const loopTimes = 9 - pokemonsCount

    //On hover pokemon, prepare name and time of caught for pokemon details display
    const onHoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setHoveredPokemon({
            name: e.currentTarget.id,
            time: e.currentTarget.dataset.time,
        })
    }

    //On hover out, don't display anything
    const onHoverOutHandler = () => {
        setHoveredPokemon(null)
    }

    //On click X btn to let loose pokemon
    const onClickRemoveHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const id = parseInt(e.currentTarget.value)
        const name = e.currentTarget.name
        const pokemonsNotRemoved = caughtPokemonsCtx.alreadyCaught.filter(
            (pokemon: CaughtPokemon) => pokemon.id !== id
        )
        //Setting to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem(
                'caught-pokemons',
                JSON.stringify(pokemonsNotRemoved)
            )
        //Setting to context
        caughtPokemonsCtx.setAlreadyCaught(pokemonsNotRemoved)
        //On remove pokemon, remove his details from right side
        setHoveredPokemon(null)
        //Toastify notification
        toast.success(name + ' released', TOASTIFY_PARAMS)
    }

    //On click release all pokemons btn
    const onClickReleaseHandler = () => {
        //Remove all pokemons from local storage
        isStorageSupported('localStorage') &&
            localStorage.removeItem('caught-pokemons')
        //Remove all pokemons from context
        caughtPokemonsCtx.setAlreadyCaught([])
        //Toastify notification
        toast.success('All pokemon released', TOASTIFY_PARAMS)
    }

    return (
        <ModalInner>
            <PokeballBg src={PokeballImg} alt="Pokeball background image" />
            <PokemonList
                loopTimes={loopTimes}
                onClickRemove={onClickRemoveHandler}
                onHoverPokemon={onHoverHandler}
                onHoverOutPokemon={onHoverOutHandler}
            />
            <PokemonDetails
                hoveredPokemon={hoveredPokemon}
                onClickClose={onClickClose}
                onClickRelease={onClickReleaseHandler}
            />
            <ToastContainer />
        </ModalInner>
    )
}

export default PokestorageModal
