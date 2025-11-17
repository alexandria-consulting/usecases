module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  env: {
    node: true,
  },
  rules: {},
};
