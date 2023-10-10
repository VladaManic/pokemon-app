import { format } from 'date-fns'

import {
    TotalBarWrap,
    ErrorMessage,
    TotalInner,
    TimeWrap,
    TextInner,
    TimeInner,
    LoadingMessage,
    LoadingTotalSpan,
} from './style'

interface Props {
    isError: boolean
    isLoading: boolean
    total: number
    dataUpdatedAt: number
}

const TotalBar = ({ isError, isLoading, total, dataUpdatedAt }: Props) => {
    return (
        <TotalBarWrap>
            {isError ? (
                <TotalInner>
                    <TimeWrap></TimeWrap>
                    <ErrorMessage>error while fetching</ErrorMessage>
                </TotalInner>
            ) : (
                <TotalInner>
                    <TimeWrap>
                        {!isLoading && (
                            <>
                                <TextInner>Data fetched: &nbsp;</TextInner>
                                <TimeInner>
                                    {format(
                                        dataUpdatedAt,
                                        'dd MMMM yy, k:mm:ss'
                                    )}
                                </TimeInner>
                            </>
                        )}
                    </TimeWrap>
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
