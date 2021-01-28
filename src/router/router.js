import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index.vue';
import Photo from '../views/photo.vue';
import Blog from '../views/blog.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',    //这个模式下，地址栏就不会自己加上#号了
    routes: [           // 注意此处为routes 不是router（坑了我半天）
        {
            name:'index',
            path:'/',
            component:Index,
        },
        {
            name:'blog',
            path:'/blog',
            component:Blog,
        },
        {
            name:'photo',
            path:'/photo',
            component:Photo,
        },
    ]
})

export default router;