<!--
 * @Author: shiliangL
 * @Date: 2022-04-07 11:04:52
 * @LastEditTime: 2022-05-31 16:16:08
 * @LastEditors: Do not edit
 * @Description: 
-->

## dva-radius-chart 圆环进度图表

用于展示数据进度百分百或者其他数据汇总情况占比。

### dva-radius-chart 基础用法

简单配置使用, 设置 `percent` 目标进度情况

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-radius-chart :percent="Math.ceil(Math.random() * 100)" />
        <dva-radius-chart :percent="Math.ceil(Math.random() * 100)" />
        <dva-radius-chart :percent="Math.ceil(Math.random() * 100)" />
        <dva-radius-chart :percent="Math.ceil(Math.random() * 100)" />
    </div>
</template>
```

:::

 颜色配置使用

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-radius-chart :color="['rgb(32, 160, 255)','rgb(32, 160, 255,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
        <dva-radius-chart :color="['rgb(19, 206, 102)','rgb(19, 206, 102,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
        <dva-radius-chart :color="['rgb(230, 162, 60)','rgb(230, 162, 60,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
        <dva-radius-chart :color="['rgb(255, 73, 73)','rgb(255, 73, 73,0.22)']" :percent="Math.ceil(Math.random() * 100)" />
    </div>
</template>
```

:::

 配置插槽使用

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-radius-chart :color="['rgb(32, 160, 255)','rgb(32, 160, 255,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
        <dva-radius-chart :color="['rgb(19, 206, 102)','rgb(19, 206, 102,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
        <dva-radius-chart :color="['rgb(230, 162, 60)','rgb(230, 162, 60,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
        <dva-radius-chart :color="['rgb(255, 73, 73)','rgb(255, 73, 73,0.22)']" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
    </div>
</template>
```

:::

 配置图表渐变颜色

:::demo 配置图表渐变颜色。使用 `echarts` 渐变颜色规范配置。

```html
<template>
    <div class="flex-item-list">
        <dva-radius-chart :color="colorArray1" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
        <dva-radius-chart :color="colorArray2" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
        <dva-radius-chart :color="colorArray3" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
        <dva-radius-chart :color="colorArray4" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colorArray1: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#00fcae'
                        },
                        {
                            offset: 1,
                            color: '#006388'
                        }
                    ]
                }, '#123146'],
                colorArray2: [{
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: '#585fe1'
                        },
                        {
                            offset: 1,
                            color: '#00FFE3'
                        }
                    ]
                }, '#123146'],
                colorArray3: [{
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: '#00a2ff'
                        },
                        {
                            offset: 1,
                            color: '#70ffac'
                        }
                    ]
                }, '#123146'],
                colorArray4: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#00FFE3'
                        },
                        {
                            offset: 1,
                            color: '#4693EC'
                        }
                    ]
                }, '#123146']
            }
        },
    }
</script>
```

:::

 高级配置, 配置使用装饰器, 美其名曰- `颜值`

:::demo

```html
<template>
    <div class="flex-item-list">
        <dva-radius-chart :color="colorArray1" :percent="82" :decoratorConfig="decoratorConfig1">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>

        <dva-radius-chart :color="colorArray2" :percent="Math.ceil(Math.random() * 100)">
            <div class="desc-box">
                <div class="desc-box-item">
                    <dva-count2 :end="2040 * 3" />
                </div>
                <div class="desc-box-item">
                    销售总数
                </div>
            </div>
        </dva-radius-chart>
    </div>
</template>

<script>
    // 24 = 100
    const labelData = new Array(1).fill(0).map((item, index) => ({
        value: 100,
        name: index,
        itemStyle: {
            normal: {
                color: 'rgba(0,209,228,0)',
            }
        }
    }));

    for (let i = 0; i < labelData.length; ++i) {
        if (labelData[i].name < 20) {
            labelData[i].itemStyle = {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: '#00fcae'
                            },
                            {
                                offset: 1,
                                color: '#006388'
                            }
                        ]
                    }
                },
            }
        }
    }

    export default {
        data() {
            return {
                colorArray1: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#00fcae'
                        },
                        {
                            offset: 1,
                            color: '#006388'
                        }
                    ]
                }, '#123146'],
                decoratorConfig1: {
                    show: true,
                    animation: false,
                    option: {
                        backgroundColor: 'transparent',
                        series: [{
                            type: 'pie',
                            hoverAnimation: false,
                            radius: ['62%', '70%'],
                            itemStyle: {
                                normal: {
                                    borderWidth: 0.5,
                                    borderColor: '#180f2a',
                                }
                            },
                            label: {
                                normal: {
                                    show: false,
                                }
                            },
                            data: labelData,
                        }]
                    }
                },
                colorArray2: [{
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: '#585fe1'
                        },
                        {
                            offset: 1,
                            color: '#00FFE3'
                        }
                    ]
                }, '#123146'],
            }
        },
    }
</script>
```

:::

### dva-radius-chart 配置属性

| 参数       | 说明         | 类型    | 可选值 | 默认值 |
| ---------- | ------------ | ------- | ------ | ------ |
| config      |    配置信息，见如下    | Object  |        |       |
| decoratorConfig      |    装饰器信息，见如下    | Object  |        |       |
| percent      |    进度值    | Number  |        |       |
| color        |    颜色值, color.length === 2, 可配置渐变   | String, Array |        |    ['rgb(32, 160, 255)', 'rgb(20, 160, 255, 0.22)']   |

### dva-radius-chart config 配置属性

| 参数       | 说明         | 类型    | 可选值 | 默认值 |
| ---------- | ------------ | ------- | ------ | ------ |
| unit      |    单位    | String  |        |    '%'   |
| height      |    图表高度，如果设置'100%'则随父级高度    | String  |        |    '180px'   |
| desc      |    图表描述    | String  |        |    '开发进度'   |
| radius      |    图表半径配置    | Array  |        |    ['74%', '86%']   |

### dva-radius-chart decoratorConfig 配置属性

| 参数           | 说明                | 类型    | 可选值 | 默认值 |
| -------------- | ------------------- | ------- | ------ | ------ |
| show           | 是否显示            | Boolean | -      | false  |
| option         | 图表配置            | Object  | -      |  { }   |
| animation      | 是否开启旋转动画    | Boolean | -      | true   |
| animationDelay | 动画延迟时间 单位 ms | Number  | -      |  3000  |
| animationTime  | 单位 ms              | Number  | -      | 30 * 1000  |

### dva-radius-chart 插槽

给 `dva-radius-chart` 提供自定义渲染内容的插槽

| name           | 说明                | 
| -------------- | ------------------- |  
| 无              |  自定义插入内容     |  
