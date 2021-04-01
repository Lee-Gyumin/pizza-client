import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import PaymentDetail from "@/views/PaymentDetail.vue";
import Share from "@/views/Share.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: "/",
            name: "main",
            component: Main,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/paymentdetail",
            name: "paymentdetail",
            component: PaymentDetail,
        },
        {
            path: "/share",
            name: "share",
            component: Share,
        },
    ],
});

// 로그인 여부 검사
// router.beforeEach((to, from, next) => {
//   if (store.state.token && to.name === 'Login') {
//       next({
//           path: '/',
//       });
//   }
//   if (!!store.state.token || !to.meta.authRequired) return next();
//   next({
//       path: '/Login',
//   });
// });

export default router;