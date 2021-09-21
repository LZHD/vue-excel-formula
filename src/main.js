import Vue from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VXETable);

new Vue({
  render: h => h(App),
}).$mount('#app');
