import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["token", "userInfo", "rememberId", "autoLogin"],
    }),
  ],
  state: {
    userInfo: {
      userName: "",
      userSeq: 0,
      userEmail: "",
      point: 0,
    },
    token: "",
  },
  mutations: {
    LOGIN(state, data) {
      if (!data.token) return;
      state.token = data.token;
      state.userInfo = {
        userName: data.userName,
        userSeq: data.userSeq,
        userEmail: data.userEmail,
        point: data.point,
      };
    },
    LOGOUT(state) {
      state.token = null;
      state.userInfo = {
        userName: "",
        userSeq: 0,
        userEmail: "",
        point: 0,
      };
      state.firebaseUserId = null;
    },
  },
  actions: {},
  modules: {},
});
