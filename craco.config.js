const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: 3002,
    hot: true,
    historyApiFallback: {
      index: '/clients/index.html',
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'auto'
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'clients',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App',
          },
          remotes: {
            container: isProduction
              ? 'container@https://kahunas.netlify.app/remoteEntry.js'
              : 'container@http://localhost:3000/remoteEntry.js',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
            '@reduxjs/toolkit': { singleton: true },
            'react-redux': { singleton: true },
            'react-i18next': { singleton: true },
            'i18next': { singleton: true },
          },
        })
      )
      return webpackConfig
    },
  },
}
