import type { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

import styles from './NavBar.module.css'
import { Button } from './uikit/Button'

export const NavBar: FC = () => {
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
            <a className={styles.link} href="/">
              Add a post
            </a>
          </li>
        </ul>
        <Link to="/login">
          <Button variant="primary"> Log in</Button>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
