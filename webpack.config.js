const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(css)/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  }
};
