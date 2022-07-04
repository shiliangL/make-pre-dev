/*
 * @Author: shiliangL
 * @Date: 2021-11-25 16:06:50
 * @LastEditTime: 2022-07-04 14:40:57
 * @LastEditors: Do not edit
 * @Description: 自动把 views 文件下的 index.vue 暴露成路由对象信息（这样可能就没有的路由 切割懒加载的方式优化单页面了）
 * @other 约定文件夹方式为   About/index.vue 其中 index.vue作为入口页面 name 名称必填
 */
const pages = {}
const generatePage = []
// eslint-disable-next-line no-useless-escape
const files = require.context('@/views', true, /\index.vue$/)
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
Object.keys(pages).forEach(item => {
  generatePage.push({
    component: pages[item],
    name: pages[item].name || item.replace('/index', ''),
    title: pages[item].title || item.replace('/index', ''),
    keyName: item.replace('/index', ''),
    path: pages[item].name
      ? `/${pages[item].name.replace(/-/g, '/')}`
      : `/${item}`
  })
})
console.log(generatePage, '==views文件夹自动生成路由==')

export default generatePage
