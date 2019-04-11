// vue router
// ________________________
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
// _____________________
import SBar from './components/distrib/SideBar.vue'
import Places from './components/distrib/Places.vue'
import Orders from './components/distrib/Orders.vue'

Vue.component('SBar', SBar)

// routes
// __________________
let routes = [
    { path:'/dashboard', component:{ template:"<div>some</div>"} },
    { path:'/places', component: Places },
    { path:'/orders', component: Orders },
];
const router = new VueRouter({
    routes // short for `routes: routes`
  })


// admin app
// ____________________
const app = new Vue({
    el: '#adminApp',
    data:{
        csrftoken:'',
        data:'',
        breadCumbPath:"Dashboard"
        // info:null
    },
    router,
    mounted(){
        this.csrftoken = $("#csrf-token").attr('content');
    },
    methods: {
 
    }
});