var path = require('path');
var webpack = require('webpack');
var vendors = require('./package.json').dependencies;

module.exports = {
    devtool: 'eval',
    entry: {
        app: [
            './src/index'
        ],
        vendor: ['react-hot-loader/patch', 'webpack-hot-middleware/client', ...Object.keys(vendors)]
    },
    externals: {
        "jquery": "$"
    },
    output: {
         path:'./static',
        filename: 'bundle.js',

    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
         inline: true,
      port: 8080
    }
};
