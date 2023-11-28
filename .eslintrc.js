module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['./jestSetup.js'],
      env: {
        jest: true,
      },
    },
  ],
};
