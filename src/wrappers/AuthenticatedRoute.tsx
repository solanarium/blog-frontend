import { Navigate, Outlet } from 'react-router-dom'

import { useSelector } from '../redux/store'
import { routes } from '../types/consts'

export const AuthenticatedRoute = () => {
  const isLogined = useSelector((state) => state.auth.isLogined)

  if (isLogined) {
    return <Navigate to={routes.auth.homePage} />
  }
  return <Outlet />
}
