const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // 指定打包环境
  mode: "production",

  devtool: "source-map",

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
};