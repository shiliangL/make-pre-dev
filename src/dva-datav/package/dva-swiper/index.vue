<!--
 * @Author: shiliangL
 * @Date: 2022-07-20 15:26:36
 * @LastEditTime: 2022-07-21 14:57:23
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import { uuid } from 'dva-datav/utils'

export default {
  name: 'DvaSwiper',
  props: {
    data: {
      type: Array,
      desc: '数据配置项',
      default: () => []
    },
    config: {
      type: Object,
      desc: 'Swiper配置项',
      default: () => ({})
    },
    carouselStyle: {
      type: Object,
      desc: '走马灯样式',
      default: () => ({})
    },
    carouselClassName: {
      type: String,
      desc: '走马灯等类名',
      default: () => ''
    }
  },
  data () {
    return {
      defaultConfig: {
        loop: true,
        observer: true,
        direction: 'vertical',
        autoplay: {
          disableOnInteraction: false
        },
        spaceBetween: 4,
        slidesPerView: 5,
        pagination: false
      },
      mergedConfig: {}
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.initSwiper()
    })
    this.$once('hook:beforeDestroy', () => {
      this._swiper && this._swiper.destroy(false)
    })
  },
  methods: {
    uuid,
    initSwiper () {
      const { Swiper } = window
      if (!Swiper) return console.error('请引入使用Swiper')
      const { defaultConfig, config } = this
      this._swiper = new Swiper(this.$el.querySelector('.swiper'), {
        ...defaultConfig,
        ...config
      })
      this.$emit('ready', this._swiper)
      if (this._swiper) {
        this._swiper.el.onmouseover = () => {
          this._swiper.autoplay && this._swiper.autoplay && this._swiper.autoplay.stop()
        }
        this._swiper.el.onmouseout = () => {
          this._swiper.autoplay && this._swiper.autoplay.start && this._swiper.autoplay.start()
        }
      }
    }
  },
  render (h) {
    return h('div', { class: 'dva-swiper' }, [
      h('div', { class: 'swiper-header' }, [
        this.$slots.header ? this.$slots.header : null
      ]),
      h('div', { class: 'swiper' }, [
        h('div', { class: 'swiper-wrapper' }, [
          this.data.map((item) => {
            return h('div', { class: ['swiper-slide', { [this.carouselClassName]: true }], style: { ...this.carouselStyle } }, [
              this.$scopedSlots.slide ? this.$scopedSlots.slide({ item: item }) : '<div slot="slide" slot-scope="{ item }" /> 请使用插槽自定义内容'
            ])
          })
        ])
      ]),
      h('div', { class: 'pagination' })
    ])
  }
}
</script>

<style lang="scss" scoped>
.dva-swiper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .swiper {
    flex: 1;
    width: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(0, 123, 255, 0.333) 0%,
      rgba(38, 191, 255, 0) 100%
    );
  }
}
</style>
