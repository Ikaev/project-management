const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  mode: 'development',

  entry: {
    client: './frontend/index.js',
  },

  output: {
    path: path.resolve( __dirname, 'dist' ),
  },

  resolve: {
    alias: {
      constant: path.resolve( __dirname, 'frontend/app/constant' ),
      ui: path.resolve( __dirname, 'frontend/app/ui' ),
      module: path.resolve( __dirname, 'frontend/app/component/module' ),
      page: path.resolve( __dirname, 'frontend/app/component/page' ),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', {
              'targets': {
                'node': 'current',
              },
            },
            ],
            ['@babel/preset-react'],
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: './frontend/index.html',
    } ),
  ],
};