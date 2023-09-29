import { useContext } from 'react'
import LoadingContext from '../../../context/LoadingContext'

import FetchAgainBtn from '../FetchAgainBtn'

import {
    ContentWrap,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
    ContentInner,
} from './style'

interface Props {
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const Content = ({ onClickBtn }: Props) => {
    const loadingCtx = useContext(LoadingContext)

    return (
        <ContentWrap>
            {loadingCtx.fetchError ? (
                <ErrorWrap>
                    <ErrorMessage>Error, data fetching failed</ErrorMessage>
                    <FetchAgainBtn onClickBtn={onClickBtn} />
                </ErrorWrap>
            ) : !loadingCtx.isFetched ? (
                <LoadingMessage>Searching for pokemons...</LoadingMessage>
            ) : (
                <ContentInner>Allright</ContentInner>
            )}
        </ContentWrap>
    )
}

export default Content
