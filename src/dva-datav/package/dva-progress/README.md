<!--
 * @Author: shiliangL
 * @Date: 2022-04-07 11:04:52
 * @LastEditTime: 2022-05-23 09:40:58
 * @LastEditors: Do not edit
 * @Description: 
-->

## dva-progress 数据进度条

用于展示数据占比情况，告知用户当前状态和预期。

### dva-progress 基础用法

简单配置使用, 设置 `percent` 目标值跳动

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-progress :percent="Math.ceil(Math.random() * 100)" />
        <dva-progress :percent="Math.ceil(Math.random() * 100)" />
        <dva-progress :percent="Math.ceil(Math.random() * 100)" />
        <dva-progress :percent="Math.ceil(Math.random() * 100)" />
    </div>
</template>
```

:::

 颜色配置使用

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-progress :color="['rgb(32, 160, 255)','rgb(32, 160, 255,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
        <dva-progress :color="['rgb(19, 206, 102)','rgb(19, 206, 102,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
        <dva-progress :color="['rgb(230, 162, 60)','rgb(230, 162, 60,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
        <dva-progress :color="['rgb(255, 73, 73)','rgb(255, 73, 73,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
    </div>
</template>
```

:::

 配置插槽使用

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-progress :color="['rgb(32, 160, 255)','rgb(32, 160, 255,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="flex-box">
                <div class="flex-box-item">
                    销售总数
                </div>
                <div class="flex-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
            </div>
        </dva-progress>
        <dva-progress :color="['rgb(19, 206, 102)','rgb(19, 206, 102,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="flex-box">
                <div class="flex-box-item">
                    销售总数
                </div>
                <div class="flex-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
            </div>
        </dva-progress>
        <dva-progress :color="['rgb(230, 162, 60)','rgb(230, 162, 60,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="flex-box">
                <div class="flex-box-item">
                    销售总数
                </div>
                <div class="flex-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
            </div>
        </dva-progress>
        <dva-progress :color="['rgb(255, 73, 73)','rgb(255, 73, 73,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="flex-box">
                <div class="flex-box-item">
                    销售总数
                </div>
                <div class="flex-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
            </div>
        </dva-progress>
    </div>
</template>
```

:::

### dva-progress 配置属性

| 参数       | 说明         | 类型    | 可选值 | 默认值 |
| ---------- | ------------ | ------- | ------ | ------ |
| title      |    描述内容    | String  |        |       |
| percent      |    进度值    | Number  |        |       |
| showPercent      |    是否显百分百    | Boolean  |        |   false    |
| strokeHeight        |    高度    | Number  |        |   14    |
| color        |    颜色值, 如果传入数组显示为渐变色   | String, Array |        |    ['rgb(32, 160, 255)', 'rgb(20, 160, 255,0.22)']   |
| trackColor        |    轨道颜色    | String  |        |   '#9d99992b'    |
| active        |    激活效果    | Boolean  |        |   true    |
| decorator        |    底部装饰线    | Boolean  |        |   true    |

### dva-progress 插槽

给 `dva-progress` 提供自定义渲染内容的插槽

| name           | 说明                | 
| -------------- | ------------------- |  
| 无              |  自定义插入内容     |  
