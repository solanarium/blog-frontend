import type { FC, ReactNode } from 'react'

import styles from './Text.module.css'

interface Props {
  children: ReactNode
  variant: 'xs' | 's' | 'm'
}

export const Text: FC<Props> = ({ children, variant }) => {
  return <div className={styles[variant]}>{children}</div>
}
