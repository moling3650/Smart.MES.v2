import Vue from 'vue'

const requireMethods = require.context('../methods', false, /(.+)\.js$/)

requireMethods.keys().forEach(fileName => {
  const methodName = '$' + fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  const method = requireMethods(fileName).default
  if (typeof method !== 'function') {
    console.error(`${requireMethods.resolve(fileName)} 导出的不是一个函数`)
  } else {
    Vue.prototype[methodName] = method
  }
})
