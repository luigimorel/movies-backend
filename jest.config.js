module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    setupFiles: ['dotenv/config'],
    collectCoverage: true,
    coverageReporters: ['text', 'html'],
    coverageDirectory: '<rootDir>/coverage/',
    transformIgnorePatterns: ['/node_modules/'],
};
