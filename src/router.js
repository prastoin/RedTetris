import Vue from "vue";
import Router from "vue-router";
import menu from "./components/menu.vue";
import game from "./components/game.vue";
import devTest from "./components/dev.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: menu
    },
    {
      path: "/RedTetris",
      name: "redTetris",
      component: game
    },
    {
      path: "/dev",
      name: "devTest",
      component: devTest
    }
  ]
});