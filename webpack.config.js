
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env,arg) => {
    console.log(arg);
    return {
        entry:{
            index:'./src/index.js',
        },
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'static/js/[name].bundle.js',
            publicPath:'/'
        },
        devServer: {
            port: 8086,
            host:'localhost',   
            open:false, 
        },
        module:{
            rules:[
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    use:{
                        loader:'babel-loader'
                    }
                },{
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                },{
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },{
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }]
                },{
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                    }
                },{
                    test:/\.(png|jpg|gif)/ ,
                    use:[{
                        loader:'url-loader',
                        options:{
                            limit:5,
                            outputPath:'static/images/',
                        }
                    }]
                }
            ]
        },
        plugins:[
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            new CleanWebpackPlugin(['dist']),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: "static/css/[name].css",
                chunkFilename: "[id].css"
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
    }
}
