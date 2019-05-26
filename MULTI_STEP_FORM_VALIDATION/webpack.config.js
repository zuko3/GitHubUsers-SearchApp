var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.jsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
              exclude: /node_modules/,
               query: {
                 presets: ['es2015','react']
               }
            }
        ]
    },
    resolve: {
    extensions: ['.js', '.jsx'],
  }
};

module.exports = config;