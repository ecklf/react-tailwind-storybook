module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-notes/register",
    "storybook-dark-mode/register",
  ],
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
          require.resolve("react-docgen-typescript-loader"),
        ],
      },
    ]),
      config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
