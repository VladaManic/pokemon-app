import { SyntheticEvent, useState } from 'react'
import clsx from 'clsx'

import fallbackImg from '../../../assets/img/img-fallback.svg'
import { ImgWrap, LoaderWrap, LoaderInner, PokemonImg } from './style'

interface Props {
    src: string
    alt: string
}

const LoaderImg = ({ src, alt }: Props) => {
    const [imgLoader, setImgLoader] = useState<boolean>(true)

    //On image load error, replace image with fallback
    const addImageFallback = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = fallbackImg
    }

    return (
        <ImgWrap className="img-wrap">
            <LoaderWrap className={clsx('loader-wrap', !imgLoader && 'hide')}>
                <LoaderInner className="loader-inner"></LoaderInner>
            </LoaderWrap>
            <PokemonImg
                src={src}
                alt={alt}
                className={clsx(imgLoader && 'hide')}
                onLoad={() => setImgLoader(false)}
                onError={addImageFallback}
            />
        </ImgWrap>
    )
}

export default LoaderImg
