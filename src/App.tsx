import { Route, Routes } from 'react-router-dom'

import { Container } from './components/Container'
import { NavBar } from './components/NavBar'
import { Login } from './pages/Login'
import { MainPage } from './pages/MainPage'
import { Registration } from './pages/Registration'

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Container>
  )
}
