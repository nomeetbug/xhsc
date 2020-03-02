import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import HomeI from '../components/home/home-i.vue'
import Detail from '../components/detail/detail.vue'
import goodsList from '../components/goods_list/goods_list.vue'
import Cates from '../components/cates/cates.vue'
import Search from '../components/search/search.vue'
import Cart from '../components/cart/cart.vue'
import My from '../components/my/my.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home-i',
    children: [
      {
        path: '/home-i',
        component: HomeI
      },

      {
        path: '/cates',
        component: Cates
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/my',
        component: My
      }
    ]
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/list',
    component: goodsList
  }
]

const router = new VueRouter({
  routes
})

export default router
