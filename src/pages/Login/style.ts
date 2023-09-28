import styled from 'styled-components'
import { color } from '../../shared/styles/variables'

export const LocalStorageErrorWrap = styled.h2``

export const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 140px;

    .login-form {
        display: flex;
        flex-direction: column;
        width: 320px;

        label {
            margin-bottom: 10px;
            font-size: 16px;
            color: ${color.labelGray};
        }

        #fullname,
        #age,
        #email {
            height: 41px;
            padding-left: 10px;
            margin-bottom: 20px;
            background-color: ${color.defaultWhite};
            border: 2px solid ${color.borderGray};
            border-radius: 8px;

            &.error {
                color: ${color.errorRed};
            }
        }

        .submit-btn {
            width: 100px;
            height: 48px;
            padding: 14px 20px;
            margin-top: 50px;
            margin-right: auto;
            margin-left: auto;
            border: 2px solid ${color.labelGray};
            border-radius: 400px;
            background-color: ${color.defaultBg};
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            color: ${color.labelGray};
            cursor: pointer;
        }
    }
`

export const LabelWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ErrorWrap = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: ${color.errorRed};
`

export const NotificationWrap = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: ${color.labelGray};
`
