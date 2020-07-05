import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false

// Begin router configuration
import VueRouter from 'vue-router';

import Calculator from './components/Calculator.vue'
import About from './components/About.vue'
import Resources from './components/Resources.vue'

const routes = [
  { path: '/', component: Calculator},
  { path: '/about', component: About },
  { path: '/resources', component: Resources }
]

const router = new VueRouter({
  routes // connect routes configured above
})

Vue.use(VueRouter);
Vue.use(vuetify)

// End router configuration
/** Review this error
 *  vue.runtime.esm.js?2b0e:619 [Vue warn]: You are using the 
 * runtime-only build of Vue where the template compiler is not 
 * available. Either pre-compile the templates into render functions, 
 * or use the compiler-included build.
 */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
