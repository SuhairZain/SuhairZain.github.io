module.exports = {
  extends: [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
    'plugin:import/errors'
  ],
  env: { browser: true },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-invalid-this': 0,
    'require-jsdoc': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': 0
  },
  globals: {
    require: true
  }
};
