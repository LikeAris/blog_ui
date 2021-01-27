import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
// 引入路由
import router from './router/router';
// 引入状态管理
import store from './vuex/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
