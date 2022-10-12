const { resolve } = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { SRC_PATH, DIST_PATH, PUBLIC_PATH } = require("./path");

const devConfig = require("./webpack.config.dev");
const prodConfig = require("./webpack.config.prod");

const isProd = process.env.NODE_ENV === "prod";

const baseConfig = {
  target: "web",
  // 入口文件
  entry: {
    main: resolve(SRC_PATH, "index.tsx"),
  },
  // 输出
  output: {
    // 文件名称
    filename: "[name].[contenthash:8].js",
    // 输出目录
    path: DIST_PATH,
    // 每次编译输出的时候，清空dist目录 - 这里就不需要clean-webpack-plugin了
    clean: true,
    // 所有URL访问的前缀路径
    publicPath: "/",
  },

  module: {
    rules: [
      {
        // 匹配js/jsx
        test: /\.tsx?$/,
        // 排除 node_modules
        exclude: /node_modules/,
        use: {
          // 确定使用的loader
          loader: 'babel-loader',
          // 参数配置
          options: {
            presets: [
              [
                // 预设polyfill
                "@babel/preset-env",
                {
                  // polyfill 只加载使用的部分
                  useBuiltIns: "usage",
                  // 使用corejs解析，模块化
                  corejs: "3",
                },
              ],
              [
                // 解析react
                "@babel/preset-react",
                {
                  runtime: "automatic"
                }
              ],
              "@babel/preset-typescript"
            ],
            // 使用transform-runtime，避免全局污染，注入helper
            plugins: ["@babel/plugin-transform-runtime"],
          }
        }
      },
      /**
       * 在webpack的loader中，加载顺序是从右向左依次处理，css/less文件的处理顺序是:
       * postcss-loader -> less-loader -> css-loader -> (style-loader | MiniCssExtractPlugin.loader)
       */
       {
        test: /\.(css|less)$/,
        use: [
          // 生产环境下直接分离打包css
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
          },
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // 浏览器前缀自动补全
                plugins: ["autoprefixer"],
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    // 定义了扩展名之后，在import文件时就可以不用写后缀名了，会按循序依次查找
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".less"],
    // 设置链接
    alias: {
      // 注意resolve方法开始的查找的路径是/
      "@": SRC_PATH,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
        // HTML模板
        template: resolve(PUBLIC_PATH, "index.html"),
        favicon: resolve(PUBLIC_PATH, "logo.ico"),
        title: 'react-template'
    }),
    new MiniCssExtractPlugin({
      // 输出的每个css文件名称
      filename: isProd ? "[name].[contenthash:8].css" : "[name].css",
      // 非入口的chunk文件名 - 通过import()加载异步组件中样式
      chunkFilename: isProd ? "[id].[contenthash:8].css" : "[id].css",
    }),
  ]
};


// merge，合并两个或多个webpack配置文件
module.exports = (env, argv) => {
  if (isProd) {
    return merge(baseConfig, prodConfig);
  }

  return merge(baseConfig, devConfig);
}
