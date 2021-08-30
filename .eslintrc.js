module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    'no-undef': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/no-v-html': 'off'
  },
}
