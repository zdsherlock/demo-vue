module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      // 给 stylus-loader 传递选项
      stylus: {
        import: '~@/components/stylus/default.styl'
      }
    }
  }
}
