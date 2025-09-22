import { LoaderCircle } from 'lucide-react'
import type { FC } from 'react'

import { classNames } from '../../heplers/classNames'
import styles from './Loader.module.css'

interface Props {
  className?: string
  size?: number
}

export const Loader: FC<Props> = ({ className, size }) => {
  return (
    <LoaderCircle size={size} className={classNames(styles.icon, className)} />
  )
}
