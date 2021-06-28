const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env = { mode: 'production' }) => ({
	mode: env.mode,
	entry: './server/index.tsx',
	output: {
		path: path.resolve('dist-server'),
		filename: 'index.js',
	},
	target: 'node',
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: 'tsconfig.server.json',
					},
				},
			},
		],
	},
});
