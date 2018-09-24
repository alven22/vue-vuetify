import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import PersonList from '@/components/PersonList'
import PersonDetail from '@/components/PersonDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/list',
      name: 'PersonList',
      component: PersonList
    },
    {
      path: '/detail/:id',
      name: 'PersonDetail',
      component: PersonDetail,
      props: true
    }
  ]
})
