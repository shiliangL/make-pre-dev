<!--
 * @Author: shiliangL
 * @Date: 2022-06-27 09:45:10
 * @LastEditTime: 2022-06-27 09:52:15
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="adapter-panel" :style="{ background: bgColor }" ref="adapter">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'AdapterPanel',
  props: {
    width: Number,
    height: Number,
    bgColor: {
      default: '#a9a9a9'
    }
  },
  data () {
    return {
      frameWidth: 0,
      frameHeight: 0
    }
  },
  mounted () {
    this.setSize()
  },
  destroyed () {
    window.removeEventListener('resize', this.setScale)
  },
  methods: {
    setSize () {
      this.frameWidth = this.width || screen.width
      this.frameHeight = this.height || screen.height
      const frame = this.$refs.adapter
      frame.style.width = this.frameWidth + 'px'
      frame.style.height = this.frameHeight + 'px'
      frame.style.width = '100vw'
      frame.style.height = '100vh'
      // frame.style.overflow = 'auto'
    },
    setScale () {
      this.setSize()
      const bodyWidth = document.body.clientWidth
      const bodyHeight = document.body.clientHeight
      const scaleX = bodyWidth / this.frameWidth
      const scaleY = bodyHeight / this.frameHeight
      this.$refs.adapter.style.transform = `scale(${scaleX},${scaleY})`
      console.log(this.$refs.adapter.style.transform)
    }
  }
}
</script>

<style>
.adapter-panel {
  position: fixed;
  transform-origin: left top;
}
</style>
