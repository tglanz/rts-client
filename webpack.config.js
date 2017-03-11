const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

module.exports = {
    context: srcPath,
    entry: {
        index: path.join(srcPath, 'index.js')
    },

    output: {
        filename: '[name].js',
        path: distPath,
    },

    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(srcPath, 'index.html')
        }])
    ]
};