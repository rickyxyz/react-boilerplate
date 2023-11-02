module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  useTabs: false,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
