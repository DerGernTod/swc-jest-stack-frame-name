/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    silent: false,
    roots: [
        "<rootDir>/src"
    ],
    preset: "ts-jest",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
        // "^.+\\.(t|j)s$": ["@swc/jest", {
        //     sourceMaps: false,
        //     module: {
        //         strict: false,
        //         strictMode: false
        //     },
        //
        //     jsc: {
        //         target: "es5",
        //         parser: {
        //             syntax: "typescript",
        //             dynamicImport: true
        //         },
        //     }
        // }]
    },
    transformIgnorePatterns: [
        "node_modules"
    ],
    testMatch: [
        "**/*/*.spec.ts"
    ],
    moduleFileExtensions: ["ts", "js", "node", "json"],
    reporters: [
        "default",
    ],
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.json",
            diagnostics: false,
            isolatedModules: true,
        },
        self: {},
        navigator: {},
        __UNIT__: true
    },
    resetMocks: true,
    restoreMocks: true,
    resetModules: true,
    testEnvironmentOptions: {
        url: "http://localhost:3000/context.html" // NOSONAR
    }
};
module.exports = config;
