<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-06-20 17:18:32
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div id="app">
    <router-view />
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
export default {
  components: {
    SettingDrawer: () => import('@/components/setting/index.vue')
  }
}
</script>
