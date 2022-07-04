<!--
 * @Author: shiliangL
 * @Date: 2021-12-07 10:39:34
 * @LastEditTime: 2022-07-04 14:15:41
 * @LastEditors: Do not edit
 * @Description: 数据数字效果
 * @Description: 不建议设置小数位。回导致数据的不准确
-->
<template>
  <span class="dva-count2-number">
    <slot name='prefix'></slot>
    <count-to
      class="dva-count2"
      ref="count"
      :start-val="start"
      :end-val='endNumber'
      :duration='duration'
      :decimals='decimals'
      :separator='separator'
      :prefix='prefix'
      :suffix='suffix'
      :autoplay='autoplay'
      @mountedCallback="mountedCallback"
    />
    <slot name='suffix'></slot>
  </span>
</template>

<script>

import countTo from 'vue-count-to'

export default {
  name: 'DvaCount2',
  props: {
    start: {
      desc: '开始数值',
      type: [Number, String],
      default: 0
    },
    end: {
      desc: '结束数值',
      type: [Number, String],
      default: 0
    },
    duration: {
      desc: '动画持续时间',
      type: [Number, String],
      default: 3000
    },
    onTimeLoop: {
      desc: '循环时间',
      type: [Number, String],
      default: 0
    },
    prefixLoopTime: {
      desc: '自动刷新时间增量',
      type: [Number, String],
      default: 2000
    },
    autoplay: {
      desc: '自动播放效果',
      type: [Boolean],
      default: true
    },
    decimals: {
      desc: '允许小数位数',
      type: [Number],
      default: 0
    },
    separator: {
      desc: '千位分隔符',
      type: [String],
      default: ''
    },
    prefix: {
      desc: '前缀',
      type: [String],
      default: ''
    },
    suffix: {
      desc: '后缀',
      type: [String],
      default: ''
    }
  },
  data () {
    return {
      endNumber: 0
    }
  },
  components: {
    countTo
  },
  mounted () {
    this.$once('hook:beforeDestroy', () => {
      this.clearTimer()
    })
  },
  watch: {
    end: {
      immediate: true,
      handler () {
        this.initTimer()
      }
    }
  },
  methods: {
    clearTimer () {
      clearTimeout(this._setTimeout)
      clearInterval(this._onTime2refreshTimer)
    },
    initTimer () {
      this.clearTimer()
      const { duration, onTimeLoop, end, prefixLoopTime } = this
      this.endNumber = end
      this._endNumber = end
      if (onTimeLoop && end) {
        this._setTimeout = setTimeout(() => {
          this.onTime2refresh()
        }, duration + onTimeLoop + prefixLoopTime)
      }
    },
    onTime2refresh () {
      const { onTimeLoop, _endNumber, duration, prefixLoopTime } = this
      this._onTime2refreshTimer = setInterval(() => {
        this.endNumber = 0
        this.$nextTick().then(() => {
          this.endNumber = _endNumber || 0
        })
      }, duration + onTimeLoop + prefixLoopTime)
    },
    mountedCallback () {
      this.$nextTick().then(() => {
        if (this.$refs.count) {
          this.autoplay && this.$refs.count.star && this.$refs.count.start()
        }
      })
    },
    refresh () {
      this.clearTimer()
      this.endNumber = 0
      const { _endNumber } = this
      this.$nextTick().then(() => {
        this.endNumber = _endNumber
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
