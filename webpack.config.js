var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
// var htmlWebpackPlugin = require('html-webpack-plugin');
// var cleanWebpackPlugin = require('clean-webpack-plugin');
// var optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
    main: path.resolve(__dirname, 'main.js'),
    tweets: path.resolve(__dirname, 'tweetsEntryPoint.js')
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
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
		  	test: /\.js$/,
		  	loader: 'babel-loader',
		  	exclude: /node_modules/,
		  	options: {
		  		presets: ['react', ["es2015", {"modules": false}]]
		  	}
		  },
		  {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
		  },
		  {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
		  },
		  {
		  	test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
		  	loader:'url-loader?limit=100000'
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
	resolve: {
    extensions: ['.js', '.coffee', '.ts', '.scss', '.css'],
    alias: {
    	api$: path.resolve(__dirname, 'api.js'),
    	Api: path.resolve(__dirname, 'apis')
    }
	},
	devServer: {
	  contentBase: path.resolve(__dirname, 'build'),
		inline: true,
		port: 3000
	}

}