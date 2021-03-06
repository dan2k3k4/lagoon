const webpackShared = require('../src/webpack.shared-config');

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // 'PRODUCTION' is used when building the static version of storybook.

  // Add aliases from shared config file.
  Object.keys(webpackShared.alias).forEach(name => config.resolve.alias[name] = webpackShared.alias[name]);
  // Add alias for storybook decorators and components.
  config.resolve.alias.storybook = __dirname;

  config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
          {
              loader: require.resolve('ts-loader'),
          },
      ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // Debug config.
  //console.dir(config, { depth: null });

  return config;
};
