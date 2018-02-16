const path = require("path");
const appVersion = require('./package.json').version;

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
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `bundle.js`
	}
};
