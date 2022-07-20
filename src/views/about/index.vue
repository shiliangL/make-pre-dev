<!--
 * @Author: shiliangL
 * @Date: 2022-06-20 16:20:54
 * @LastEditTime: 2022-07-20 10:28:08
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="about">
    <div class="grid-group">
      <div class="grid-group-item">
        <dva-count2 :end="23232"> </dva-count2>
      </div>
      <div class="grid-group-item">
        <h1>This is an about page</h1>
      </div>
      <div class="grid-group-item">
        <DvaProgress></DvaProgress>
      </div>
      <div class="grid-group-item">
        <div class="arrow">
          设备在线率
        </div>
      </div>
      <div class="grid-group-item">
        <div class="decorator-square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  title: '关于我们',
  components: {
  }
}
</script>

<style lang="scss" scoped>

@keyframes radiationCircle {
  0% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
}

.about {
  width: 100%;
  height: 100%;
  .grid-group {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 140px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .grid-group-item {
      padding: 10px;
      border: 1px solid rgba(0, 123, 255, 0.603);
    }
  }

  .decorator-square {
    width: 20px;
    height: 20px;
    overflow: hidden;
    position: relative;
    transform: rotate(45deg);
    background: rgba(0, 123, 255, 0.44);
    &::after {
      left: 50%;
      top: 50%;
      content: "";
      width: 54%;
      height: 54%;
      position: absolute;
      // transform: translate(-50%, -50%);
      background: rgba(0, 123, 255, 0.88);

      animation-duration: 3s;
      animation-name: radiationCircle;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
    }
  }
}
.arrow {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 24px;
  clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%);
  background: linear-gradient(
    90deg,
    rgba(0, 123, 255, 0.333) 0%,
    rgba(38, 191, 255, 0) 100%
  );
}
</style>
