export default [
  {
    path: '/manufacturing/device/machine',
    component: () => import(/* webpackChunkName: "machine" */ './machine'),
    children: [
      {
        name: 'machine',
        path: '',
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
