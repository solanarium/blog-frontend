import type { FC, ReactNode } from 'react'

import styles from './LineClamp.module.css'

interface Props {
  children: ReactNode
  lines: number
}

export const LineClamp: FC<Props> = ({ children, lines }) => {
  return (
    <div className={styles.main} style={{ WebkitLineClamp: lines }}>
      {children}
    </div>
  )
}
