const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  target: "web",
  mode: isDevelopment ? "development" : "production",
  entry: "./src/app.mount.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
  },
  devServer: {
    hot: true,
    setupExitSignals: true,
    watchFiles: {
      paths: ["src/*"],
      options: {
        ignored: /node_modules/
        // aggregateTimeout: 5000,
        // poll: 2000
      }
    },
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 9000,
    devMiddleware: {
      index: true,
      // mimeTypes: { phtml: "text/html" },
      // publicPath: "/public",
      serverSideRender: true,
      writeToDisk: true
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      watch: true
    }),
    new HtmlWebpackPlugin({
      title: "wtf is Babel & Webpack!?",
      favicon: "./public/favicon.ico",
      template: "src/index.ejs"
    })
  ]
};
