import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Container } from '../../../src/components/Container'

describe('Unit | Components | Container', () => {
  test('it renders', () => {
    const screen = render(<Container />)

    expect(screen.container.querySelector('div'))
  })
})
