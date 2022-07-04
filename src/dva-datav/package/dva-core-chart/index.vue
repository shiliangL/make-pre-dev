<!--
 * @Author: shiliangL
 * @Date: 2022-03-10 11:41:20
 * @LastEditTime: 2022-07-04 17:47:44
 * @LastEditors: Do not edit
 * @Description: 核心图表组件
-->
<script>

import { deepMerge } from 'dva-datav/utils'
import { debounce } from 'throttle-debounce'
import { addListener, removeListener } from 'resize-detector'

export default {
  name: 'DvaCoreChart',
  props: {
    option: {
      type: Object,
      desc: '图表配置项',
      default: () => ({})
    },
    autoResize: {
      desc: '是否适配容器宽高自动刷新',
      type: Boolean,
      default: true
    },
    decoratorConfig: {
      desc: '装饰器图表配置',
      type: Object,
      default: () => ({})
    },
    manualUpdate: {
      desc: '是否手动更新图表option与否',
      type: Boolean,
      default: false
    },
    watchShallow: {
      desc: '是否更新图表option浅',
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 默认装饰器配置
      initDecoratorConfig: {
        show: false,
        animation: true,
        animationDelay: 3000,
        animationTime: 30 * 1000,
        option: {}
      }
    }
  },
  created () {
    // 合并装饰器配置
    deepMerge(this.initDecoratorConfig, this.decoratorConfig)
    this.initOptionsWatcher()
  },
  mounted () {
    this.$nextTick().then(() => {
      this.initDvaChart()
    })
    this.$once('hook:beforeDestroy', () => {
      this._chart && this._chart.dispose()
      this._decoratorChart && this._decoratorChart.dispose()
      if (this.autoResize) removeListener(this.$el, this._resizeHandler)
      if (this._unwatchOptions) {
        this._unwatchOptions()
        this._unwatchOptions = null
      }
    })
  },
  methods: {
    initDvaChart () {
      const { echarts } = window
      if (!echarts) return console.error('请引入使用echarts')
      const { $dvaChartRenderOpts, option, initDecoratorConfig } = this
      const chart = this.$el.querySelector('.dva-core-chart-canvas')
      this._chart = echarts.init(chart, null, $dvaChartRenderOpts)
      this._chart.setOption(option || {}, true)
      this.$emit('ready', this._chart)
      // 是否装载装饰器
      if (initDecoratorConfig.show) {
        const decoratorChart = this.$el.querySelector('.dva-core-chart-decorator')
        if (!decoratorChart) return
        this._decoratorChart = echarts.init(decoratorChart, null, $dvaChartRenderOpts || {})
        this._decoratorChart.setOption(initDecoratorConfig.option || {}, true)
      }
      // 是否自动适配
      if (this.autoResize) {
        this._resizeHandler = debounce(20, (dom) => this.resizeDvaChart(dom), { atBegin: true })
        addListener(this.$el, this._resizeHandler)
      }
      // 事件绑定
      Object.keys(this.$listeners).forEach(event => {
        const handler = this.$listeners[event]
        if (event.indexOf('zr:') === 0) {
          this._chart.getZr().on(event.slice(3), handler)
        } else {
          this._chart.on(event, handler)
        }
      })
    },
    resizeDvaChart (dom) {
      console.log('是否自动适配')
      // offsetWidth offsetHeight
      this.$emit('resize', dom)
      this._chart && this._chart.resize()
      this._decoratorChart && this._decoratorChart.resize()
    },
    initOptionsWatcher () {
      if (this._unwatchOptions) {
        this._unwatchOptions()
        this._unwatchOptions = null
      }
      if (this._unwatchDescOptions) {
        this._unwatchDescOptions()
        this._unwatchDescOptions = null
      }
      if (!this.manualUpdate) {
        this._unwatchOptions = this.$watch(
          'option',
          (newVal, oldVal) => {
            if (!this._chart && newVal) {
              this.initDvaChart()
            } else {
              this._chart && this._chart.setOption(newVal || {}, newVal !== oldVal)
            }
          },
          { deep: !this.watchShallow }
        )
        const { show } = this.initDecoratorConfig
        if (!show) return
        this._unwatchDescOptions = this.$watch(
          'decoratorConfig.option',
          (newVal, oldVal) => {
            if (!this._decoratorChart && newVal) {
              this.initDvaChart()
            } else {
              this._decoratorChart && this._decoratorChart.setOption(newVal || {}, newVal !== oldVal)
            }
          },
          { deep: !this.watchShallow }
        )
      }
    }
  },
  render (h) {
    const { initDecoratorConfig } = this
    const dvaChart = h('div', { class: 'dva-core-chart-canvas' })
    const decoratorChart = h('div', {
      class: 'dva-core-chart-decorator',
      style: {
        animation: initDecoratorConfig.animation ? `rotation ${initDecoratorConfig.animationTime}ms linear ${initDecoratorConfig.animationDelay}ms infinite` : 'none'
      }
    })
    return h('div', { class: 'dva-core-chart' }, [
      dvaChart,
      initDecoratorConfig.show ? decoratorChart : null,
      this.$slots.default ? h('div', { class: 'dva-core-chart-desc' }, this.$slots.default) : null
    ])
  }
}
</script>

<style lang="scss">
.dva-core-chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .dva-core-chart-canvas {
    left: 0;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .dva-core-chart-desc {
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    flex-direction: column;
    justify-content: center;
  }
  .dva-core-chart-decorator {
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
