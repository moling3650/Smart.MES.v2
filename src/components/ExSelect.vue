<template>
  <el-select class="ex-select" :value="value" filterable v-bind="$attrs" v-on="listers">
    <el-option v-for="(opt, idx) in formattedOptions" :key="opt.value" :value="opt.value" :label="opt.label">
      <ex-option-render :option="opt" :index="idx" :render="formattedRender"/>
    </el-option>
  </el-select>
</template>

<script>
// 选项渲染组件
const ExOptionRender = {
  functional: true,
  props: {
    option: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    render: {
      type: Function,
      required: true,
    },
  },
  render (h, { props: { render, option, index }}) {
    return render(h, { option, index })
  },
}

export default {
  name: 'ExSelect',
  components: {
    ExOptionRender,
  },
  props: {
    options: {
      type: [Array, Object],
      required: true,
    },
    value: {
      type: [String, Number, Array],
      default: '',
    },
    optionRender: {
      type: Function,
      default: null,
    },
  },
  computed: {
    // 把options规范化
    // ['A', 'B'] -> [{ value: 0, label: 'A' }, { value: 1, label: 'B' }]
    // { 0: 'A', '2': 'B' } -> [{ value: '0', label: 'A' }, { value: '2', label: 'B' }]
    // [{ value: 'A' }, { value: 'b', lable: 'B' }] -> [{ value: 'A', label: 'A' }, { value: 'b', label: 'B' }]
    formattedOptions () {
      if (Array.isArray(this.options)) {
        return this.options.map((opt, idx) => {
          const value = (typeof opt === 'string') ? idx : opt.value
          const label = opt.label || opt.value || opt
          return { value, label }
        })
      } else {
        return Object.entries(this.options).map(([value, label]) => ({ value, label }))
      }
    },

    // 把render规范化
    formattedRender () {
      if (typeof this.optionRender === 'function') {
        return this.optionRender
      } else {
        return (h, { option }) => h('span', option.label)
      }
    },

    listers () {
      return {
        ...this.$listeners,
        input: value => this.$emit('input', value),
      }
    },
  },
}
</script>

<style scoped>
.ex-select {
  width: 100%;
}
</style>
