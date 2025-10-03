import { type FC, useState } from 'react'

import { createCommentThunk } from '../redux/features/post/onePostSlice'
import { useDispatch } from '../redux/store'
import styles from './CommentCard.module.css'
import { Button } from './uikit/Button'
import { Input } from './uikit/Input'
import { PageLoader } from './uikit/PageLoader'

export const CommentCard: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Input
          value={text}
          onChange={(event) => {
            setText(event?.target.value)
          }}
          containerClassName={styles.comment_input}
          placeholder="Comment"
        />
        <Button
          className={styles.button_send}
          disabled={!text}
          onClick={() => {
            setIsLoading(true)
            dispatch(createCommentThunk(text))
            setIsLoading(false)
          }}
          variant="primary"
        >
          Send
        </Button>
      </div>
    </div>
  )
}
