import { Link } from 'react-router-dom'

import { AuthCard } from '../components/AuthCard'
import { Button } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import styles from './Login.module.css'

export const Login = () => {
  return (
    <AuthCard title="Login">
      <Input text="Username" />
      <Input text="Password" />
      <div className={styles.buttons}>
        <Button variant="primary"> Log in</Button>
        <Link to="/register">
          <Button variant="secondary"> Don't have account?</Button>
        </Link>
      </div>
    </AuthCard>
  )
}
