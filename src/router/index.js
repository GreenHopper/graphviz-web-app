import Vue from "vue";
import Router from "vue-router";
// import Hello from '@/components/Hello'
import Graphviz from "@/components/GraphViz";
import Dashboard from "@/components/Dashboard";
import AppLayout from "@/components/layout/AppLayout";
import About from "@/pages/About";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "",
      component: AppLayout,
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "/i/about",
          name: "About",
          component: About,
          meta: { reuse: false }
        },
        {
          path: "/i/privacy",
          name: "Privacy",
          component: () => import("../markdown/privacy.md")
        },
        {
          path: "/i/terms",
          name: "Terms",
          component: () => import("../markdown/terms.md")
        },
        {
          path: "/example/:index?",
          name: "Example",
          component: Graphviz,
          meta: { reuse: false }
        },
        {
          // route for localStorage dots
          path: ":user/:slug",
          name: "cloud",
          component: Graphviz,
          meta: { reuse: false }
          // alias: '/example/:index'
          // name: 'Hello',
          //   component: Hello
        },
        {
          // route for localStorage dots or new dot
          path: "/:slug?",
          name: "Home",
          component: Graphviz,
          meta: { reuse: false }
          // alias: '/example/:index'
          // name: 'Hello',
          //   component: Hello
        }
      ]
    }
  ]
});
