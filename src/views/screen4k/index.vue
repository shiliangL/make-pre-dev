
<!--
 * @Author: shiliangL
 * @Date: 2022-06-28 18:01:15
 * @LastEditTime: 2022-06-28 19:33:14
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="screen4k">
    <div class="header">
      5G产业创新生态运营服务平台
    </div>
    <div class="aside-panel left">
      <div class="aside-group-item">
        <div class="aside-group-item-title">
          设备统计
        </div>
        <div class="aside-group-item-content">
          <DvaPieChart></DvaPieChart>
        </div>
      </div>
      <div class="aside-group-item">
        <div class="aside-group-item-title">
          设备统计
        </div>
        <div class="aside-group-item-content">
          <DvaLineChart></DvaLineChart>
        </div>
      </div>
      <div class="aside-group-item">
        <div class="aside-group-item-title">
          设备统计
        </div>
        <div class="aside-group-item-content">
          <DvaPieChart></DvaPieChart>
        </div>
      </div>
    </div>
    <div class="aside-panel right">
      <div class="aside-group-item">
        <div class="aside-group-item-title">
          设备统计
        </div>
        <div class="aside-group-item-content">
          <DvaPieChart></DvaPieChart>
        </div>
      </div>
      <div class="aside-group-item">
        <div class="aside-group-item-title">
          设备统计
        </div>
        <div class="aside-group-item-content">
          <DvaPieChart></DvaPieChart>
        </div>
      </div>
      <div class="aside-group-item">
        <div class="aside-group-item-title">
          设备统计
        </div>
        <div class="aside-group-item-content">
          <DvaPieChart></DvaPieChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Screen4kView',
  title: 'screen4k'
}
</script>

<style lang="scss" scoped>
.screen4k {
  position: relative;
  .header {
    top: 0;
    width: 100%;
    height: vh(140);
    position: fixed;
    font-size: vh(58);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #145a97;
  }
  .aside-panel {
    top: 50%;
    width: vw(768);
    height: vh(1542);
    position: fixed;
    padding: vw(20);
    border: 1px solid #145a97;
    transform: translate(0%, -46%);
    &.left {
      left: vw(30);
    }
    &.right {
      right: vw(30);
    }
  }

  .aside-group-item-title {
    font-size: vh(32);
    display: flex;
    height: vh(50);
    align-items: center;
    padding: 6px;
    background: $base-theme-gradient;
  }
  .aside-group-item-content {
    height: vh(320);
  }
}
</style>
