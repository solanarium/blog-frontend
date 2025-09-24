import { type ComponentProps, type FC, useId } from 'react'

import { classNames } from '../../heplers/classNames'
import styles from './Input.module.css'

type Props = {
  label: string
} & ComponentProps<'input'>

export const Input: FC<Props> = ({ className, label, ...rest }) => {
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className={styles.text}>
        {label}
      </label>
      <input
        id={id}
        className={classNames(styles.input, className)}
        {...rest}
      />
    </div>
  )
}
