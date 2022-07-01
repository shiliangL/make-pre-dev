<!--
 * @Author: shiliangL
 * @Date: 2022-07-01 09:13:25
 * @LastEditTime: 2022-07-01 09:42:47
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div>Text</div>
</template>

<script>
export default {
  name: 'DvaProgress'
}
</script>

<style lang="scss" scoped>

div {
  width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    position: relative;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    cursor: pointer;
    &:hover {
        filter: contrast(1.1);
    }
    &:active {
        filter: contrast(0.9);
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 10px;
        transition: all 2s;
        border: 2px solid gold;
        animation: clippath 5s infinite linear;
    }

    &::after {
        animation: clippath 5s infinite -2.5s linear;
    }
}

@keyframes clippath {
    0%,
    100% {
        clip-path: inset(0 0 98% 0);
    }

    25% {
        clip-path: inset(0 98% 0 0);
    }
    50% {
        clip-path: inset(98% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 98%);
    }
}

</style>
