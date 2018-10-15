const webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'env.FB': process.env.FB,
      'env.NEWS': process.env.NEWS,
      'env.DSN': JSON.stringify(process.env.DSN)
    })
  ]
};
