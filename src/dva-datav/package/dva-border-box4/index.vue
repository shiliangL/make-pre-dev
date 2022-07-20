<!--
 * @Author: shiliangL
 * @Date: 2022-07-20 09:29:41
 * @LastEditTime: 2022-07-20 15:08:22
 * @LastEditors: Do not edit
 * @Description: DvaBorderBox1
-->

<template>
  <div
    class="dva-border-box"
    :ref="ref"
  >
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import autoResize from 'dva-datav/mixins/autoResize'
import { deepMerge, deepClone } from 'dva-datav/utils'

export default {
  name: 'DvaBorderBox4',
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
