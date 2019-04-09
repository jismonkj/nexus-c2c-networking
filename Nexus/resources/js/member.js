import "babel-polyfill"; // es6 shim
// vue router
// ________________________
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//VueBootstrapTypeahead

// bootstrap-vue


// components
// _____________________
import Autocomplete from "v-autocomplete"
Vue.use(Autocomplete);
import Wallet from "./components/utils/wallet";
// import SBar from './components/admin/SideBar.vue'
// import Places from './components/admin/Places.vue'

//dash board
import AccountDash from './components/member/account-dash.vue'
import PersonalInfo from './components/member/dash/personal-info.vue'
import ChangePassword from './components/member/dash/change-password.vue'
import MyInterests from './components/member/dash/my-interests.vue'
import FriendRequests from './components/member/dash/friend-requests.vue'
import SentRequests from './components/member/dash/sent-requests.vue'
import FriendCircle from './components/member/dash/friend-circle.vue'
import OrdersSent from './components/member/dash/orders-sent.vue'
import OrdersRecieved from './components/member/dash/orders-recieved.vue'

// 
import EducationEmployment from './components/member/dash/education-employment.vue'
import NewsFeed from './components/member/news-feed.vue'
import MainFeed from './components/member/feed/main-feed.vue'
import LeftSideBar from './components/member/feed/left-side-bar.vue'
import RightSideBar from './components/member/feed/right-side-bar.vue'
//
import ProfilePage from './components/member/profile-page.vue'
import AboutPage from './components/member/profile/about-page.vue'
//
import ProfileOther from './components/member/profile-other.vue'
import MemberFriends from './components/member/other/member-friends.vue'
import MemberAbout from './components/member/other/member-about.vue'


// Vue.component('PersonalInfo', PersonalInfo);
// Vue.component('ChangePassword', ChangePassword);
// Vue.component('FriendRequests', FriendRequests);
// Vue.component('SentRequests', SentRequests);
// Vue.component('AccountDash', AccountDash);
// Vue.component('MyInterests', MyInterests);
// Vue.component('EducationEmployment', EducationEmployment);
// Vue.component('OrdersSent', OrdersSent);
// Vue.component('OrdersRecieved', OrdersRecieved);

// Vue.component('NewsFeed', NewsFeed);
Vue.component('MainFeed', MainFeed);
Vue.component('LeftSideBar', LeftSideBar);
Vue.component('RightSideBar', RightSideBar);
// Vue.component('FriendCircle', FriendCircle);
// //
// Vue.component('ProfilePage', ProfilePage);
// Vue.component('AboutPage', AboutPage);
// //
// Vue.component('ProfileOther', ProfileOther);
// Vue.component('MemberFriends', MemberFriends);
// Vue.component('MemberAbout', MemberAbout);

// routes
// __________________
let routes = [{
        path: '/account',
        component: AccountDash,
        children: [{
                path: '/account/personal-info',
                component: PersonalInfo
            },
            {
                path: '/account/change-password',
                component: ChangePassword
            },
            {
                path: '/account/friend-requests',
                component: FriendRequests
            },
            {
                path: '/account/sent-requests',
                component: SentRequests
            },
            {
                path: '/account/friend-circle',
                component: FriendCircle
            },
            {
                path: '/account/my-interests',
                component: MyInterests
            },
            {
                path: '/account/education-employment',
                component: EducationEmployment
            },
            {
                path:'/account/orders-sent',
                component:OrdersSent
            },
            {
                path:'/account/orders-recieved',
                component:OrdersRecieved
            }
        ]
    },
    {
        path: '/profile', //PROFILE
        component: ProfilePage,
        children: [{
                path: '/profile/about',
                component: AboutPage
            },
            {
                path: '/profile/timeline',
                // component: AboutPage
            },
        ]
    },
    {
        path: '/',
        component: NewsFeed
    },
    {
        path: '/user/:id',
        component: ProfileOther,
        children: [{
                path: '/user/:id/friends',
                component: MemberFriends
            },
            {
                path: '/user/:id/about',
                component: MemberAbout
            }
        ]
    },
];
const router = new VueRouter({
    routes // short for `routes: routes`
})


// admin app
// ____________________
const app = new Vue({
    el: '#memberApp',
    mounted() {
        this.csrftoken = $("#csrf-token").attr('content');
        // get user info
        axios.post('/user/basicinfo').then(
            response => {
                this.user = response.data;
                this.newUserStatus = this.user.status_text;
                if (this.user.myAvatar == "") {
                    this.user.myAvatar= "img/author-main2.jpg"
                }
                if (this.user.myCover == "") {
                    this.user.myAvatar= "img/top-header2.jpg"
                }
            }
        );
    },
    data: {
        user: {},
        csrftoken: '',
        data: '',
        breadCumbPath: "Dashboard",
        newUserStatus: '',
        isWalletModalVisible:false,
    },
    router,
    methods: {
        setMyStatus: function () {
            axios.post('member/status/text', {
                'status_text': this.newUserStatus
            }).then(response => {
                if (response.data) {
                    this.user.status_text = this.newUserStatus;
                }
            });
        },
        encr: function (uid) {
            return 'home#/user/' + window.btoa(uid) + '/about';
        },
        redirectTo: function (url) {
            window.location.href = url;
            // this.$router.go();

        }
    },
    components:{
        "modal-wallet":Wallet
    }

});
