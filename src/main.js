// 导入第三方包
import Vue from "vue";
import app from "./app";
import router from "./router";
import "./common/stylus/mixins.styl";
import filters from './common/js/filter'

import config from './lib/config.js'
Vue.use(config);

//引入mock模拟后台数据
import "./mock/mockServer";
//引入手淘的flexible.js文件进行适配屏幕
import './flexible';

//引入微信js-sdk
// import wx from "weixin-js-sdk";

//引入mint-ui的组件
// import { Cell } from "mint-ui";
// import { Switch } from "mint-ui";
// import { Button } from "mint-ui";
import "mint-ui/lib/style.css";
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);

//下拉刷新上拉加载
import VueScroller from 'vue-scroller'
Vue.use(VueScroller);

import axios from "axios";

//视频组件
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);


//解决移动端点击300ms延迟
import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
//启用插件
// Vue.component(Cell.name, Cell);
// Vue.component(Switch.name, Switch);
// Vue.component(Button.name, Button);

//  扩展实例成员
Vue.prototype.axios = axios; // 把axios库放置到原型, 将来其他组件直接可以拿到axios对象

new Vue({
  el: "#app",
  router,
  render: h => h(app)

});
