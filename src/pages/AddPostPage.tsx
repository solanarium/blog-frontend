import { useFormik } from 'formik'
import { type FC, useRef } from 'react'
import { object, string } from 'yup'

import { Button, LinkButton } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import { TextArea } from '../components/uikit/TextArea'
import { routes } from '../types/consts'
import styles from './AddPostPage.module.css'

export const AddPostPage: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      text: '',
    },
    validationSchema: object({
      title: string().min(3),
      text: string().min(10),
    }),
    onSubmit: () => {},
  })

  const clickInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.click()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.card}>
        <div>
          <input ref={inputRef} type="file" className={styles.input} />
          <button onClick={clickInput} className={styles.button_input}>
            Add a photo:
          </button>
        </div>
        <Input
          name="title"
          onChange={handleChange}
          value={values.title}
          label="Title of text:"
        />
        <TextArea
          name="text"
          onChange={(event) => {
            setFieldValue('text', event.target.value)
          }}
          label="Text of post"
        />
        <div className={styles.buttons}>
          <Button variant="primary">Create</Button>
          <LinkButton to={routes.auth.homePage} variant="cancel">
            Cancel
          </LinkButton>
        </div>
      </div>
    </form>
  )
}
