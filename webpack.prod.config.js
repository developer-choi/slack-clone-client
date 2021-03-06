const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  output: {
    publicPath: '/',
    filename: '[name][fullhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader'
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
    historyApiFallback: true
  }
};
