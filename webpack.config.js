const webpack = require('webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const {join} = require('path');


module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'env.FB': process.env.FB,
      'env.NEWS': process.env.NEWS,
      'env.DSN': JSON.stringify(process.env.DSN)
    }),
    new PrerenderSPAPlugin({
      staticDir: join(__dirname, 'dist/frontend-notes'),
      routes: ['/'],
    })
  ]
};
