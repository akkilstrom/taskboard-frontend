module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:eslint-plugin/recommended',
    'plugin:vue/essential'
  ],
  rules: {
    'eslint-plugin/report-message-format': ['error', '^[A-Z].*\\.$'],
    'eslint-plugin/prefer-placeholders': 'error',
    'eslint-plugin/consistent-output': 'error'
  },
  plugins: [
    'eslint-plugin'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
}
