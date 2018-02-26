const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean-plugin');

module.exports = {
    entry: "./src/index.js",

    module: {
        rules : [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use : "babel-loader"
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                "image-webpack-loader",  
                {
                  loader: 'url-loader',
                  options: {
                      limit: 4000
                  }
                }
              ]
            } 
        ]
    },

    devServer : {
      contentBase : path.join(__dirname, "build"),
      stats: "errors-only",
      open : true,
      port : 3029
    },

    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index_template.html',
            title: "Webpack devServer Demo",
            hash: true,
            inject: true,
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true
            }

          }),
        new ExtractTextPlugin("style.css"),
        new UglifyJsPlugin({
          test: /\.js($|\?)/i
        }),
        new WebpackCleanPlugin(['build'])
    ],

	output: {
		path: path.resolve(__dirname, "build"),
        filename: `bundle.[hash].js`,
        publicPath: "/"
	}
};