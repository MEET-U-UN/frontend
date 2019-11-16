import Vue from 'vue'
import Router from 'vue-router'
import SignUp from "./views/SignUp";
import NewRole from "./views/NewRole";
import initPage from "./views/initPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/registro/nuevo-rol",
      name: "newRole",
      component: NewRole
    },
    {
      path: "/init/",
      name: "initPage",
      component: initPage
    }
  ]
})
