/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import PriceList from "./components/PriceList";

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import vuetify from './vuetify';
import VueRouter from 'vue-router';
import Vuex from 'vuex';


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Home from './views/Hero';
import NavBar from './components/NavBar';
import App from './views/App';
import ServiceForm from "./components/ServiceForm";
import PriceListAdmin from "./components/PriceListAdmin";
import CreateAppointmentForm from "./components/CreateAppointmentForm";
import RequestAdmin from "./components/RequestsAdmin";
import AppontmentListAdmin from "./components/AppointmentListAdmin";
import Services from './components/Services'
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./views/AdminPage";

Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store(
    {
        state: {
            authenticated: false,
        },

        mutations: {
            setAuthentication(state, status)
            {
                state.authenticated = status;
            }
        }
    }
)
const routes = [

    {
        path: '/',name:('app'), component: App,
    },
    {
        path: '/login',
        name: "login",
        component: AdminLogin
    },
    {
        path:"/admin",
        name: "admin",
        component: AdminPage,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated == false) {
                next("/login");
            } else {
                next();
            }
        }
    }
]



const router = new VueRouter({
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 };  // if no id specified return to top
    },
    routes
})

Vue.component('about', require('./components/About.vue').default);
Vue.component('gallery', require('./components/Gallery.vue').default);
Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('app', require('./views/App.vue').default);
Vue.component('hero', require('./views/Hero.vue').default);
Vue.component('top-btn', require('./components/TopBtn').default);
Vue.component('services', require('./components/Services').default);
Vue.component('pricelist', require('./components/PriceList').default);
Vue.component('serviceform', require('./components/ServiceForm').default);
Vue.component('pricelistadmin', require('./components/PriceListAdmin').default);
Vue.component('create-appointment-form', require('./components/CreateAppointmentForm').default);
Vue.component('requests-admin', require('./components/RequestsAdmin').default);
Vue.component('appointment-list-admin', require('./components/AppointmentListAdmin').default);
Vue.component('admin-login', require('./components/AdminLogin').default);
Vue.component('admin', require('./views/AdminPage').default)
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store: store,
    vuetify,
    router,
});
