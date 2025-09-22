import { useState } from 'react'

import { AuthCard } from '../components/AuthCard'
import { Button, LinkButton } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import { Loader } from '../components/uikit/Loader'
import { registerThunk } from '../redux/features/auth/authSlice'
import { useDispatch } from '../redux/store'
import { routes } from '../types/consts'
import styles from './Registration.module.css'

export const Registration = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  return (
    <AuthCard title="Registration">
      <form
        className={styles.card}
        onSubmit={(event) => {
          event.preventDefault()
          setIsLoading(true)
          dispatch(
            registerThunk({ username: userName, password: password }),
          ).finally(() => {
            setIsLoading(false)
          })
          setPassword('')
          setUserName('')
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
          <Button
            className={styles.button_confirm}
            type="submit"
            variant="primary"
          >
            Confirm {isLoading && <Loader />}
          </Button>
          <LinkButton to={routes.unAuth.login} variant="secondary">
            Already registered?
          </LinkButton>
        </div>
      </form>
    </AuthCard>
  )
}
