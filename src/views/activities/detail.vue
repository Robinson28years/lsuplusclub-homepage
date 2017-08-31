<template>
    <div>
        <div class="container">
            <div class="col-md-6 col-md-offset-3" style="margin-bottom: 3%;margin-top: 3%">
            <h1>{{activity.title}}</h1>
            </div>
        <div class="col-md-10 col-md-offset-1">
        <vue-markdown  class="markdown" :source="activity.body"></vue-markdown>
        <!--<vue-markdown>{{activity.body}}</vue-markdown>-->
        </div>
        </div>
    </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    components: {
      VueMarkdown,
    },
    mounted() {
      NProgress.start();
      axios.get('/api/activities/' + this.$route.params.id)
        .then(res => {
          this.activity = res.data.data;
          NProgress.done();
        })
    },
    data() {
      return {
        activity: {},
      }
    }
  }
</script>

<style>

    /*@import "../../assets/scss/markdown.scss";*/
    /*body {*/
    /*position: relative;*/
    /*font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;*/
    /*font-size: 14px;*/
    /*line-height: 2;*/
    /*color: #555;*/
    /*background: #f5f7f9;*/
    /*}*/

    /*img {*/
    /*display: block !important;*/
    /*margin: auto !important;*/
    /*max-width: 50% !important;*/
    /*height: auto !important;*/
    /*}*/
</style>
