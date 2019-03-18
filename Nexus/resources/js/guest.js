const app = new Vue({
    el: '#guestApp',
    data: {
        csrftoken: '',
        data: '',
        //form-validation
        email:'',
        password:'',
        errors:{},
        rules:{
            email:''
        }
    },
    mounted() {
        this.csrftoken = $("#csrf-token").attr('content');
    },
    methods: {
        register: function () {
            var form = $('#regForm')[0];
            this.data = new FormData(form);
            // this.data.append('_token', this.csrftoken);

            axios.post('/register', this.data)
                .then(response => (console.log(response.data)))
        }
    },
    watch:{

    }
});
