const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      'store': path.resolve(__dirname, 'src/store'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'theme': path.resolve(__dirname, 'src/theme'),
    },
  };
return config;
};
