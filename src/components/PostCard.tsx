import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../types/consts'
import type { Post } from '../types/models'
import { LineClamp } from './LineClamp'
import styles from './PostCard.module.css'
import { Image } from './uikit/Image'
import { Statistic } from './uikit/Statistic'
import { Text } from './uikit/Text'

interface Props {
  post: Post
}

export const PostCard: FC<Props> = ({ post }) => {
  const datePost = new Date(post.createdAt).toLocaleDateString()

  return (
    <Link
      to={routes.auth.posts.index + `/${post._id}`}
      className={styles.post_card}
    >
      {post.imageUrl && <Image image={post.imageUrl} title={post.title} />}

      <div className={styles.user_data}>
        <Text variant="xs">{post.username}</Text>
        <Text variant="xs">{datePost}</Text>
      </div>
      <div>
        <Text variant="m">{post.title}</Text>
        <LineClamp lines={3}>
          <Text variant="s">{post.text}</Text>
        </LineClamp>
      </div>
      <Statistic post={post} />
    </Link>
  )
}
