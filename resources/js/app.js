import Vue from 'vue';
import './bootstrap';
import VueRouter from 'vue-router';
import router from './routes';
import moment from 'moment';

window.Vue = Vue;
Vue.use(VueRouter);

window.moment = moment;
const app = new Vue({
    el: '#app',
    router
});
