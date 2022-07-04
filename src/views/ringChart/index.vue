<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-04 14:03:00
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="sidebar-bar">
    <div class="sidebar-bar-group-item">
      <DvaRingChart :data="charData" />
    </div>
    <div class="sidebar-bar-group-item">
      <DvaRingChart :data="charData" />
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
        { name: '小桥', color: '#86FAA9', value: 110, unit: '架' },
        { name: '中桥', color: '#3483DF', value: 24, unit: '架' },
        { name: '大桥', color: '#69E4FB', value: 520, unit: '架' },
        { name: '特大桥', color: '#FCE173', value: 10, unit: '架' }
      ],
      ringChartAConfig: {},
      ringChartBConfig: {}
    }
  }
}
</script>
