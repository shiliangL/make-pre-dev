<!--
 * @Author: shiliangL
 * @Date: 2022-04-07 11:04:52
 * @LastEditTime: 2022-05-25 11:15:03
 * @LastEditors: Do not edit
 * @Description: 
-->

## dva-core-chart 核心图表组件

基本介绍

dva-core-chart 作为渲染图图表的核心组件。作为图表的基本容器，传入图表的 `option` 配置即可完成各自图表的渲染。
任意的图表。都可以通过 `dva-core-chart` 绘制展现。



### 基础用法

dva-core-chart 配置饼图

:::demo

```html
<template>
    <div class="cube-chart-list">
        <dva-core-chart @ready="ready" style="width: 520px;height: 320px;" autoresize :option="chartConfig" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chartConfig: {
                    backgroundColor: 'transparent',
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: (k) => 5 * k,
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        // orient: 'vertical',
                        textStyle: {
                            color: '#fff'
                        },
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    color: [
                        '#00ffff',
                        '#006ced',
                        '#00cfff',
                        '#04e893',
                        '#ffe000',
                        '#F39200',
                        '#F84949',
                        '#FC6AA4',
                        '#C182E5',
                        '#9044F5',
                        '#592CF3'
                    ],
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '60%',
                        center: ['50%', '60%'],
                        data: [{
                                value: 335,
                                name: '直接访问'
                            },
                            {
                                value: 310,
                                name: '邮件营销'
                            },
                            {
                                value: 234,
                                name: '联盟广告'
                            },
                            {
                                value: 135,
                                name: '视频广告'
                            },
                            {
                                value: 1548,
                                name: '搜索引擎'
                            }
                        ]
                    }]

                },
            };
        },
        methods: {
            ready(chart) {
                console.log(chart);
            }
        },
    };
</script>
```

:::
dva-core-chart 配置环形图

:::demo

```html
<template>
    <div class="cube-chart-list">
        <dva-core-chart @ready="ready" style="width: 520px;height: 320px;" autoresize :option="chartConfig" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chartConfig: {
                    backgroundColor: 'transparent',
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: (k) => 5 * k,
                    series: [{
                            name: '人员类型',
                            type: 'pie',
                            hoverAnimation: false,
                            legendHoverLink: false,
                            radius: ['38%', '45%'],
                            color: ['#006495', '#1D5F84', '#255C6D', '#3C5C67', '#40486C', '#3F3C73', '#403D84', '#1F3A8D', '#0B3B77'],
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            data: [{
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                },
                                {
                                    value: 100,
                                    name: ''
                                }
                            ]
                        },
                        {
                            name: '人员类型',
                            type: 'pie',
                            radius: ['43%', '55%'],
                            color: ['#00FFFF', '#44EAB1', '#7BDD43', '#FEBE12', '#EBEC2F', '#FF7C44', '#FA3E5F', '#6635EF', '#FFAFDA'],
                            labelLine: {
                                show: false
                            },
                            label: {
                                show: false
                            },
                            data: [{
                                    value: 100,
                                    name: '社工'
                                },
                                {
                                    value: 100,
                                    name: '养老护理员'
                                },
                                {
                                    value: 100,
                                    name: '康复师'
                                },
                                {
                                    value: 100,
                                    name: '心理咨询师'
                                },
                                {
                                    value: 100,
                                    name: '医生'
                                },
                                {
                                    value: 100,
                                    name: '护士'
                                },
                                {
                                    value: 100,
                                    name: '管理人员'
                                },
                                {
                                    value: 100,
                                    name: '后勤人员'
                                },
                                {
                                    value: 100,
                                    name: '其他人员'
                                }
                            ]
                        }
                    ]

                },
            };
        },
        methods: {
            ready(chart) {
                console.log(chart);
            }
        },
    };
</script>
```

:::

dva-core-chart 配置条形图

:::demo

```html
<template>
    <div class="cube-chart-list">
        <dva-core-chart @ready="ready" style="width: 520px;height: 320px;" autoresize :option="chartConfig" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chartConfig: {
                    backgroundColor: 'transparent',
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: (k) => 5 * k,
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: [
                            '罗湖区',
                            '福田区',
                            '南山区',
                            '盐田区',
                            '龙岗区',
                            '宝安区',
                            '光明区',
                            '坪山区',
                            '大鹏区',
                            '龙华区'
                        ],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#063374',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#00c7ff'
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#00c7ff',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#063374'
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: new Array(10).fill(0).map((value, index, array) => Math.ceil(Math.random() * 1000)),
                        // barWidth: 50, // 柱子宽度
                        // barGap: 1, // 柱子之间间距
                        itemStyle: {
                            opacity: 1,
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
                        }
                    }]
                },
            };
        },
        methods: {
            ready(chart) {
                console.log(chart);
            }
        },
    };
</script>
```

:::

dva-core-chart 配置折线图

:::demo

```html
<template>
    <div class="cube-chart-list">
        <dva-core-chart @ready="ready" style="width: 520px;height: 320px;" autoresize :option="chartConfig" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chartConfig: {
                    backgroundColor: 'transparent',
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: (k) => 5 * k,
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        data: new Array(24).fill(0).map((value, index, array) => index + 1 + '时'),
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#063374',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#00c7ff'
                            }
                        }
                    }, ],
                    yAxis: [{
                        type: "value",
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#00c7ff',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#063374'
                            }
                        }
                    }],
                    series: [{
                        name: "访问量",
                        type: "line",
                        data: new Array(24).fill(0).map((value, index, array) => Math.ceil(Math.random() * 500)),
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#00fcae',
                                lineStyle: {
                                    color: '#00fcae',
                                    width: 1
                                },
                                areaStyle: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [{
                                                offset: 0,
                                                color: '#00fcae'
                                            },
                                            {
                                                offset: 1,
                                                color: '#006388'
                                            }
                                        ],
                                        globalCoord: false
                                    }
                                }
                            }
                        },
                    }],
                },
            };
        },
        methods: {
            ready(chart) {
                console.log(chart);
            }
        },
    };
</script>
```

:::


### dva-core-chart 配置属性

| 参数       | 说明         | 类型    | 可选值 | 默认值 |
| ---------- | ------------ | ------- | ------ | ------ |
| option     | echarts 配置 | Object  |        | —      |
| autoResize | 是否自适     | Boolean |        | true   |

### dva-core-chart decoratorConfig 装饰器配置属性

装饰器作为配置饼图或者圆环图表，提供的一层动态图表，如描述只是装饰作用而已。

| 参数           | 说明                | 类型    | 可选值 | 默认值 |
| -------------- | ------------------- | ------- | ------ | ------ |
| show           | 是否显示            | Boolean | -      | false  |
| option         | 图表配置            | Object  | -      |  { }   |
| animation      | 是否开启旋转动画    | Boolean | -      | true   |
| animationDelay | 动画延迟时间 单位 ms | Number  | -      |  3000  |
| animationTime  | 单位 ms              | Number  | -      | 30 * 1000  |