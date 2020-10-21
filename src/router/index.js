import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/demo1",
    name: "Composition API",
    component: () =>
      import(/* webpackChunkName: "demo1" */ "../views/Demo1.vue")
  },
  {
    path: "/demo2",
    name: "Teleport",
    component: () =>
      import(/* webpackChunkName: "demo2" */ "../views/Demo2.vue")
  },
  {
    path: "/demo3",
    name: "Fragment",
    component: () =>
      import(/* webpackChunkName: "demo3" */ "../views/Demo3.vue")
  },
  {
    path: "/demo4",
    name: "Suspense",
    component: () =>
      import(/* webpackChunkName: "demo4" */ "../views/Demo4.vue")
  },
  {
    path: "/demo5",
    name: "v-model",
    component: () =>
      import(/* webpackChunkName: "demo5" */ "../views/Demo5.vue")
  },
  {
    path: "/demo6",
    name: "$attrs",
    component: () =>
      import(/* webpackChunkName: "demo6" */ "../views/Demo6.vue")
  },
  {
    path: "/demo7",
    name: "Others",
    component: () =>
      import(/* webpackChunkName: "demo7" */ "../views/Demo7.vue")
  },

  {
    path: "/references",
    name: "References",
    component: () =>
      import(/* webpackChunkName: "references" */ "../views/References.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
