const express = require('express');
const debug = require('debug')('app:server');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.js');
const config = require('./config/index.js');

const app = express();

app.use(express.json());

if (config.dev) {
  debug('Loading on development mode.');

  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${config.port}`,
    port: config.port,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Platzi Video | Watch videos and movies anytime.</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="assets/app.js" type="text/javascript"></script>
    <script src="assets/vendor.js" type="text/javascript"></script>
  </body>
  </html>
  `);
});

app.listen(config.port, (err) => {
  if (err) debug(error);
  debug(`Server running on 'http://localhost:${config.port}/`);
});
