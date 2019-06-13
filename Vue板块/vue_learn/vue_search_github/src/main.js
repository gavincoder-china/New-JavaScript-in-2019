import Vue from 'vue'
import App from './App.vue'
import { Button} from 'element-ui';
Vue.config.productionTip = false
Vue.use(Button);
// Vue.component(Button.name, Button)
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
