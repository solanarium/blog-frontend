import { Eye, MessageCircleMore } from 'lucide-react'
import type { FC } from 'react'

import type { Post } from '../../types/models'
import styles from './Statistic.module.css'

interface Props {
  post: Post
}

export const Statistic: FC<Props> = ({ post }) => {
  return (
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
  )
}
