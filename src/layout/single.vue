<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 17:09:28
 * @LastEditTime: 2022-06-23 14:01:17
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div>
    <DvaCoreChart :option="option"></DvaCoreChart>
  </div>
</template>

<script>
export default {
  name: 'SingleLayout',
  data () {
    return {
      option: null
    }
  },
  created () {
    this.option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
