import { toJson } from '../../../src/heplers/toJson'

describe('Unit | Helpers | toJson', () => {
  test('it returns transform response to json', async () => {
    const response = {
      ok: true,
      json: () => {
        return Promise.resolve({
          username: 'Bodya',
          value: 'hui',
        })
      },
    } as Response

    await expect(toJson(response)).resolves.toStrictEqual({
      username: 'Bodya',
      value: 'hui',
    })
  })

  test('it throws error', async () => {
    const response = {
      ok: false,
      json: () => {
        return Promise.resolve({ message: 'Internal server error' })
      },
    } as Response

    await expect(toJson(response)).rejects.toThrow('Internal server error')
  })
})
