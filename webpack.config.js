var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        js : __dirname + '/public/build_entry.js'
    },
    output: {
        path: __dirname + '/build/assets/',
        publicPath: '../',
        filename: 'js/[name].js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.jpg|jpeg|png|bmp$/,
                loader: "file-loader?name=img/elements/[name].[ext]"
            },
            {
                test: /\.eot|svg|woff|woff2|ttf$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }

        ]
    },
    resolve: {
        alias: {
            jquery: __dirname + '/public/assets/js/lib/jquery-1.12.4'
        }
    },
    plugins: [
        new ExtractTextPlugin( "css/style.css"),
        new CopyWebpackPlugin([
            {from: __dirname + '/public/assets/img/albums', to: __dirname + '/build/assets/img/albums'},
            {from: __dirname + '/public/assets/img/biography', to: __dirname + '/build/assets/img/biography'},
            {from: __dirname + '/public/assets/img/gallery', to: __dirname + '/build/assets/img/gallery'},

            //
            // {from: __dirname + '/public/assets/js/jquery-1.11.1.min.js', to: __dirname + '/build/assets/js/jquery-1.11.1.min.js'},
            // {from: __dirname + '/public/assets/js/bootstrap.min.js', to: __dirname + '/build/assets/js/bootstrap.min.js'},
            // {from: __dirname + '/public/assets/js/masonry.min.js', to: __dirname + '/build/assets/js/masonry.min.js'},
            // {from: __dirname + '/public/assets/js/jquery.validate.min.js', to: __dirname + '/build/assets/js/jquery.validate.min.js'},
            // {from: __dirname + '/public/assets/js/smooth-scroll.js', to: __dirname + '/build/assets/js/smooth-scroll.js'},



            {from: __dirname + '/public/index.html', to: __dirname + '/build/index.html'}
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};