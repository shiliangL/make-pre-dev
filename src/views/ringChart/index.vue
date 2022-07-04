<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-04 18:12:49
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="sidebar-bar">
    <div class="sidebar-bar-group-item" v-height="190">
      <dva-pie-chart direction="horizontal" :chartData="charData" />
    </div>
    <div class="sidebar-bar-group-item" v-height="230">
      <dva-pie-chart direction="vertical" :chartData="charData" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'RingChart',
  title: '环形图表',
  components: {

  },
  data () {
    return {
      charData: [
        { name: '智慧物业', value: 22, unit: '架' },
        { name: '智慧城管', value: 24, unit: '架' },
        { name: '智慧产业', value: 32, unit: '架' },
        { name: '智慧物联', value: 32, unit: '架' }
      ]
    }
  }
}
</script>
