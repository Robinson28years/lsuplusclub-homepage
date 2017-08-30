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
          // beforeEnter: LoginCheck,
          component: require('@/components/home'),
        },
        {
          path: 'forum',
          component: require('@/components/forum/index'),
        },
        {
          path: 'forum/create',
          component: require('@/components/forum/create'),
        },
        {
          path: 'forum/:id',
          component: require('@/components/forum/forum_detail'),
        },
        {
          path: 'library',
          component: require('@/components/library/index'),
        },
        {
          path: 'activities',
          component: require('@/components/activities/index'),
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
