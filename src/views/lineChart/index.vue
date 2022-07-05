<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-05 14:27:27
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="sidebar-bar">
    <div
      class="sidebar-bar-group-item"
      v-height="190"
    >
      <dva-line-chart
        direction="horizontal"
        :chartData="charData"
      />
    </div>
    <div
      class="sidebar-bar-group-item"
      v-height="190"
    >
      <dva-line-chart
        direction="vertical"
        @ready="ready"
        :chartData="charData"
      />
    </div>
  </div>
</template>

<script>

// import { Slider, Input } from 'element-ui'
export default {
  name: 'LineChartPage',
  title: '折线图表',
  components: {
  },
  data () {
    return {
      slider: [0, 0],
      chartSeries: [],
      charData: [
        { name: '智慧物业', value: 22, unit: '架' },
        { name: '智慧城管', value: 24, unit: '架' },
        { name: '智慧产业', value: 32, unit: '架' },
        { name: '智慧物联', value: 32, unit: '架' }
      ]
    }
  },
  methods: {
    ready (chart) {
      this._chart = chart
    }
  }
}
</script>
