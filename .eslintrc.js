module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off'
  }
}
