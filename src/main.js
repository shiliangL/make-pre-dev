/*
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-06-20 17:52:25
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
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
