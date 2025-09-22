import type { ComponentProps, FC } from 'react'

import styles from './Container.module.css'

export const Container: FC<ComponentProps<'div'>> = ({ children, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  )
}
