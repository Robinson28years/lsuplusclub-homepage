<template>
    <div class="container">
        <div class="row clearfix" style="margin-top: 5%;" v-for="activity in activities">
            <div class="col-md-8 col-md-offset-2 column">
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <img :src="activity.img" />
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
    </div>
</template>

<script>
  export default {
    created() {
      axios.get('api/activities')
        .then(res => {
          console.log(res.data);
          this.activities = res.data;
        })
    },
    data() {
      return {
        activities: [],
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
