/*
 * @Author: shiliangL
 * @Date: 2021-06-25 08:50:06
 * @LastEditTime: 2021-06-25 08:57:57
 * @LastEditors: Do not edit
 * @Description:
 */
import { addClass } from '@/utils'

export default {
  height: {
    inserted (el, binding) {
      if (binding.value) {
        el.style.height = binding.value + (String(binding.value).endsWith('%') ? '' : 'px')
      }
    },
    unbind (el) {
      el.style.height = null
    }
  },
  width: {
    inserted (el, binding) {
      if (binding.value) {
        el.style.width = binding.value + (String(binding.value).endsWith('%') ? '' : 'px')
      }
    },
    unbind (el) {
      el.style.width = null
    }
  },
  padding: {
    inserted (el, binding) {
      if (binding.value) {
        el.style.padding = binding.value + (String(binding.value).endsWith('%') ? '' : 'px')
      }
    },
    unbind (el) {
      el.style.padding = null
    }
  },
  margin: {
    inserted (el, binding) {
      if (binding.value) {
        el.style.margin = binding.value + (String(binding.value).endsWith('%') ? '' : 'px')
      }
    },
    unbind (el) {
      el.style.margin = null
    }
  },
  font: {
    inserted (el, binding) {
      if (binding && binding.value) {
        el.style.fontSize = `${binding.value}px`
      }
    },
    unbind (el) {
      el.style.fontSize = null
    }
  },
  color: {
    inserted (el, binding) {
      const color = binding.value || binding.arg || binding.expression
      if (color.startsWith('#')) {
        el.style.color = color
      } else {
        addClass(el, `${color}-color`)
      }
    },
    unbind (el) {
      el.style.color = null
    }
  },
  bgColor: {
    inserted (el, binding) {
      const color = binding.value || binding.arg
      if (color.startsWith('#')) {
        el.style.backgroundColor = color
      } else {
        addClass(el, `bg-${color}-color`)
      }
    },
    unbind (el) {
      el.style.backgroundColor = null
    }
  }
}
