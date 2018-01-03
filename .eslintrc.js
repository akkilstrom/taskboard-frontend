// https://eslint.org/docs/user-guide/configuring

// module.exports = {
//   root: true,

//   parserOptions: {
//     parser: 'babel-eslint',
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//   },
//   extends: [
//     'plugin:eslint-plugin/recommended',
//     'plugin:vue-libs/recommended',
//     // 'airbnb-base',
//   ],
//   // required to lint *.vue files
//   plugins: [
//     // 'html',
//     'eslint-plugin'
//   ],
//   // check if imports actually resolve
//   settings: {
//     'import/resolver': {
//       webpack: {
//         config: 'build/webpack.base.conf.js'
//       }
//     }
//   },
//   // add your custom rules here
//   rules: {
//     'eslint-plugin/report-message-format': ['error', '^[A-Z].*\\.$'],
//     'eslint-plugin/prefer-placeholders': 'error',
//     'eslint-plugin/consistent-output': 'error'
    
//     // don't require .vue extension when importing
//     // // RULES FOR AIRBNB
//     // 'import/extensions': ['error', 'always', {
//     //   js: 'never',
//     //   vue: 'never'
//     // }],
//     // "arrow-body-style": 'off',
//     // "no-confusing-arrow": ['error', {
//     //     "allowParens": true
//     // }],
//     // // allow optionalDependencies
//     // 'import/no-extraneous-dependencies': ['error', {
//     //   optionalDependencies: ['test/unit/index.js']
//     // }],
//     // // allow debugger during development
//     // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   }
// }

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
