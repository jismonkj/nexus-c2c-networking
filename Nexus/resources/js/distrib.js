// vue router
// ________________________
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
// _____________________
import SBar from './components/distrib/SideBar.vue'
import Places from './components/distrib/Places.vue'
import Orders from './components/distrib/Orders.vue'
import Payments from './components/distrib/Payments.vue'

Vue.component('SBar', SBar)

// routes
// __________________
let routes = [
    { path: '/dashboard', component: { template: "<div>some</div>" } },
    { path: '/places', component: Places },
    { path: '/orders', component: Orders },
    { path: '/payments', component: Payments },
];
const router = new VueRouter({
    routes // short for `routes: routes`
})


// admin app
// ____________________
const app = new Vue({
    el: '#adminApp',
    data: {
        csrftoken: '',
        data: '',
        breadCumbPath: "Dashboard",
        processing: false,
        // info:null
    },
    router,
    mounted() {
        this.csrftoken = $("#csrf-token").attr('content');
        window.axios.interceptors.request.use((config) => {
            this.processing = true;
            return config;
        });
        window.axios.interceptors.response.use((response) => {
            this.processing = false;
            return response;
        });
    },
    methods: {

    }
});