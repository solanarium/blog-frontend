import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!**/vendor/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.tests.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage',
    '/.vercel',
    '/dist',
    'package.json',
    'pnpm-lock.yaml',
    'jest.setup.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
