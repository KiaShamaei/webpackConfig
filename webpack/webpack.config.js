const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    
	 entry: path.resolve(__dirname, '..', './src/index.tsx'),
	 experiments: {
		  asset: true
	},
	
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
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
                test: /\.(jpg|jpeg|png|gif|mp3|svg|woff(2)?|ttf|eot|)$/,
                use: ["file-loader"],
            },
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			// {
			// 	test : /\.(?:ico|gif|png|jpg|jpeg)$/i,
			// 	type:'assets/resource'
			// }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src", "index.html"),
        }),
    ],
};