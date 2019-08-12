// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入axios解决跨域
import axios from 'axios'
Vue.prototype.axios = axios;
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//为图片设置过滤器http://p0.meituan.net/w.h/movie/xxx这种图片可以设置宽高
Vue.filter('setWH',(url,args)=>{
  return url.replace(/w\.h/,args);
});
//引入Scroller组件
import Scroller from '@/components/subComponents/Scroller'
Vue.component('Scroller' , Scroller);
// 导入 MUI 的样式
import './assets/dist/css/mui.min.css'
// 导入扩展图标样式
import './assets/dist/css/icons-extra.css'
Vue.config.productionTip = false
Vue.config.silent = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
