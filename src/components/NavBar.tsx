import type { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { logOut } from '../redux/features/auth/authSlice'
import { useDispatch } from '../redux/store'
import { routes } from '../types/consts'
import styles from './NavBar.module.css'
import { Button } from './uikit/Button'

export const NavBar: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.home}>Main</button>
        <ul className={styles.list_container}>
          <li>
            <Link to={routes.auth.homePage} className={styles.link}>
              Main
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link}>
              My posts
            </Link>
          </li>
          <li>
            <Link to={routes.auth.posts.create} className={styles.link}>
              Add a post
            </Link>
          </li>
        </ul>
        <Button onClick={() => dispatch(logOut())} variant="primary">
          Log Out
        </Button>
      </div>
      {children}
    </div>
  )
}
