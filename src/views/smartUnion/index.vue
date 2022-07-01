<!--
 * @Author: shiliangL
 * @Date: 2022-06-21 16:15:02
 * @LastEditTime: 2022-07-01 09:15:06
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="smartUnion">
    <div
      class="list-item"
      v-for="item in  list"
      :key="item.id"
      @click="item.click ? item.click() : ()=>({})"
    >
      <div v-text="item.name"> </div>
      <div v-text="item.number"> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartUnion',
  title: '智慧物联',
  data () {
    return {
      list: new Array(24).fill(0).map((value, index, array) => ({
        name: `物联设备${index}`,
        id: index,
        click: () => {
          console.log(this)
        }
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 4px;
  cursor: pointer;
}
</style>
