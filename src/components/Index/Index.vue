<template>
  <div class="micronews">
    <my-header></my-header>

    <div class="layui-fulid micronews -banner w1000">
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
                  <router-link :to="{name:'Details',query:{news_id:v.news_id}}">
                <div class="item">
                    <img style="height: 100px;width: 200px;" :src="v.news_image">
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
                  </router-link>
                </template>
                <div class="b-txt">
                  <span class="label" @click="more">加载更多。。。</span>

                </div>
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
                    <template v-for="(v,k) in heat">
                    <li class="list">
                      <router-link :to="{name:'Details',query:{news_id:v.news_id}}">{{v.news_title}}</router-link>
                      <template v-if="v.sort<=3"><i  class="heat-icon"></i></template>
                        </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <my-footer></my-footer>
  </div>
</template>

<script>
import '@/assets/layui/css/layui.css'
import '@/assets/static/css/main.css'
import '@/assets/layui/layui.js'
import MyHeader from '@/components/public/Header'
import MyFooter from "@/components/public/Footer"
import Common from '@/mixins/common.js'



export default {
  name: 'Index',
  data () {
    return {
        info:[],
        heat:[],
        news_lunbo:[],
        page:2,
    }

  },
  //页面加载
  mounted(){
    this.$http.post('/api/',{}).then(success=>{
      this.info=success.body.data;
    },error=>{
      alert(error);
    });
    layui.use('index',function(){
        let index = layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
    });
    //渲染轮播图
    this.$http.post('/api/lunbo',{}).then(response=>{
        this.news_lunbo=response.body;
    },error=>{
        console.log(error);
        return false;
    });
    //热门咨询
    this.$http.post('/api/heat',{}).then(success=>{
      this.heat=success.body.data;
    },error=>{
      console.log(error);
    });
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
    //加载更多
    more:function(){
      let pages=this.page++;
      this.$http.post('/api/',{page:pages}).then(response=>{
        this.info=this.info.concat(response.body.data);
        console.log(this.info);
      },error=>{
        console.log(error);
      });
    }
  },
  watch: {
    info: function(val){
      for(let i in val ){
        this.info[i].publish_time_desc=this.timetoDate(val[i].publish_time);
      }
    }
  },
  components: {
    myHeader: MyHeader,
    myFooter:MyFooter,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
