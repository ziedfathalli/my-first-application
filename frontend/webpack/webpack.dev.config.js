// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'yo-mess-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                math: 'always',
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Répertoire pour les fichiers statiques
    },
    port: 9001,
    historyApiFallback: true,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend Spring Boot
        changeOrigin: true, // Permet de changer l'origine de la requête (utile pour CORS)pathRewrite: { '^/aa': '', }, // Supprime '/api' dans l'URL avant de la rediriger
      },
    },
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.css',
      '.less',
    ],
    fallback: {
      util: false,
      buffer: false,
      stream: false,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
