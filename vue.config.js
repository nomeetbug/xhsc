// vue.config.js
// 这些配置 大家复制就行 基本都是写死的
// 配置之后重启

// 这个配置就是 vue脚手架帮你 开启了一个隐藏的服务器
// 帮你转发了
module.exports = {
  // 修改的配置 配置 proxy 服务器代理
  devServer: {
    proxy: {
      //  如果你的地址 以 /api 开头 他就会请求到 https://uinav.com/api/public/v1/
      '/api': {
        target: 'https://uinav.com/api/public/v1/',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': '' // 请求的时候 /api就会替换成 ''
        }
      }
    }
  }
}
