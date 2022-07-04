<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-04 14:51:01
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="about">
    <dva-count2 :end="23232">   </dva-count2>
    <h1>This is an about page</h1>
    <DvaProgress></DvaProgress>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'AboutView',
  title: '关于我们',
  components: {
  }
}
</script>
