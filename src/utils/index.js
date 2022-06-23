/*
 * @Author: shiliangL
 * @Date: 2020-11-21 12:10:44
 * @LastEditTime: 2022-06-23 13:58:07
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/utils/index.js
 */
// 后往前合并

export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

export const kebabCase = function (str) {
  const hyphenateRE = /([^-])([A-Z])/g
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true

  if (typeof val === 'boolean') return false

  if (typeof val === 'number') return !val

  if (val instanceof Error) return val.message === ''

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }

  return false
}

export function rafThrottle (fn) {
  let locked = false
  return function (...args) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(_ => {
      fn.apply(this, args)
      locked = false
    })
  }
}

export function isKorean (text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
  return reg.test(text)
}

// ele merge
export function merge (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {}
    for (const prop in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

export function deepMerge (target, merged) {
  for (const key in merged) {
    // eslint-disable-next-line no-prototype-builtins
    if (merged.hasOwnProperty(key)) {
      target[key] =
        target[key] && target[key].toString() === '[object Object]'
          ? deepMerge(target[key], merged[key])
          : (target[key] = merged[key])
    }
  }
  return target
}

/**
 * @desc  函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
 * @param  func 需要执行的函数
 * @param  wait 延迟执行时间（毫秒）
 * @param  immediate---true 表立即执行，false 表非立即执行
 **/

export function debounce (func, wait, immediate = false) {
  let timer
  return function () {
    const context = this
    const args = arguments
    if (timer) clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

export function hasClass (ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

export function addClass (ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

export function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

export function uuid () {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  )
}

export function observerDomResize (dom, callback) {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  })

  return observer
}

export function getPointDistance (pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])
  const minusY = Math.abs(pointOne[1] - pointTwo[1])
  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function afterLeave (instance, callback, speed = 300, once = false) {
  if (!instance || !callback) { throw new Error('instance & callback is required') }
  let called = false
  const afterLeaveCallback = function () {
    if (called) return
    called = true
    if (callback) {
      callback.apply(null, arguments)
    }
  }
  if (once) {
    instance.$once('after-leave', afterLeaveCallback)
  } else {
    instance.$on('after-leave', afterLeaveCallback)
  }
  setTimeout(() => {
    afterLeaveCallback()
  }, speed + 100)
}
