var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.ts');
var helpers = require('./helpers');
var ENV = process.env.NODE_ENV = process.env.ENV = 'dev';
module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
//# sourceMappingURL=webpack.dev.js.map