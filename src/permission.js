import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { serviceContainer } from "@/composables/context-provider";
import store from "./store";
export const service = serviceContainer.authService;

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = localStorage.getItem("token");
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      store
        .dispatch("fetchCurrent")
        .then(() => {
          next();
          NProgress.done();
        })
        .catch(() => {
          alert("获取医生信息失败，请重新登录");
          next(`/login?redirect=${to.path}`);
        });
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
  next();
});
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
