module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'unicorn', 'import'],
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:unicorn/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript'
    ],
    rules: {
      'prettier/prettier': 0,
      'require-atomic-updates': 0,
      quotes: [1, 'single', { allowTemplateLiterals: true }],
      semi: [1, 'always'],
      'no-undef': 0,
      // unicorn
      'unicorn/catch-error-name': 0,
      'unicorn/filename-case': 0,
      'unicorn/no-null': 0,
    },
  };