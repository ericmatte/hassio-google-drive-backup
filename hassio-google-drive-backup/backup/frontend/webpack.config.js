const path = require("path");
// const config = require("../../config.json");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const src = "./hassio-google-drive-backup/backup/frontend/src";

module.exports = {
  entry: {
    "index": `${src}/index.ts`,
    "server-index": `${src}/serverIndex.ts`,
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: `js/[name].js`, // config.version or .[chunkhash]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CopyPlugin({
      patterns: [{ from: `${src}/../static` }],
    }),
  ],
  mode: "production",
};
