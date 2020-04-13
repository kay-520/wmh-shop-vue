import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loginIndex from '@/components/login/index'
import bindLogin from '@/components/login/bindLogin'
import relationLogin from '@/components/login/relationLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: "login",
      component: loginIndex
    },
    {
      path: '/bindLogin',
      name: "bindLogin",
      component: bindLogin
    },
    {
      path: '/relationLogin',
      name: "relationLogin",
      component: relationLogin
    }
  ]
})
