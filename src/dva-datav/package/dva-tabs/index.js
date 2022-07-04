/*
 * @Author: shiliangL
 * @Date: 2022-04-25 16:05:33
 * @LastEditTime: 2022-04-25 16:05:34
 * @LastEditors: Do not edit
 * @Description:
 */
import component from './index.vue'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(component)
}

export default component
