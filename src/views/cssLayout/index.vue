<!--
 * @Author: shiliangL
 * @Date: 2022-06-23 11:35:31
 * @LastEditTime: 2022-06-23 16:28:31
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="cssLayout">
    <div class="pie-chart">
      <DvaCoreChart :option="option"></DvaCoreChart>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cssLayout',
  title: 'cssLayout',
  data () {
    return {
      option: null
    }
  },
  created () {
    this.option = {
      legend: {
        top: 'center',
        right: '10%',
        // bottom: 'bottom',
        orient: 'vertical', // vertical  horizontal
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        itemStyle: {
          borderWidth: 0
        },
        formatter: (name) => {
          return [`{a|${name}}`].join('\n')
        },
        textStyle: {
          color: '#fff',
          backgroundColor: 'transparent',
          rich: {
            a: {
              // width: '50%'
            }
          }
        }
      },
      series: [
        {
          type: 'pie',
          name: 'Access From',
          radius: ['46%', '70%'],
          center: ['30%', '50%'],
          itemStyle: {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'rgba(0,0,0,0,0)'
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct Engine' },
            { value: 580, name: 'Email Engine' },
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
.cssLayout {
  width: 360px;
  height: 100%;
  .pie-chart {
    width: 100%;
    height: 220px;
    position: relative;
    border: 1px dashed #fff;
    .desc {
      left: 30%;
      top: 50%;
      position: absolute;
      transform: translate(-30%, -50%);
    }
  }
}
</style>
