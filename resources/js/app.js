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
import VueRouter from 'vue-router'




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
import Services from './components/Services'

Vue.use(VueRouter);

const routes = [

    {
        path: '/',name:('app'), component: App,
    },
    {
        path: '/pricelistadmin',name:('pricelistadmin'), component: PriceListAdmin,
    },
]



const router = new VueRouter({
    mode: 'hash',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 };  // Go to the top of the page if no hash
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
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    // methods: {
    //     scrollToId(id) {
    //         document.getElementById(id).scrollIntoView();
    //     }},
    vuetify,
     router,
});
