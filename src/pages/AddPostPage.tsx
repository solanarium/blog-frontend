import { useFormik } from 'formik'
import { type FC, useRef } from 'react'
import { toast } from 'sonner'
import { object, string } from 'yup'

import { Button, LinkButton } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import { Loader } from '../components/uikit/Loader'
import { TextArea } from '../components/uikit/TextArea'
import { createPostThunk } from '../redux/features/post/postSlice'
import { useDispatch } from '../redux/store'
import type { CreatePostResponse } from '../types/api/response'
import { routes } from '../types/consts'
import styles from './AddPostPage.module.css'

export const AddPostPage: FC = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const { handleChange, handleSubmit, values, setFieldValue, isSubmitting } =
    useFormik({
      initialValues: {
        title: '',
        text: '',
      },
      validationSchema: object({
        title: string().min(3),
        text: string().min(10),
      }),
      onSubmit: ({ title, text }, { setSubmitting }) => {
        setSubmitting(true)
        dispatch(
          createPostThunk({
            title,
            text,
          }),
        )
          .then((res) => {
            if (res.error) {
              toast.error(res.error.message)
            } else {
              toast.success((res.payload as CreatePostResponse).message)
            }
          })
          .finally(() => setSubmitting(false))
      },
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
          <Button variant="primary" type="submit">
            Create
            {isSubmitting && <Loader />}
          </Button>
          <LinkButton to={routes.auth.homePage} variant="cancel">
            Cancel
          </LinkButton>
        </div>
      </div>
    </form>
  )
}
