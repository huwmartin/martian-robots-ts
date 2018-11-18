module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/?(*.)+(spec|test).ts?(x)'
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.interfaces.{ts,tsx}",
    "!**/*.d.{ts,tsx}"
  ],
	testEnvironment: 'node'
};