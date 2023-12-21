/* eslint-env node */

module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "plugin:@react-three/recommended"
    ],
    "plugins": [
      "react-refresh",
      "@typescript-eslint",
      "react",
      "react-hooks",
      "import",
      "jest",
      "prettier",
      "@react-three"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "settings": {
      "react": {
        "version": "detect"
      },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
      },
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
          "paths": ["src"]
        },
        "alias": {
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
          "map": [["@react-three/fiber", "./packages/fiber/src/web"]]
        }
      }
    },
    "overrides": [
      {
        "files": ["src"],
        "parserOptions": {
          "project": "./tsconfig.json"
        }
      }
    ],
    "rules": {
      "curly": ["warn", "multi-line", "consistent"],
      "no-console": "off",
      "no-empty-pattern": "warn",
      "no-duplicate-imports": "error",
      "import/no-unresolved": "off",
      "import/export": "error",
      "import/named": "off",
      "import/namespace": "off",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "jest/consistent-test-it": ["error", { "fn": "it", "withinDescribe": "it" }],
      "import/no-named-as-default-member": "off"
    }
  }
