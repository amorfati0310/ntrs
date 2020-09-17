// .eslintrc.js
// TODO FIX eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',

    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off',
    semi: ['error', 'always'],
    'no-console': 1,
    'react/react-in-jsx-scope': 0,
  },
};
