import Vue from 'vue'
import App from './App.vue'

import folder from './components/GUI/GFolder/folder.ts'

Vue.component('folder', folder)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
