/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-04 14:36:21
 * @LastEditors: Do not edit
 * @Description:
 */
const path = require('path')
const resolve = (src) => {
  return path.resolve(__dirname, src)
}
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css', '.scss'],
      alias: {
        '@root': resolve(''),
        'dva-datav': resolve('src/dva-datav')
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
