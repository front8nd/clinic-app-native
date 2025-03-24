module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-native", "prettier", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      "babel-module": {},
    },
  },
  rules: {
    // ✅ General Best Practices
    "no-console": "warn",
    "no-alert": "warn",
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "prefer-const": "error",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-restricted-exports": "off",

    // ✅ React Rules
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
    "react/no-array-index-key": "warn",
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],

    // ✅ React Native Rules
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",

    // ✅ TypeScript Rules (if using TS)
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",

    // ✅ Import Rules
    "import/no-unresolved": "off", // Disable unresolved import warnings (handled by Babel)
    "import/prefer-default-export": "off",

    // ✅ Prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
