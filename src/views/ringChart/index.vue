<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-05 14:07:57
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="sidebar-bar">
    <div
      class="sidebar-bar-group-item"
      v-height="190"
    >
      <dva-pie-chart
        direction="horizontal"
        :chartData="charData"
      />
    </div>
    <div
      class="sidebar-bar-group-item"
      v-height="230"
    >
      <dva-pie-chart
        direction="vertical"
        @ready="ready"
        @setOptionChange="setOptionChange"
        :chartData="charData"
      />
    </div>
    <div class="operation">
      <div class="operation-item" v-for="(item,index) in chartSeries" :key="index">
        <Input size="mini" v-model="item.name" placeholder="请输入内容"></Input>
        <Slider
          range
          @change="changeChartRadius($event,item)"
          v-model="item.radius"
          :min="0"
          :max="100"
        >
        </Slider>
      </div>
    </div>
  </div>
</template>

<script>

import { Slider, Input } from 'element-ui'

export default {
  name: 'RingChart',
  title: '环形图表',
  components: {
    Input,
    Slider
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
    },
    changeChartRadius (rang, item) {
      const { _chart } = this
      // item.radius = rang.map(kk => (!kk ? 0 : (kk + '%')))
      _chart && _chart.setOption({ series: this.chartSeries })
    },
    setOptionChange (opt) {
      const chartSeries = JSON.parse(JSON.stringify(opt.series))
      chartSeries.forEach(item => {
        item.radius = item.radius.map(kk => (!kk ? 0 : (kk.replace('%', '') * 1)))
      })
      this.chartSeries = chartSeries
    }
  }
}
</script>
