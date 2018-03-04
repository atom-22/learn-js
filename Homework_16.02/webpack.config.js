const path = require("path");

module.exports = {
	entry: "./src/index.js",

	 module: {
	    rules: [
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
			    test: /\.scss$/,
			    use: "webpack-sass"
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

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `bundle.js`
	}
};
