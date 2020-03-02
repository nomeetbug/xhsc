import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant组件
import './plugins/vant.js'

// 引入移动端适配方案
import 'lib-flexible/flexible'
// 引入移动端normalize.css
import 'normalize.css/normalize.css'
// 引入es6转es5 依赖
import 'babel-polyfill'
// 引入happy-scroll组件
import { HappyScroll } from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
// 引入 全局css
import './assets/style/common.css'
// 引入icon-font.css 样式
import './assets/font-icon/iconfont.css'

// 引入axios
import axios from 'axios'

// 配置请求根路径
// 'https://www.zhengzhicheng.cn/api/public/v1/'
// 'http://127.0.0.1:8888/api/public/v1/'
// 'https://uinav.com/api/public/v1/'
axios.defaults.baseURL = '/api'
// 把axios赋值给vue 的prototype属性上
Vue.prototype.$http = axios
Vue.config.productionTip = false

// 自定义组件名
Vue.component('happy-scroll', HappyScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
