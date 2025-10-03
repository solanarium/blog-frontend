import { type FC, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { getPostByIdThunk } from '../redux/features/post/onePostSlice'
import { useDispatch, useSelector } from '../redux/store'
import { routes } from '../types/consts'
import { CommentCard } from './CommentCard'
import styles from './PostPage.module.css'
import { LinkButton } from './uikit/Button'
import { Image } from './uikit/Image'
import { PageLoader } from './uikit/PageLoader'
import { Statistic } from './uikit/Statistic'
import { Text } from './uikit/Text'

export const PostPage: FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const post = useSelector((state) => state.onePost.post)
  const isLoading = useSelector((state) => state.onePost.isLoading)
  const status = useSelector((state) => state.onePost.status)

  useEffect(() => {
    if (id) {
      dispatch(getPostByIdThunk(id))
    }
  }, [dispatch, id])

  if (isLoading) {
    return <PageLoader />
  }

  if (status === 404) {
    return <Navigate to={routes[404]} />
  }

  if (status !== 200 || !post) {
    return 'Something went wrong!'
  }
  const datePost = new Date(post.createdAt).toLocaleDateString()

  return (
    <div className={styles.container}>
      <LinkButton
        className={styles.button_back}
        to={routes.auth.homePage}
        variant="primary"
      >
        Back
      </LinkButton>
      <div className={styles.content}>
        <div className={styles.image_block}>
          {post.imageUrl && (
            <Image
              className={styles.image}
              image={post.imageUrl}
              title={post.title}
            />
          )}

          <div className={styles.user_data}>
            <Text variant="xs">{post.username}</Text>
            <Text variant="xs">{datePost}</Text>
          </div>
          <Text variant="m">{post.title}</Text>
          <Text variant="s">{post.text}</Text>
          <Statistic post={post} />
        </div>
        <CommentCard />
      </div>
    </div>
  )
}
