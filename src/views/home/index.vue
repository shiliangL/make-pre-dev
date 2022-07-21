<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-21 15:47:50
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="page">
    <div class="border-box-contaier">
      <DvaBorderBox1> </DvaBorderBox1>
    </div>
    <div class="border-box-contaier">
      <DvaBorderBox2> </DvaBorderBox2>
    </div>
    <div class="border-box-contaier">
      <DvaBorderBox3> </DvaBorderBox3>
    </div>
    <div class="border-box-contaier">
      <DvaEmpty></DvaEmpty>
    </div>
    <div class="border-box-contaier">
      水平滚动网格布局
      <DvaSwiper
        :data="dvaSwiperData"
        :config="horizontal.config"
        :carouselStyle="horizontal.carouselStyle"
      >
        <div
          slot="slide"
          slot-scope="{ item }"
        >
          datav
          <span v-if="0"> {{ item }}</span>
        </div>
      </DvaSwiper>
    </div>
    <div class="border-box-contaier">
      垂直滚动网格布局
      <DvaSwiper
        :data="dvaSwiperData"
        :config="vertical.config"
        :carouselStyle="vertical.carouselStyle"
      >
        <div
          slot="slide"
          slot-scope="{ item }"
        >
          datav
          <span v-if="0"> {{ item }}</span>
        </div>
      </DvaSwiper>
    </div>
    <div class="border-box-contaier">
      <DvaSwiper :data="dvaSwiperData">
        <div slot="header" v-if="0">
          销售排行榜
        </div>
        <div
          slot="slide"
          slot-scope="{ item }"
        >
          {{ item }}
        </div>
      </DvaSwiper>
    </div>
    <!-- <DraggableElement></DraggableElement> -->
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  title: '系统首页',
  data () {
    return {
      dvaSwiperData: [],
      // 水平配置
      horizontal: {
        config: {
          direction: 'horizontal',
          slidesPerView: 3, // 排列个数
          spaceBetween: 4, // 排列间隔
          grid: {
            rows: 2, // 设置网格中Slide的行数
            // 设置网格中Slide的行数。
            // 当设置row>1时目前还不兼容loop模式（loop: true）。
            // 在Slide数量不足以填满的情况下可能会出现布局不理想（例如4行3列，但是只有10个Slide），建议使用空的Slide将数量补足
            fill: 'row' // 设置网格的排列方向，默认 column 为竖向，row为横向
          }
        },
        carouselStyle: {
          height: 'calc((100% - 4px) / 2)'
        }
      },
      // 垂直配置
      vertical: {
        config: {
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween: 4,
          grid: {
            rows: 3,
            fill: 'row'
          }
        },
        carouselStyle: {
          width: 'calc((100% - 4px) / 3)'
        }
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.dvaSwiperData = new Array(20).fill({ name: 'dva-datav' }).map((item, index) => ({ ...item, index }))
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.page {
  gap: 10px;
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: rows(3, 300px);
}
.border-box-contaier {
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #000;
  border: 1px solid rgb(0, 43, 220);
}
</style>
