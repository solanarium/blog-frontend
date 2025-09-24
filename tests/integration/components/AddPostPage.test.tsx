import userEvent from '@testing-library/user-event'
import { toast } from 'sonner'

import { AddPostPage } from '../../../src/pages/AddPostPage'
import { useDispatch } from '../../../src/redux/store'
import { render, type Screen } from '../../../src/tests-support/render'
import { routes } from '../../../src/types/consts'

jest.mock('../../../src/redux/store')

const mockDispatch = () => {
  const dispatchMock = jest.fn()

  ;(useDispatch as unknown as jest.Mock).mockImplementation(() => dispatchMock)

  return dispatchMock
}

const fillForm = async (screen: Screen) => {
  await userEvent.type(screen.getByLabelText('Title of post'), 'hello')

  await userEvent.type(screen.getByLabelText('Text of post'), 'hello world')
}

describe('Integration | Component | AddPostPage', () => {
  test('it renders', () => {
    mockDispatch()
    const screen = render(<AddPostPage />)

    expect(
      screen.getByRole('button', { name: 'Add a photo:' }),
    ).toBeInTheDocument()
  })
  test('it submits', async () => {
    // const navigateMock = jest.fn()

    // ;(useNavigate as unknown as jest.Mock).mockImplementation(
    //   () => navigateMock,
    // )
    const dispatchMock = mockDispatch()

    dispatchMock.mockImplementation(() => {
      return {
        unwrap: () => Promise.resolve({ message: 'Post created successful' }),
      }
    })

    const toastSuccessMock = jest.spyOn(toast, 'success')
    const screen = render(<AddPostPage />, {
      routerProps: {
        initialEntries: [routes.auth.posts.create],
      },
    })

    expect(screen.getByRole('button', { name: 'Create' })).toBeDisabled()

    await fillForm(screen)

    expect(screen.getByRole('button', { name: 'Create' })).not.toBeDisabled()

    await userEvent.click(screen.getByRole('button', { name: 'Create' }))

    expect(dispatchMock).toHaveBeenCalled()

    screen.debug()

    // expect(screen.getCurrentPathname()).toBe(routes.auth.homePage)

    expect(toastSuccessMock).toHaveBeenCalledWith()
  })

  // test('it render loader when submitting', async () => {
  //   const screen = render(<AddPostPage />)

  //   await fillForm(screen)

  //   await userEvent.click(screen.getByRole('button', { name: 'Create' }))
  // })
})
