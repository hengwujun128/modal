const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

//  "build:client": "cross-env NODE_ENV=production webpack --config ./build/webpack.client.config.js --progress --hide-modules",

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    // /dist 代表服务根目录下的dist目录
    publicPath: '/dist/',
    library: 'vue-js-modal',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // devtool: '#source-map',
  plugins: [
    // 定义开发环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // 代码压缩
    new UglifyJSPlugin({
      mangle: false,
      beautify: true
    })
  ]
}
