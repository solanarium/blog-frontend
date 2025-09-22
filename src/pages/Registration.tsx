import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthCard } from '../components/AuthCard'
import { Button } from '../components/uikit/Button'
import { Input } from '../components/uikit/Input'
import { registerThunk } from '../redux/features/auth/authSlice'
import { useDispatch } from '../redux/store'
import styles from './Registration.module.css'

export const Registration = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  return (
    <AuthCard title="Registration">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(registerThunk({ username: userName, password: password }))
          setPassword('')
          setUserName('')
        }}
      >
        <Input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          text="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          text="Password"
        />
        <div className={styles.buttons}>
          <Button type="submit" variant="primary">
            Confirm
          </Button>
          <Link to="/login">
            <Button variant="secondary"> Already registered?</Button>
          </Link>
        </div>
      </form>
    </AuthCard>
  )
}
