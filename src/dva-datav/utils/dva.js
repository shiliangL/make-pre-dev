/*
 * @Author: shiliangL
 * @Date: 2022-07-04 14:18:26
 * @LastEditTime: 2022-07-04 14:39:20
 * @LastEditors: Do not edit
 * @Description:
 */
export const defaultDvaConfig = {
  // 渐变颜色
  gradientColor: ({ color1 = '#00fcae', color2 = '#006388', type = 'linear', x = 0, y = 0, x2 = 0, y2 = 1 } = {}) => ({
    type,
    x,
    y,
    x2,
    y2,
    colorStops: [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 }
    ]
  }),
  // 图表最外层配置
  initOption: () => ({
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    series: []
  }),
  radius: (radius = ['64%', '86%']) => (radius)
}

export const themeColors = [
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
]

// 颜色16进制换算rgba,添加透明度
export function hexToRgba (hex, opacity) {
  return `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
    '0x' + hex.slice(3, 5)
  )},${parseInt('0x' + hex.slice(5, 7))}, ${opacity})`
}

// 根据长度生成数据填充
export function chartGap (leng = 100) {
  const dataArr = []
  for (let i = 0; i < leng; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        value: 25,
        itemStyle: {
          color: '#5bc5ff29',
          borderWidth: 0,
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    } else {
      dataArr.push({
        value: 20,
        itemStyle: {
          color: 'rgba(0,0,0,0)',
          borderWidth: 0,
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    }
  }
  return dataArr
}

// 填充
export function _pie3 () {
  const dataArray = []
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      dataArray.push({
        value: 25,
        itemStyle: {
          borderWidth: 0,
          color: 'red',
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    } else {
      dataArray.push({
        value: 20,
        itemStyle: {
          borderWidth: 0,
          color: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    }
  }
  return dataArray
}

// 图表圆环装饰器
export const seriesTypeItem = {
  decoratorPie: [
    {
      type: 'pie',
      name: '外1细圆环',
      radius: ['60%', '62%'],
      center: ['50%', '50%'],
      emphasis: {
        scale: false
      },
      clockwise: false,
      label: {
        show: false
      },
      tooltip: {
        show: false
      },
      data: chartGap()
    },
    {
      type: 'pie',
      name: '外2细圆环',
      radius: ['55%', '60%'],
      center: ['50%', '50%'],
      emphasis: {
        scale: false
      },
      clockwise: false,
      itemStyle: {
        color: '#5bc5ff29'
      },
      label: {
        show: false
      },
      tooltip: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      name: '内细圆环',
      zlevel: 3,
      silent: true,
      radius: ['55%', '56%'],
      center: ['50%', '50%'],
      lable: {
        show: false,
        emphasis: {
          show: false
        }
      },
      labelLine: {
        show: false
      },
      tooltip: {
        show: false
      },
      data: chartGap()
    }
  ]
}

// 外部双圆环装饰器配置
export function initDoubleCircleOption () {
  const seriesData = [
    {
      type: 'pie',
      name: '外1细圆环',
      radius: ['70%', '71%'],
      center: ['50%', '50%'],
      label: {
        show: false
      },
      data: _pie3()
    },
    {
      type: 'pie',
      name: '外2细圆环',
      radius: ['60%', '65%'],
      center: ['50%', '50%'],
      itemStyle: {
        color: 'red'
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      name: '内细圆环',
      radius: ['44%', '45%'],
      center: ['50%', '50%'],
      lable: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: _pie3()
    }
  ]
  return {
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    tooltip: {
      show: false
    },
    toolbox: {
      show: false
    },
    series: seriesData
  }
}
// 指定范围随机数
export function getRandom (n = 10, m = 50) {
  return Math.floor(Math.random() * (m - n + 1) + n)
}

// 随机长度图表数据
export function getRandomData (l = 6, n = 10, m = 50) {
  return new Array(l).fill(0).map(() => {
    return { value: getRandom(n, m), name: '智慧城市', color: '', lv: '' }
  })
}

// 装饰器部分
export const dvaDecoratorOptions = {
  doubleCircle: initDoubleCircleOption()
}
