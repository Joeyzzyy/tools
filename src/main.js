import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueClipboard from 'vue-clipboard2'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueClipboard);

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
