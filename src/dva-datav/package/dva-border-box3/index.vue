<!--
 * @Author: shiliangL
 * @Date: 2022-07-20 09:29:41
 * @LastEditTime: 2022-07-20 14:46:39
 * @LastEditors: Do not edit
 * @Description: DvaBorderBox1
-->

<template>
  <div
    class="dva-border-box"
    :ref="ref"
  >
    <svg
      class="dv-border-svg-container"
      :width="width"
      :height="height"
    >
      <path
        :fill="backgroundColor"
        :stroke="mergedColor[0]"
        :d="`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${width - 20} 10 L ${width - 5} 25
          L ${width - 5} ${height - 5} L 20 ${height - 5}
          L 5 ${height - 20} L 5 20
        `"
      />

      <path
        fill="transparent"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="10, 5"
        :stroke="mergedColor[0]"
        :d="`M 16 9 L 61 9`"
      />

      <path
        fill="transparent"
        :stroke="mergedColor[1]"
        :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`"
      />

      <path
        fill="transparent"
        :stroke="mergedColor[1]"
        :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${height - 5}`"
      />
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
  name: 'DvaBorderBox3',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: () => 'transparent'
    }
  },
  data () {
    return {
      ref: 'dva-border-box-3',
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
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
