/*
 * @Author: shiliangL
 * @Date: 2022-04-06 09:18:26
 * @LastEditTime: 2022-04-18 09:24:14
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
