import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/homepage'),
      beforeEnter: TestUser,
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
function TestUser (to, from, next) {
    let token = localStorage.getItem('jwt');
    if (token != null) {
      axios.post('/api/refresh', {
      }).then(response => {
        localStorage.setItem('jwt',response.data.result);
        window.axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('jwt');
          axios.post('/api/get_user_details', {
          }).then(response => {
            let user = response.data.result;
            user = JSON.stringify(user);
            localStorage.setItem('user', user);
          })
      }).catch(function (error) {
        localStorage.setItem('jwt',null);
        localStorage.setItem('user',null);
      });
    }
    // console.log('1111');
    next();
}
