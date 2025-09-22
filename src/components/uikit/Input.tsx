import type { ComponentProps, FC } from 'react'

import { classNames } from '../../heplers/classNames'
import styles from './Input.module.css'

type Props = {
  text: string
} & ComponentProps<'input'>

export const Input: FC<Props> = ({ className, text, ...rest }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <input className={classNames(styles.input, className)} {...rest} />
    </div>
  )
}
