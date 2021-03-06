const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const express = require('express');
const app = express();



const compilerInstance = webpack(webpackConfig);


const compilerCallback = (error, stats) => {
  if (error) {
    console.error(error.stack || error);
    if (error.details) {
      console.error(error.details);
    }
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
};


if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compilerInstance, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
  }));
  app.use(webpackHotMiddleware(compilerInstance));
} else {
  compilerInstance.run(compilerCallback);
  app.use('/', express.static(path.resolve(__dirname, '../dist')));
}



module.exports = app;
