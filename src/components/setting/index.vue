<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 17:13:08
 * @LastEditTime: 2022-06-20 17:44:13
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div>
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
        <div class="navigation-item" v-for="item in 1000" :key="item"> 导航 </div>
      </div>
    </Drawer>
  </div>
</template>

<script>

import { Drawer } from 'element-ui'

export default {
  name: 'SettingDrawer',
  components: {
    Drawer
  },
  data () {
    return {
      drawer: false,
      message: 'Hello Vue!'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-icon-s-order {
  top: 50%;
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
  transform: translateY(-50%);
}

.navigation {
  height: 100%;
  padding: 10px;
  overflow-y: auto;
}
</style>
