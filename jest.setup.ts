import '@testing-library/jest-dom'

import { TextDecoder, TextEncoder } from 'node:util'

if (!globalThis.TextEncoder) {
  // eslint-disable-next-line
  // @ts-ignore
  globalThis.TextEncoder = TextEncoder
}

if (!globalThis.TextDecoder) {
  // eslint-disable-next-line
  // @ts-ignore
  globalThis.TextDecoder = TextDecoder
}
