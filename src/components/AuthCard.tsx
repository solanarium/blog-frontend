import type { ComponentProps, FC } from 'react'

import styles from './AuthCard.module.css'

type Props = {
  title: string
} & ComponentProps<'div'>

export const AuthCard: FC<Props> = ({ title, children, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.registration_card}>
        <h4 className={styles.title}>{title}</h4>
        {children}
      </div>
    </div>
  )
}
