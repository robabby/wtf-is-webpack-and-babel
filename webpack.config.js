const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  target: "web",
  context: path.resolve(__dirname, "src"),
  entry: "./app.mount.jsx",
  output: {
    publicPath: path.resolve(__dirname, "public"),
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].js",
    chunkFilename: "[id]-[chunkhash].js"
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
  },
  devServer: {
    compress: true,
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
    port: 9000,
    devMiddleware: {
      // index: true,
      // mimeTypes: { phtml: "text/html" },
      // publicPath: "/public",
      // serverSideRender: true,
      writeToDisk: true
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      watch: true
    }),
    new WebpackAssetsManifest({
      writeToDisk: true,
      output: path.resolve(__dirname, "dist/manifest.json"),
      publicPath: "../public"
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      // filename: "index.html",
      title: "wtf is Babel & Webpack!?",
      template: "./index.ejs"
    })
  ]
};
