// vue router
// ________________________
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
// _____________________
import SBar from './components/admin/SideBar.vue'
import Places from './components/admin/Places.vue'
import Members from './components/admin/Members.vue'
import Distributors from './components/admin/Distributors.vue'
import DistribReg from './components/admin/DistribReg.vue'
import AdminDash from './components/admin/DashBoard.vue' 
import Transactions from './components/admin/Transactions.vue' 

Vue.component('SBar', SBar)

// routes
// __________________
let routes = [
    { path: '/dashboard', component: AdminDash },
    { path: '/places', component: Places },
    { path: '/members', component: Members },
    { path: '/distributors', component: Distributors },
    { path: '/distribreg', component: DistribReg },
    { path: '/transactions', component: Transactions },
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
        // info:null
        processing: false
    },
    router,
    mounted() {
    },
    methods: {
        register: function () {
            var form = $('#regForm')[0];
            this.data = new FormData(form);
            // this.data.append('_token', this.csrftoken);

            axios.post('/register', this.data)
                .then(response => (console.log(response.data)))
        }
    }
});