// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
Vue.config.productionTip = false

//使用http请求相关类库
Vue.use(VueResource)

//确保post请求不会被转化为options请求
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
