const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir : "../backend/public",    //../backend/public 에 배포하겠다는 것을 의미
  devServer: {
    proxy: {
      "^/api" : { target : 'http://localhost:3000',
                  ws: false,
                  changeOrigin: true,
                  // pathRewrite : { '^/api' : ' ' }
                }
    }
  } 
})