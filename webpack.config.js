module.exports = {
  mode: 'development',
  entry: './src/picedit.js',
  output: {
    path: __dirname,
    filename: 'picedit.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};