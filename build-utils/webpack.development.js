module.exports = (mode) => ({
	mode,
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
	},
});
