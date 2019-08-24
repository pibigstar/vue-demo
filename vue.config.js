module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'i18n',
      enableInSFC: false
    }
  },
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    }
  },
  //跨域代理设置
  devServer: {
    proxy: {
      '/api': {
        target: 'https://uc.woloapp.cn:8000/api/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
