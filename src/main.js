import Vue from 'vue'
import App from './App.vue'
import Number from './components/Number.vue'

Vue.config.productionTip = false;
Vue.component("Number", Number);
Vue.filter("upper", function(value) {
  console.log("フィルタ");
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("global mixin");
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
