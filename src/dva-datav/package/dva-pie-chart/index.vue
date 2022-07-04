<!--
 * @Author: shiliangL
 * @Date: 2022-03-10 11:41:20
 * @LastEditTime: 2022-06-02 11:35:52
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import { deepMerge } from '@/utils'
import DvaCount2 from '../dva-count2'
import DvaCoreChart from '../dva-core-chart'
import { themeColors } from 'dva-datav/utils/dva'
import renderComponent from 'dva-datav/mixins/renderComponent'

// getRandomData
export default {
  name: 'DvaPieChart',
  mixins: [renderComponent],
  props: {
    config: {
      default: () => ({})
    },
    chartData: {
      type: [Array],
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
        height: '180px', // 设置auto 则自适父级高度
        keyName: 'name',
        keyCode: 'value',
        desc: '汇总情况',
        color: themeColors,
        radius: ['64%', '86%'],
        direction: 'horizontal', // 'horizontal', 'vertical'
        dispatchAction: true //  是否开启高亮循环动画
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
        const { keyCode, radius, color } = this.initConfig
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
              name: '',
              type: 'pie',
              radius: radius || ['65%', '86%'],
              center: ['50%', '50%'],
              hoverAnimation: true,
              hoverOffset: 5,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              data: seriesData
            }
          ]
        }
        return resolve({ option: initOption })
      })
    },
    dispatchActionAuto () {
      clearInterval(this.autoHightLightTimer)
      this.autoHightLightTimer = setInterval(() => {
        const dataLen = this.chartData.length
        this.chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: this.currentIndex })
        this.currentIndex = (this.currentIndex + 1) % dataLen
        this.chart.dispatchAction({
          seriesIndex: 0,
          type: 'highlight',
          dataIndex: this.currentIndex
        })
      }, 3000)
    }
  },
  render (h) {
    const { chartData, option, total } = this
    const { className, desc, unit, height, direction } = this.initConfig

    const ChartMainBox = h('div', { class: 'dva-chart-box' }, [
      h('dva-core-chart', {
        props: { option, ...this.$attrs },
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
          { [className]: true, [direction]: true }],
        style: {
          height
        }
      },
      [ChartMainBox, ChartDescBox])
  }
}
</script>

<style lang="scss">
.dva-pie-chart-main {
  display: flex;
  &.horizontal {
    flex-direction: row;
    align-items: stretch;
    .dva-chart-box {
      flex: 1;
    }
    .dva-chart-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &.vertical {
    flex-direction: column;
    .dva-chart-box {
      flex: 1;
    }
    .dva-chart-desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .dva-core-chart {
    .chart-desc {
      overflow: hidden;
    }
    .dva-chart-content-number {
      font-size: 22px;
      color: $base-color-yellow;
    }
  }
  .dva-chart-desc {
    .desc-item-cube {
      width: 8px;
      height: 8px;
      margin-right: 6px;
      display: inline-block;
    }
    .dva-chart-desc-item {
      cursor: pointer;
      display: grid;
      align-items: center;
      grid-template-columns: 14px 2fr 1fr;
    }
    .desc-item-name {
      padding-right: 20px;
    }
    .desc-item-value-count2 {
      padding: 0 4px;
      color: $base-color-yellow;
    }
  }
}
</style>
