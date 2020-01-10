export default [
  {
    name: 'machine',
    path: '/manufacturing/device/machine',
    component: () => import(/* webpackChunkName: "machine" */ './machine'),
    children: [
      {
        name: 'machine.index',
        path: 'index',
        component: () => import(/* webpackChunkName: "machine" */ './machine/index'),
      },
      {
        name: 'machine.dataPoint',
        path: 'dataPoint',
        component: () => import(/* webpackChunkName: "machine" */ './machine/dataPoint'),
      },
    ],
  },
]
