import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import "normalize.css/normalize.css";
import locale from "element-ui/lib/locale/lang/zh-CN";
import "@/styles/index.scss"; // global css
import "./styles/element-variables.scss";
import router from "./router";
import "./permission"; // permission control
import { ThenableProvider, BaseEnterProvider } from "lourd-components";
Vue.use(ElementUI, { locale });
Vue.use(ThenableProvider);
Vue.use(BaseEnterProvider);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
