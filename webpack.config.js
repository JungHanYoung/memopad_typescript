const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.json' ]
	},

	entry: {
		main: './src/index.tsx'
	},

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		sourceMapFilename: '[name].[chunkhash].map'
	},

	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /.(ts|tsx)$/,
				use: 'awesome-typescript-loader',
				exclude: '/node_modules'
			},
			{
				test: /.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /.css$/,
				use: 'style!css-loader'
			},
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
		]
	}
};

module.exports = config;
