const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = (mode) => ({
	mode,
	output: {
		filename: '[contenthash].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin(), new CleanPlugin()],
});
