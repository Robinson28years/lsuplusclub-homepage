<template>
  <div class="container">
    <div class="row clearfix" style="margin-top: 5%;" v-for="activity in activities">
      <div class="col-md-8 col-md-offset-2 column">
        <div class="row">
          <div class="col-md-12">
            <div class="thumbnail activity">
              <img :src="activity.img" />
              <div class="caption">
                <h3>
                  {{ activity.title }}
                </h3>
                <blockquote style="font-size: small;color: #495355">
                  发布于 : {{ activity.created_at }}<br/><br/> 报名截止 : {{ activity.sign_deadline }}

                </blockquote>
                <!--<p style="color: #495355">-->
                <!--发布于 : {{ activity.created_at }}-->
                <!--</p>-->
                <p>
                  {{ activity.summary }}
                </p>
                <p>
                  <el-button :disabled="(new Date(activity.sign_deadline)) < Date.now()" type="info" @click="sign_activity(activity.id)">报名参加</el-button>
                  <router-link class="btn" :to="{path: '/activities/' + activity.id}">查看全文</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-md-offset-2" style="margin-bottom: 10%; margin-top: 5%">
      <!--<span class="demonstration">直接前往</span>-->
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="page_size" layout="prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    axios.get('api/activities')
      .then(res => {
        console.log(res.data);
        this.activities = res.data.data;
        this.total = res.data.total;
        this.page_size = res.data.per_page;
      })
  },
  data() {
    return {
      activities: [],
      currentPage3: 1,
      total: 200,
      page_size: 10,
    }
  },
  methods: {
    sign_activity(id) {
      console.log(id);
      let flag = false;
      if (localStorage.getItem('user') == null) {
        swal("抱歉,无法报名", "请先登录", "warning")
      }
      else {
        swal({
          title: "确定报名吗？",
          text: "报名了到时候记得参加哦",
          type: "success",
          showCancelButton: true,
          confirmButtonColor: "#13ce66",
          confirmButtonText: "确定报名！",
          closeOnConfirm: false
        },
          function() {
            axios.post('api/activities/' + id + '/user')
              .then(res => {
                console.log(res.data);
                flag = true;
                swal("成功！", "你已经报名成功了。", "success");
              })
              .catch(error => {
                swal("失败", "你已经报名过了！", "error");

                console.log(error.response.data)
              });

          });

      }
    },
    handleCurrentChange(val) {
      axios.get('api/activities?page=' + val)
        .then(response => {
          //            this.activities = null;
          this.activities = [];
          let k = response.data.data;
          let i = 0;
          while (k[i] != null) {
            this.activities.push(k[i]);
            i++;
          }
        })
    }
  }

}
</script>

<style>
body {
  overflow-y: scroll;
}

body.stop-scrolling {
  overflow-y: scroll;
}

.thumbnail {
  padding: 0;
  box-shadow: 10px 10px 15px #888888;
  border-right-width: 0px;
}

.activity img {
  width: 100%;
  height: 300px;
  max-width: 100%;
  display: block;
  object-fit: cover;
}
</style>
