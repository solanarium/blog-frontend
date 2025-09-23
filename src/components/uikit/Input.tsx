import type { ComponentProps, FC } from 'react'

import { classNames } from '../../heplers/classNames'
import styles from './Input.module.css'

type Props = {
  label: string
} & ComponentProps<'input'>

export const Input: FC<Props> = ({ className, label, ...rest }) => {
  return (
    <div>
      <p className={styles.text}>{label}</p>
      <input className={classNames(styles.input, className)} {...rest} />
    </div>
  )
}
