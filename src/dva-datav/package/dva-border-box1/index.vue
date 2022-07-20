<!--
 * @Author: shiliangL
 * @Date: 2022-07-20 09:29:41
 * @LastEditTime: 2022-07-20 14:28:34
 * @LastEditors: Do not edit
 * @Description: DvaBorderBox1
-->

<template>
  <div
    class="dva-border-box"
    :style="`box-shadow: inset 0 0 40px ${mergedColor[0]}; border: 1px solid ${mergedColor[0]}; background-color: ${backgroundColor}`"
    :ref="ref"
  >
    <svg class="dva-border-svg-container" :width="width" :height="height">
      <polyline class="dva-bb7-line-width-2" :stroke="mergedColor[0]" :points="`0, 25 0, 0 25, 0`" />
      <polyline class="dva-bb7-line-width-2" :stroke="mergedColor[0]" :points="`${width - 25}, 0 ${width}, 0 ${width}, 25`" />
      <polyline class="dva-bb7-line-width-2" :stroke="mergedColor[0]" :points="`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`" />
      <polyline class="dva-bb7-line-width-2" :stroke="mergedColor[0]" :points="`0, ${height - 25} 0, ${height} 25, ${height}`" />

      <polyline class="dva-bb7-line-width-5" :stroke="mergedColor[1]" :points="`0, 10 0, 0 10, 0`" />
      <polyline class="dva-bb7-line-width-5" :stroke="mergedColor[1]" :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`" />
      <polyline class="dva-bb7-line-width-5" :stroke="mergedColor[1]" :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`" />
      <polyline class="dva-bb7-line-width-5" :stroke="mergedColor[1]" :points="`0, ${height - 10} 0, ${height} 10, ${height}`" />
    </svg>
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import autoResize from 'dva-datav/mixins/autoResize'
import { deepMerge, deepClone } from 'dva-datav/utils'

export default {
  name: 'DvaBorderBox1',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'dva-border-box-1',
      mergedColor: [],
      defaultColor: ['#002bdcff', '#0099ff']
    }
  },
  watch: {
    color () {
      this.mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this
      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || [])
    }
  },
  mounted () {
    this.mergeColor()
  }
}
</script>

<style lang="scss" scoped>
.dva-border-box {
  width: 100%;
  height: 100%;
  position: relative;
  .dva-border-svg-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    & > polyline {
      fill: none;
      stroke-linecap: round;
    }
  }
  .dva-bb7-line-width-2 {
    stroke-width: 2;
  }
  .dva-bb7-line-width-5 {
    stroke-width: 5;
  }
  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
