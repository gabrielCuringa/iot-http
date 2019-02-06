import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";

//components
import Dashboard from "./components/Dashboard.vue";

Vue.component("app-dashboard", Dashboard);

Vue.use(Vuetify);

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
