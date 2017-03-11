const path = require('path');

const srcPath = path.join(__dirname, 'src');
const entryFilePath = path.join(srcPath, 'index.js');

const distPath = path.join(__dirname, 'dist');
const bundleFileName = "bundle.js";

module.exports = {
    context: srcPath,
    entry: ['babel-polyfill', entryFilePath],

    output: {
        filename: bundleFileName,
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
    }
};