import { render } from '@testing-library/react'

import { Background } from '../../../src/components/Background'

describe('Unit | Components | Background', () => {
  test('it renders', () => {
    const screen = render(<Background />)

    expect(screen.container.querySelector('div'))
  })
})
