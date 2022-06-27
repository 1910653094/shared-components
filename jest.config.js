module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./__setup__/jest.setup-env.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'reports/coverage',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir/>'],
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  }
}
