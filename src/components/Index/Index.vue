<template>
  <div class="micronews">
    <div class="micronews-header-wrap">
      <div class="micronews-header w1000 layui-clear">
        <h1 class="logo">
          <a href="index.html">
            <img src="@/assets/static/images/LOGO.png" alt="logo">
            <span class="layui-hide">LOGO</span>
          </a>
        </h1>
        <p class="nav">
          <a href="index.html" class="active">最新</a>
          <a href="list.html">娱乐</a>
          <a href="list.html">生活</a>
          <a href="list.html">财经</a>
          <a href="list.html">科技</a>
          <a href="list.html">军事</a>
        </p>
        <div class="search-bar">
          <form class="layui-form" action="">
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="title" placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
                <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div class="login">
          <a href="login.html">
            登录
          </a>|
          <router-link :to="{name:'Register'}">
            注册
          </router-link>
          <!-- <a href="login.html"> -->
          <!-- <img src="@/assets/static/images/header.png" style="width: 36px; height: 36px;"> -->
          <!-- </a> -->
        </div>
        <div class="menu-icon">
          <i class="layui-icon layui-icon-more-vertical"></i>
        </div>
        <div class="mobile-nav">
          <ul class="layui-nav" lay-filter="">
            <li class="layui-nav-item layui-this"><a href="index.html">最新</a></li>
            <li class="layui-nav-item"><a href="list.html">娱乐</a></li>
            <li class="layui-nav-item"><a href="list.html">生活</a></li>
            <li class="layui-nav-item"><a href="list.html">财经</a></li>
            <li class="layui-nav-item"><a href="list.html">科技</a></li>
            <li class="layui-nav-item"><a href="list.html">军事</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="layui-fulid micronews-banner w1000">
      <div class="layui-carousel imgbox" id="micronews-carouse">
        <div carousel-item>

          <div v-for="(v,k) in news_lunbo" :key="k">
            <p class="title">{{v.n_title}}</p>
            <a href="list.html"><img src="@/assets/static/images/news_img11.jpg"></a>
            <p class="title">{{v.n_title}}</p>
          </div>

          <!--<div>-->
            <!--<p class="title">去南非旅行需要做什么准备</p>-->
            <!--<a href="list.html"><img src="@/assets/static/images/news_img11.jpg"></a>-->
          <!--</div>-->

        </div>
      </div>
    </div>


    <div class="micronews-container w1000">
      <div class="layui-fluid">
        <div class="layui-row">
          <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
            <div class="main">
              <div class="list-item" id="LAY_demo2">
                <template v-for="(v,k) in info">
                <div class="item">
                  <a href="details.html">
                    <img style="height: 100px;width: 200px;" :src="v.news_image">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">{{ v.news_title }}</a></h4>
                    <div class="b-txt">
                      <span class="label">{{ v.cate_name }}</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      {{ v.publish_time_desc }}
                    </span>
                    </div>
                  </div>
                </div>
                </template>
              </div>
            </div>
          </div>
          <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
            <div class="popular-info">
              <div class="layui-card">
                <div class="layui-card-header">
                  <h3>热门资讯</h3>
                </div>
                <div class="layui-card-body">
                  <ul class="list-box">
                    <li class="list">

                      <a href="list.html">你和我的倾城时光</a><i class="heat-icon"></i>

                    </li>
                    <li class="list">

                      <a href="list.html">顶级酒店内幕被曝光</a><i class="heat-icon"></i>

                    </li>
                    <li class="list">

                      <a href="list.html">王思聪抽奖</a><i class="heat-icon"></i>

                    </li>
                    <li class="list">

                      <a href="list.html">王者荣耀上官婉儿</a>

                    </li>
                    <li class="list">

                      <a href="list.html">妻子的浪漫旅行</a>

                    </li>
                    <li class="list">

                      <a href="list.html">海底捞回应员工偷拍</a>

                    </li>
                    <li class="list">

                      <a href="list.html">扎克伯格禁止高管用iPhone</a>

                    </li>
                    <li class="list">

                      <a href="list.html">王思聪抽手机壳送手机</a>

                    </li>
                    <li class="list">

                      <a href="list.html">每天闹钟20次提醒男友抽奖 </a>

                    </li>
                    <li class="list">

                      <a href=list.html#">詹姆斯收藏比赛用球</a>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="micronews-footer-wrap">
      <div class="micronews-footer w1000">
        <div class="ft-nav">
          <a href="#">关于我们</a>
          <a href="#">合作伙伴</a>
          <a href="#">广告服务</a>
          <a href="#">常见问题</a>
        </div>
        <div class="Copyright">
          <span>Copyright&nbsp;</span>&nbsp;&copy;<span>新闻网&nbsp;&nbsp;</span><span>赣ICP备12345678号</span>
        </div>
        <div class="f-icon">
          <a href="#" class="w-icon">
            <img src="@/assets/static/images/wechat_ic.png">
          </a>
          <a href="#" class="wb-icon">
            <img src="@/assets/static/images/qq_ic.png">
          </a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import '@/assets/layui/css/layui.css'
import '@/assets/static/css/main.css'
import '@/assets/layui/layui.js'
export default {
  name: 'Index',
  data () {
    return {
        info:[],
        news_lunbo:[],
    }
  },
  //页面加载
  mounted(){
    this.$http.post('/api/',{}).then(success=>{
      this.info=success.body.data;
      console.log(this.info);
    },error=>{
      alert(111);
    });
    layui.use('index',function(){
        var index = layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
    });
    //渲染轮播图
    this.$http.post('/api/lunbo',{}).then(response=>{
        console.log(response);
        this.news_lunbo=response.body;
    },error=>{
        console.log(error);
        return false;
    })
  },
  methods:{
    timetoDate(time){
      let obj=new Date(time * 1000);
      let year=obj.getFullYear();
      let month=obj.getMonth();
      let day=obj.getDay();
      let hour=obj.getHours();
      if(hour <10){
        hour= '' +0 + hour;
      }
      let minutes=obj.getMinutes();
      let seconds=obj.getSeconds();
      return ''+year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    },
  },
  watch: {
    info: function(val){
      for(let i in val ){
        this.info[i].publish_time_desc=this.timetoDate(val[i].publish_time);
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
