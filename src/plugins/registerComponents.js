import Vue from 'vue'

// 只会注册components文件下所有Ex开关的vue组件
const requireComponent = require.context('../components', true, /Ex(.+)\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  const componentConfig = requireComponent(fileName)
  Vue.component(componentName, componentConfig.default || componentConfig)
})
