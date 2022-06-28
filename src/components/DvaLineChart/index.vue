<!--
 * @Author: shiliangL
 * @Date: 2022-06-23 11:35:31
 * @LastEditTime: 2022-06-28 19:29:31
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="dvaLineChart">
    <DvaCoreChart
      @resize="resize"
      ref="chart"
      :option="option"
    ></DvaCoreChart>
  </div>
</template>

<script>

export default {
  name: 'DvaLineChart',
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
      backgroundColor: 'transparent',
      animationEasing: 'elasticOut',
      animationDelayUpdate: (k) => 5 * k,
      grid: {
        left: '2%',
        right: '5%',
        top: '10%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        show: false
      },
      legend: {
        show: true,
        top: '2%',
        icon: 'stack',
        left: 'center',
        textStyle: {
          color: '#fff',
          padding: [0, 0, 0, 8]
        },
        itemWidth: 8,
        itemHeight: 8,
        data: ['当天', '均值']
      },
      // 水平x轴配置
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#ddd'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#195384'
            }
          },
          axisTick: {
            show: true
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#195384'
            }
          },
          data: ['0:00', '6:00', '12:00', '18:00', '24:00']
        }
      ],
      // 垂直要y轴配置
      yAxis: [
        {
          type: 'value',
          name: '',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#ddd'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#186afe'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              opacity: 0.66,
              type: 'dashed',
              color: '#213034'
            }
          }
        }
      ],
      // 数据系列配置
      series: [
        {
          name: '当天',
          type: 'line',
          smooth: true,
          stack: '总量',
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: '#0092f6',
              lineStyle: {
                color: '#0092f6',
                width: 1
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(7,44,90,0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,146,246,0.88)'
                    }
                  ],
                  globalCoord: false
                }
              }
            }
          },
          animationDelay: (idx) => idx * 10,
          data: [6, 5, 10, 11, 6, 5, 6]
        },
        {
          name: '均值',
          type: 'line',
          smooth: true,
          stack: '总量',
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: '#00d4c7',
              lineStyle: {
                color: '#00d4c7',
                width: 1
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(7,44,90,0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,212,199,0.88)'
                    }
                  ],
                  globalCoord: false
                }
              }
            }
          },
          animationDelay: (idx) => idx * 10,
          data: [6, 5, 10, 11, 6, 5, 6]
        }
      ]
    }
  },
  methods: {
    resize (dom) {
      console.log(dom, '=x=')
    },
    toNumber (percentStr) {
      return percentStr.replace('%', '') * 1
    }
  }
}
</script>

<style lang="scss" scoped>
.dvaLineChart {
  width: 100%;
  height: 100%;
  .pie-chart {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
