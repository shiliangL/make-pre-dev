<!--
 * @Author: shiliangL
 * @Date: 2022-03-10 11:41:20
 * @LastEditTime: 2022-07-04 18:21:58
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import DvaCount2 from 'dva-datav/package/dva-count2'
import DvaCoreChart from 'dva-datav/package/dva-core-chart'

import { deepMerge } from 'dva-datav/utils'
import { themeColors, decoratorPie3 } from 'dva-datav/utils/dva'
import renderComponent from 'dva-datav/mixins/renderComponent'

// getRandomData
export default {
  name: 'DvaPieChart',
  mixins: [renderComponent],
  props: {
    config: {
      type: Object,
      desc: '配置项',
      default: () => ({})
    },
    direction: {
      type: String,
      default: () => 'horizontal',
      desc: 'horizontal 水平方向,vertical垂直方向',
      validator: (value) => ['horizontal', 'vertical'].includes(value)
    },
    chartData: {
      type: [Array],
      desc: '图表数据项',
      default: () => []// getRandomData(8, 50, 1200)
    }
  },
  components: {
    DvaCount2,
    DvaCoreChart
  },
  data () {
    return {
      option: {},
      currentIndex: -1,
      initConfig: {
        unit: '',
        keyName: 'name',
        keyCode: 'value',
        className: '',
        desc: '汇总情况',
        color: themeColors,
        radius: ['64%', '86%'],
        center: ['50%', '50%'],
        dispatchAction: true, //  是否开启高亮循环动画
        dispatchActionTime: 3000
      }
    }
  },
  computed: {
    total () {
      const { keyCode } = this.initConfig
      return this.chartData.reduce((sum, row) => sum + (row[keyCode] || 0), 0)
    }
  },
  created () {
    // 合并装饰器配置
    deepMerge(this.initConfig, this.config)
  },
  mounted () {
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.autoHightLightTimer)
    })
  },
  watch: {
    chartData: {
      immediate: true,
      handler (val) {
        if (!val) return
        this.handlerOption().then(({ option }) => {
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
      const { dispatchAction } = this.initConfig
      if (dispatchAction) this.dispatchActionAuto()
    },
    handlerOption () {
      return new Promise((resolve) => {
        const seriesData = []
        const { chartData } = this
        const { keyCode, radius, color, center } = this.initConfig
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
          color: color,
          tooltip: {
            show: false
          },
          legend: {
            show: false
          },
          series: [
            {
              name: '数据项图表',
              type: 'pie',
              radius: ['53%', '58%'] || radius,
              center: center,
              // hoverAnimation: true,
              // hoverOffset: 10,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              data: seriesData
            },
            {
              type: 'pie',
              name: '外1细圆环',
              radius: ['70%', '71%'],
              center: center,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              tooltip: {
                show: false
              },
              data: decoratorPie3()
            },
            {
              type: 'pie',
              name: '外2细圆环',
              radius: ['60%', '65%'],
              center: center,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              tooltip: {
                show: false
              },
              data: decoratorPie3({ value: 100 })
            },
            {
              type: 'pie',
              name: '内细圆环',
              silent: true,
              radius: ['44%', '45%'],
              center: center,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              tooltip: {
                show: false
              },
              data: decoratorPie3()
            }

          ]
        }
        return resolve({ option: initOption })
      })
    },
    dispatchActionAuto () {
      const { dispatchActionTime } = this.initConfig
      clearInterval(this.autoHightLightTimer)
      this.autoHightLightTimer = setInterval(() => {
        const dataLen = this.chartData.length
        this.chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: this.currentIndex })
        this.currentIndex = (this.currentIndex + 1) % dataLen
        this.chart && this.chart.dispatchAction({
          seriesIndex: 0,
          type: 'highlight',
          dataIndex: this.currentIndex
        })
      }, dispatchActionTime)
    }
  },
  render (h) {
    const { chartData, option, total, direction } = this
    const { className, desc, unit } = this.initConfig
    const classDirection = ['horizontal', 'vertical'].includes(direction) ? direction : 'horizontal'

    const ChartMainBox = h('div', { class: 'dva-chart-box' }, [
      h('dva-core-chart', {
        props: { ...this.$attrs, option },
        on: {
          ...this.$listeners,
          ready: (chart) => this.ready(chart)
        }
      }, [
        h('dva-count2', { class: 'dva-chart-content-number', props: { end: total, suffix: unit } }),
        h('div', { class: 'dva-chart-content-desc' }, desc)
      ])
    ])
    const ChartDescBox = h('div', { class: ['dva-chart-desc'] }, [
      this.$scopedSlots.legend
        ? this.$scopedSlots.legend({ data: chartData })
        : chartData.map((item, index) => {
          return h('div', { class: 'dva-chart-desc-item' }, [
            h('div', { class: 'desc-item-cube', style: { background: item.color } }),
            h('div', { class: 'desc-item-name' }, item.name),
            h('div', { class: 'desc-item-value' }, [
              h('dva-count2', { class: 'desc-item-value-count2', props: { end: item.value } })
            ])
          ])
        })
    ])
    return h('div',
      {
        class: [
          'dva-pie-chart-main',
          { [className]: true, [classDirection]: true }]
      },
      [ChartMainBox, ChartDescBox])
  }
}
</script>

<style lang="scss">
.dva-pie-chart-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: var(--body-font-size);
  &.horizontal {
    display: grid;
    grid-template-columns: 2fr 1fr;
    .dva-chart-box {
      overflow: hidden;
    }
    .dva-chart-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    //  每一个描述项
    .dva-chart-desc-item {
      cursor: pointer;
      display: grid;
      align-items: center;
      grid-template-columns: 14px 2fr 1fr;
    }
  }
  &.vertical {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 4fr 1fr;
    .dva-chart-box {
      overflow: hidden;
    }
    .dva-chart-desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    //  每一个描述项
    .dva-chart-desc-item {
      cursor: pointer;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: 14px auto auto;
    }
  }
  .dva-core-chart {
    .chart-desc {
      overflow: hidden;
    }
    .dva-chart-content-number {
      color: $base-color-yellow;
    }
  }
  .dva-chart-desc {
    overflow-x: hidden;
    overflow-y: auto;
    .desc-item-cube {
      width: 8px;
      height: 8px;
      margin-right: 6px;
      display: inline-block;
    }
    .desc-item-name {
      padding-right: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc-item-value-count2 {
      padding: 0 4px;
      color: $base-color-yellow;
    }
  }
}
</style>
