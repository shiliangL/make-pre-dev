/*
 * @Author: shiliangL
 * @Date: 2021-11-21 08:58:40
 * @LastEditTime: 2022-07-04 10:08:21
 * @LastEditors: Do not edit
 * @Description:
 */
const components = []
const mapList = {}
// eslint-disable-next-line no-useless-escape
const files = require.context('@/components', true, /\index.vue$/)
files.keys().forEach(key => {
  mapList[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
Object.keys(mapList).forEach(item => {
  components.push({
    component: mapList[item],
    name: item.replace('/index', '')
  })
})
console.log(components, '=全局组件=')

export default {
  install (Vue) {
    components.forEach(item => {
      Vue.component(item.name, item.component)
    })
  }
}
