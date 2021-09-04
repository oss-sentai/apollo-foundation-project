module.exports = {
  "roots": [
    "./src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "preset": "ts-jest",
  // "testEnvironment": "./prisma/prisma-test-environment.js"
  "setupFilesAfterEnv": [
    `${process.cwd()}/jest.setup.js`
  ]
}
