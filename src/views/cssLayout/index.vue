<!--
 * @Author: shiliangL
 * @Date: 2022-06-23 11:35:31
 * @LastEditTime: 2022-06-24 11:51:36
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="cssLayout">
    <div class="pie-chart">
      <div
        class="desc"
        :style="style"
      >
        2000
      </div>
      <DvaCoreChart
        @ready="ready"
        ref="chart"
        :option="option"
      ></DvaCoreChart>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cssLayout',
  title: 'cssLayout',
  computed: {
    style () {
      const { toNumber } = this
      const { series = [] } = this.option
      if (!series.length) return { display: 'none' }
      const { radius, center } = series[0]
      const width = toNumber(radius[1]) - toNumber(radius[0])
      return ({
        width: width + '%',
        top: '50%',
        textAlign: 'center',
        left: `calc(${center[0]} - ${width / 2}%)`,
        position: 'absolute',
        transform: 'translate(0%, -50%)'
      })
    }
  },
  data () {
    return {
      option: {}
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
  },
  mounted () {
    setTimeout(() => {
      console.log(this._chart.getOption(), '=smsm')
    }, 2000)
  },
  methods: {
    ready (chart) {
      //  ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
      this._chart = chart
    },
    toNumber (percentStr) {
      return percentStr.replace('%', '') * 1
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
  }
}
</style>
