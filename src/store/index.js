import Vue from "vue";
import Vuex from "vuex";
import { accountService, workService, consultService } from "./services";
import _ from "lodash";
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doctor: {}, // 当前医生
    otpts: [], // 当前坐诊门诊列表
    patient: undefined, // 当前需要对话的患者
    work: {},
    chat: {
      intalk: [],
      wait_intalk: [],
      end: [],
    },
  },
  mutations: {
    updateCurrentDoctor(state, payload) {
      state.doctor = payload;
    },
    updateCurrentOtpts(state, payload) {
      state.otpts = payload;
    },
    updateCurrentPatient(state, payload) {
      state.patient = payload;
    },
    updateWork(state, payload) {
      state.work = payload;
    },
    updateChat(state, payload) {
      // state.chat = {
      //   intalk: [],
      //   wait_intalk: [],
      //   end: [],
      // };
      state.chat = _.assign(state.chat, payload);
    },
  },
  actions: {
    /** 获取当前的状态
     *  1. 获取当前医生的信息
     *  2. 获取当前医生的坐诊门诊
     */
    async fetchCurrent(context) {
      await context.dispatch("fetchDoctor");
      await context.dispatch("fetchOtpts");
    },
    /** 获取当前医生的信息 */
    fetchDoctor(context) {
      return accountService.show().then((res) => {
        context.commit("updateCurrentDoctor", res.data);
      });
    },
    /** 获取当前医生的坐诊门诊列表 */
    fetchOtpts(context) {
      return workService.otpts().then((res) => {
        context.commit("updateCurrentOtpts", res.data);
      });
    },
    /** 获取当前需要聊天的患者 */
    fetchPatient(context, payload) {
      return consultService.findOne(payload).then((res) => {
        context.commit("updateCurrentPatient", res.data);
      });
    },
    /** 获取聊天 */
    fetchChat(context, payload) {
      return consultService.find(payload).then((res) => {
        context.commit("updateChat", _.groupBy(res.data, "custom_status"));
      });
    },
    changeWork(context, payload) {
      context.commit("updateWork", payload);
      context.dispatch("fetchChat", {
        date: moment(new Date()).format("YYYY-MM-DD"),
        team_type: context.state.work.team_type,
      });
    },
  },
  modules: {},
});
