const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',

    entry: {
        client: './frontend/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        alias: {
            error: path.resolve(__dirname, 'src/app/error'),
            constant: path.resolve(__dirname, 'src/constant'),
            api: path.resolve(__dirname, 'src/api'),
            ui: path.resolve(__dirname, 'src/app/ui'),
            layout: path.resolve(__dirname, 'src/app/layout'),
            page: path.resolve(__dirname, 'src/app/page'),
            module: path.resolve(__dirname, 'src/component/module'),
            core: path.resolve(__dirname, 'src/component/core'),
        }
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
                                'node': 'current'
                            }
                        }
                        ],
                        ['@babel/preset-react']
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./frontend/index.html"
        })
    ]
}