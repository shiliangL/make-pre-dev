<!--
 * @Author: shiliangL
 * @Date: 2022-04-23 13:17:56
 * @LastEditTime: 2022-07-04 15:03:34
 * @LastEditors: Do not edit
 * @Description:
-->

<script>

import { uuid, deepMerge } from 'dva-datav/utils'
import renderComponent from 'dva-datav/mixins/renderComponent'

export default {
  name: 'DvaTabs',
  mixins: [renderComponent],
  props: {
    data: {
      type: [Array],
      default: () => []
    },
    config: {
      type: Object,
      desc: '配置项',
      default: () => ({})
    },
    position: {
      type: String,
      default: () => 'left',
      validator: (value) => ['left', 'centre', 'right'].includes(value)
    }
  },
  computed: {
    selectTabItem () {
      return this.data[this.currenActive] || null
    }
  },
  data () {
    return {
      currenActive: 0,
      initConfig: {
        keepAlive: true
      }
    }
  },
  created () {
    deepMerge(this.initConfig, this.config)
  },
  methods: {
    select (item, index) {
      this.currenActive = index
      this.$emit('select', item)
    }
  },
  render (h) {
    // const { keepAlive } = this.initConfig
    const positionMap = {
      left: 'flex-start',
      centre: 'center',
      right: 'flex-end'
    }
    const { data, currenActive, select, selectTabItem, position } = this
    const header = h('div', { class: 'dva-tab-header', style: { 'justify-content': positionMap[position] } }, [
      data.map((item, index) => {
        return h('div', {
          on: {
            click: () => select(item, index)
          },
          class: ['dva-tab-header-item', { 'is-active': currenActive === index }]
        }, [
          item.label || '标题'
        ])
      })
    ])

    const panels = h('div', { class: 'dva-tab-panel-wrapper' }, [
      (selectTabItem && selectTabItem.render)
        ? h('render-component', {
          props: {
            row: selectTabItem,
            render: selectTabItem.render
          }
        })
        : null
    ])

    const panelMain = h('div', { class: 'dva-tab-panel-wrapper-inner', key: selectTabItem.key || uuid() }, [panels])

    return h('div', {
      class: ['dva-tab-wrapper']
    }, [
      header,
      panelMain
    ])
  }
}
</script>

<style lang="scss" scoped>
.dva-tab-wrapper {
  .dva-tab-header {
    display: flex;
    align-items: center;
    .dva-tab-header-item {
      top: 2px;
      z-index: 1;
      user-select: none;
      overflow: hidden;
      cursor: pointer;
      padding: 6px 12px;
      position: relative;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      &:before {
        bottom: 0;
        left: 0;
        z-index: -1;
        position: absolute;
        content: "";
        width: 100%;
        height: 120%;
        background: #001526;
        transform: translateY(100%);
        transition-duration: 0.25s;
        border-radius: 5px 5px 0 0;
      }
      &.is-active {
        color:$themeColor;
        &:before {
          transition-duration: 0.5s;
          background: #001526;
          transform: translateY(0);
        }
      }
    }
  }
  .dva-tab-panel-wrapper {
    background: #001526;
    border-radius: 0px 0px 4px 4px;
    .dva-tab-panel {
      width: 100%;
      padding: 10px;
      min-height: 120px;
    }
    .no-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
