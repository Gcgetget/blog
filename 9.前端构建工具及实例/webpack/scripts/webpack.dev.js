const merge = require("webpack-merge");
const base = require("./webpack.base.js");
const webpack = require("webpack");

// 这里可以访问到cross-env注入的变量
console.log(process.env.year);

const devConfig = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    // 变量会被注入到window对象上边，使用process.env.ENV访问
    new webpack.DefinePlugin({
      "process.env.ENV": '"dev"',
      __DEV__: '"hahaha"'
      // "process.env": require("../config/dev.env")
      // "process.env.BASE_URL": '"' + process.env.BASE_URL + '"'
    })
  ],
  devServer: {
    // 启动热更新，这里不能设置，设置就报错
    // hot: true,
    inline: true,
    host: "localhost",
    port: "1314",
    // open: true,
    // proxy： xxx,
    // 在页面上全屏输出报错信息
    overlay: {
      warnings: true,
      errors: true
    },
    // 显示 webpack 构建进度
    progress: true,
    // dev-server 服务路径
    contentBase: false,
    publicPath: "/",
    // 服务于webpack-dev-server  内部封装了一个express
    before(app) {
      app.get("/api/test.json", (req, res) => {
        res.json({
          code: 200,
          message: "Hello World"
        });
      });
    }
  }
});
console.log("devConfig:", devConfig);
module.exports = devConfig;
