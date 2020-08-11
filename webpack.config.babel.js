import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default () => ({
	entry: './src/index.jsx',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Helpers: path.resolve(__dirname, 'src/js/helpers/')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	devServer: {
	}
});
