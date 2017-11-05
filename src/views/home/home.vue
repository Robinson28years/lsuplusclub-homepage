<template>
  <div>
    <!-- Slider Start -->
    <section id="slider">
    <!-- <section id="slider" v-lazy:background-image="largeImg"> -->
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-2">
            <div class="block">
              <h1 class="animated fadeInUp">一切伟大的行动和思想&#35; <br> 都有一个微不足道的开始</h1>
              <p class="animated fadeInUp"> LSU·Plus·Club&hearts;</br> 丽水学院互联网+俱乐部</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        <div class="visible-xs-block container-fluid col-xs-offset-4" style="margin-top:5%">
            <button class="btn btn-success"><router-link to="/login" style="color:white;">登录</router-link></button>
            <button class="btn btn-warning"><router-link to="/register" style="color:white;">注册</router-link></button>
        </div>

    <!-- Wrapper Start -->
    <section id="intro">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <div class="block">
              <div class="">
                <h2>关于我们</h2>
                <p>位于18B313的互联网+实践基地,用于开展项目实践，创新开发，并定期开展项目活动，能力竞赛。希望同学们积极参与，相互提高</p>
              </div>
              <p>俱乐部在计算机系专业教师李怀忠博士推动下，于2016年7月13日正式成立。本俱乐部旨在形成一个良好的计算机学习氛围，并依托于互联网+基地，开展项目实践。</p>
            </div>
          </div>
          <!-- .col-md-7 close -->
          <div class="col-md-5 col-sm-12">
            <div class="block">
              <img v-lazy="homeImg"/>
              <!-- <img src="https://i.loli.net/2017/08/16/599460fd9a603.gif" alt="Img"> -->
            </div>
          </div>
          <!-- .col-md-5 close -->
        </div>
      </div>
    </section>

    <section id="feature" v-lazy:background-image="featureImg">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-6">
            <h2>互联网+</h2>
            <p>
              通俗的说，“互联网+”就是“互联网+各个传统行业”，但这并不是简单的两者相加，而是利用信息通信技术以及互联网平台，让互联网与传统行业进行深度融合，创造新的发展生态。</p>
            <p>
              它代表一种新的社会形态，即充分发挥互联网在社会资源配置中的优化和集成作用，将互联网的创新成果深度融合于经济、社会各域之中。</p>
            <a href="https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91%2B" class="btn btn-view-works">查看定义</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Start -->
    <!-- <department></department> -->
    <section id="service">
      <div class="container">
        <department></department>
      </div>
    </section>
    <!-- Call to action Start -->
    <section id="call-to-action" v-lazy:background-image="actionImg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <h2>俱乐部还为大家提供了丰富的活动</h2>
              <p>
                在每学期，我们会举行各种有趣的活动，让同学们更加热爱计算机，热爱互联网，同时拓展同学们的视野。我们还会举行各种比赛，提高同学们的竞技能力</p>
                <router-link class="btn btn-default btn-call-to-action" to="/activities">查看所有活动</router-link>
              <!-- <a class="btn btn-default btn-call-to-action" href="/activities">查看所有活动</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content Start -->
    <section id="testimonial">
      <div class="container">
        <div class="row">
          <div class=" text-center">
            <h2>俱乐部现状</h2>
            <p>
              因为起步较晚，俱乐部目前还在成长阶段，不过我们会慢慢使俱乐部强大起来，当然俱乐部也离不开同学们的支持和喜爱。</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="block">
              <ul class="counter-box clearfix">
                <li>
                  <div class="block">
                    <i class="ion-ios-chatboxes-outline"></i>
                    <h4 class="counter">365</h4>
                    <span>成立</span>
                  </div>
                </li>
                <li>
                  <div class="block">
                    <i class="ion-ios-glasses-outline"></i>
                    <h4 class="counter">132</h4>
                    <span>成员</span>
                  </div>
                </li>
                <li>
                  <div class="block">
                    <i class="ion-ios-compose-outline"></i>
                    <h4 class="counter">30</h4>
                    <span>部门干事</span>
                  </div>
                </li>
                <li>
                  <div class="block">
                    <i class="ion-ios-timer-outline"></i>
                    <h4 class="counter">3</h4>
                    <span>指导老师</span>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div class="col-md-5 col-md-offset-1">
            <h4>
              QQ群
            </h4>
            <!-- <div style="width=80px;height=80px;"> -->
              <img src="http://ww2.sinaimg.cn/mw690/b8eae9cfgw1fax5ystr3wj20f00f0tat.jpg" style="width:300px;height:300px;" />
            <!-- </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- footer Start -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="footer-manu">
              <ul>
                <li>
                  <a href="#">关于我们</a>
                </li>
                <li>
                  <a href="#">联系我们</a>
                </li>
                <li>
                  <a href="#">捐助</a>
                </li>
                <li>
                  <a href="#">团队</a>
                </li>
              </ul>
            </div>
            <p>Copyright &copy; Crafted by
              <a href="https://dcrazed.com/">Dcrazed</a> .& <a href="#">LSUPlusClub Team</a></p>
              <p>RESTful API provided by <a href="http://blog.bbchen.top">bb chen</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Department from '@/views/home/department.vue'

export default {
  components: {
    Department
  },
  data() {
    return {
      homeImg: 'https://i.loli.net/2017/08/16/599460fd9a603.gif',
      largeImg: '../assets/back.jpg',
      featureImg: 'https://i.loli.net/2017/09/27/59cb5134dd719.jpg',
      actionImg: 'https://i.loli.net/2017/09/27/59cb556a0a0d8.jpg'
    }
  }
}
</script>

<style>

</style>
