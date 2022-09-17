const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin =  require("copy-webpack-plugin");
  const path = require('path');
  const webpack = require('webpack')


module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      p5: 'p5'
    }),
    new CopyPlugin({
      patterns: [
        {from: "*.html", to: path.resolve(__dirname, 'dist'),  context: "src/"  }
      ],
     
    })
    //,
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
      // {
      //   test:  /\.(html)$/,
      //   loader: "file?name=[path][name].[ext]&context=./dist",
      // },
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