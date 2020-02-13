export default [
  {
    name: 'bill_list',
    path: '/manufacturing/bill/bill_list',
    component: () => import(/* webpackChunkName: "bill_list" */ './bill_list'),
  },
  {
    name: 'task_list',
    path: '/manufacturing/bill/task_list/:billType',
    component: () => import(/* webpackChunkName: "task_list" */ './task_list'),
  },
]
