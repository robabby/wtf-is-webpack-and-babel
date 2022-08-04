module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    jest: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    }
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    eqeqeq: "error",
    "func-names": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-unsafe-optional-chaining": "off",
    "prefer-const": "error",
    "prettier/prettier": "error",
    "react/jsx-sort-props": "error",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: [
          "var",
          "let",
          "const",
          "switch",
          "class",
          "block-like",
          "block",
          "import",
          "export",
          "function",
          "iife"
        ],
        next: "*"
      },
      {
        blankLine: "any",
        prev: "export",
        next: "export"
      },
      {
        blankLine: "any",
        prev: ["var", "let", "const"],
        next: ["var", "let", "const"]
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["break", "return", "continue", "throw"]
      },
      {
        blankLine: "never",
        prev: "import",
        next: "import"
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
