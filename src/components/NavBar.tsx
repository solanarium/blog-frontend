import type { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { logOut } from '../redux/features/auth/authSlice'
import { useDispatch } from '../redux/store'
import { routes } from '../types/consts'
import styles from './NavBar.module.css'
import { Button } from './uikit/Button'

export const NavBar: FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.home}>Main</button>
        <ul className={styles.list_container}>
          <li>
            <a className={styles.link} href="/">
              Main
            </a>
          </li>
          <li>
            <a className={styles.link} href="/">
              My posts
            </a>
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
      <Outlet />
    </div>
  )
}
