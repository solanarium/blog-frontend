import type { ComponentProps, FC } from 'react'

import { classNames } from '../../heplers/classNames'
import styles from './Button.module.css'

type Props = {
  variant: 'primary' | 'secondary'
} & ComponentProps<'button'>

export const Button: FC<Props> = ({ variant, children, ...rest }) => {
  return (
    <button className={classNames(styles.button, styles[variant])} {...rest}>
      {children}
    </button>
  )
}
