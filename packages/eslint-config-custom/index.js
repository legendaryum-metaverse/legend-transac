module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "turbo",
    "prettier"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "packages/tsconfig/tsconfig.base.json"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "endOfLine": "auto"
      }
    ],
//    "no-console": ["error", { "allow": ["error"] }],
    "no-debugger": "error",
    "no-alert": "error",
    "no-undef": "off",
    "no-use-before-define": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "prefer-arrow-callback": "error",
    "prefer-spread": "error",
    "prefer-rest-params": "error",
    "@typescript-eslint/no-misused-promises": "off",
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
    //    "@typescript-eslint/no-unsafe-assignment": "off",
    //    "@typescript-eslint/no-unsafe-member-access": "off",
    //    "@typescript-eslint/no-unsafe-call": "off"
  }
};
