const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
	context: resolve(__dirname, './src'),
	entry: { app: './app.js' },
	output: {
		path: resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: [/node_nodules/],
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [ 'es2015', 'react' ]
				}
			}]

		}]
	},
	plugins: [
		new webpack.ProvidePlugin({"React":"react"})
	],
	devServer: {
		contentBase: resolve(__dirname, './exemple')
	}
}
