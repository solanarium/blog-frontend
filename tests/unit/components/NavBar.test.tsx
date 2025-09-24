// import '@testing-library/jest-dom'

// import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { MemoryRouter } from 'react-router-dom'

// import { NavBar } from '../../../src/components/NavBar'
// import { useDispatch } from '../../../src/redux/store'
// import { routes } from '../../../src/types/consts'

// jest.mock('../../../src/redux/store')
// jest.mock('react-router-dom')

// describe('Unit | Components | NavBar', () => {
//   beforeEach(() => {
//     const useDispatchMock = jest.fn()

//     const dispatchMock = (useDispatch as jest.Mock).mockImplementation(
//       useDispatchMock,
//     )
//   })
//   test('it renders', () => {
//     const screen = render(
//       <MemoryRouter>
//         <NavBar  />
//       </MemoryRouter>,
//     )

//     expect(screen.getByRole('link', { name: 'Main' }))
//     expect(screen.getByRole('link', { name: 'My posts' }))
//     expect(screen.getByRole('link', { name: 'Add a post' }))
//     expect(screen.getByRole('button', { name: 'Log Out' }))

//     test('it redirect to link href', async () => {
//       await userEvent.click(screen.getByRole('link', { name: 'Main' }))

//       expect(redirectMock).toHaveBeenCalledWith(routes.auth.homePage)
//     })
//   })
// })
