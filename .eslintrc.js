module.exports = {
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
      },
    ],
  },
};
