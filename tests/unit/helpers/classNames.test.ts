import { classNames } from '../../../src/heplers/classNames'

describe('Unit | Helpers | classNames', () => {
  test('it filters classes', () => {
    const res = classNames('hello', false, undefined, 'world')

    expect(res).toBe('hello world')
  })
})
