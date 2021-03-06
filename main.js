import Vue from 'vue'
import App from './App'
import router from './router'

import cuCustom from './wxcomponents/colorui/components/cu-custom.vue'

Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	router
})
app.$mount()
