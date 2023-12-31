/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageProvider: 'v8',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  reporters: [['github-actions', {silent: false}], 'summary'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },
};
