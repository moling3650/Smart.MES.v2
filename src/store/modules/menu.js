const menu = {
  state: {
    list: [
      // 根模块
      { parentCode: null, code: 'system', name: '系统管理', route: 'system', icon: 'jichuguanli', idx: 0, params: null },
      { parentCode: null, code: 'manufacturing', name: '制造管理', route: 'manufacturing', icon: 'yunyingguanli', idx: 1, params: null },
      { parentCode: null, code: 'decision', name: '决策管理', route: 'decision', icon: 'shujukanban', idx: 2, params: null },
      // 系统管理子模块
      { parentCode: 'system', code: 'department', name: '部门员工', route: 'department', icon: 'gerenzhongxin', idx: 1, params: null },
      { parentCode: 'system', code: 'role', name: '角色维护', route: 'role', icon: 'jiaose', idx: 2, params: null },
      { parentCode: 'system', code: 'user_role', name: '角色分配', route: 'user_role', icon: 'solit-cells', idx: 3, params: null },
      { parentCode: 'system', code: 'permission', name: '权限管理', route: 'permission', icon: 'zhanghaoquanxianguanli', idx: 4, params: null },
      { parentCode: 'system', code: 'workshop_role', name: '车间角色管理', route: 'workshop_role', icon: 'solit-cells', idx: 5, params: null },
      { parentCode: 'system', code: 'data_translation', name: '转译字典管理', route: 'data_translation', icon: 'translate', idx: 6, params: null },
      { parentCode: 'system', code: 'drive', name: '驱动管理', route: 'drive', icon: 'qudongguanli', idx: 7, params: null },
      // 制造管理子模块
      { parentCode: 'manufacturing', code: 'data_model', name: '数据建模', route: null, icon: 'shujumoxing', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'production', name: '生产管理', route: null, icon: 'process', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'plan', name: '计划管理', route: null, icon: 'zhunbeiliangchan', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'device', name: '设备管理', route: null, icon: 'shebei', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'quality', name: '品质管理', route: null, icon: 'pinzhi', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'bom', name: 'BOM管理', route: null, icon: 'BOM', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'kanban', name: '系统看板', route: null, icon: 'chart-scatter-plot', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'bill', name: '单据管理', route: null, icon: 'danjuguanli', idx: 0, params: null },
      { parentCode: 'manufacturing', code: 'files', name: '文件管理', route: 'files', icon: 'folder-open', idx: 0, params: null },
      // 制造管理-数据建模子模块
      { parentCode: 'data_model', code: 'workshop', name: '车间管理', route: 'workshop', icon: 'chejian', idx: 1, params: null },
      { parentCode: 'data_model', code: 'beltline', name: '线别管理', route: 'beltline', icon: 'liushuixian', idx: 2, params: null },
      { parentCode: 'data_model', code: 'process_type', name: '工序类型管理', route: 'process_type', icon: 'ion-ios-type', idx: 3, params: null },
      { parentCode: 'data_model', code: 'work_group', name: '工序组管理', route: 'work_group', icon: 'gxgl', idx: 4, params: null },
      { parentCode: 'data_model', code: 'process', name: '工序管理', route: 'process', icon: 'gongxu', idx: 5, params: null },
      { parentCode: 'data_model', code: 'station', name: '工位管理', route: 'station', icon: 'gongwei', idx: 6, params: null },
      { parentCode: 'data_model', code: 'product_model', name: '成品型号管理', route: 'product_model', icon: 'ion-ios-type', idx: 7, params: null },
      { parentCode: 'data_model', code: 'product', name: '成品管理', route: 'product', icon: 'chengpinku', idx: 8, params: null },
      { parentCode: 'data_model', code: 'material', name: '物料管理', route: 'material', icon: 'wuliao', idx: 9, params: null },
      // 制造管理-生产管理子模块
      { parentCode: 'production', code: 'work_group_class', name: '工序组班别管理', route: 'work_group_class', icon: 'banbie', idx: 1, params: null },
      { parentCode: 'production', code: 'work_calendar', name: '工作日历', route: 'work_calendar', icon: 'rili', idx: 2, params: null },
      { parentCode: 'production', code: 'process_flow', name: '工艺流程管理', route: 'process_flow', icon: 'liucheng', idx: 3, params: null },
      { parentCode: 'production', code: 'process_step', name: '工艺步骤管理', route: 'process_step', icon: 'buzhou', idx: 4, params: null },
      { parentCode: 'production', code: 'material_wip', name: '现场物料管理', route: 'material_wip', icon: 'wuliao', idx: 5, params: null },
      { parentCode: 'production', code: 'product_status', name: '成品状态管理', route: 'product_status', icon: 'wuliao', idx: 6, params: null },
      // 制造管理-计划管理子模块
      { parentCode: 'plan', code: 'work_order', name: '工单管理', route: 'work_order', icon: 'gongdan2', idx: 1, params: null },
      { parentCode: 'plan', code: 'work_order_assignment', name: '工单分配', route: 'work_order_assignment', icon: 'tickettransfer', idx: 2, params: null },
      // 制造管理-设备管理子模块
      { parentCode: 'device', code: 'machine', name: '机器管理', route: 'machine', icon: 'shebeiguanli3', idx: 1, params: null },
      { parentCode: 'device', code: 'work_tool', name: '工装管理', route: 'work_tool', icon: 'gongzhuang', idx: 2, params: null },
      { parentCode: 'device', code: 'mould', name: '模具管理', route: 'mould', icon: 'moju', idx: 3, params: null },
      { parentCode: 'device', code: 'fitting', name: '配件管理', route: 'fitting', icon: 'shengchanguanli', idx: 4, params: null },
      { parentCode: 'device', code: 'device_bom', name: '设备BOM管理', route: 'device_bom', icon: 'bom1', idx: 5, params: null },
      { parentCode: 'device', code: 'maintain_project', name: '设备保养项目', route: 'maintain_project', icon: 'baoyangxiangmu', idx: 6, params: null },
      { parentCode: 'device', code: 'maintain_program', name: '设备保养方案', route: 'maintain_program', icon: 'baoyangjihua', idx: 7, params: null },
      { parentCode: 'device', code: 'maintain_plan', name: '设备保养计划', route: 'maintain_plan', icon: 'baoyangjihua', idx: 8, params: null },
      // 制造管理-品质管理子模块
      { parentCode: 'quality', code: 'ng_code', name: '不良现象管理', route: 'ng_code', icon: 'buliangpinchuli', idx: 1, params: null },
      { parentCode: 'quality', code: 'ng_type', name: '不良类型管理', route: 'ng_type', icon: 'yuanyinfenxi', idx: 2, params: null },
      { parentCode: 'quality', code: 'ng_reason', name: '不良原因管理', route: 'ng_reason', icon: 'cause', idx: 3, params: null },
      { parentCode: 'quality', code: 'product_grade', name: '成品等级管理', route: 'product_grade', icon: 'level-2', idx: 4, params: null },
      { parentCode: 'quality', code: 'registration', name: '登记管理', route: 'registration', icon: 'tubiaokuwenjian-gengxin-', idx: 5, params: null },
      { parentCode: 'quality', code: 'repair', name: '维修管理', route: 'repair', icon: 'weixiu', idx: 6, params: null },
      { parentCode: 'quality', code: 'review', name: '工艺追溯', route: 'review', icon: 'dakai', idx: 7, params: null },
      { parentCode: 'quality', code: 'ipqc_item', name: 'IPQC检验项', route: 'ipqc_item', icon: 'dakai', idx: 8, params: null },
      { parentCode: 'quality', code: 'ipqc_template', name: 'IPQC检验模板', route: 'ipqc_template', icon: 'dakai', idx: 9, params: null },
      // 制造管理-BOM管理子模块
      { parentCode: 'bom', code: 'bom_list', name: 'BOM清单', route: 'bom_list', icon: 'bom1', idx: 1, params: null },
      { parentCode: 'bom', code: 'formula', name: '配方管理', route: 'formula', icon: 'peifangguanli1', idx: 2, params: null },
      // 制造管理-系统看板子模块
      { parentCode: 'kanban', code: 'product_kanban', name: '生产看板', route: 'product_kanban', icon: 'linechart', idx: 1, params: null },
      { parentCode: 'kanban', code: 'machine_kanban', name: '设备看板', route: 'machine_kanban', icon: 'barchart', idx: 2, params: null },
      // 制造管理-单据管理子模块
      { parentCode: 'bill', code: 'bill_list', name: '单据维护', route: 'bill_list', icon: 'danju', idx: 1, params: null },
      { parentCode: 'bill', code: 'bill_launch', name: '发起任务', route: 'bill_launch', icon: 'xinbanfaqirenwu', idx: 2, params: null },
      { parentCode: 'bill', code: 'open_task', name: '打开任务', route: 'open_task', icon: 'dakai', idx: 3, params: null },
      { parentCode: 'bill', code: 'task_state', name: '单据任务', route: 'task_state', icon: 'dakai', idx: 4, params: null },
      { parentCode: 'bill', code: 'bill_task', name: '单据生命周期', route: 'bill_task', icon: 'dakai', idx: 5, params: null },
      { parentCode: 'bill', code: 'device_bill_task', name: '设备单据任务', route: 'task_list', icon: 'dakai', idx: 6, params: 'billType=device' },
      { parentCode: 'bill', code: 'material_bill_task', name: '物料单据任务', route: 'task_list', icon: 'dakai', idx: 7, params: 'billType=material' },
      { parentCode: 'bill', code: 'mould_bill_task', name: '模具单据任务', route: 'task_list', icon: 'dakai', idx: 8, params: 'billType=mould' },
      { parentCode: 'bill', code: 'my_bill', name: '我的单据', route: 'my_bill', icon: 'dakai', idx: 9, params: null },
    ],
  },

  getters: {
    menuMap (state) {
      // 注册所有菜单
      const _menuMap = state.list.reduce((dict, menu) => {
        dict[menu.code] = menu
        return dict
      }, {})
      // 生成父子级关系
      state.list.forEach(menu => {
        if (menu.parentCode) {
          if (!_menuMap[menu.parentCode].children) {
            _menuMap[menu.parentCode].children = []
          }
          _menuMap[menu.parentCode].children.push(menu)
        }
      })
      return _menuMap
    },
    modules (state) {
      return state.list.filter(menu => !menu.parentCode)
    },
  },
}

export default menu
