const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  target: 'web',
  entry: './src/app.js',
  output: {
    path: './build/',
    filename: 'build.js'
  }, 

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }), 
    // new ExtractTextPlugin('styles.scss')
  ],

  module: {
    preLoaders: [{
      test: /\.js$/, // all files ending in .js
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude:/node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        cacheDirectory: true,
        // plugins: ['transform-runtime']
      } 

    }, 
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
    }, 
    {
      test: /\.html/,
      loader: 'html-loader'
    }
    ]
  },
  sassLoader: {
    includePaths: ['./src/scss/partials']
  }
};