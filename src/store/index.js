import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
          paths: ['token', 'userInfo', 'rememberId', 'autoLogin'],
        }),
      ],
    state: {
        userInfo: {
            userEmail: '',
            userSeq: 0,
            userName: '',
            userType: '',
            companySeq: '',
          },
        autoLogin: false,
        token: '',
    },
    mutations: {},
    actions: {},
    modules: {},
});