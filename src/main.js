// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import wx from 'weixin-js-sdk'
require("babel-core/register");
require("babel-polyfill");
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VideoPlayer from 'vue-video-player'
// import { wechatShare } from './api/wxConfig'

// Vue.prototype.wechatShare  = wechatShare
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
