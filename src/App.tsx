import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import { Background } from './components/Background'
import { Container } from './components/Container'
import { NavBar } from './components/NavBar'
import { PostPage } from './components/PostPage'
import { PageLoader } from './components/uikit/PageLoader'
import { AddPostPage } from './pages/AddPostPage'
import { Login } from './pages/Login'
import { MainPage } from './pages/MainPage'
import { NotFound } from './pages/NotFound'
import { Registration } from './pages/Registration'
import { getMeThunk, logOut } from './redux/features/auth/authSlice'
import { useDispatch, useSelector } from './redux/store'
import { routes } from './types/consts'
import { AuthenticatedRoute } from './wrappers/AuthenticatedRoute'
import { ProtectedRoute } from './wrappers/ProtectedRoute'

export const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token) {
      dispatch(getMeThunk())
    } else {
      dispatch(logOut())
    }
  }, [dispatch])

  return (
    <Background>
      {isLoading ? (
        <PageLoader />
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
                  <Outlet />
                </NavBar>
              }
            >
              <Route
                element={
                  <Container>
                    <Outlet />
                  </Container>
                }
              >
                <Route path={routes.auth.homePage} element={<MainPage />} />
                <Route
                  path={routes.auth.posts.create}
                  element={<AddPostPage />}
                />
              </Route>
              <Route
                path={routes.auth.posts.index + '/:id'}
                element={<PostPage />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Background>
  )
}
