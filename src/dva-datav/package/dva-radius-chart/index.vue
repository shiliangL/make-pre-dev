<!--
 * @Author: shiliangL
 * @Date: 2022-03-10 11:41:20
 * @LastEditTime: 2022-07-04 14:34:04
 * @LastEditors: Do not edit
 * @Description: 圆环图表
-->
<script>

import { deepMerge } from '@/utils'
import DvaCount2 from '../dva-count2'
import DvaCoreChart from '../dva-core-chart'

export default {
  name: 'DvaRadiusChart',
  props: {
    percent: {
      type: [Number],
      desc: '进度配置',
      default: () => 20
      // validator: (value) => value <= 100
    },
    color: {
      type: [Array],
      desc: '颜色配置',
      validator: (value) => (value.length >= 2),
      default: () => ['rgb(32, 160, 255)', 'rgb(20, 160, 255, 0.22)']
    },
    config: {
      type: Object,
      desc: '配置项',
      default: () => ({})
    }
  },
  components: {
    DvaCount2,
    DvaCoreChart
  },
  data () {
    return {
      option: {},
      initConfig: {
        unit: '%',
        height: '180px',
        desc: '开发进度',
        radius: ['74%', '86%']
      }
    }
  },
  created () {
    deepMerge(this.initConfig, this.config)
  },
  watch: {
    percent: {
      immediate: true,
      handler () {
        this.handlerOption().then(({ option }) => {
          this.option = option || {}
        })
      }
    }
  },
  methods: {
    ready (chart) {
      this._chart = chart
      this.$emit('ready', chart)
    },
    handlerOption () {
      return new Promise((resolve) => {
        let seriesData = []
        const { percent, color } = this
        const { radius } = this.initConfig
        const chartValue = [percent, (100 - percent)]
        const placeholder = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 0,
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)'
          }
        }
        if (percent < 100) {
          for (let i = 0; i < chartValue.length; i++) {
            seriesData.push({
              name: '',
              itemStyle: {
                color: color[i]
              },
              value: chartValue[i]
            }, {
              name: '',
              value: 0,
              itemStyle: placeholder
            })
          }
        } else {
          seriesData = [
            {
              name: '',
              value: percent,
              itemStyle: { color: color[0] }
            }
          ]
        }
        const initOption = {
          backgroundColor: 'transparent',
          animationEasing: 'elasticOut',
          animationDelayUpdate: (k) => 5 * k,
          series: [
            {
              name: '',
              type: 'pie',
              hoverAnimation: false,
              animationDelay: (idx) => idx * 10,
              radius: (radius && radius.length) ? radius : ['74%', '86%'],
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
    }
  },
  render (h) {
    const { option, percent } = this
    const { desc, unit, height } = this.initConfig
    const dvaChart = h('dva-core-chart', {
      props: { option, ...this.$attrs },
      on: {
        ...this.$listeners,
        ready: (chart) => this.ready(chart)
      }
    }, [
      this.$slots.default
        ? this.$slots.default
        : [
            h('dva-count2', { class: 'dva-chart-number', props: { end: percent } }, [
              h('span', { class: 'dva-chart-unit', slot: 'suffix' }, unit)
            ]),
            h('div', { class: 'dva-chart-content-desc' }, desc)
          ]
    ])

    return h('div', {
      class: ['dva-radius-chart'],
      style: {
        height
      }
    }, [
      dvaChart
    ])
  }
}
</script>

<style lang="scss">
.dva-radius-chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .dva-chart-number {
    font-size: 22px;
    color: $base-color-yellow;
    .dva-chart-unit {
      font-size: 14px;
      margin-left: -2px;
    }
  }
}
</style>
