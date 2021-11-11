import Vue from "vue";
import VueRouter from "vue-router";
/* Layout */
import Layout from "@/layout";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect: "/chat",
  },
  {
    path: "/chat",
    meta: {
      name: "在线问诊",
    },
    component: Layout,
    children: [
      {
        path: "/",
        name: "chat",
        component: () => import("@/views/Chat"),
      },
    ],
  },
  {
    path: "/patients",
    component: Layout,
    meta: {
      name: "关注的患者",
    },
    children: [
      {
        path: "/",
        name: "patients",
        component: () => import("@/views/Patients"),
      },
    ],
  },
  {
    path: "/patients",
    component: Layout,
    meta: {
      name: "服务设置",
    },
    children: [
      {
        path: "/",
        name: "patients",
        component: () => import("@/views/Patients"),
      },
    ],
  },
  {
    path: "/patients",
    component: Layout,
    meta: {
      name: "历史咨询",
    },
    children: [
      {
        path: "/",
        name: "patients",
        component: () => import("@/views/Patients"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
