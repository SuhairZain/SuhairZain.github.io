const fs = require('fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const PROD = JSON.parse(process.env.PROD_ENV || '0');

const links = [
    'https://fonts.googleapis.com/css?family=Josefin+Slab:400|Roboto',
    `${PROD ? '' : '/'}css/styles.css`
];

const plugins = [
    new HtmlWebpackPlugin({
        filename: '../index.html',
        inlineSource: PROD ? '.(js|css)$' : '',
        links: links,
        minify: {
            collapseWhitespace: true
        },
        template: 'index-file-template.ejs',
        title: "Suhair Zain's personal page"
    })
];

const outputDir = 'dist';

if (PROD) {
    plugins.push(new HtmlWebpackInlineSourcePlugin());
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    );
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
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
        filename: `bundle${PROD ? '_' + new Date().getTime() : ''}.js`
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: plugins
};
