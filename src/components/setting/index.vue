<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 17:13:08
 * @LastEditTime: 2022-07-05 14:06:57
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="setting">
    <div
      class="el-icon-s-order"
      @click="drawer=true"
    > </div>

    <Drawer
      size="220px"
      :modal="false"
      :visible.sync="drawer"
      :with-header="false"
    >
      <div class="navigation">
        <div
          :class="['navigation-item',{'active': $route.name === item.name }]"
          @click="clickRow(item)"
          v-for="(item,index) in generatePage"
          :key="index"
        > {{ item.title }} </div>
      </div>
    </Drawer>
  </div>
</template>

<script>

import { Drawer } from 'element-ui'
import generatePage from '@/views/index'
// console.log(generatePage, '=generatePage=')

export default {
  name: 'SettingDrawer',
  components: {
    Drawer
  },
  data () {
    return {
      drawer: false,
      generatePage
    }
  },
  methods: {
    clickRow (item) {
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-icon-s-order {
  top: 20px;
  width: 30px;
  height: 30px;
  right: 10px;
  display: flex;
  cursor: pointer;
  position: fixed;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #eee;
  // transform: translateY(-50%);
}

.navigation {
  height: 100%;
  padding: 10px;
  overflow-y: auto;
  color: #333;
  .navigation-item {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    color: var(--text-black-color);
    border: 1px solid #eee;
    margin-bottom: 10px;
    transition: all 0.3s;
    &.active,
    &:hover {
      color: var(--text-white-color);
      border: 1px solid var(--primary-color);
      background-color: var(--primary-color);
    }
  }
}
</style>
