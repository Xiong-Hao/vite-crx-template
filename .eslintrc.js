module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parse: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-console': 'warn',
    'no-undefined': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'vue/no-unused-vars': 'error'
  }
}