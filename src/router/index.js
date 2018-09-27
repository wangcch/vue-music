import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/Recommend'
import Rank from '@/pages/Rank'
import Singer from '@/pages/Singer'
import Search from '@/pages/Search'
import SingerDetail from '@/pages/SingerDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
