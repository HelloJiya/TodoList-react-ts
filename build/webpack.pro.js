const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
  mode:'production',
  entry:'./src/main.js',
  output:{
    filename:'index.bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/i,
        use:'babel-loader',
        exclude: /(node_modules)/
        // include:['src']
        // exclude:['node_modules']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}