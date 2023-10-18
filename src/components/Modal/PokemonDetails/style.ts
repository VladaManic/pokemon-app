import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const DetailsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-left: 40px;
`

export const DetailsCard = styled.div`
    padding: 20px;
    border-radius: 15px;
    background-color: ${color.bgGray};
    color: ${color.cardGray};
`

export const DetailsTitle = styled.p`
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    text-align: center;
`

export const DetailsText = styled.p`
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
`

export const DetailsEmpty = styled.p`
    max-width: 166px;
    margin-right: auto;
    margin-left: auto;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
`

export const DetailsName = styled.p`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: ${color.nameBlack};
`

export const DetailsTime = styled.div`
    display: flex;
    justify-content: space-between;
    width: 190px;
    margin-right: auto;
    margin-left: auto;
    font-size: 12px;
    line-height: 14px;
`

export const DetailsSpan1 = styled.p`
    display: inline-block;
    font-weight: 700;
`

export const DetailsSpan2 = styled.p`
    display: inline-block;
    font-weight: 500;
`

export const ExitWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 190px;
`

export const ReleaseBtn = styled.button`
    display: flex;
    width: 149px;
    padding: 14px 20px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid ${color.releaseRed};
    border-radius: 400px;
    background-color: ${color.defaultBg};
    z-index: 100;
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.4;
    }
`

export const ReleaseImg = styled.img`
    margin-right: 5px;
`

export const ReleaseText = styled.p`
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
`

export const ExitBtn = styled.button`
    width: 80px;
    padding: 14px 20px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid ${color.nameBlack};
    border-radius: 400px;
    background-color: ${color.defaultBg};
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    z-index: 100;
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.4;
    }
`
