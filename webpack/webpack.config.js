const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
exports.module = (envVars) =>{
	const {env} = envVars ;
	const envConfig = require(`./webpack.${env}.js`)
	const config = merge (commonConfig , envConfig)
	return config
} 