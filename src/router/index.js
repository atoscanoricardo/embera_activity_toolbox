import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portada from "../views/Portada";
import Pronombres from "../views/Pronombres";
import Saludos from "../views/Saludos";
import Numeros from "../views/Numeros";
import Colores from "../views/Colores";
import Act_Pronombres from "../views/Act_Pronombres";
import Act_Numeros from "../views/Act_Numeros";
import Act_Saludos from "../views/Act_Saludos";
import Act_Colores from "../views/Act_Colores";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/pronombres",
    name: "Pronombres",
    component: Pronombres,
  },
  {
    path: "/saludos",
    name: "Saludos",
    component: Saludos,
  },
  {
    path: "/numeros",
    name: "Numeros",
    component: Numeros,
  },
  {
    path: "/colores",
    name: "Colores",
    component: Colores,
  },
  {
    path: "/act_Pronombres",
    name: "Act_Pronombres",
    component: Act_Pronombres,
  },
  {
    path: "/act_Colores",
    name: "Act_Colores",
    component: Act_Colores,
  },
  {
    path: "/act_Numeros",
    name: "Act_Numeros",
    component: Act_Numeros,
  },
  {
    path: "/act_Saludos",
    name: "Act_Saludos",
    component: Act_Saludos,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
