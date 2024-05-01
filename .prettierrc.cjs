module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  useTabs: false,
  overrides: [
    {
      files: ".prettierrc",
      options: { parser: "json" },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
