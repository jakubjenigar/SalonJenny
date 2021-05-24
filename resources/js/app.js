require('./bootstrap');

require('alpinejs');

import Vue from 'vue'
window.Vue = require('vue');

Vue.component('landing-page', require('./components/Landing.vue').default);

const app = new Vue({
    el: '#app',
})

