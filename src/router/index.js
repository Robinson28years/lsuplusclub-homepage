import Vue from 'vue'
import Router from 'vue-router'

const nav_homepage = () => import('@/views/nav/homepage')
const home = () => import('@/views/home/home')
const user_avatar = () => import('@/views/user/avatar')
const user_forget = () => import('@/views/user/forget')
const user_reset = () => import('@/views/user/reset')
const user_index = () => import('@/views/user/index')
const forum_index = () => import('@/views/forum/index')
const forum_create = () => import('@/views/forum/create')
const forum_detail = () => import('@/views/forum/forum_detail')
const library_index = () => import('@/views/library/index')
const activities_index = () => import('@/views/activities/index')
const activities_detail = () => import('@/views/activities/detail')
const group_index = () => import('@/views/group/index')
const user_login = () => import('@/views/user/login')
const user_register = () => import('@/views/user/register')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: nav_homepage,
      beforeEnter: TestUser,
      children: [
        {
          path: '',
          redirect: 'home',
        },
        {
          path: 'home',
          // beforeEnter: LoginCheck,
          component: home,
        },
        {
          path: 'user/avatar',
          component: user_avatar,
        },
        {
          path: 'user/forget',
          component: user_forget,
        },
        {
          path: 'user/reset',
          component: user_reset,
        },
        {
          path: 'user/:id',
          component: user_index,
        },
        {
          path: 'forum',
          component: forum_index,
        },
        {
          path: 'forum/create',
          component: forum_create,
        },
        {
          path: 'forum/:id',
          component: forum_detail,
        },
        {
          path: 'library',
          component: library_index,
        },
        {
          path: 'activities',
          component: activities_index,
        },
        {
          path: 'activities/:id',
          component: activities_detail,
        },
        {
          path: 'group',
          component: group_index,
        },
        {
          path: 'login',
          component: user_login,
        },
        {
          path: 'register',
          component: user_register,
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
