import type { FC } from 'react'

import styles from './NotFound.module.css'

export const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404</h2>
      <p>Not Found</p>
      <p className={styles.text}>
        The resource requested could not be found on this server!
      </p>
    </div>
  )
}
