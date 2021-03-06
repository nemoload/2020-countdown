const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const defaultConfig = new CopyWebpackPlugin({
    patterns: [
      { from: './app/assets/images', to: 'images' },
      { from: './app/assets/media', to: 'media' }
    ]
  });

  const plugin = {
    production: defaultConfig,
    development: defaultConfig
  };

  return plugin[env];
};
