import Vue from 'vue'
import ExDialogForm from '@/components/ExDialogForm'

const ExDialogFormConstructor = Vue.extend(ExDialogForm)

let instance = null

// 创建弹框表单实例
function createInstance () {
  instance = new ExDialogFormConstructor({
    el: document.createElement('DIV'),
    propsData: {
      formData: {},
      formItems: {},
    },
  })
  document.body.appendChild(instance.$el)
  return instance
}

// 打开弹框表单
function showDialogForm ({ formItems = {}, formData = {}, rules = {}, changeEvents = {}, ...attrs }) {
  instance = instance || createInstance()
  instance.attrs = attrs
  instance.changeEvents = changeEvents
  instance.rules = rules
  instance.formItems = formItems
  instance.formData = formData // formData的改变会触发ExForm的reset方法
  return new Promise(resolve => {
    instance.resolve = resolve
    instance.open()
  })
}

export default showDialogForm
