import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/nav/homepage'),
      beforeEnter: TestUser,
      children: [
        {
          path: '',
          redirect: 'home',
        },
        {
          path: 'home',
          // beforeEnter: LoginCheck,
          component: require('@/views/home/home'),
        },
        {
          path: 'forum',
          component: require('@/views/forum/index'),
        },
        {
          path: 'forum/create',
          component: require('@/views/forum/create'),
        },
        {
          path: 'forum/:id',
          component: require('@/views/forum/forum_detail'),
        },
        {
          path: 'library',
          component: require('@/views/library/index'),
        },
        {
          path: 'activities',
          component: require('@/views/activities/index'),
        },
        {
          path: 'activities/:id',
          component: require('@/views/activities/detail'),
        },
        {
          path: 'login',
          component: require('@/views/user/login'),
        },
        {
          path: 'register',
          component: require('@/views/user/register'),
        }
      ]
    }
  ]
})

function LoginCheck(to, from, next) {
  console.log(from.path);
  if (from.path == '/login') {
    console.log(localStorage.getItem('user'));
  }
  next();
}

function TestUser(to, from, next) {
  console.log("111111111111111111");
  console.log(to);
  let token = localStorage.getItem('token');
  if (token != null) {
    axios.post('/api/refresh', {}).then(response => {
      localStorage.setItem('token', response.data.result);
      window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
      axios.get('/api/get_user_details').then(response => {
        let user = response.data.result;
        user = JSON.stringify(user);
        localStorage.setItem('user', user);
      })
    }).catch(function (error) {
      localStorage.clear();
    });
  }
  // console.log('1111');
  next();
}
