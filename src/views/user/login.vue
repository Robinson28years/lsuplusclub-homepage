<template lang="html">
<div>
<div id="particles-js"></div>
 <div class="container">
      <div class="row">
          <div class="col-md-6 col-md-offset-3" style="margin-top: 20%">
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item
    prop="email"
    label="邮箱"
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
  >
    <el-input v-model="ruleForm2.email"></el-input>
  </el-form-item>

    <el-form-item label="密码" prop="pass" required>
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
    <el-button type="text" @click="toForget">忘记密码</el-button>
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不能为空'));
      }
      else {
        callback();
      }
    };
    var checkStudentid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不能为空'));
      }
      else {
        callback();
      }
    };
    var checkCollege = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('二级学院不能为空'));
      }
      else {
        callback();
      }
    };
    var checkGrades = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('班级不能为空'));
      }
      else {
        callback();
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('联系方式不能为空'));
      }
      else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        email: '',
        age: '',
        name: '',
        studentid: '',
        grades: '',
        college: '',
        phone: '',
        pass: '',
        checkPass: ''
      },
      rules2: {
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        studentid: [
          { validator: checkStudentid, trigger: 'blur' }
        ],
        college: [
          { validator: checkCollege, trigger: 'blur' }
        ],
        grades: [
          { validator: checkGrades, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    toForget() {
      this.$router.push('user/forget');
    },
    open3() {
      this.$notify({
        title: '成功',
        message: '登录成功',
        type: 'success'
      });
    },
    submitForm(formName) {
      NProgress.start();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/api/login', {
            email: this.ruleForm2.email,
            password: this.ruleForm2.pass,
          })
            .then(response => {
              let k = response.data.result;
              //todo: 状态验证
              if (k != null) {
                localStorage.setItem('token', k);
                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                axios.get('api/get_user_details', {
                }).then(response => {
                  //                            console.log(response.data.result)
                  let user = response.data.result;
                  user = JSON.stringify(user);
                  localStorage.setItem('user', user);
                  if (localStorage.getItem('user') != null) {
                    console.log("222222222");
                    NProgress.done();
                    window.location.href = '/';
                    //                              this.$router.go('/home');
                  }
                })
                this.open3();
              }
            })
            .catch(function(error) {
              console.log(error);
            });

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
