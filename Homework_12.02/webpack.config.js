const path = require("path");
const appVersion = require('./package.json').version;

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `bundle.[hash].${appVersion}.js`
	}
};
