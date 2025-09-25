import type { ComponentProps, FC } from 'react'

import { classNames } from '../heplers/classNames'
import styles from './Background.module.css'

export const Background: FC<ComponentProps<'div'>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames(styles.background, className)} {...rest}>
      {children}
    </div>
  )
}
