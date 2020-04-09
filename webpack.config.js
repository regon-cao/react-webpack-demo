const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port:3000,
        open:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,

                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins:["@babel/plugin-proposal-class-properties"],
                        presets: [
                            "react",
                            "@babel/preset-env"
                        ],
                    },
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule:false
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'react-webpack-demo',
            template: 'public/index.html'
        })
    ]
};