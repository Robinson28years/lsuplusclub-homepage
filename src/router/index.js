import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/homepage'),
      children: [
        {
          path: '',
          redirect: 'home',
        },
        {
          path: 'home',
          component: require('@/components/home'),
        },
        {
          path: '2',
          component: require('@/components/test2'),
        },
        {
          path: 'login',
          component: require('@/components/login'),
        },
        {
          path: 'register',
          component: require('@/components/register'),
        }
      ]
    }
  ]
})
