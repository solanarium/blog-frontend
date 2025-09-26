import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { PageLoader } from '../components/uikit/PageLoader'
import { getPostThunk } from '../redux/features/post/postsSlice'
import { useDispatch, useSelector } from '../redux/store'

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

  return isLoading ? (
    <PageLoader />
  ) : (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
          </div>
        )
      })}
    </div>
  )
}
