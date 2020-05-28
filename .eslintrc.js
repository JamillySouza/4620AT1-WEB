module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [
      'error',
      {
        ignore: ['children'],
      },
    ],
    'no-console': 'error',
  },
};
