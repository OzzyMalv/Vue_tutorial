import Vue from "vue";
import Router from 'vue-router';
import App from "./App.vue";
// import tasks from "./components/tasks.vue";
import greetings from "./components/greetings.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'greetings',
      component: greetings,
    },
  ],
})

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
