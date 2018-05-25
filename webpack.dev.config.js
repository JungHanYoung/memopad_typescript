var webpack = require('webpack');

const config = {
	mode: 'development',
	entry: [ './src/index.tsx', 'webpack-dev-server/client?http://0.0.0.0:4000', 'webpack/hot/only-dev-server' ],
	output: {
		path: '/',
		filename: 'bundle.js'
	},

	devtool: 'inline-source-map',

	// 개발서버 설정
	devServer: {
		hot: true,
		filename: 'bundle.js',
		publicPath: '/',
		historyApiFallback: true,
		contentBase: './public',
		/* 모든 요청을 프록시로 돌려서 express의 응답을 받아오며,
        bundle 파일의 경우엔 우선권을 가져서 devserver 의 스크립트를 사용하게 됩니다 */
		proxy: {
			'**': 'http://localhost:3000' // express 서버주소
		},
		stats: {
			// 콘솔 로그를 최소화 합니다
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(false)
	],

	module: {
		rules: [
			{
				test: /.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: '/node_modules'
			}
		]
	},

	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	}
};

module.exports = config;
