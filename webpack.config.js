const path = require(path);

module.exports = {
  devtool: 'source-map',
  entry: './client',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'less-loader'
        ]
      }
    ]
  }

};
