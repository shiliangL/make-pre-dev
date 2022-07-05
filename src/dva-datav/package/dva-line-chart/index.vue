<!--
 * @Author: shiliangL
 * @Date: 2022-03-10 11:41:20
 * @LastEditTime: 2022-07-05 14:25:34
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import DvaCoreChart from 'dva-datav/package/dva-core-chart'

import { deepMerge } from 'dva-datav/utils'
import { themeColors } from 'dva-datav/utils/dva'
import renderComponent from 'dva-datav/mixins/renderComponent'

// getRandomData
export default {
  name: 'DvaLineChart',
  mixins: [renderComponent],
  props: {
    config: {
      type: Object,
      desc: '配置项-常规配置-不参与数据响应式',
      default: () => ({})
    },
    color: {
      type: Array,
      desc: '取色盘',
      default: () => themeColors
    },
    chartData: {
      type: [Array],
      desc: '图表数据项',
      default: () => []// getRandomData(8, 50, 1200)
    }
  },
  components: {
    DvaCoreChart
  },
  data () {
    return {
      option: {},
      initConfig: {
        keyName: 'name',
        keyCode: 'value',
        className: '',
        desc: '汇总情况',
        radius: ['64%', '86%'],
        center: ['50%', '50%'],
        dispatchAction: true, //  是否开启高亮循环动画
        dispatchActionTime: 3000
      }
    }
  },
  created () {
    // 合并配置
    deepMerge(this.initConfig, this.config)
  },
  watch: {
    chartData: {
      handler (val) {
        if (!val) return
        this.handlerSetOption().then(({ option }) => {
          setTimeout(() => {
            this.option = option
          }, 200)
        })
      }
    }
  },
  methods: {
    ready (chart) {
      this.chart = chart
      this.$emit('ready', chart)

      this.handlerSetOption().then(({ option }) => {
        setTimeout(() => {
          this.option = option
        }, 200)
      })
    },
    handlerSetOption () {
      // const { maxRadius } = this.initConfig
      return new Promise((resolve) => {
        const seriesData = []
        const { chartData, color } = this
        const { keyCode } = this.initConfig
        // const { keyCode, radius, center } = this.initConfig
        let indexKey = -1
        chartData.forEach((item) => {
          indexKey = (indexKey + 1) % color.length
          item.color = item.color || color[indexKey]
          const row = {
            name: '',
            value: item[keyCode],
            itemStyle: {
              normal: {
                borderWidth: 1,
                shadowBlur: 8,
                shadowColor: '',
                color: item.color || color[indexKey]
              }
            }
          }
          seriesData.push(row)
        })
        const initOption = {
          backgroundColor: 'transparent',
          animationEasing: 'elasticOut',
          animationDelayUpdate: (k) => 5 * k,
          animationDelay: (idx) => idx * 10,
          grid: {
            left: '2%',
            right: '2%',
            top: '12%',
            bottom: '2%',
            containLabel: true
          },
          tooltip: {
            show: false,
            trigger: 'item'
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
            data: ['出行车次', '进入车次']
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
              data: ['1月', '3月', '5月', '7月', '9月', '11月', '12月']
            }
          ],
          // 垂直要y轴配置
          yAxis: [
            {
              name: '',
              type: 'value',
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
            },
            {
              type: 'value',
              name: '',
              min: 0,
              max: 30,
              axisLabel: {
                formatter: '{value} %',
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
                show: false,
                lineStyle: {
                  color: '#11366e55'
                }
              }
            }
          ],
          // 数据系列配置
          series: [
            {
              name: '出行车次',
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
                      ]
                    }
                  }
                }
              },
              animationDelay: (idx) => idx * 10,
              data: [20, 32, 20, 24, 19, 30, 21]
            },
            {
              name: '进入车次',
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
              data: [15, 8, 12, 11, 16, 14, 8]
            }
          ]
        }
        this.$emit('setOptionChange', initOption, this.chart)
        return resolve({ option: initOption })
      })
    }
  },
  render (h) {
    const { option } = this
    const { className } = this.initConfig

    return h('div',
      {
        class: [
          'dva-pie-chart-main',
          { [className]: true }
        ]
      },
      [h('div', { class: 'dva-chart-box' }, [
        h('dva-core-chart', {
          props: { ...this.$attrs, option },
          on: {
            ...this.$listeners,
            ready: (chart) => this.ready(chart)
          }
        })
      ])])
  }
}
</script>

<style lang="scss">
.dva-chart-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
