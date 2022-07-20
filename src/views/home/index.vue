<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-20 20:49:16
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
      <DvaSwiper
        :data="dvaSwiperData"
        :config="dvaSwiperConfig"
      ></DvaSwiper>
    </div>
    <div class="border-box-contaier">
      <DvaSwiper :data="dvaSwiperData">
        <div slot="header">
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
// @ is an alias to /src
export default {
  name: 'HomeView',
  title: '系统首页',
  components: {
  },
  data () {
    return {
      dvaSwiperData: [],
      dvaSwiperConfig: {
        slidesPerView: 4
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.dvaSwiperData = new Array(20).fill({ name: 'dva-datav' }).map((item, index) => ({ ...item, index }))
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
.border-box-contaier {
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #000;
}
</style>
