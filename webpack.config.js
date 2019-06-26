const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve (__dirname, 'dist')
    },

    module: {
        rules:[

            {test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {test: /\.css$/,
                use:[
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader'
                ]
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: './img/[name].[ext]',},
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },

                ],
            },

            ]
    },


    plugins: [
        new HtmlWebpackPlugin({
                template: './src/template.html'
            }),

        new MiniCssExtractPlugin({
                filename: '[name].css'
            }),

        new CleanWebpackPlugin(),

    ],

    devServer: {
        overlay: true
    },
};