<!--
 * @Author: shiliangL
 * @Date: 2022-04-07 11:04:52
 * @LastEditTime: 2022-05-16 14:26:23
 * @LastEditors: Do not edit
 * @Description: 
-->

## dva-count2 数字滚动

基本介绍

跳跳的数据

### dva-count2 基础用法

简单配置使用, 设置 `end` 目标值跳动

:::demo

```html
<template>
    <div class="flex-item-list dva-count2">
        <dva-count2 :end="2040 * 1" />
        <dva-count2 :end="2040 * 2" />
        <dva-count2 :end="2040 * 3" />
        <dva-count2 ref="count2" :end="2040 * 4" />
    </div>
</template>
```

:::

### dva-count2 设置 `onTimeLoop` 定时自动跳动。定时的去刷新，让数据偶尔的“诈尸”一下

:::demo

```html
<template>
    <div class="flex-item-list dva-count2">
        <dva-count2 :onTimeLoop="3000" :end="2040 * 1" />
        <dva-count2 :onTimeLoop="3000" :end="2040 * 2" />
        <dva-count2 :onTimeLoop="3000" :end="2040 * 3" />
        <dva-count2 :onTimeLoop="3000" :end="2040 * 4" />
    </div>
</template>
```

:::

### dva-count2 设置插槽使用, 就是为了这种“错落感”

:::demo

```html
<template>
    <div class="flex-item-list dva-count2">
        <dva-count2 :onTimeLoop="3000" :end="2040 * 1">
            <span slot="prefix" class="fix-desc"> 销售总量 </span>
            <span slot="suffix" class="fix-desc"> 万 </span>
        </dva-count2>
        <dva-count2 :onTimeLoop="3000" :end="2040 * 2">
            <span slot="prefix" class="fix-desc"> 销售总量 </span>
            <span slot="suffix" class="fix-desc"> 万 </span>
        </dva-count2>
        <dva-count2 :onTimeLoop="3000" :end="2040 * 3">
            <span slot="prefix" class="fix-desc"> 销售总量 </span>
            <span slot="suffix" class="fix-desc"> 万 </span>
        </dva-count2>
        <dva-count2 :onTimeLoop="3000" :end="2040 * 4">
            <span slot="prefix" class="fix-desc"> 销售总量 </span>
            <span slot="suffix" class="fix-desc"> 万 </span>
        </dva-count2>
    </div>
</template>
```

:::

当然如果你懒的话还可以这样，只是没“那种感觉”你懂的。

:::demo

```html
<template>
    <div class="flex-item-list dva-count2">
        <dva-count2 prefix="累计成交" suffix="万" :onTimeLoop="3000" :end="2040 * 10" />
        <dva-count2 prefix="累计成交" suffix="万" :onTimeLoop="3000" :end="2040 * 20" />
        <dva-count2 prefix="累计成交" suffix="万" :onTimeLoop="3000" :end="2040 * 30" />
        <dva-count2 prefix="累计成交" suffix="万" :onTimeLoop="3000" :end="2040 * 40" />
    </div>
</template>
```

:::

### dva-count2 其他配置

:::demo

```html
<template>
    <div class="flex-item-list dva-count2">
        <dva-count2 prefix="累计成交" suffix="万" separator="," :decimals="2" :onTimeLoop="3000" :end="2040 * 10" />
        <dva-count2 prefix="累计成交" suffix="万" separator="," :decimals="2" :onTimeLoop="3000" :end="2040 * 20" />
        <dva-count2 prefix="累计成交" suffix="万" separator="," :decimals="2" :onTimeLoop="3000" :end="2040 * 30" />
        <dva-count2 prefix="累计成交" suffix="万" separator="," :decimals="2" :onTimeLoop="3000" :end="2040 * 40" />
    </div>
</template>
```

:::

### dva-count2 配置属性

| 参数       | 说明         | 类型    | 可选值 | 默认值 |
| ---------- | ------------ | ------- | ------ | ------ |
| start      |    开始值    | Number  |        |   0    |
| end        |    结束值    | Number  |        |   0    |
| autoplay        |    是否自动    | Boolean  |        |    true    |
| decimals        |    允许小数位数    | Number  |        |    0    |
| separator        |    千位分隔符    | String  |        |        |
| prefix        |    前缀    | String  |        |        |
| suffix        |    后缀    | String  |        |        |
| duration   |    数字动画持续时间    | Number  |        |   3000    |
| onTimeLoop      |    自动循环时间    | Number  |        |   0    |
| prefixLoopTime  |    自动刷新时间增量    | Number  |        |   2000    |

### dva-count2 插槽

装饰器作为配置饼图或者圆环图表，提供的一层动态图表，如描述只是装饰作用而已。

| name           | 说明                | 
| -------------- | ------------------- |  
| prefix           | 组件之前插入       |  
| suffix           | 组件之后插入       |  
