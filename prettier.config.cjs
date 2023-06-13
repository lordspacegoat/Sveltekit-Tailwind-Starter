module.exports = {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  tailwindConfig: './tailwind.config.js',
  printWidth: 100,
  plugins: [require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: ['.'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
