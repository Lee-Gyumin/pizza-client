import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Register from "@/views/Register.vue";


Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path:'/',
      name:'main',
      component:Main,
    },
    {
      path:'/register',
      name:'register',
      component:Register
    }
  ]
})


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
