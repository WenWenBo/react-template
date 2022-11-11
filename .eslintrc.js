module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        /**
         * 处理eslint和prettier的冲突
         * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
         */
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    ignorePatterns: [
        "node_modules",
        "dist/*",
        "webpack/*",
        ".eslintrc.js",
    ],
};
