const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const loadConfig = ({ mode }) => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = (env = { mode: 'production' }) =>
	merge(
		{
			mode: env.mode,
			entry: './src/main.tsx',
			output: {
				publicPath: '/',
				path: path.resolve('dist'),
			},
			resolve: {
				extensions: ['.js', '.ts', '.tsx'],
			},
			module: {
				rules: [
					{
						test: /\.tsx?$/,
						use: 'ts-loader',
					},
				],
			},
			plugins: [
				new HtmlPlugin({
					template: 'src/index.html',
					inject: 'body',
					scriptLoading: 'blocking',
				}),
				new CopyPlugin({
					patterns: [
						{
							from: 'src/assets',
							to: 'assets',
						},
					],
				}),
			],
		},
		loadConfig(env)
	);
