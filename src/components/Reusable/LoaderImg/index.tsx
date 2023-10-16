import { useState } from 'react'
import clsx from 'clsx'

import { ImgWrap, LoaderWrap, LoaderInner, PokemonImg } from './style'

interface Props {
    src: string
    alt: string
}

const LoaderImg = ({ src, alt }: Props) => {
    const [imgLoader, setImgLoader] = useState<boolean>(true)

    return (
        <ImgWrap className="img-wrap">
            <LoaderWrap className={clsx('loader-wrap', !imgLoader && 'hide')}>
                <LoaderInner className="loader-inner"></LoaderInner>
            </LoaderWrap>
            <PokemonImg
                src={src}
                alt={alt}
                onLoad={() => setImgLoader(false)}
                className={clsx(imgLoader && 'hide')}
            />
        </ImgWrap>
    )
}

export default LoaderImg
