import main from './routes/main';

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

app.get('*', main);

app.listen(config.port, (err) => {
  if (err) debug(error);
  debug(`Server running on 'http://localhost:${config.port}/`);
});
