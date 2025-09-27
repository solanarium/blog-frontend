import { Eye, MessageCircleMore } from 'lucide-react'
import type { FC } from 'react'

import type { Post } from '../types/models'
import styles from './PostCard.module.css'

interface Props {
  post: Post
}

export const PostCard: FC<Props> = ({ post }) => {
  const datePost = new Date(post.createdAt).toLocaleDateString()

  return (
    <div className={styles.post_card}>
      {post.imageUrl && (
        <img className={styles.image} src={post.imageUrl} alt={post.title} />
      )}
      <div className={styles.data}>
        <div>{post.username}</div>
        <div>{datePost}</div>
      </div>
      <div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.text}</p>
      </div>
      <div className={styles.icons}>
        <button className={styles.actions}>
          <Eye className={styles.icon} />
          <p>{post.views}</p>
        </button>
        <button className={styles.actions}>
          <MessageCircleMore name="comment" className={styles.icon} />
          <p>{post.comments.length}</p>
        </button>
      </div>
    </div>
  )
}
