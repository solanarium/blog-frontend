import type { FC } from 'react'

import { Loader } from './Loader'
import styles from './PageLoader.module.css'

export const PageLoader: FC = () => {
  return <Loader className={styles.loader} size={40} />
}
