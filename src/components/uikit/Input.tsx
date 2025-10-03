import { type ComponentProps, type FC, useId } from 'react'

import { classNames } from '../../heplers/classNames'
import styles from './Input.module.css'

type Props = {
  label?: string
  containerClassName?: string
} & ComponentProps<'input'>

export const Input: FC<Props> = ({
  className,
  label,
  containerClassName,
  ...rest
}) => {
  const id = useId()

  return (
    <div className={containerClassName}>
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
