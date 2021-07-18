const path = require('path')

module.exports = {
  entry: './src/main.js',
  output:{
    filename: 'index.bundle.js',
    path: path.resolve(__dirname,'../dist'),
    clean: true
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: /src/
      }
    ]
  },
  
}