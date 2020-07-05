const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfills: 'babel-polyfill',
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            minify: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
