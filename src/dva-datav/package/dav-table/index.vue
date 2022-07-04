<!--
 * @Author: shiliangL
 * @Date: 2022-03-09 12:54:23
 * @LastEditTime: 2022-04-29 12:03:48
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import { deepMerge } from '@/utils'
import renderComponent from 'dva-datav/mixins/renderComponent'

export default {
  name: 'DavTable',
  functional: false,
  mixins: [renderComponent],
  props: {
    config: {
      default: () => ({})
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      initConfig: {
        showHeader: true
      }
    }
  },
  created () {
    // 合并装饰器配置
    deepMerge(this.initConfig, this.config)
  },
  render (h) {
    const { data, columns } = this
    const { showHeader } = this.initConfig

    const thead = showHeader
      ? h('thead', { class: 'dva-table-header' }, [
        columns.map((item, index) => {
          return h('th', { class: 'fixed-header-th' }, [
            !item.renderHeader ? h('span', {}, item.label) : h('render-component', { props: { row: item, render: item.renderHeader, index: index } })
          ])
        })
      ])
      : null

    const tbody = h('thead', { class: 'dva-table-tbody' }, [
      data.map((item, index) => {
        return h('tr', { class: 'fixed-header-th' }, [
          columns.map((column) => {
            return h('td', {}, [
              !item.render ? h('span', {}, item[column.key]) : h('render-component', { props: { row: item, render: item.render, index: index } })
            ])
          })
        ])
      })
    ])

    return h('div', {
      class: [
        'dva_scroll_bar',
        'dva-table-wrapper'
      ]
    }, [
      h('table',
        { class: 'dva-table' },
        [
          thead,
          tbody
        ])
    ])
  }
}
</script>

<style lang="scss">
.dva-table-wrapper {
  width: 100%;
  overflow: auto;
  border: 1px solid$themeColor;
  .dva-table {
    width: 100%;
    border-collapse: collapse;
  }
  .dva-table-header {
    top: 0;
    z-index: 99;
    position: sticky;
    background-color:$themeColor;
    .fixed-header-th {
      padding: 4px;
      text-align: center;
    }
  }
  .dva-table-tbody {
    overflow: hidden;
    tr {
      border-top: 1px solid$themeColor;
    }
    td {
      padding: 4px;
      text-align: center;
    }
  }
}
</style>
