<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-04 16:42:26
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="sidebar-bar">
    <div class="sidebar-bar-group-item">
      <dva-pie-chart direction="horizontal" :chartData="charData" />
    </div>
    <div class="sidebar-bar-group-item" v-height="240">
      <dva-pie-chart direction="vertical" :chartData="charData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'RingChart',
  title: '环形图表',
  components: {
  },
  data () {
    return {
      charData: [
        { name: '小桥', value: 22, unit: '架' },
        { name: '中桥', value: 24, unit: '架' },
        { name: '大桥', value: 32, unit: '架' },
        { name: '特大桥', value: 52, unit: '架' }
      ],
      ringChartAConfig: {},
      ringChartBConfig: {}
    }
  }
}
</script>
