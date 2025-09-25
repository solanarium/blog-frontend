import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useSelector } from '../redux/store'
import { routes } from '../types/consts'

export const ProtectedRoute: FC = () => {
  const isLogined = useSelector((state) => state.auth.isLogined)

  if (!isLogined) {
    return <Navigate to={routes.unAuth.login} />
  }
  return <Outlet />
}
