import { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import isStorageSupported from '../../utils/isStorageSupported'

import { Page404Wrap, Page404Inner, NotFoundText, ReturnBtn } from './style'

const Page404 = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (isStorageSupported('localStorage')) {
            //Redirecting to Login page if user is not logged in
            localStorage.getItem('pokemon-app') === null && navigate('/')
        }
    }, [])

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
