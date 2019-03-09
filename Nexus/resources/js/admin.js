// vue router
// ________________________
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
// _____________________
import SBar from './components/admin/SideBar.vue'
import Places from './components/admin/Places.vue'
import Members from './components/admin/Members.vue'

Vue.component('SBar', SBar)

// routes
// __________________
let routes = [
    { path:'/dashboard', component:{ template:"<div>some</div>"} },
    { path:'/places', component: Places },
    { path:'/members', component: Members }
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
        register:function(){
            var form = $('#regForm')[0];
            this.data = new FormData(form);
            // this.data.append('_token', this.csrftoken);
            
    axios.post('/register', this.data)
      .then(response => (console.log(response.data)))
        }
    }
});