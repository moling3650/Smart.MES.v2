export default {
  // 模型名称
  name: 'SRole',
  // 主键
  primaryKey: 'id',
  // 标题
  title: '角色',
  // 列表展示的字段
  label: 'roleName',
  // 表格列配置
  cols: [
    { field: 'roleId', title: '角色编号', width: 160, orderBy: '' },
    { field: 'roleName', title: '角色名称', width: 160 },
    { field: 'description', title: '说明', width: 160 },
  ],
  // 表单配置
  getForm (formData, config) {
    formData = formData || {}
    return Promise.resolve({
      // 弹框宽度
      width: '400px',
      // 表单元素
      formItems: {
        roleId: { label: '角色编号', span: 22, component: 'el-input', disabled: !!formData.roleId },
        roleName: { label: '角色名称', span: 22, component: 'el-input' },
        description: { label: '说明', span: 22, component: 'el-input', type: 'textarea', rows: 3 },
      },
      // 表单内容
      formData: Object.assign({
        roleId: '',
        roleName: '',
        description: '',
      }, formData),
      // 表单校验细则
      rules: {
        roleId: { required: true, message: '请输入角色编号', trigger: 'blur' },
        roleName: { required: true, message: '请输入角色名称', trigger: 'blur' },
      },
      // 表单内容改变的回调事件
      changeEvents: {},
      // 弹框其他配置
      ...config,
    })
  },
}
