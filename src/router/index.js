import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login'
// import Home from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'
import CustomerOrders from '@/components/pages/CustomerOrders'
import CustomerCheckout from '@/components/pages/CustomerCheckout'
import Orders from '@/components/pages/Orders'
import Cupons from '@/components/pages/Cupons'

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      //防止用戶進入未定義頁面(自創網址等等)，重新導向login頁面
      path: '*',
      redirect: '/login'
    },
    // {
    //   //元件呈現名稱
    //   name:'首頁',
    //   //對應虛擬路徑(網址上的)
    //   path:'/index',
    //   //對應元件
    //   component: Home,
    //   //路由訊息判斷是否登入的基準
    //   meta: { requiresAuth : true }
    // },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/admin',
      name:'Dashboard',
      component: Dashboard,
      children: [
        {
          //這邊不能多加上"/"
          path: 'products',
          name: 'Products',
          component: Products,
          //進入頁面前需要驗證
          meta: { requiresAuth : true },          
        },
        {
          //這邊不能多加上"/"
          path: 'cupons',
          name: 'Cupons',
          component: Cupons,
          meta: { requiresAuth : true },           
        },
        {
          //這邊不能多加上"/"
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth : true },           
        },
      ]
    },{
      path: '/',
      name:'Dashboard2',
      component: Dashboard,
      children: [
        {
          //這邊不能多加上"/"
          path: 'customer_orders',
          name: 'CustomerOrders',
          component: CustomerOrders,         
        },
        {
          //這邊不能多加上"/"
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,         
        },
      ]    
    },
  ]
})