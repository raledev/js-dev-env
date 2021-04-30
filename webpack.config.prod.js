import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    vendor: path.resolve(__dirname, "src/vendor.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      trackJSToken: "TOKEN",
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCSSExtractPlugin.loader, "css-loader"] },
    ],
  },
};
