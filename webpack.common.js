'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['./webpack/js/app.js'],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'web' , 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", "less-loader"
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css',
            cssProcessorOptions: {
                safe: true,
                discardComments: {
                    removeAll: true,
                },
            },
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxSize: 500000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                }
            }
        }
    }
};
