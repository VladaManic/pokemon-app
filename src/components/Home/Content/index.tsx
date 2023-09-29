import FetchAgainBtn from '../FetchAgainBtn'

import {
    ContentWrap,
    ErrorWrap,
    ErrorMessage,
    LoadingMessage,
    ContentInner,
} from './style'

interface Props {
    isError: boolean
    isLoading: boolean
    data: object | undefined
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const Content = ({ isError, isLoading, data, onClickBtn }: Props) => {
    return (
        <ContentWrap>
            {isError ? (
                <ErrorWrap>
                    <ErrorMessage>Error, data fetching failed</ErrorMessage>
                    <FetchAgainBtn onClickBtn={onClickBtn} />
                </ErrorWrap>
            ) : isLoading ? (
                <LoadingMessage>Searching for pokemons...</LoadingMessage>
            ) : (
                <ContentInner>Allright</ContentInner>
            )}
        </ContentWrap>
    )
}

export default Content
