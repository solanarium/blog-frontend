import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './Container.module.css'

export const Container: FC = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
