<!--
 * @Author: shiliangL
 * @Date: 2022-03-10 11:41:20
 * @LastEditTime: 2022-07-04 18:44:15
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import { isArray } from 'dva-datav/utils/types'
export default {
  name: 'DvaProgress',
  props: {
    config: {
      default: () => ({})
    },
    title: {
      type: [String],
      default: () => ''
    },
    showPercent: {
      type: [Boolean],
      default: () => false
    },
    percent: {
      type: [Number],
      default: () => 20
    },
    strokeHeight: {
      type: Number,
      default: () => 14
    },
    color: {
      type: [String, Array],
      validator: (value) => value.length >= 2,
      default: () => ['rgb(32, 160, 255)', 'rgb(20, 160, 255,0.22)']
    },
    trackColor: {
      type: [String],
      default: () => '#9d99992b'
    },
    active: {
      type: [Boolean],
      default: () => true
    },
    decorator: {
      type: [Boolean],
      default: () => true
    }
  },
  render (h) {
    const { percent, strokeHeight, color, trackColor, active, decorator, title, showPercent } = this
    const bgStyle = { width: `${percent}%` }

    !isArray(color) ? bgStyle['background-color'] = color : bgStyle['background-image'] = `linear-gradient(90deg, ${color[0]} 0%, ${color[1]} 100%)`
    const progressBg = h('div', { class: ['dva-progress-line-bg', { 'dva-progress-active': active }], style: bgStyle })

    const progressBar = h('div', {
      class: 'dva-progress-line-bar',
      style: { height: `${strokeHeight}px` }
    }, [h('div', { class: 'dva-progress-line-out', style: { background: `${trackColor}` } }, [progressBg])])
    const progressDesc = h('div', { class: 'dva-progress-line-desc' }, this.$slots.default || [
      h('div', { class: 'dva-progress-title' }, `${title}`),
      showPercent ? h('div', { class: 'dva-progress-percent' }, `${percent}%`) : null
    ])

    return h('div',
      { class: ['dva-progress-warp'] },
      [
        progressDesc,
        progressBar,
        decorator
          ? h('div', {
            class: 'dva-progress-line-decorator',
            style: { 'background-color': !isArray(color) ? color : color[0], height: '1px' }
          })
          : null
      ])
  }
}
</script>

<style lang="scss">

.dva-progress-warp {
  .dva-progress-line-desc {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dva-progress-line-bar {
    overflow: hidden;
    .dva-progress-line-out {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      position: relative;
      display: inline-block;
      overflow: hidden;
      .dva-progress-line-bg {
        top: 0;
        left: 0;
        height: 100%;
        text-align: right;
        position: relative;
        transition: all 0.2s linear;
      }
    }
  }
  .dva-progress-line-decorator {
    margin-top: 1px;
    overflow: hidden;
  }
}
</style>
