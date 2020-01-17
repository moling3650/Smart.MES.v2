export default [
  {
    name: 'manufacturing',
    path: '/manufacturing',
    component: () => import(/* webpackChunkName: "manufacturing" */ './index'),
  },
]
