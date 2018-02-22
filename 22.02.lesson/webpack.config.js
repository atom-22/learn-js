const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

    plugins : [
        new HtmlWebpackPlugin({
            title: 'Atom App'
          }),
        new ExtractTextPlugin("styles.css"),
    ],

	output: {
		path: path.resolve(__dirname, "dist"),
        filename: `bundle.[hash].js`,
        publicPath: "/"
	}
};
