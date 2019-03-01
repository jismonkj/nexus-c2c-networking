// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
Vue.component(adminNav, require('./components/admin/Nav.vue').default);

// admin app____________________
let routes = [
    {path: '/some', component: adminNav}
];
const app = new Vue({
    el: '#adminApp',
    data:{
        csrftoken:'',
        data:''
        // info:null
    },
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