import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event'

import { NavBar } from '../../../src/components/NavBar'
import { useDispatch } from '../../../src/redux/store'
import { render } from '../../../src/tests-support/render'

jest.mock('../../../src/redux/store')

describe('Unit | Components | NavBar', () => {
  test('it renders', () => {
    const screen = render(<NavBar>hllo</NavBar>)

    expect(screen.getByRole('link', { name: 'Main' }))
    expect(screen.getByRole('link', { name: 'My posts' }))
    expect(screen.getByRole('link', { name: 'Add a post' }))
    expect(screen.getByRole('button', { name: 'Log Out' }))
  })

  test('it redirect to link href', async () => {
    const screen = render(<NavBar>Hello</NavBar>)

    await userEvent.click(screen.getByRole('link', { name: 'Add a post' }))

    expect(screen.getCurrentPathname()).toBe('/posts/create')

    await userEvent.click(screen.getByRole('link', { name: 'Main' }))

    expect(screen.getCurrentPathname()).toBe('/')
  })

  test('it unlogined when clicked on button', async () => {
    const dispatchMock = jest.fn()

    ;(useDispatch as jest.Mock).mockImplementation(() => dispatchMock)

    const screen = render(<NavBar>Hello</NavBar>)

    await userEvent.click(screen.getByRole('button', { name: 'Log Out' }))

    expect(dispatchMock).toHaveBeenCalledWith({
      payload: undefined,
      type: 'auth/logOut',
    })
  })
})
