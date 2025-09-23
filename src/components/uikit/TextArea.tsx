import type { ComponentProps, FC } from 'react'

import styles from './TextArea.module.css'

type Props = {
  label: string
} & ComponentProps<'textarea'>

export const TextArea: FC<Props> = ({ label, onChange, ...rest }) => {
  return (
    <div>
      <label className={styles.title}>
        {label}
        <textarea
          className={styles.text_area}
          onChange={(event) => {
            if (onChange) {
              onChange(event)
            }
            event.target.style.height = 'auto'
            event.target.style.height = `${event.target.scrollHeight}px`
          }}
          placeholder={label}
          {...rest}
        ></textarea>
      </label>
    </div>
  )
}
