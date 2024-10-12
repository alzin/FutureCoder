import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    testEnvironment: "node",
    preset: "ts-jest",
    extensionsToTreatAsEsm: ['.ts'],
};

export default config;