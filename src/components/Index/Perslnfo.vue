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
          <a href="index.html">最新</a>
          <a href="list.html"  class="active">娱乐</a>
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
            <li class="layui-nav-item"><a href="index.html">最新</a></li>
            <li class="layui-nav-item  layui-this"><a href="list.html">娱乐</a></li>
            <li class="layui-nav-item"><a href="list.html">生活</a></li>
            <li class="layui-nav-item"><a href="list.html">财经</a></li>
            <li class="layui-nav-item"><a href="list.html">科技</a></li>
            <li class="layui-nav-item"><a href="list.html">军事</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="micronews-persInfo-wrap">
      <div class="micronews-container micronews-details-container micronews-persInfo-content w1000">
        <div class="layui-fluid">
          <div class="layui-row">
            <div class="layui-col-xs12 layui-col-sm12 layui-col-md3">
              <div class="popular-info">
                <div class="layui-card">
                  <div class="layui-card-header">
                    <a href="#"><img src="@/assets/static/images/header.png"></a>
                    <p class="name">喵小咪</p>
                  </div>
                  <div class="layui-card-body">
                    <ul class="tab" id="tabHeader"  lay-filter="myInfo">
                      <li lay-id="pl">我的评论</li>
                      <li lay-id="sc">我的收藏</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-xs12 layui-col-sm12 layui-col-md9">
              <div class="main">
                <div class="leave-message" id="tabBody">
                  <!-- 我的评论 -->
                  <div class="content-box">
                    <div class="ulCommentList">
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                        <a href="#"><img src="@/assets/static/images/header.png"></a>
                        <div class="item-cont">
                          <div class="cont">
                            <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                            <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                        <a href="#"><img src="@/assets/static/images/header.png"></a>
                        <div class="item-cont">
                          <div class="cont">
                            <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                            <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                        <a href="#"><img src="@/assets/static/images/header.png"></a>
                        <div class="item-cont">
                          <div class="cont">
                            <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                            <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                        <a href="#"><img src="@/assets/static/images/header.png"></a>
                        <div class="item-cont">
                          <div class="cont">
                            <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                            <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                        <a href="#"><img src="@/assets/static/images/header.png"></a>
                        <div class="item-cont">
                          <div class="cont">
                            <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                            <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="micronews-details-test" style="text-align: center;"></div>
                  </div>
                  <!-- 结束-我的评论 -->

                  <!-- 我的收藏 -->
                  <div class="content-box">
                    <div class="ulCommentList">
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="liCont">
                        <div class="item">
                          <div class="item-info">
                            <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                            <div class="b-txt">
                              <span class="label">娱乐</span>
                              <span class="icon message">
                              <i class="layui-icon layui-icon-dialogue"></i>
                              500条
                            </span>
                              <span class="icon time">
                              <i class="layui-icon layui-icon-log"></i>
                             2018.08.28
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="micronews-details-test1" style="text-align: center;"></div>
                  </div>
                  <!-- 结束-我的收藏 -->
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
  name: 'perslnfo',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
