module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>/tests/enzyme.config.js'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
