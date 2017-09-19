const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /bootstrap\.css$/, // only files with .global will go through this loader. e.g. app.global.css 
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap&importLoaders=1',
                ],
            },
            {
                test: /^((?!bootstrap).)*\.css/,
                loaders: ExtractTextPlugin.extract('css-loader'),
            },

        ],
    },
    plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('styles.css')],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
