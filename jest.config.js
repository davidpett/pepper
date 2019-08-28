const { jestPaths } = require('./scripts/path-helper')

module.exports = {
  rootDir: '.',
  preset: './node_modules/@testing-library/react-native/jest-preset.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: jestPaths,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/app.tsx',
    '!src/__acceptance__/**',
    '!src/@types/**',
    '!src/**/*.data.tsx',
    '!src/**/index.ts',
    '!src/**/*.stories.tsx',
    '!src/**/*.styles.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!react-native)/'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  verbose: true,
}
