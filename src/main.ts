import Vue from "vue"
import App from "./App.vue"
import vueCustomElement from "vue-custom-element"

import "./plugins/vuex.plugin"

import store from "./store"

Vue.config.productionTip = false

Vue.use(vueCustomElement)
Vue.customElement("vue-widget", (App.prototype.constructor as any).options)

new Vue({
	store,
	render: h => h(App)
}).$mount("#app")
