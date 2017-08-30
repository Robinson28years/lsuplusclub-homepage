<template>
    <div class="container">
        <div class="row clearfix" style="margin-top: 5%;" v-for="activity in activities">
            <div class="col-md-8 col-md-offset-2 column">
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <img :src="activity.img"/>
                            <div class="caption">
                                <h3>
                                    {{ activity.title }}
                                </h3>
                                <p>
                                    {{ activity.summary }}
                                </p>
                                <p>
                                    <!--<div class="pull-right"></div>-->
                                    <a class="btn btn-primary" href="#">查看全文</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 col-md-offset-2" style="margin-bottom: 10%; margin-top: 5%">
            <!--<span class="demonstration">直接前往</span>-->
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="page_size"
                    layout="prev, pager, next, jumper"
                    :total="total">
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

      handleCurrentChange(val)
      {
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

<style scoped>
    img {
        width: 100%;
        height: 300px;
        max-width: 100%;
        display: block;
        object-fit: cover;
    }
</style>
