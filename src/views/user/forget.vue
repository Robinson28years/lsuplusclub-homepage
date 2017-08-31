<template lang="html">
<div>
<div id="particles-js"></div>
 <div class="container">
      <div class="row">
          <div class="col-md-6 col-md-offset-3" style="margin-top: 20%">
  <el-form :model="form" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item
    prop="email"
    label="邮箱"
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
  >
    <el-col :span="15">
      <el-input placeholder="用户对应邮箱" v-model="form.email"></el-input>
    </el-col>
    <el-col :span="8" :offset="1">
       <el-button @click="submitCode" type="info">发送验证码</el-button>
    </el-col>
  </el-form-item>
  <el-form-item label="验证码" required>
    <el-col :span="15">
      <el-input v-model="form.code" placeholder="验证码 (通过邮件获取)(垃圾邮件里找找)"></el-input>
    </el-col>

  </el-form-item>
    <el-form-item label="新密码" prop="newpassword" required>
      <el-col :span="23">
         <el-input type="password" v-model="form.newpassword" auto-complete="off"></el-input>
    </el-col>

  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('form')">提交请求</el-button>
  </el-form-item>
</el-form>

</div>
</div>
</div>
</div>
</template>

<script>
export default {
  created() {
    particlesJS.load('particles-js', 'static/js/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  },
  data() {
    return {
      form: {
        email: '',
        code: '',
        newpassword: '',
      }
    }

  },
  methods: {
    submitCode() {
      axios.post('api/user/code', {
        email: this.form.email,
      }).then(res => {
        console.log(res.data);
      })
    },
    submitForm(form) {
      axios.post('api/user/forget', this.form)
        .then(res => {
          if (res.data.code != 20000) {
            this.$notify.error({
              title: '错误',
              message: res.data.error
            });
          }
          else {
            this.$notify({
              title: '成功',
              message: '修改密码成功',
              type: 'success'
            });
            this.$router.push('login');
          }
        })
    }
  }
}
</script>

<style scoped>
/* ---- reset ---- */

body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}









/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  /*position: absolute;*/
  /*left: 30px;*/
  /*top: 20px;*/
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}









/* ---- stats.js ---- */

.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles {
  font-size: 1.1em;
}

#stats,
.count-particles {
  -webkit-user-select: none;
}

#stats {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}

.count-particles {
  border-radius: 0 0 3px 3px;
}
</style>
