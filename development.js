import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

export default {
  mode: "development",
  entry: src + "/index.js",

  output: {
    path: dist,
    filename: "bundle.js",
  },

  devtool: "inline-cheap-source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss/,
        use: [
          // linkタグに出力する機能
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // url()メソッドの取り込みを許可
              url: true,

              // css-loader,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              // ソースマップを使うかどうか
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + "/index.html",
      filename: "index.html",
    }),
  ],
};
