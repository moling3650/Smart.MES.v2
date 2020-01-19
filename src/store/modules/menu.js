const menu = {
  state: {
    list: [
      { parentCode: null, code: 'system', name: '系统管理', route: 'system', icon: 'jichuguanli', idx: 0, paramter: null },
      { parentCode: null, code: 'manufacturing', name: '制造管理', route: 'manufacturing', icon: 'yunyingguanli', idx: 0, paramter: null },
      { parentCode: 'system', code: 'department', name: '部门员工', route: 'department', icon: 'gerenzhongxin', idx: 1, paramter: null },
      { parentCode: 'system', code: 'role', name: '角色维护', route: 'role', icon: 'jiaose', idx: 2, paramter: null },
      { parentCode: 'manufacturing', code: 'data_model', name: '数据建模', route: null, icon: 'shujumoxing', idx: 0, paramter: null },
      { parentCode: 'manufacturing', code: 'device', name: '设备管理', route: null, icon: 'shebei', idx: 0, paramter: null },
      { parentCode: 'device', code: 'machine', name: '设备管理', route: 'machine', icon: 'shebeiguanli3', idx: 1, paramter: null },
      { parentCode: 'data_model', code: 'workshop', name: '车间管理', route: 'workshop', icon: 'chejian', idx: 1, paramter: null },
      { parentCode: 'data_model', code: 'beltline', name: '线别管理', route: 'beltline', icon: 'liushuixian', idx: 2, paramter: null },
    ],
  },

  getters: {
    modules (state) {
      // 注册所有菜单
      const menuMap = state.list.reduce((dict, menu) => {
        dict[menu.code] = menu
        return dict
      }, {})
      // 生成父子级关系
      state.list.forEach(menu => {
        if (menu.parentCode) {
          if (!menuMap[menu.parentCode].children) {
            menuMap[menu.parentCode].children = []
          }
          menuMap[menu.parentCode].children.push(menu)
        }
      })
      // 选取根菜单
      return Object.values(menuMap).filter(menu => !menu.parentCode)
    },
  },
}

export default menu
