// dev环境下相关配置
module.exports =  {
  // 指定环境
  mode: "development",

  devtool: "cheap-module-source-map",
  // 输出source-map的方式，增加调试。eval（0, 92, 197); margin: 0px; padding: 0px; background: none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);">devtool: "eval（106, 115, 125); margin: 0px; padding: 0px; background: none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);">// 本地服务器配置
  devServer: {
    // 启动GZIP压缩
    compress: true,
    // 设置端口号
    port: 3000,
    // 代理请求设置
    proxy: {
      "/api": {
        // 目标域名
        target: "http://xxxx.com:8080",
        // 允许跨域了
        changeOrigin: true,
        // 重写路径 - 根据自己的实际需要处理，不需要直接忽略该项设置即可
        pathRewrite: {
          // 该处理是代码中使用/api开头的请求，如/api/userinfo，实际转发对应服务器的路径是/userinfo
          "^/api": "",
        },
        // https服务的地址，忽略证书相关
        secure: false,
      },
    },
  }
};