const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    entry:'./src/mi.js',
    output: {
        filename: 'built.js',
        clean: true,
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
             /*           {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, */
            {
                // 问题：默认处理不了html中img图片
                // 处理图片资源
                test: /\.(jpg|png|gif|jpeg|webp|jfif|ico)$/,
                // 使用一个loader
                // 下载 url-loader file-loader
                type: 'asset/resource',
                //生成指定文件名 高于output 优先使用generator配置
                generator: {
                    filename: 'images/[hash:10][ext]'
                }
            },

            //转为base64
                  {
                    test: /\.ico$/,
                    //通用资源类型 在resource和inline类型两者进行自动选择
                    //选择依据资源大小 默认资源大小8kb
                    type: 'asset',
                    //改变默认资源大小
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4 * 1024 * 1024
                        }
                    }
                },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader'
            },
            {
                //js转化 babel-loader @babel/core @babel/core @babel/preset-env 包
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-runtime']]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './mi.html',
            filename:'html/mi.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],
    mode: 'development',

    devServer: {
        static: resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: '/'
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()]
    }
};