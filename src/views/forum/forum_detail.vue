<template>
  <div>
    <!--<script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>-->
    <!--<script >hljs.initHighlightingOnLoad();</script>-->
    <div class="container col-md-8 col-md-offset-2" style="margin-bottom: 5%">
      <div class="row">
        <div class="col-md-12">
          <div class="container">
            <div class="media  col-md-6 col-md-offset-2">
              <h2 class="">{{discussion.title}}</h2>
            </div>
          </div>

          <div class="media">
            <div class="media-left">
              <a :href="'/user/'+discussion.user.id">
                <img :src="discussion.user.avatar" style="height: 64px;width: 64px" class="media-object img-circle">
              </a>
            </div>
            <div class="media-body">

              <a :href="'/user/'+discussion.user.id">
                {{discussion.user.name}}</a>

              <div class="media">
                <!--<h3>{!! str !!}</h3>-->
                <vue-markdown class="markdown" :source="discussion.body"></vue-markdown>
              </div>
              <div class="pull-right" style="color: #7088A9">
                发布于： {{discussion.created_at}}
              </div>
            </div>
            <!--@if(Auth::check())-->
            <!--@if(discussion.user.id==Auth::user().id)-->
            <!--<div class="media-right">-->
            <!--<input class="btn btn-success"  type="button" onclick="window.location.href='/discuss/edit'" value="修改">-->
            <!--</div>-->
            <!--@endif-->
            <!--@endif-->
            <div class="media" style="color: #7088A9">
              <h2>评论区</h2>
            </div>
            <!--@if (isset(discussion.comments))-->
            <!--@foreach(discussion.comments as comment)-->
            <template v-for="comment in comments">
              <div class="media " style="border-top: 2px solid #E4E3E5;margin-top: 3%;margin-bottom: 3%">
              </div>
              <div class="media">

                <a class="media-left" :href="'/user/'+comment.user.id">
                  <img :src="comment.user.avatar" style="height: 64px;width: 64px" class="media-object img-circle">
                </a>
                <div class="media-body">
                  <h5 class="media-heading">
                    <a :href="'/user/'+comment.user.id">{{comment.user.name}}</a>
                  </h5>
                  <!--{{comment.body}}-->
                  <vue-markdown class="markdown" :source="comment.body"></vue-markdown>
                </div>
                <div class="pull-right" style="color: #7088A9">
                  回复于： {{comment.created_at}}
                </div>

              </div>
            </template>

            <!--@if(Auth::check())-->
            <div class="media" style="margin-top: 8%" v-if="login">
              <div class="col-md-1">
                <a href="#">
                  <img :src="user.avatar" style="height: 64px;width: 64px" class="media-object img-circle">
                </a>
              </div>
              <div class="col-md-11">
                <!--<form class="form-group" action="/discuss/comment" method="post">-->
                <!--<textarea class="form-control" name="body" rows="4"-->
                <!--placeholder="支持Markdown语法"></textarea>-->

                <!--<input type="hidden" name="user_id" :value="user.id">-->
                <!--<input type="hidden" name="discussion_id" :value="discussion.id">-->
                <!--<input class="form-control btn-success btn pull-right " type="submit" value="发表评论">-->
                <!--</form>-->
                <!--<div style="margin: 20px 0;"></div>-->
                <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="请输入内容" v-model="textarea">
                </el-input>
                <el-button class="pull-right" type="success" style="margin-top: 1%" :loading="wait" @click="submit">发表评论</el-button>
              </div>
            </div>
            <!--@else-->
            <div v-else="">
              <input class="form-control btn-warning btn pull-right " type="button" onclick="window.location.href='/auth/login/'" value="登录并参与评论">
            </div>
            <!--@endif-->

          </div>
        </div>
      </div>
    </div>
    <!--@stop-->
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown,
  },
  created() {
    NProgress.start();
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    if (this.user != null) this.login = true;
    //      console.log(this.$route.params.id);
    let k;
    axios.get('/api/discussions/' + this.$route.params.id)
      .then(response => {
        //          console.log(respo nse.data);
        this.discussion = response.data.data;
        k = response.data.data.comments;
        let i = 0;
        // console.log(k);
        while (k[i] != null) {
          this.comments.push(k[i]);
          //            console.log(k[i]);
          i++;
        }
        NProgress.done();
      })

  },
  data() {
    return {
      wait: false,
      login: false,
      textarea: null,
      user: {
        id: '',
        avatar: '',
      },
      discussion: {
        user: {
          id: '',
          avatar: '',
        }
      },
      comments: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submit() {
      this.wait = true;
      axios.post('api/comments', {
        discussion_id: this.$route.params.id,
        body: this.textarea,
      }).then(response => {
        // console.log(response.data);
        this.comments.push(response.data.data);
        this.textarea = null;
        this.wait = false;
      })
    }

  }
};
</script>

<style>

</style>
