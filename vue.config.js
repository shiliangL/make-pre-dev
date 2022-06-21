/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-06-21 17:04:54
 * @LastEditors: Do not edit
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
