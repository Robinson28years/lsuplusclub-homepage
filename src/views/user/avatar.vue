<template>
  <div>
    <div class="container col-md-2 col-md-offset-5" style="margin-top: 5%">
      <div style="margin-bottom: 25%">
        <img src="https://i.loli.net/2017/08/31/59a79f03e0b9b.jpg" alt="">
        <h6>我不管了，我不想碰前端了</h6>
      </div>
      <button type="button" class="btn btn-primary" id="set-avatar">上传头像</button>
    </div>
    <avatar-cropper trigger="#set-avatar" upload-url="https://sm.ms/api/upload" :uploaded="updateUserAvatar" upload-form-name="smfile"></avatar-cropper>

  </div>
</template>
<script>
import AvatarCropper from 'vue-avatar-cropper'

export default {
  components: {
    AvatarCropper,
  },
  data() {
    return {
      // updateUserAvatar : '',
    }
  },
  methods: {
    updateUserAvatar(response) {
      let code = response.code;
      console.log(code);
      if (code == 'success') {
        axios.post('api/user/avatar', {
          avatar: response.data.url
        }).then(res => {
          window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
          axios.get('api/get_user_details', {
          }).then(response => {
            //                            console.log(response.data.result)
            let user = response.data.result;
            user = JSON.stringify(user);
            localStorage.setItem('user', user);
            if (localStorage.getItem('user') != null) {
              window.location.href = '/';
            }
          })
          // this.$message({
          //   message: '头像更换成功(请刷新查看)',
          //   type: 'success'
          // });
          // this.$router.push('/home');
          //  window.location.href = '/';
        })
      } else {
        this.$message.error('错了哦');
      }
    }
  }
}
</script>


