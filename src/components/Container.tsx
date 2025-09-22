import type { ComponentProps, FC } from 'react'

import { classNames } from '../heplers/classNames'
import styles from './Container.module.css'

export const Container: FC<ComponentProps<'div'>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames(styles.container, className)} {...rest}>
      {children}
    </div>
  )
}
