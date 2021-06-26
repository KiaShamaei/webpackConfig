const webpack = require('webpack')



module.exports = {
	mode : "development",
	devtools : "cheap-module-source-map",
	Plugins : [
		new webpack.DefinePlugin({
			'process.env.name' : JSON.stringify('kiarash')
		})
	]
}