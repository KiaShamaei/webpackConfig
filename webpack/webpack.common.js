const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    
	 entry: path.resolve(__dirname, '..', './src/index.tsx'),
	 experiments: {
		  asset: true
	},
	
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    // mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
<<<<<<< HEAD
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
=======
                test: /\.(jpg|jpeg|png|gif|mp3|svg|woff(2)?|ttf|eot|)$/,
>>>>>>> 053506eafeea4dc03a4c3ae345107981605db1ac
                use: ["file-loader"],
            },
			{
				test: /\.html$/,
				loader: 'html-loader'
<<<<<<< HEAD
			  }
=======
			},
			// {
			// 	test : /\.(?:ico|gif|png|jpg|jpeg)$/i,
			// 	type:'assets/resource'
			// }
>>>>>>> 053506eafeea4dc03a4c3ae345107981605db1ac
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src", "index.html"),
        }),
    ],
};