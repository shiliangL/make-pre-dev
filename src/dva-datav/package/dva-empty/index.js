/*
 * @Author: shiliangL
 * @Date: 2022-07-20 20:11:37
 * @LastEditTime: 2022-07-20 20:11:38
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
