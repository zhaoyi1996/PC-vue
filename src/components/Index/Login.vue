<template>
  <div class="micronews micronews-login">
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
                <input type="text" name="title"  placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
                <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div class="login">
          <a href="login.html">
            登录
          </a>
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

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>登录</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input"v-model="phone">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password"  name="" lay-verify="required" id="imgCode" placeholder="密码" autocomplete="off" class="layui-input"v-model="password">

              </div>
            </div>


            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*"type="button" @click="login">登录</button>

              </div>

            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*" @click=""onclick="return false">注册</button>

              </div>

            </div>
            <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
          </form>
          <div class="other-login">
            <a href="#">
              <img src="@/assets/static/images/load1.png">
            </a>
            <a href="#">
              <img src="@/assets/static/images/load2.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/layui/css/layui.css'
  import '@/assets/static/css/main.css'
  import '@/assets/layui/layui.js'
  // import Common from '@/mixins/common.js'
export default {
  name: 'Login',
  data () {
    return {
        phone:'',
        password:''
    }
  },

  methods:{
      login:function () {
          //前台验证
          if(this.phone==""){
             alert('请输入手机号码');
              return false;
          }
          if(this.password==""){
              alert("请输入密码");
              return false;
          }
          let api_login = {
              phone:this.phone,
              password:this.password,
          };
          //把手机号码，密码发送给后台
          this.$http.post('/api/login',api_login).then(response=>{
              if(response.body.status == 200){
                  //sessionstorage用于临时保存网页数据  当网页关闭后 存储的数据也会清除
                  //sessionStorage.setItem('uid',response.body.data.uid);
                  alert(response.data.msg);
                   this.$router.push({name:'Index'});

              }else{
                  alert(response.data.msg);
              }
              console.log('success');
              console.log(response);
          },error=>{
              console.log(error);
          })
      },

  },
  mounted(){

  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
