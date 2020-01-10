export default [
  {
    name: 'workshop',
    path: '/manufacturing/data_model/workshop',
    component: () => import(/* webpackChunkName: "workshop" */ './workshop'),
  },
  {
    name: 'beltline',
    path: '/manufacturing/data_model/beltline',
    component: () => import(/* webpackChunkName: "beltline" */ './beltline'),
  },
]
