module.exports = {
  dev: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000'
        }
      }
    }
  }
}
