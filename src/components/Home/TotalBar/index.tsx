import {
    TotalBarWrap,
    ErrorMessage,
    TotalInner,
    LoadingMessage,
    LoadingTotalSpan,
} from './style'

interface Props {
    isError: boolean
    isLoading: boolean
    total: number
}

const TotalBar = ({ isError, isLoading, total }: Props) => {
    return (
        <TotalBarWrap>
            {isError ? (
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
                            {isLoading ? '...' : total}
                        </LoadingTotalSpan>
                    </LoadingMessage>
                </TotalInner>
            )}
        </TotalBarWrap>
    )
}

export default TotalBar
