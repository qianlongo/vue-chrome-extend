import Vue from 'vue'
import Router from 'vue-router'

import ViewA from './views/viewA.vue'
import ViewB from './views/viewB.vue'
import ViewC from './views/viewC.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/view/a'
    },
    {
      path: '/view/a',
      name: 'viewA',
      component: ViewA,
    },
    {
      path: '/view/b',
      name: 'viewB',
      component: ViewB,
    },
    {
      path: '/view/c',
      name: 'viewC',
      component: ViewC,
    },
  ]
})
