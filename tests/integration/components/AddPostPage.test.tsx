import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toast } from 'sonner'

import { AddPostPage } from '../../../src/pages/AddPostPage'
import { controlledPromise } from '../../../src/tests-support/controllerPromise'
import { mockDispatch } from '../../../src/tests-support/mocks/helpers/mockDispatch'
import { render, type Screen } from '../../../src/tests-support/render'
import { routes } from '../../../src/types/consts'

jest.mock('../../../src/redux/store')

const fillForm = async (screen: Screen) => {
  await userEvent.type(screen.getByLabelText('Title of post'), 'hello')

  await userEvent.type(screen.getByLabelText('Text of post'), 'hello world')
}

describe('Integration | Component | AddPostPage', () => {
  test('it renders', () => {
    mockDispatch()
    const screen = render(<AddPostPage />, {
      initialPathname: routes.auth.posts.create,
    })

    expect(
      screen.getByRole('button', { name: 'Add a photo:' }),
    ).toBeInTheDocument()
  })
  test('it submits', async () => {
    const dispatchMock = mockDispatch()

    dispatchMock.mockImplementation(() => {
      return {
        unwrap: () => Promise.resolve({ message: 'Post created successful' }),
      }
    })

    const toastSuccessMock = jest.spyOn(toast, 'success')
    const screen = render(<AddPostPage />, {
      initialPathname: routes.auth.posts.create,
    })

    expect(screen.getByRole('button', { name: 'Create' })).toBeDisabled()

    await fillForm(screen)

    expect(screen.getByRole('button', { name: 'Create' })).not.toBeDisabled()

    await userEvent.click(screen.getByRole('button', { name: 'Create' }))

    expect(dispatchMock).toHaveBeenCalled()

    screen.debug()

    await screen.expectPathname(routes.auth.homePage)

    expect(toastSuccessMock).toHaveBeenCalledWith('Post created successful')
  })

  test('it rejects', async () => {
    const dispatchMock = mockDispatch()

    dispatchMock.mockImplementation(() => {
      return {
        unwrap: () => Promise.reject({ message: 'Internal server error' }),
      }
    })

    const toastRejectMock = jest.spyOn(toast, 'error')
    const screen = render(<AddPostPage />, {
      initialPathname: routes.auth.posts.create,
    })

    await fillForm(screen)

    await userEvent.click(screen.getByRole('button', { name: 'Create' }))

    expect(toastRejectMock).toHaveBeenCalledWith('Internal server error')
  })

  test('it renders loader when submitting', async () => {
    const dispatch = mockDispatch()

    const { promise, resolve } = controlledPromise()

    dispatch.mockImplementation(() => {
      return {
        unwrap: () => promise,
      }
    })
    const screen = render(<AddPostPage />, {
      initialPathname: routes.auth.posts.create,
    })

    await fillForm(screen)

    const button = screen.getByRole('button', { name: 'Create' })

    await userEvent.click(button)

    expect(button.querySelector('.lucide-loader-circle')).toBeInTheDocument()

    expect(button).toBeDisabled()

    resolve({ message: 'Post created' })

    await waitFor(() => {
      expect(button.querySelector('.lucide-loader-circle'))
    })

    expect(button).not.toBeDisabled()
  })
  test('it focused on input by click on button', async () => {
    const screen = render(<AddPostPage />, {
      initialPathname: routes.auth.posts.create,
    })

    await userEvent.click(screen.getByRole('button', { name: 'Add a photo:' }))

    const input = screen.getByLabelText('photo')

    input.onclick = jest.fn()

    await userEvent.click(input)

    expect(input.onclick).toHaveBeenCalled()
  })
})
