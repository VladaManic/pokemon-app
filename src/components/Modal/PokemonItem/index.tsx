/* eslint-disable @typescript-eslint/no-explicit-any */
import { CaughtPokemon } from '../../../types/interfaces'
import {
    ItemWrap,
    ButtonWrap,
    CloseIcon,
    ImgWrap,
    PokemonImg,
    PokemonName,
} from './style'

interface Props {
    pokemonData: CaughtPokemon
    onClickRemove: React.MouseEventHandler<HTMLButtonElement>
    onHoverPokemon: React.MouseEventHandler<HTMLDivElement>
    onHoverOutPokemon: React.MouseEventHandler<HTMLDivElement>
}

const PokemonItem = ({
    pokemonData,
    onClickRemove,
    onHoverPokemon,
    onHoverOutPokemon,
}: Props) => {
    return (
        <ItemWrap
            id={pokemonData.name}
            data-time={pokemonData.timeCaught.toString()}
            onMouseOver={onHoverPokemon}
            onMouseOut={onHoverOutPokemon}
        >
            <ButtonWrap
                value={pokemonData.id.toString()}
                name={pokemonData.name}
                onClick={onClickRemove}
            >
                <CloseIcon>x</CloseIcon>
            </ButtonWrap>
            <ImgWrap>
                <PokemonImg src={pokemonData.url} alt={pokemonData.name} />
            </ImgWrap>
            <PokemonName>{pokemonData.name}</PokemonName>
        </ItemWrap>
    )
}

export default PokemonItem
