import type { ComponentProps, FC } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from '../../heplers/classNames'
import styles from './Button.module.css'

type Props = {
  variant: 'primary' | 'secondary'
} & ComponentProps<'button'>

type LinkProps = {
  variant: 'primary' | 'secondary' | 'danger'
} & ComponentProps<typeof Link>

export const Button: FC<Props> = ({ variant, className, ...rest }) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      {...rest}
    />
  )
}

export const LinkButton: FC<LinkProps> = ({ variant, ...rest }) => {
  return (
    <Link className={classNames(styles.button, styles[variant])} {...rest} />
  )
}
