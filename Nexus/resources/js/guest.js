
const app = new Vue({
    el: '#guestApp',
    data:{
        csrftoken:''
        // info:null
    },
    mounted(){
        this.csrftoken = $("#csrf-token").attr('content');
    },
    methods: {
        register:function(){
            alert();
    axios.post('/register', {id:'12', _token:this.csrftoken})
      .then(response => (console.log(response)))
        }
    }
});