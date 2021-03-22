import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'main',
            component: ()=>import('../views/Main.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: ()=>import('../views/Register.vue'),
        },
       
    ],
});

export default router;