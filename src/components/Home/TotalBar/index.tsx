import { useContext } from 'react'
import LoadingContext from '../../../context/LoadingContext'

import {
    TotalBarWrap,
    ErrorMessage,
    TotalInner,
    LoadingMessage,
    LoadingTotalSpan,
} from './style'

const TotalBar = () => {
    const loadingCtx = useContext(LoadingContext)

    return (
        <TotalBarWrap>
            {loadingCtx.fetchError ? (
                <TotalInner>
                    <div></div>
                    <ErrorMessage>error while fetching</ErrorMessage>
                </TotalInner>
            ) : (
                <TotalInner>
                    <div></div>
                    <LoadingMessage>
                        Total pokemons:{' '}
                        <LoadingTotalSpan>
                            {!loadingCtx.isFetched ? '...' : '1234'}
                        </LoadingTotalSpan>
                    </LoadingMessage>
                </TotalInner>
            )}
        </TotalBarWrap>
    )
}

export default TotalBar
