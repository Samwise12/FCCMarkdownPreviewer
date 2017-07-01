var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	context: path.join(__dirname,'./views/'), 
	entry:[
	path.join(__dirname,'views/index.js')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'views/index.html'),
			hash:true
		}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	module:{
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'views'),
			query: {
				presets: ['latest','react']
			}
			}],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		stats: 'errors-only'
	}
};