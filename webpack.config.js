const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'public/assets/'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000
  },

  plugins: [
    new ExtractTextPlugin(
      {filename: 'app.css'}
    )
  ]
};

