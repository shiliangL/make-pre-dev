/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-04 14:33:30
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

// 方便开发调试先祖册全局组件
import components from '@/components'
import directives from '@/directives/styles'

// 方便开发调试dva祖册全局
import dva from '@/dva-datav/index'
Vue.use(components)
Vue.use(dva)

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
