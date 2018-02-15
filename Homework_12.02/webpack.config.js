const path = require("path");
const packageData = require('./package.json');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `bundle.[hash].${packageData.version}.js`
	}
};
