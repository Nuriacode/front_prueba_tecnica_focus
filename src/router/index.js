import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/LogIn.vue";
import DashBoard from "../views/Dashboard.vue";
import EditarUsuario from "../views/Editar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Log In",
    component: LogIn,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: EditarUsuario,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
