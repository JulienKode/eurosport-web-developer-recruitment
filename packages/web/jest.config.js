module.exports = {
  testRegex: '(/__tests__/.*|\\.test)\\.(ts|tsx|js|jsx)$',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: ['/node_modules/'],
};
