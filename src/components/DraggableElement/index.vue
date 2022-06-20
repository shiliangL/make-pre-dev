<!--
 * @Author: shiliangL
 * @Date: 2022-06-10 10:56:38
 * @LastEditTime: 2022-06-20 17:57:05
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="draggableElement">
    <div class="box-draggable">
      <div
        :key="index"
        draggable="true"
        unselectable="on"
        class="draggable-item-row"
        @dragstart="dragstart($event, element);"
        v-for="(element,index) in elementList"
      > {{ element.title }}</div>
    </div>
    <div
      class="box-render"
      ref="content"
      @drop="dropHandler($event)"
      @dragover="dragoverHandler($event)"
    >
      <!-- :row-height="34" -->
      <grid-layout
        ref="gridLayout"
        :layout.sync="layout"
        :col-num="colNum"
        :margin="[10, 10]"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :use-css-transforms="true"
      >
        <grid-item
          :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          v-for="item in layout"
        >
          <div class="grid-item-component">
            <div class="component-desc"> {{ item.title }}</div>
            <div class="component-desc"> {{ item.value }}</div>
            <div class="component-desc"> {{ item.unit }}</div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>

import { GridLayout, GridItem } from 'vue-grid-layout'
const mouseXY = { x: null, y: null }
const DragPos = { x: null, y: null, w: 1, h: 1, i: null }

export default {
  name: 'DraggableElement',
  components: {
    GridItem,
    GridLayout
  },
  data () {
    return {
      colNum: 6,
      elementList: [
        {
          element: 'el-input',
          title: '单行文本',
          value: '',
          placeholder: '请输入',
          style: { width: '100%' },
          readonly: false,
          draggable: false
        }
      ],
      layout: [

      ]
    }
  },
  mounted () {
    document.addEventListener('dragover', this.setMouseXY, false)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('dragover', this.setMouseXY)
    })

    this.$nextTick().then(() => {
      this.parentRect = this.$refs.content.getBoundingClientRect()
    })
  },
  methods: {
    setMouseXY (e) {
      mouseXY.x = e.clientX
      mouseXY.y = e.clientY
    },
    dragstart (ev, { element }) {
      ev.dataTransfer.setData('elementKey', element)
      ev.dataTransfer.dropEffect = 'copy'
      // ev.dataTransfer.effectAllowed = 'move'
    },
    dragoverHandler (ev) {
      ev.preventDefault()
      ev.dataTransfer.dropEffect = 'copy'

      if ((this.layout.findIndex(item => item.i === 'drop')) === -1) {
        this.layout.push({
          w: 1,
          h: 1,
          i: 'drop',
          x: (this.layout.length * 2) % (this.colNum || 12),
          y: this.layout.length + (this.colNum || 12) // puts it at the bottom
        })
      }
      const index = this.layout.findIndex(item => item.i === 'drop')
      if (index !== -1) {
        try {
          this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display = 'none'
        } catch {
        }
        const el = this.$refs.gridLayout.$children[index]
        el.dragging = { top: mouseXY.y - this.parentRect.top, left: mouseXY.x - this.parentRect.left }
        const newPos = el.calcXY(mouseXY.y - this.parentRect.top, mouseXY.x - this.parentRect.left)
        if (newPos) {
          this.$refs.gridLayout.dragEvent('dragstart', 'drop', newPos.x, newPos.y, 1, 1)
          DragPos.i = String(index)
          DragPos.x = this.layout[index].x
          DragPos.y = this.layout[index].y
        }
        // if (mouseInGrid === false) {
        //   this.$refs.gridLayout.dragEvent('dragend', 'drop', new_pos.x, new_pos.y, 1, 1)
        //   this.layout = this.layout.filter(obj => obj.i !== 'drop')
        // }
      }
    },
    generateGuid () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    },
    dropHandler (ev) {
      ev.preventDefault()
      const { elementList } = this
      const componentKey = ev.dataTransfer.getData('text')
      console.log(componentKey, '=componentKey=')
      const item = elementList.find(item => item.element === componentKey)
      this.$refs.gridLayout.dragEvent('dragend', 'drop', DragPos.x, DragPos.y, 1, 1)
      this.layout = this.layout.filter(obj => obj.i !== 'drop')
      this.layout.push({
        ...item,
        w: 1,
        h: 1,
        x: DragPos.x,
        y: DragPos.y,
        i: DragPos.i
      })
      this.$refs.gridLayout.dragEvent('dragend', DragPos.i, DragPos.x, DragPos.y, 1, 1)
      try {
        this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display = 'block'
      } catch {
        console.log('渲染报错')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.draggableElement {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  .box-render {
    flex: 1;
    margin: 10px;
    align-items: stretch;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    .vue-grid-item {
      border-radius: 1px;
      border: 1px dashed #d7dae2;
    }
    .vue-grid-layout {
      flex: 1;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      position: absolute;
    }
  }
  .draggable-item-row {
    width: 120px;
    cursor: move;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .action-bar {
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d7dae2;
  }
  .grid-item-component {
    height: 100%;
    display: flex;
    font-size: 12px;
    align-items: center;
    .component-desc {
      font-size: 12px;
    }
    .component-type {
      font-size: 12px;
    }
  }
}
</style>
