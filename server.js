var path = require('path');
var webpackConfig = require('./webpack.config');
var devConfig = webpackConfig.devServer;
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var proxyMiddleware = require('http-proxy-middleware');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

// Set up the proxy.
if(devConfig.proxy) {
    Object.keys(devConfig.proxy).forEach(function(context) {
        app.use(proxyMiddleware(context, devConfig.proxy[context]));
    });
}

/*app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});*/

app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:3000/');
});
