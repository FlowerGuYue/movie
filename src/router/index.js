import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie'
import Cinema from '@/components/cinema'
import Mine from '@/components/mine'
import City from '@/components/subComponents/movie/City'
import HotPlay from '@/components/subComponents/movie/HotPlay'
import WillPlay from '@/components/subComponents/movie/WillPlay'
import Search from '@/components/subComponents/movie/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/movie'},
    {path: '/movie',component: Movie,children:[
      {path: 'city',component:City},
      {path: 'hotplay',component:HotPlay},
      {path: 'willplay',component:WillPlay},
      {path: 'search',component:Search},
      {path:'/movie',redirect:'/movie/hotplay'}
    ]},
    {path: '/cinema',component: Cinema},
    {path: '/mine',component: Mine}
    
  ],
  linkActiveClass: 'mui-active'
})
