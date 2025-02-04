var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(env) {
	return {
		entry: {
	    main: path.resolve(__dirname, '..', 'app', 'entryPoints', 'main'),
	    tweets: path.resolve(__dirname, '..', 'app', 'entryPoints', 'tweets'),
	    vendor:['jquery', 'bootstrap', 'react', 'react-dom', 'angular']
		},
		output: {
			path: path.join(__dirname, '..', 'build-prod'),
			filename: '[name].[chunkhash].bundle.js'
		},
		module: {
			rules: [
			  {
	      	test: /\.js$/,
	      	loader: 'eslint-loader',
	      	enforce: 'pre',
	      	exclude: /node_modules/,
	      	options: require(path.resolve(__dirname, 'eslint.config.js'))
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
	        loader: ExtractTextPlugin.extract({
	        	fallback: "style-loader",
	        	use: "css-loader?sourceMap!sass-loader?sourceMap"
	        })
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
	        include: path.resolve(__dirname, '..', 'app', 'ts')
			  },
			  {
			  	test: /\.ya?ml$/,
			  	use: ['json-loader', 'yaml-loader'],
			  	include: path.resolve(__dirname, '..', 'app', 'config')
			  },
			  {
			  	test: /\.json$/,
			  	loader: 'json-loader'
			  }
			]
		},
		resolve: {
	    extensions: ['.js', '.coffee', '.ts', '.scss', '.css', '.json'],
	    alias: {
	    	api$: path.resolve(__dirname, '..', 'app', 'api.js'),
	    	Api: path.resolve(__dirname, '..', 'app', 'apis'),
	    	welcomeUser$: path.resolve(__dirname, '..', 'app', 'welcomeUser.coffee'),
	    	typescript: path.resolve(__dirname, '..', 'app','ts'),
	    	reactApp$: path.resolve(__dirname, '..', 'app', 'react'),
	    	appConfig$: path.resolve(__dirname, '..', 'app', 'config', 'appConfig.yaml')
	    }
		},
		plugins: [
		  new ExtractTextPlugin('[name].[chunkhash].css'),
		  new webpack.optimize.CommonsChunkPlugin({
		  	name: 'vendor',
		  	filename: 'vendor.[chunkhash].bundle.js',
		  	chunks: ['vendor']
		  }),
		  new webpack.ProvidePlugin({
		  	$: 'jquery',
		  	jQuery: 'jquery'
		  }),
		  new htmlWebpackPlugin({
		  	template: path.resolve(__dirname, '..', 'app', 'entryPoints', 'main', 'index.html'),
		  	hash: true,
		  	chunks: ['vendor', 'main'],
		  	minify: {
		  		collapseWhitespace: true
		  	}
		  }),
		  new htmlWebpackPlugin({
		  	template: path.resolve(__dirname, '..', 'app', 'entryPoints', 'tweets', 'tweets.html'),
		  	hash: true,
		  	chunks: ['vendor', 'tweets'],
		  	filename: 'tweets.html',
		  	minify: {
		  		collapseWhitespace: true
		  	}
		  }),
		  new cleanWebpackPlugin(['build-prod'], {
		  	root: path.resolve(__dirname, '..'),
		  	verbose: true
		  }),
		  new optimizeCssAssetsWebpackPlugin(),
		  new webpack.optimize.UglifyJsPlugin({
		  	output: {
		  		comments: false
		  	},
		  	mangle: false,
		  	sourceMap: true
		  }),
		  new webpack.DefinePlugin({
		  	'process.env.NODE_ENV': JSON.stringify(env),
		  	'env': JSON.stringify(env)
		  })
		],
		devServer: {
		  contentBase: path.resolve(__dirname, '..', 'build-prod'),
			inline: true,
			port: 3000
		},
    devtool: 'source-map'
	}
}