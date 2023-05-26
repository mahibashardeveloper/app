import {createRouter, createWebHistory} from "vue-router";

// ===================
// Pages
// ===================

import Login from "../Pages/Auth/Login.vue";
import Register from "../Pages/Auth/Register.vue";

import Layout from "../Pages/Layout/Layout.vue";
import Overview from "../Pages/Overview/Overview.vue";
import Invitation from "../Pages/Invitation/Invitation.vue";
import Department from "../Pages/Department/Department.vue";
import Staff from "../Pages/Staff/Staff.vue";
import Settings from "../Pages/Settings/Settings.vue";

const ROOT_URL = "/front";
const routes = [

    // Authentication
    {path: ROOT_URL + '/auth/login', name: 'Login', component:Login},

    {path: ROOT_URL + '/auth/register', name: 'Register', component: Register},

    // Layout Pages

    {path: ROOT_URL + '/auth/Layout', name: 'Layout', component: Layout,

        children:[

            {path: ROOT_URL + '/', name: 'Overview', component: Overview},

            {path: ROOT_URL + '/invitation', name: 'Invitation', component: Invitation},

            {path: ROOT_URL + '/department', name: 'Department', component: Department},

            {path: ROOT_URL + '/settings', name: 'Settings', component: Settings},

            {path: ROOT_URL + '/staff', name: 'Staff', component: Staff},

        ],

    },



];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
