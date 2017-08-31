<template>
  <div class="container-fluid">
    <div class="row">
      <div class="media" style="background-color: #9E9993">
        <div class="container" style="margin-bottom: 3%">

          <div class="media-left col-md-2 col-md-offset-2" style="margin-top: 1%">
            <a href="#"><img class="media-object img-circle" alt="100*100" style="height: 100px;width: 100px" :src="user.avatar"></a>
          </div>
          <div class="media-body" style="color: #FFFFFF">
            <h5>
              <p>姓名：{{user.name}}</p>
              <p>邮箱：{{user.email}}</p>
              <p>注册时间：{{user.created_at}}</p>
            </h5>
          </div>
          <!-- @if(isset(Auth::user()->id)) @if($user->id==Auth::user()->id)
                <div class="media-right">
                  <input class="btn btn-success" type="button" onclick="window.location.href='/person/edit'" value="修改">
                </div>
                @endif @endif -->
        </div>
      </div>
      <div class="container">
        <div class="col-md-6">
          <h3>
            {{user.name}}最近发布的帖子
          </h3>
          <template v-for="discussion in discussions">
            <div class="media">
              <div class="media-middle col-md-6 col-md-offset-2">
                <blockquote>
                  <p>
                    <router-link :to="{path: '/forum/' + discussion.id}">{{discussion.title}}</router-link>
                  </p>
                  <small>{{discussion.created_at}}</small>
                </blockquote>
              </div>
            </div>
          </template>
        </div>
        <div class="col-md-6">
          <h3>
            {{user.name}}最近的回复
          </h3>

          <template v-for="comment in comments">
            <div class="media">
              <div class="media-middle col-md-6 col-md-offset-2">
                <blockquote>
                  <p>
                    <router-link :to="{path: '/forum/' + comment.discussion_id}">{{comment.discussion_title}}</router-link>
                    <p>
                      <cite>{{comment.body}}</cite>
                    </p>
                  </p>
                  <small>{{comment.created_at}}</small>
                </blockquote>
              </div>
            </div>
          </template>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  created() {
    NProgress.start();
    axios.get('api/user/' + this.$route.params.id)
      .then(res => {
        this.user = res.data.data;
      })
    axios.get('api/user/' + this.$route.params.id + '/discussions')
      .then(res => {
        this.discussions = res.data.data.data;
      })
    axios.get('api/user/' + this.$route.params.id + '/comments')
      .then(res => {
        this.comments = res.data.data.data;
        NProgress.done();
      })
  },
  data() {
    return {
      user: {},
      discussions: [],
      comments: [],
    }
  }

}
</script>
