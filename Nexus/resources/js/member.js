// vue router
// ________________________
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
// _____________________
// import SBar from './components/admin/SideBar.vue'
// import Places from './components/admin/Places.vue'
import AccountDash from './components/member/account-dash.vue'
import PersonalInfo from './components/member/dash/personal-info.vue'
import ChangePassword from './components/member/dash/change-password.vue'
import MyInterests from './components/member/dash/my-interests.vue'
import EducationEmployment from './components/member/dash/education-employment.vue'
import ProfilePage from './components/member/profile-page.vue'
import Axios from 'axios';

Vue.component('PersonalInfo', PersonalInfo);
Vue.component('ChangePassword', ChangePassword);
Vue.component('AccountDash', AccountDash);
Vue.component('MyInterests', MyInterests);
Vue.component('EducationEmployment', EducationEmployment);
Vue.component('ProfilePage', ProfilePage);

// routes
// __________________
let routes = [
    { path:'/account', component: AccountDash, children:[
        { path:'/account/personal-info', component: PersonalInfo },
        { path:'/account/change-password', component: ChangePassword },
        { path:'/account/my-interests', component: MyInterests },
        { path:'/account/education-employment', component: EducationEmployment },
    ] },
    { path:'/profile-page', component: ProfilePage },
];
const router = new VueRouter({
    routes // short for `routes: routes`
  })


// admin app
// ____________________
const app = new Vue({
    el: '#memberApp',
     mounted(){
        this.csrftoken = $("#csrf-token").attr('content');
        // get user info
        axios.post('/user/info').then(
            response=>{
                this.user = response.data;
            }
        );
    },
    data:{
        user:"",
        csrftoken:'',
        data:'',
        breadCumbPath:"Dashboard"
        // info:null
    },
    router,

});