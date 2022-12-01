const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    // entry point for files
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    // output for bundles
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },
    plugins: [
      // generates html file and injects bundles
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Editor'
      }),
      // injects custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),
      // creates manifest.json file
      new WebpackPwaManifest({
        name: 'PWA Text Editor',
        short_name: 'TextEditor',
        description: 'Text Editor: Progressive Web App',
        background_color: '#ffffff',
        crossorigin: 'use-credentials',
        start_url: './',
        publicPath: './',
        fingerprints: false, 
        inject: true,
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: "96",
          },
          {
            src: path.resolve('favicon.ico'),
            sizes: "16x16",
          }
        ]
      }),
    ],

    module: {
      // loaders (css and babel)
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            }
          }
        },
      ],
    },
  };
};
