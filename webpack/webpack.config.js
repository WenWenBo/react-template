const { merge } = require("webpack-merge");

// merge，合并两个或多个webpack配置文件
module.exports = (envVars) => {
  const { env } = envVars;

  const commonConfig = require('./webpack.common')(env);
  const envConfig = require(`./webpack.config.${env}`);

  return merge(commonConfig, envConfig);
};
