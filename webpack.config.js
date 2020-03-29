const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  mode: 'development',
  devtool: "source-map",
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
      core: path.resolve(__dirname, 'frontend/app/component/core'),
      layout: path.resolve(__dirname, 'frontend/app/component/layout'),
      api: path.resolve(__dirname, 'frontend/app/api'),
      hoc: path.resolve(__dirname, 'frontend/app/component/hoc'),
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
  }
};