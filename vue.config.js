module.exports = {
  devServer: {
    proxy: 'http://localhost:8086',
    https: false,
    disableHostCheck: true
  },
  lintOnSave: false
}