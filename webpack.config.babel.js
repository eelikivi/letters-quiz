import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default () => ({
	entry: './src/index.jsx',
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			Scss: path.resolve(__dirname, 'src/scss/'),
			Utility: path.resolve(__dirname, 'src/js/utility/'),
			Components: path.resolve(__dirname, 'src/components/'),
		},
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
			{
				test: /.scss/,
				enforce: 'pre',
				loader: 'import-glob-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
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
	devServer: {},
});
