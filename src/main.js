import Vue from 'vue'
import App from './App.vue'

import './components/GUI/resurces/basic.css'

import folder from './components/GUI/GFolder/folder.ts'
Vue.component('folder', folder)

import folderLabel from './components/GUI/GFolder/folderLabel.ts'
Vue.component('folder-label', folderLabel)

import folderBox from './components/GUI/GFolder/folderBox.ts'
Vue.component('folder-box', folderBox)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
