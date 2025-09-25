import { useDispatch } from '../../../redux/store'

export const mockDispatch = () => {
  const dispatchMock = jest.fn()

  ;(useDispatch as unknown as jest.Mock).mockImplementation(() => dispatchMock)

  return dispatchMock
}
