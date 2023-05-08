const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'host',
            remotes: {
              app2: 'app2@http://localhost:8001/remoteEntry.js',
            },
            filename: 'static/chunks/remoteEntry.js',
          }),
      );
    }

    return config;
  },
};