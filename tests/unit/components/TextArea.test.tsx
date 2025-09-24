import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextArea } from '../../../src/components/uikit/TextArea'

describe('Unit | Components | TextArea', () => {
  test('it renders', () => {
    const screen = render(<TextArea label="Text of post" />)

    expect(
      screen.getByRole('textbox', { name: 'Text of post' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Text of post')).toBeInTheDocument()
  })
  test('it has dynamic height', async () => {
    const screen = render(<TextArea label="Text of post" />)

    const textArea = screen.getByRole('textbox', { name: 'Text of post' })

    Object.defineProperty(textArea, 'scrollHeight', {
      configurable: true,
      value: 40,
    })

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Text of post' }),
      'something \n else \n qwerty \n iugyhgvnbmnk \n',
    )

    const styles = window.getComputedStyle(textArea)

    expect(styles.height).toBe('40px')
  })
  test('it triggers onChange when user type', async () => {
    const onChange = jest.fn()

    const screen = render(<TextArea onChange={onChange} label="Text of post" />)

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Text of post' }),
      'hello world',
    )

    expect(onChange.mock.calls[0][0].target.value).toBe('hello world')
  })
})
