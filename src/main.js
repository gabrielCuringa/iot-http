import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import VueFire from "vuefire";
//components
import Dashboard from "./components/Dashboard.vue";

Vue.use(Vuetify);
Vue.use(VueFire);

Vue.component("app-dashboard", Dashboard);

/*Vue.use(VueRouter);
const routes = [{ path: "/", component: Dashboard }];

const router = VueRouter({
  routes: routes,
  mode: "history"
});*/

new Vue({
  el: "#app",
  render: h => h(App)
});
