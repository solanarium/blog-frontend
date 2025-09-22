import { useState } from 'react'

import { AuthCard } from '../components/AuthCard'
import { Button, LinkButton } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import { Loader } from '../components/uikit/Loader'
import { loginThunk } from '../redux/features/auth/authSlice'
import { useDispatch } from '../redux/store'
import { routes } from '../types/consts'
import styles from './Login.module.css'

export const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  return (
    <AuthCard className={styles.card} title="Login">
      <form
        className={styles.card}
        onSubmit={(event) => {
          event.preventDefault()
          setIsLoading(true)
          dispatch(loginThunk({ username: userName, password })).finally(() =>
            setIsLoading(false),
          )
        }}
      >
        <Input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          label="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
        />
        <div className={styles.buttons}>
          <Button className={styles.login_button} variant="primary">
            Log in {isLoading && <Loader size={20} />}
          </Button>
          <LinkButton variant="secondary" to={routes.unAuth.registration}>
            Create account
          </LinkButton>
        </div>
      </form>
    </AuthCard>
  )
}
