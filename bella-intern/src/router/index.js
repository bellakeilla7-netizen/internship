import {createRouter, createWebHistory} from 'vue-router'
import homeviews from '../views/homeviews.vue'
import Homeviews from '../views/homeviews.vue'



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