<template>
  <div class="container ">
    <div class="container" style="
      margin-top: 35px;
  ">
      <div class=" container col-md-6 ">
        <img src="http://ww4.sinaimg.cn/mw690/b8eae9cfgw1fax5uv7zadj204603yaa1.jpg" alt="" width="40%" style="border-radius: 50%;" />
        <div align="center">
          <h3 class="">办公室</h3>
          1、负责俱乐部内部建设<br> 2、负责办公用品的购买
          <br> 3、做好会议及各项活动的短信通知，会议记录及纪律监督
          <br> 4、负责俱乐部财务资金的管理
          <br> 5、负责俱乐部图书的管理
          <br> 6、负责俱乐部各项活动前期宣传以及通知工作
          <br> 7、负责活动照片记录收集与及时的汇总上传
          <br> 8、活动通讯的撰写
          <br>
          <div class="" style="
  			    	margin-top: 35px;
  					">
            <input type="submit" @click="sign" class="btn btn-success" value="我要加入办公室" style="">

          </div>
        </div>
      </div>
      <div class="container col-md-6 ">
        <img src="http://ww4.sinaimg.cn/mw690/b8eae9cfgw1fax5us1hqkj204603yt8q.jpg" alt="" width="40%" style="border-radius: 50%;" />
        <div align="center">
          <h3 class="">技术部</h3>
          1、负责计算机专业相关竞赛的举办。<br> 2、负责俱乐部专业建设
          <br> 3、为会员提供专业知识技能的交流平台
          <br> 3、负责计算机专业科创基地的管理
          <br> 5、负责专业老师，优秀毕业生讲座及互动的组织安排
          <br> 6、负责俱乐部官方微信平台的建设维护和功能完善
          <br> 7、负责几大宣传平台的动态更新和管理。
          <br> 8、学科技术兴趣小组的开展
          <br>

        </div>
        <div class="" style="
  			margin-top: 35px;
  			">
          <input type="submit" @click="sign" class="btn btn-success" value="我要加入技术部" style="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    sign() {
      swal("抱歉", "暂未开始招新","info")
    }
  }
}
</script>

