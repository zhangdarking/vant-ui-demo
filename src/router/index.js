import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
      },
      {
        name: 'giftExchange',
        path: 'giftExchange',
        component: () => import(/* webpackChunkName: "giftExchange" */ '../views/voucher/VoucherExchangeEntry.vue')
      },
      {
        name: 'cart',
        path: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/cart/Cart.vue')
      },
      {
        name: 'mine',
        path: 'mine',
        component: () => import(/* webpackChunkName: "mine" */ '../views/mine/Mine.vue')
      }
    ]
  },
  {
    path: '/mallOrderDetail',
    name: 'MallOrderDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mall/MallOrderDetail.vue')
  },
  { path: '*', redirect: { name: 'home' } }
]

const router = new VueRouter({
  routes
})

export default router
