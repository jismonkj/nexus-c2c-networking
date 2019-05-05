// # -- Dependencies
import "babel-polyfill"; // es6 shim
/* vue router________________________ */
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// laravel echo  && pusher____________________
import Pusher from 'pusher-js';
// Pusher.logToConsole = true;
import Echo from 'laravel-echo';
window.echo = new Echo({
    broadcaster: 'pusher',
    key: '929d330424cab924b358',
    cluster: 'ap2'
});

// # -- Components
import Autocomplete from "v-autocomplete"
Vue.use(Autocomplete);
import Wallet from "./components/utils/wallet";
import NotifyBar from "./components/utils/notify.vue";
import ImageView from "./components/utils/image-view.vue";
// import SBar from './components/admin/SideBar.vue'
// import Places from './components/admin/Places.vue'

//dash board
import AccountDash from './components/member/account-dash.vue'
import PersonalInfo from './components/member/dash/personal-info.vue'
import NotificationHistory from './components/member/dash/notification-history.vue'
import ChangePassword from './components/member/dash/change-password.vue'
import MyInterests from './components/member/dash/my-interests.vue'
import FriendRequests from './components/member/dash/friend-requests.vue'
import SentRequests from './components/member/dash/sent-requests.vue'
import FriendCircle from './components/member/dash/friend-circle.vue'
import OrdersSent from './components/member/dash/orders-sent.vue'
import OrdersRecieved from './components/member/dash/orders-recieved.vue'
import MyOrdersSent from './components/member/dash/my-orders-sent.vue'
import MyOrdersRecieved from './components/member/dash/my-orders-recieved.vue'

// 
import EducationEmployment from './components/member/dash/education-employment.vue'
import NewsFeed from './components/member/news-feed.vue'
import MainFeed from './components/member/feed/main-feed.vue'
import LeftSideBar from './components/member/feed/left-side-bar.vue'
import RightSideBar from './components/member/feed/right-side-bar.vue'
//
import Auctions from './components/member/auctions-all.vue'
import AuctionsLive from './components/member/auctions/auctions-live.vue'
import AuctionsMine from './components/member/auctions/auctions-mine.vue'
import AuctionsOld from './components/member/auctions/auctions-old.vue'
import AuctionsUpcoming from './components/member/auctions/auctions-upcoming.vue'
import AuctionsBidded from './components/member/auctions/auctions-bidded.vue'
//
import ProfilePage from './components/member/profile-page.vue'
import AboutPage from './components/member/profile/about-page.vue'
//
import ProfileOther from './components/member/profile-other.vue'
import MemberFriends from './components/member/other/member-friends.vue'
import MemberAbout from './components/member/other/member-about.vue'
//
//modal buy
import ModalBuy from "./components/utils/modal-buy.vue";

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
        path: '/account/notifications',
        component: NotificationHistory
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
        path: '/account/orders-sent',
        component: OrdersSent
    },
    {
        path: '/account/orders-recieved',
        component: OrdersRecieved
    },
    {
        path: '/account/orders-sent-m',
        component: MyOrdersSent
    },
    {
        path: '/account/orders-recieved-m',
        component: MyOrdersRecieved
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
    path: '/auctions',
    component: Auctions,
    children: [
        {
            path: '/auctions/live',
            component: AuctionsLive
        },
        {
            path: '/auctions/mine',
            component: AuctionsMine
        },
        {
            path: '/auctions/old',
            component: AuctionsOld
        },
        {
            path: '/auctions/upcoming',
            component: AuctionsUpcoming
        },
        {
            path: '/auctions/bidded',
            component: AuctionsBidded
        }
    ]
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
                    this.user.myAvatar = "img/author-main2.jpg"
                }
                if (this.user.myCover == "") {
                    this.user.myAvatar = "img/top-header2.jpg"
                }

                //subscribe to notification channel
                window.echo.private('user' + this.user.id)
                    .notification((notification) => {
                        //notification pop up
                        var notify = { id: notification.id, message: notification.message };
                        var notifyTop = { id: notification.id, data: { message: notification.message } }
                        this.$refs.notify.$data.notifications.push(notify);
                        this.notifications.unshift(notifyTop);
                        if (notification.category == 'newitem') {
                            this.$children[3].$refs.mainFeed.$data.stories.unshift(notification.item);
                        }
                    });
            }
        );

        axios.get('m/notifications/6').then(
            response => {
                this.notifications = response.data
            }
        );

    },
    data: {
        user: {},
        pageShadow:false,
        csrftoken: '',
        data: '',
        breadCumbPath: "Dashboard",
        newUserStatus: '',
        isWalletModalVisible: false,
        notifications: [
        ],
        //buy modal
        isBuyModalVisible: false,
        buyDetails: {},
        buyType: "",
        //imageview
        imgSet: null,
        imgPath: null,
        viewImage: false,
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

        },
        showBuyModal(story, type) {
            this.pageShadow = true;
            this.buyDetails = story;
            if (type == "auction") {
                this.buyDetails.price = story.highestbid;
                this.buyDetails.uid = story.u_id;
                this.buyDetails.item_id = story.auid;
            }
            this.isBuyModalVisible = true;
            this.buyType = type;
        },
        showImage(path, imgSet = []) {
            this.pageShadow = true;
            this.imgPath = path;
            this.imgSet = imgSet
            this.viewImage = true;
        }
    },
    components: {
        "modal-wallet": Wallet,
        NotifyBar,
        ModalBuy,
        ImageView
    }

});
