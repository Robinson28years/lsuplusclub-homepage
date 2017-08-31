<template>
    <div>
        <!--<div class="container col-md-2">-->

        <!--</div>-->
        <div class="container col-md-8 col-md-offset-2" style="margin-top: 3%">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first"></el-tab-pane>
                <el-tab-pane label="编程" name="second"></el-tab-pane>
                <el-tab-pane label="日常" name="third"></el-tab-pane>
            </el-tabs>
            <!--缓冲-->
            <div class="panel panel-info" v-loading="loading2" v-if="loading2" v-for="n in 6">
                <div class="panel-heading">
                    <h3 class="panel-title">213123</h3>
                </div>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" data-src="holder.js/64x64" alt="64x64"
                                     style="width: 64px; height: 64px;"
                                     src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWUxMjJhZTM1NSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZTEyMmFlMzU1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzk2ODc1IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
                                     data-holder-rendered="true">
                            </a>
                        </div>
                        <div class="media-body">
                            <vue-markdown>123123123</vue-markdown>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">Panel footer</div>
            </div>
            <div v-if="loading2 != true">
                <div class="panel panel-info" v-for="discussion in discussions">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <router-link :to="{path: '/forum/' + discussion.id}">{{discussion.title}}</router-link>
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" data-src="holder.js/64x64" alt="64x64"
                                         style="width: 64px; height: 64px;"
                                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWUxMjJhZTM1NSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZTEyMmFlMzU1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzk2ODc1IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
                                         data-holder-rendered="true">
                                </a>
                            </div>
                            <div class="media-body">
                                <!--{{discussion.body}}-->
                                <vue-markdown class="markdown">{{discussion.body}}</vue-markdown>
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer"><a href="#">{{discussion.user.name}}</a> 创建于 {{discussion.created_at}}</div>
                </div>
            </div>
            <div class="block" style="margin-bottom: 10%; margin-top: 5%">
                <!--<span class="demonstration">直接前往</span>-->
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="page_size"
                        layout="prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div>

        </div>
        <div class="container col-md-1" style="margin-top: 5%">
            <el-button type="primary" @click="create_topic">发布帖子</el-button>
        </div>


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
      axios.get('/api/discussions')
        .then(response => {
//                  console.log(response.data.data)
          let k = response.data.data.data;
          let i = 0;
          while (k[i] != null) {
            this.discussions.push(k[i]);
            i++;
          }
          this.total = response.data.data.total;
          this.page_size = response.data.data.per_page;

          this.loading2 = false;
          NProgress.done();
//                  console.log(this.discussions[2]);
        })
    },
    data() {
      return {
        activeName: 'first',
        discussions: [],
        loading2: true,
        currentPage3: 1,
        total: 200,
        page_size: 10,
      };
    },
    methods: {
      create_topic() {
        this.$router.push('/forum/create');
      },
      handleClick(tab, event) {
//        console.log(tab.label, event);
        let ca="";
        if (tab.label == "编程") ca = "code";
        else if (tab.label == "日常") ca = "daily";
        this.loading2 = true;
        this.discussions = [];
        axios.get('/api/discussions?categories='+ ca)
          .then(response => {
//                  console.log(response.data.data)
            let k = response.data.data.data;
            let i = 0;
            while (k[i] != null) {
              this.discussions.push(k[i]);
              i++;
            }
            this.total = response.data.data.total;
            this.page_size = response.data.data.per_page;

            this.loading2 = false;
//                  console.log(this.discussions[2]);
          })

      },
      handleSizeChange(val) {
//        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.loading2 = true;
        axios.get('api/discussions?page=' + val)
          .then(response => {
            this.discussions = null;
            this.discussions = [];
            let k = response.data.data.data;
            let i = 0;
            while (k[i] != null) {
              this.discussions.push(k[i]);
              i++;
            }
            this.loading2 = false;
          })
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>

<style>
</style>
