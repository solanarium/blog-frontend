import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import styles from './App.module.css'
import { Background } from './components/Background'
import { Container } from './components/Container'
import { NavBar } from './components/NavBar'
import { Loader } from './components/uikit/Loader'
import { AddPostPage } from './pages/AddPostPage'
import { Login } from './pages/Login'
import { MainPage } from './pages/MainPage'
import { Registration } from './pages/Registration'
import { getMeThunk, logOut } from './redux/features/auth/authSlice'
import { useDispatch, useSelector } from './redux/store'
import { routes } from './types/consts'
import { AuthenticatedRoute } from './wrappers/AuthenticatedRoute'
import { ProtectedRoute } from './wrappers/ProtectedRoute'

export const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.authSlice.isLoading)

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token) {
      dispatch(getMeThunk(token))
    } else {
      dispatch(logOut())
    }
  }, [dispatch])

  return (
    <Background>
      {isLoading ? (
        <Loader size={40} className={styles.loader} />
      ) : (
        <Routes>
          <Route element={<AuthenticatedRoute />}>
            <Route
              path={routes.unAuth.registration}
              element={<Registration />}
            />
            <Route path={routes.unAuth.login} element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route
              element={
                <NavBar>
                  <Container>
                    <Outlet />
                  </Container>
                </NavBar>
              }
            >
              <Route path={routes.auth.homePage} element={<MainPage />} />

              <Route
                path={routes.auth.posts.create}
                element={<AddPostPage />}
              />
            </Route>
          </Route>
        </Routes>
      )}
    </Background>
  )
}
