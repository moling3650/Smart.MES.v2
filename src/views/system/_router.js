export default [
  {
    name: 'system',
    path: '/system',
    component: () => import(/* webpackChunkName: "system" */ './index'),
  },
  {
    name: 'department',
    path: '/system/department',
    component: () => import(/* webpackChunkName: "department" */ './department'),
  },
  {
    name: 'role',
    path: '/system/role',
    component: () => import(/* webpackChunkName: "role" */ './role'),
  },
]
