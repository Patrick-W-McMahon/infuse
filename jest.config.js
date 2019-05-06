const { defaults } = require('jest-config');
module.exports = {
    displayName: {
        name: 'Infuse',
        color: 'blue'
    },
    verbose: true,
    setupFilesAfterEnv: ["./tests.setup.js"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/jest.config.js",
        "!**/webpack.config.js",
        "!**/coverage/**"
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    }
};