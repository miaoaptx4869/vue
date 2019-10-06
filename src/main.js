import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './plugins/echarts';
import './plugins/element';
import VueDND from 'awe-dnd';
Vue.use(VueDND);
Vue.config.productionTip = false;
let bus = new Vue();
Vue.prototype.bus = bus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
