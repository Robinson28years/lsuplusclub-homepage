<template>
  <div>

    <!-- Header Start -->
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- header Nav Start -->
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="">
                    <!--<h2>LSU·Plus</h2>-->
                    <img src="https://i.loli.net/2017/09/27/59cb506de17bf.png" height="60" width="60" alt="Logo">
                  </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <li>
                      <router-link to="/home">首页</router-link>
                    </li>
                    <li>
                      <router-link to="/forum">论坛</router-link>
                    </li>
                    <li>
                      <router-link to="/library">图书馆</router-link>
                    </li>
                    <li>
                      <router-link to="/group">兴趣小组</router-link>
                    </li>
                    <li>
                      <router-link to="/activities">活动</router-link>
                    </li>
                    <!-- <li>
                      <router-link to="/5">API</router-link>
                    </li> -->
                    <li>
                      <a href="#">||</a>
                    </li>
                    <template v-if="noUser">
                      <li>
                        <router-link to="/login">登录</router-link>
                      </li>
                      <li>
                        <router-link to="/register">注册</router-link>
                      </li>
                    </template>
                    <template v-else>
                      <li>
                        <img :src="user.avatar" style="height: 50px;width: 50px" class="media-object img-circle">
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          {{user.name}}
                          <strong class="caret"></strong>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <router-link :to="{path: '/user/' + user.id}">个人中心</router-link>
                          </li>
                          <li>
                            <router-link to="/user/reset">修改密码</router-link>
                          </li>
                          <li>
                              <router-link to="/user/avatar">修改头像</router-link>
                          </li>

                          <!--@if (Auth::user()->admin==1)-->

                          <li v-if="admin">
                            <a href="/dashboard">后台管理</a>
                          </li>
                          <!--@endif-->
                          <li class="divider">
                          </li>
                          <li>
                            <a v-on:click.once="logout">注销</a>
                            <!--<a @click="logout">注销</a>-->
                          </li>
                        </ul>
                      </li>
                    </template>
                  </ul>

                </div>
                <!-- /.navbar-collapse -->
              </div>
              <!-- /.container-fluid -->

            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- header close -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted() {
    NProgress.start();
    let token = localStorage.getItem('token');
    if (token != null) {
      this.noUser = false;
      this.user = localStorage.getItem('user');
      this.user = JSON.parse(this.user);
      if (this.user.role == "admin") this.admin = true;
      console.log(this.user);
    }
    NProgress.done();
  },
  methods: {
    logout: function() {
      localStorage.clear();
      this.noUser = true;
      this.$router.push('/home');
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      noUser: true,
      user: null,
      admin: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
  width: 30px;
  border-radius: 50%;
}


/*.dropdown-menu>li>a {*/


/*display: block;*/


/*padding: 3px 20px;*/


/*clear: both;*/


/*font-weight: 400;*/


/*line-height: 1.72222;*/


/*color: #fff;*/


/*white-space: nowrap;*/


/*}*/

.dropdown-menu {
  left: 0;
}
</style>
