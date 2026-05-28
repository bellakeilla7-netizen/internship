import {createRouter, createWebHistory} from 'vue-router'
 import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NavBar from '../components/ui/NavBar.vue';
import Service from  '../views/Service.vue';
import Contact from '../views/Contact.vue'
import Photos from '../views/Photos.vue';
import Video from '../views/Video.vue';
import West from '../views/West.vue';
import North from '../views/North.vue';
import South from '../views/South.vue';
import Kigali from '../views/Kigali.vue';
import East from '../views/East.vue';




const routes=[
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:"/About",
        name:"About",
        component:About
    },
    { 
        path:"/Service",
        name:"Service",
        component:Service
    },
    {
        path:"/Contact",
        name:"Contact",
        component:Contact
    },
    {
        path:"/Photos",
        name:"Photos",
        component:Photos
    },
    {
        path:"/Video",
        name:"Video",
        component:Video
    },
    {
        path:"/West",
        name:"West",
        component:West
    },
    {
        path:"/North",
        name:"North",
        component:North
    },
    {
        path:"/South",
        name:"South",
        component:South
    },
     {
        path:"/Kigali",
        name:"Kigali",
        component:Kigali
    },
    {
        path:"/East",
        name:"East",
        component:East
    }


];

;

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;