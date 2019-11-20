import Vue from 'vue'
import Router from 'vue-router'

import initPage from "./views/initPage";
import mainPage from "./views/mainPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: "/init/",
      name: "initPage",
      component: initPage
    },
    {
      path: "/mainPage/",
      name: "mainPage",
      component: mainPage
    }
  ]
})
