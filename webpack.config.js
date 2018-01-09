const path = require('path');
const webpack = require("webpack");

var SRC_DIR = path.resolve(__dirname, 'src');
var OUTPUT_DIR = path.resolve(__dirname, 'dist');

const defaultInclude = [SRC_DIR]

module.exports = {
  entry: path.join(SRC_DIR, '/index.tsx'),
  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
   // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },

      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: defaultInclude
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ],
        include: defaultInclude
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    overlay: {
      errors: true,
      warnings: true,
    }
  }
};