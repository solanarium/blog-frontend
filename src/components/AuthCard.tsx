import type { ComponentProps, FC } from 'react'

import styles from './AuthCard.module.css'

type Props = {
  title: string
} & ComponentProps<'div'>

export const AuthCard: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    </div>
  )
}
