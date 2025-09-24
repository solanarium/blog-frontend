import { render as renderTest, waitFor } from '@testing-library/react'
import type { ComponentProps, FC, ReactNode } from 'react'
import { MemoryRouter, useLocation } from 'react-router-dom'

export type Screen = ReturnType<typeof renderTest> & {
  expectPathname: (pathname: string) => void
}

interface Options {
  routerProps: ComponentProps<typeof MemoryRouter>
  renderOptions: Parameters<typeof renderTest>[1]
}

// type NoMethods<T> = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: T[K]
// }

// eslint-disable-next-line react-refresh/only-export-components
const RouteInfo: FC = () => {
  const location = useLocation()

  return <div data-testid="location">{JSON.stringify(location)}</div>
}

export const render = (children: ReactNode, options?: Options): Screen => {
  const screen = renderTest(
    <MemoryRouter initialEntries={['/']} {...(options?.routerProps || {})}>
      <RouteInfo />
      {children}
    </MemoryRouter>,
    options?.renderOptions,
  )

  return {
    ...screen,
    expectPathname: async (pathname: string) => {
      await waitFor(() => {
        expect(
          JSON.parse(screen.getByTestId('location').textContent as string)
            .pathname,
        ).toBe(pathname)
      })
    },
  }
}
