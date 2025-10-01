import { type FC, useState } from 'react'

import { classNames } from '../../heplers/classNames'
import FALLBACK_IMAGE from '../assets/default-fallback-image.png'
import styles from './Image.module.css'

interface Props {
  image: string | null
  title?: string
  className?: string
}
export const Image: FC<Props> = ({ image, title, className }) => {
  const [isImageLoadingFailed, setIsImageLoadingFailed] = useState(false)

  return (
    <>
      {!image || isImageLoadingFailed ? (
        <img
          className={classNames(styles.image, className)}
          src={FALLBACK_IMAGE}
          alt={title}
        />
      ) : (
        <img
          className={classNames(styles.image, className)}
          src={image}
          alt={title}
          onError={() => {
            setIsImageLoadingFailed(true)
          }}
        />
      )}
    </>
  )
}
