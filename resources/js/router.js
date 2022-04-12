import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     component: IndexComponent
        // },
        {
            path: '/home',
            name: 'home',
            component: () => import('./components/HomeComponent')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('./components/ListComponent')
        }
    ]
})
