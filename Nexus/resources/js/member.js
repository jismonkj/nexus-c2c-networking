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
import NewsFeed from './components/member/news-feed.vue'
import MainFeed from './components/member/feed/main-feed.vue'
import LeftSideBar from './components/member/feed/left-side-bar.vue'
import RightSideBar from './components/member/feed/right-side-bar.vue'
// import Axios from 'axios';

Vue.component('PersonalInfo', PersonalInfo);
Vue.component('ChangePassword', ChangePassword);
Vue.component('AccountDash', AccountDash);
Vue.component('MyInterests', MyInterests);
Vue.component('EducationEmployment', EducationEmployment);
Vue.component('ProfilePage', ProfilePage);
Vue.component('NewsFeed', NewsFeed);
Vue.component('MainFeed', MainFeed);
Vue.component('LeftSideBar', LeftSideBar);
Vue.component('RightSideBar', RightSideBar);

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
    { path:'/', component: NewsFeed},
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
                this.newUserStatus = this.user.status_text;
            }
        );
    },
    data:{
        fresher:true,
        user:{},
        csrftoken:'',
        data:'',
        breadCumbPath:"Dashboard",
        newUserStatus:''
    },
    router,
    methods:{
        setMyStatus:function(){
            axios.post('member/status/text', {'status_text':this.newUserStatus}).then(response=>{
                if(response.data){
                    this.user.status_text = this.newUserStatus;
                }
            });
        }
    }

});