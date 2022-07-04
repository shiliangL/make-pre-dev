/*
 * @Author: shiliangL
 * @Date: 2021-05-07 14:20:19
 * @LastEditTime: 2022-03-21 10:20:49
 * @LastEditors: Do not edit
 * @Description:
 */
export function isString (obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function isBoolean (obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}

export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement (node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
  const getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const isUndefined = (val) => {
  // eslint-disable-next-line no-void
  return val === void 0
}

export const isDefined = (val) => {
  return val !== undefined && val !== null
}
