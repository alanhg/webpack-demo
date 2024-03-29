const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require("webpack");
// const MyPlugin = require('./plugins/my-example-webpack-plugin');

module.exports = {
    entry: {
        polyfills: 'babel-polyfill',
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[contenthash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: path.resolve('loader/my-example-webpack-loade.js')
            //         },
            //     ],
            // },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            minify: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/xhr-content.js'}
            ],
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(require('./src/conf.json')),
        })
        // new MyPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

};
