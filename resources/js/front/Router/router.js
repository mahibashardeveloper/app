import {createRouter, createWebHistory} from "vue-router";

// ===================
// Pages
// ===================

import Login from "../Pages/Auth/Login.vue";
import Register from "../Pages/Auth/Register.vue";
import Profile from "../Pages/Auth/Profile.vue";

const ROOT_URL = "/front";
const routes = [

    // Authentication
    {path: ROOT_URL + '/auth/login', name: 'Login', component:Login},

    {path: ROOT_URL + '/auth/register', name: 'Register', component: Register},

    {path: ROOT_URL + '/auth/profile', name: 'Profile', component: Profile},

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
