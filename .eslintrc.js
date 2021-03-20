module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "ecmaVersion": 2018,
      "jsx": true,
    },
  }
}
