<template>
  <el-form ref="form" class="ex-form" :model="form" :rules="rules" v-bind="$attrs" label-width="auto">
    <el-row :gutter="20">
      <el-col v-for="item in formItemList" :key="item.value" :span="item.span">
        <el-form-item :label="item.label" :prop="item.value">
          <component :is="item.component" v-model.trim="form[item.value]" v-bind="item.attrs" @change="fieldChange(item.value)"/>
        </el-form-item>
      </el-col>
      <el-col v-if="!hideButtons" :span="24">
        <el-form-item>
          <el-button @click="reset">重 置</el-button>
          <el-button type="primary" @click="submit">提 交</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'ExForm',
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
    // 是否显示[重置]和[提交]按钮
    hideButtons: {
      type: Boolean,
    },
  },
  data () {
    return {
      form: {},
    }
  },
  computed: {
    // 将表单元素对象转成列表
    formItemList () {
      const keys = Object.keys(this.formItems)
      return keys.map(key => {
        const { label, component, span = 24, ...attrs } = this.formItems[key]
        return {
          value: key,
          component,
          label,
          span,
          attrs,
        }
      })
    },
  },
  watch: {
    // 监听formData改变重置表单字段值
    formData: {
      handler () {
        this.reset()
      },
      immediate: true,
    },
  },
  methods: {
    // 克隆对象的辅助方法
    _clone (obj) {
      return JSON.parse(JSON.stringify(obj))
    },

    // 表单字段重置成默认值
    reset () {
      // 填充表单字段的值
      this.form = this.formItemList.reduce((form, field) => {
        const key = field.value
        if (key in this.formData) {
          form[key] = this.formData[key]
        } else if (field.component === 'ex-select' && field.attrs.multiple) {
          form[key] = []
        } else if (field.component === 'el-switch') {
          form[key] = field.attrs.inactiveValue === undefined ? false : field.attrs.inactiveValue
        } else {
          form[key] = ''
        }
        return form
      }, {})

      // 调用字段值改变的回调函数
      for (const field in this.changeEvents) {
        this.fieldChange(field)
      }
      // 消除错误提示
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    },

    // 监听表单字段的值变化
    fieldChange (field) {
      if (field in this.changeEvents) {
        this.$nextTick(() => {
          this.changeEvents[field](this.form, this.formItems, this.rules)
        })
      }
    },

    // 校验并提交表单
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit('submit', this._clone(this.form))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style scoped>
.ex-form {
  margin: 0 10px;
}
</style>
