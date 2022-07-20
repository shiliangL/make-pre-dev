/*
 * @Author: shiliangL
 * @Date: 2021-05-06 14:08:36
 * @LastEditTime: 2022-07-04 14:15:38
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
