/*
 * @Author: shiliangL
 * @Date: 2022-07-20 10:32:01
 * @LastEditTime: 2022-07-20 11:16:25
 * @LastEditors: Do not edit
 * @Description:
 */

import { debounce } from 'throttle-debounce'
import { addListener, removeListener } from 'resize-detector'

export default {
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.initWH()
    })
    this.$once('hook:beforeDestroy', () => {
      removeListener(this.$refs[this.ref], this._resizeHandler)
    })
  },
  methods: {
    initWH () {
      // 初始化
      const dom = this.$refs[this.ref]
      this.width = dom ? dom.clientWidth : 0
      this.height = dom ? dom.clientHeight : 0

      this._resizeHandler = debounce(10, (dom) => this.resizeHW(dom), { atBegin: true })
      addListener(this.$refs[this.ref], this._resizeHandler)
    },
    resizeHW (dom) {
      console.log('resizeHW')
      this.width = dom ? dom.clientWidth : 0
      this.height = dom ? dom.clientHeight : 0
    }
  }
}
