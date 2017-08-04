/* global process require module */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWPInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PROD = JSON.parse(process.env.PROD_ENV || '0');

const links = ['https://fonts.googleapis.com/css?family=Lato:400+100'];

const plugins = [
  new HtmlWebpackPlugin({
    filename: '../index.html',
    inlineSource: PROD ? '.(js|css)$' : '',
    links: links,
    minify: {
      collapseWhitespace: true,
    },
    template: 'index-file-template.ejs',
    title: 'Suhair Zain\'s personal page',
  }),
  new ExtractTextPlugin('dist/styles.css'),
];

if (PROD) {
  plugins.push(new HtmlWPInlineSourcePlugin());
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  );
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    })
  );
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: './dist',
    publicPath: `${PROD ? '' : '/'}dist/`,
    filename: `bundle${PROD ? '_' + new Date().getTime() : ''}.js`,
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  plugins: plugins,
};
