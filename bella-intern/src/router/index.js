import {createRouter, createWebHistory} from 'vue-router'
import homeviews from '../views/Home.vue/index.js'
import Homeviews from '../views/Home.vue/index.js'



const routes=[
    {
        path:'/',
        name:"home",
        component: Homeviews
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;