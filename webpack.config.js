var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		  {
      	test: /\.js$/,
      	loader: 'eslint-loader',
      	enforce: 'pre',
      	exclude: /node_modules/,
      	query: require(path.resolve(__dirname, 'eslint.config.js'))
      },
		  {
		  	test: /\.coffee$/,
		  	use:'coffee-loader',
		  	exclude: /node_modules/
		  },
		  {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
		  },
		  {
		  	test: /\.js$/,
		  	loader: 'babel-loader',
		  	exclude: /node_modules/,
		  	options: {
		  		presets: ['react', ["es2015", {"modules": false}]]
		  	}
		  },
		  {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
		  },
		  {
        test: /\.ts/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'ts')
		  },
		  {
		  	test: /\.ya?ml$/,
		  	use: ['json-loader', 'yaml-loader'],
		  	include: path.resolve(__dirname, 'config')
		  }
		]
	},
	devServer: {
	  contentBase: path.resolve(__dirname, 'build'),
		inline: true,
		port: 3000
	}

}