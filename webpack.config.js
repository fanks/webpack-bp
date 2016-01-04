/*eslint-env node */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch:true,
  devtool: 'eval-source-map',
  debug:true,
  entry: {
	   app: './client/index.js',
	   vendors: ['react', 'react-dom', 'bootstrap-sass', 'react-router']
  },
  output: {
  	path: path.resolve(__dirname, './build'),
  	filename: '[name].js'
  },
  resolve: {
  	root: [path.resolve(__dirname, './client')],
	   modulesDirectories: ['node_modules', './lib'],
	   //require without extension
	   extensions: ['', '.js']
  },
  module: {
	loaders: [
	  {
	  	test: /\.js$/,
	  	loader: 'babel', 
	  	exclude: [/node_modules/, /js\/lib/],
	  	query: {
			presets: ['react', 'es2015']
  	    } 
  	  },
  	  { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" +
        (path.resolve(__dirname, "./node_modules"))},

      { test: /\.css$/, loader: "style!css" },
  	  // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
  	  // loads bootstrap's css.
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
	]
  },
  plugins: [
    new webpack.ProvidePlugin({
	  	$: "jquery",
	  	jQuery: "jquery"
    }),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
	  'process.env': {
		'NODE_ENV': JSON.stringify('development')
	  }
	}),
	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};