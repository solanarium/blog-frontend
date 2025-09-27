import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { PostCard } from '../components/PostCard'
import { PageLoader } from '../components/uikit/PageLoader'
import { getPostThunk } from '../redux/features/post/postsSlice'
import { useDispatch, useSelector } from '../redux/store'
import styles from './MainPage.module.css'

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)

  useEffect(() => {
    setIsLoading(true)
    dispatch(getPostThunk())
      .unwrap()
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }, [dispatch])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className={styles.posts_container}>
      {posts.map((post) => {
        return <PostCard key={post._id} post={post} />
      })}
    </div>
  )
}
