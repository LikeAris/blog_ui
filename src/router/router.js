import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',    //这个模式下，地址栏就不会自己加上#号了
    routes: [           // 注意此处为routes 不是router
        {
            name:'index',
            path:'/',
            component:Index,
        },
    ]
})

export default router;