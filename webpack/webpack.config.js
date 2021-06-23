const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:path.resolve(__dirname,"..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {loader:"babel-loader"}
                ],
            },
            // {
                
            //     test: /\.(ts|tsx)$/,
            //     exclude: /node_modules/,
            //     use: ["ts-loader"],
            // },
            // {
            //     test: /\.(css|scss)$/,
            //     use: ["style-loader", "css-loader"],
            // },
            // {
            //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            //     use: ["file-loader"],
            // },
        ],
    },
    output: { 
        path: path.join(__dirname,"..", "build"), 
        filename: "bundle.js",
     },
    mode: process.env.NODE_ENV || "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "..", "./src/index.html"),
        }),
    ],
};