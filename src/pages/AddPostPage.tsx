import { useFormik } from 'formik'
import { type FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { object, string } from 'yup'

import { Button, LinkButton } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import { Loader } from '../components/uikit/Loader'
import { TextArea } from '../components/uikit/TextArea'
import { createPostThunk } from '../redux/features/post/postsSlice'
import { useDispatch } from '../redux/store'
import type { CreatePostVariables } from '../types/api/requests'
import { routes } from '../types/consts'
import styles from './AddPostPage.module.css'

export const AddPostPage: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
    errors,
    isValid,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik<CreatePostVariables>({
    initialErrors: {
      title: 'Title is required',
      text: 'Text is required',
    },
    initialValues: {
      title: '',
      text: '',
      image: null,
    },
    validationSchema: object({
      title: string()
        .required('Title is required')
        .min(3, 'Minimum 3 characters'),
      text: string()
        .required('Text is required')
        .min(10, 'Minimum 10 characters'),
    }),
    onSubmit: ({ title, text, image }, { setSubmitting }) => {
      setSubmitting(true)
      dispatch(
        createPostThunk({
          title,
          text,
          image,
        }),
      )
        .unwrap()
        .then((res) => {
          toast.success(res.message)
          navigate(routes.auth.homePage)
        })
        .catch((error) => {
          toast.error(error.message)
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
          <input
            onChange={(event) => {
              if (event.currentTarget.files) {
                if (event.currentTarget.files[0]) {
                  setFieldValue('image', event.currentTarget.files[0])
                }
              }
            }}
            accept="image/*"
            aria-label="photo"
            ref={inputRef}
            type="file"
            className={styles.input}
          />
          {values.image ? (
            <button
              type="button"
              className={styles.image_button}
              onClick={clickInput}
            >
              <img
                className={styles.post_image}
                src={URL.createObjectURL(values.image)}
                alt="image"
              />
              <div className={styles.update_photo}>Update photo</div>
            </button>
          ) : (
            <button
              type="button"
              onClick={clickInput}
              className={styles.button_input}
            >
              Add a photo:
            </button>
          )}
        </div>
        <div>
          <Input
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            label="Title of post"
            placeholder="Title"
          />
          {errors.title && touched.title && (
            <p className={styles.error}>{errors.title}</p>
          )}
        </div>
        <div>
          <TextArea
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Text of post"
          />
          {errors.text && touched.text && (
            <p className={styles.error}>{errors.text}</p>
          )}
        </div>
        <div className={styles.buttons}>
          <Button
            className={styles.button_create}
            disabled={!isValid || isSubmitting}
            variant="primary"
            type="submit"
          >
            Create
            {isSubmitting && <Loader size={20} />}
          </Button>
          <LinkButton to={routes.auth.homePage} variant="danger">
            Cancel
          </LinkButton>
        </div>
      </div>
    </form>
  )
}
