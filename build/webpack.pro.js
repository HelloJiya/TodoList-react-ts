const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')


module.exports = merge(commonConfig, {
  mode: 'production',
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
})