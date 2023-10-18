import { NavLink } from 'react-router-dom'

import { Page404Wrap, Page404Inner, NotFoundText, ReturnBtn } from './style'

const Page404 = () => {
    return (
        <Page404Wrap>
            <Page404Inner>
                <NotFoundText>Page Not found</NotFoundText>
                <NavLink to={`/home`} end className="go-home">
                    <ReturnBtn>Go to Home</ReturnBtn>
                </NavLink>
            </Page404Inner>
        </Page404Wrap>
    )
}

export default Page404
