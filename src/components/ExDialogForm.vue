<template>
  <el-dialog id="ExDialogForm" :visible.sync="visible" v-bind="attrs" destroy-on-close>
    <ex-form ref="form" :form-items="formItems" :form-data="formData" :rules="rules" :change-events="changeEvents" :size="size" hide-buttons @submit="onSubmit"/>
    <span slot="footer" class="dialog-footer">
      <el-button :size="size" @click="() => $refs.form.reset()">重 置</el-button>
      <el-button :size="size" type="primary" @click="() => $refs.form.submit()">提 交</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ExDialogForm',
  props: {
    // 表单默认值
    formData: {
      type: Object,
      required: true,
    },
    // 表单元素
    formItems: {
      type: Object,
      required: true,
    },
    // 表单规则
    rules: {
      type: Object,
      default () {
        return {}
      },
    },
    // 表单字段改变的回调事件
    changeEvents: {
      type: Object,
      default () {
        return {}
      },
    },
    // 弹框属性配置
    attrs: {
      type: Object,
      default () {
        return {}
      },
    },
    // 表单成功提交的回调函数
    resolve: {
      type: Function,
      default () {},
    },
  },
  data () {
    return {
      visible: false,
    }
  },
  computed: {
    // 弹框表单元素尺寸
    size () {
      if (this.attrs.size) {
        return this.attrs.size
      }
      return 'mini'
    },
  },
  methods: {
    // 打开弹框表单
    open () {
      this.visible = true
    },

    // 提交表单
    onSubmit (formData) {
      this.visible = false
      this.resolve(formData)
    },

  },
}
</script>
