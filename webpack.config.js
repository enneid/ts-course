// const path = require("path");

// module.exports = {
//   entry: "./app/assets/scripts/index.js",
//   output: {
//     path: path.resolve(__dirname, "app"),
//     filename: "bundle.js",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.scss$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   devServer: {
//     port: 3000,
//     static: {
//       directory: path.join(__dirname, "app"),
//     },
//   },
// };

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
  // HtmlWebpackPlugin = require("html-webpack-plugin");
  const path = require('path');
  const webpack = require('webpack')

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      p5: 'p5'
    })//,
   // new HtmlWebpackPlugin({ title: "Contact App" }),
  ],
  entry: ["./src/app.ts", "./src/styles.scss"],
  output: {
    path: path.resolve(__dirname, 'dist', 'app'),
    filename: '[name].bundle.js'
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.png/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};