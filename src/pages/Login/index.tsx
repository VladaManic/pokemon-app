import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import isStorageSupported from '../../utils/isStorageSupported'
import clsx from 'clsx'

import {
    LocalStorageErrorWrap,
    FormWrap,
    LabelWrap,
    ErrorWrap,
    NotificationWrap,
} from './style'
import { FormData } from '../../types/interfaces'

const Login = () => {
    const navigate = useNavigate()
    const [localStorageError, setLocalStorageError] = useState<string>('')
    //localStorage.clear()

    useEffect(() => {
        //Checking if local-storage is available
        if (!isStorageSupported('localStorage')) {
            setLocalStorageError('No local storage is available!')
        } else {
            //Redirecting to Home page if user is loged in once
            if (localStorage.getItem('pokemon-app') !== null) {
                navigate('/home/')
            }
        }
    }, [])

    //Setting validation form rules
    const schema: ZodType<FormData> = z.object({
        fullname: z
            .string()
            .min(1, { message: "field can't be empty" })
            .max(256, { message: 'maximum of characters is 256' }),
        age: z.number({ invalid_type_error: "field can't be empty" }).min(12),
        email: z.string().email(),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    //On submit, set data to local-storage (if available) and redirect to Home page
    const submitData = (data: FormData) => {
        isStorageSupported('localStorage')
            ? localStorage.setItem('pokemon-app', JSON.stringify(data))
            : setLocalStorageError('No local storage is available!')
        navigate('/home/')
    }

    return (
        <>
            {localStorageError !== '' && (
                <LocalStorageErrorWrap>
                    {localStorageError}
                </LocalStorageErrorWrap>
            )}
            <FormWrap>
                <form
                    className="login-form"
                    onSubmit={handleSubmit(submitData)}
                >
                    <LabelWrap>
                        <label htmlFor="fullname">Name</label>
                        {errors.fullname && (
                            <ErrorWrap>{errors.fullname.message}</ErrorWrap>
                        )}
                    </LabelWrap>
                    <input
                        type="text"
                        id="fullname"
                        className={clsx(errors.fullname && 'error')}
                        {...register('fullname')}
                    />
                    <LabelWrap>
                        <label htmlFor="age">Age</label>
                        {errors.age ? (
                            <ErrorWrap>{errors.age.message}</ErrorWrap>
                        ) : (
                            <NotificationWrap>
                                you mast be 12 or older
                            </NotificationWrap>
                        )}
                    </LabelWrap>
                    <input
                        type="number"
                        id="age"
                        className={clsx(errors.age && 'error')}
                        {...register('age', { valueAsNumber: true })}
                    />
                    <LabelWrap>
                        <label htmlFor="email">Email</label>
                        {errors.email && (
                            <ErrorWrap>{errors.email.message}</ErrorWrap>
                        )}
                    </LabelWrap>
                    <input
                        type="email"
                        id="email"
                        className={clsx(errors.email && 'error')}
                        {...register('email')}
                    />
                    <input type="submit" value="Enter" className="submit-btn" />
                </form>
            </FormWrap>
        </>
    )
}

export default Login
