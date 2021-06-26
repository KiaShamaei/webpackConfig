const webpack = require('webpack')



module.exports = {
	mode : "production",
	devtools : "source-map",
	Plugins : [
		new webpack.DefinePlugin({
			'process.env.name' : JSON.stringify('shamaeiii')
		})
	]
}