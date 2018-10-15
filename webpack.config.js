const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FIREBASE': process.env.FIREBASE,
      'process.env.NEWS': process.env.NEWS,
      'process.env.DSN': JSON.stringify(process.env.DSN)
    })
  ]
};
