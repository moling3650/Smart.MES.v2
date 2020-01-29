import Vue from 'vue'

// 只会注册components文件下所有Ex开关的vue组件
const ExComponents = require.context('../components', true, /Ex(.+)\.vue$/)

const components = ExComponents.keys().map(key => ExComponents(key).default)

components.forEach(c => {
  Vue.component(c.name, c)
})
