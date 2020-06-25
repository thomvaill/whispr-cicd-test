module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "airbnb-base",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  root: true,
  env: {
    node: true
  },
  rules: {
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/no-explicit-any": "off",
    "no-useless-constructor": "off",
    // '@typescript-eslint/no-useless-constructor': 'error',
    // The following rules avoid Airbnb code style errors reported
    // with the code generated for a new Nest.js application
    // These rules only relates to code style for "import" statements
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*spec.ts"] }
    ],
    // 'import/prefer-default-export': 'off',
    "import/extensions": "off"
  }
};
