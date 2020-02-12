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
        name: 'machine.data_point',
        path: 'data_point',
        component: () => import(/* webpackChunkName: "machine" */ './machine/data_point'),
      },
    ],
  },
]
