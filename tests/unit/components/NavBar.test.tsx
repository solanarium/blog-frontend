import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event'
import { Route } from 'react-router-dom'

import { NavBar } from '../../../src/components/NavBar'
// import { useDispatch } from '../../../src/redux/store'
import { render } from '../../../src/tests-support/render'
// import { routes } from '../../../src/types/consts'

jest.mock('../../../src/redux/store')

describe('Unit | Components | NavBar', () => {
  beforeEach(() => {
    // const useDispatchMock = jest.fn()
    // const dispatchMock = (useDispatch as jest.Mock).mockImplementation(
    //   useDispatchMock,
    // )
  })
  test('it renders', () => {
    const screen = render(<NavBar>hllo</NavBar>)

    expect(screen.getByRole('link', { name: 'Main' }))
    expect(screen.getByRole('link', { name: 'My posts' }))
    expect(screen.getByRole('link', { name: 'Add a post' }))
    expect(screen.getByRole('button', { name: 'Log Out' }))
  })

  //   test('it redirect to link href', async () => {
  //     const screen = render(<Route path="/" element={<NavBar />} />)

  //     await userEvent.click(screen.getByRole('link', { name: 'Main' }))

  //     // expect(redirectMock).toHaveBeenCalledWith(routes.auth.homePage)
  //   })
})
