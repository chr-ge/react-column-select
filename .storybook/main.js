module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  typescript: {
    reactDocgen: 'none',
  },
}
