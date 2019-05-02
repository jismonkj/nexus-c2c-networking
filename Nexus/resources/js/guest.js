const app = new Vue({
    el: '#guestApp',
    data: {
        csrftoken: '',
        data: '',
        queryServer: false,
        chngLoginBtnTitle: 'Login',
        chngRegBtnTitle: 'Complete Registration',
        //form-validation
        email: '',
        password: '',
        errors: {},
        rules: {
            email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            password: /^(?=.*\d).{4,10}$/,
            fname: /[a-z]{1,10}/,
            // lname: /[A-z][a-z]+/,
            dob: /(\d{4})-(\d{2})-(\d{2})/,
            gender: /^male$|^female$/,
        },
        //registration
        registerForm: {
            email: '',
            fname: '',
            lname: '',
            password: '',
            dob: '',
            gender: '',
            validMail: false,
        }
    },
    mounted() {
        this.csrftoken = $("#csrf-token").attr('content');
    },
    methods: {
        register: function () {
            if (Object.keys(this.errors).length != 0) {
                this.notifyR("Form has invalid details");
                return;
            }

            // if (this.hasEmptyFields('register')) {
            //     this.notifyR("Please complete the form");
            //     return;
            // }

            var form = $('#regForm')[0];
            this.data = new FormData(form);
            this.queryServer = true;
            axios.post('/register', this.data)
                .then(response => {
                    this.queryServer = false;
                    if (response.data) {
                        this.notifyR("Registration Successful!");
                        setTimeout(function () {
                            window.location.href = "/home#/account/personal-info";
                        }, 1200);
                    } else {
                        this.notifyR('Err! Something went wrong.');
                    }
                }).catch(error => {
                    this.notifyR('Err! Something went wrong.');
                });
        },
        loginNex: function () {
            // if (this.hasEmptyFields('login')) {
            //     this.notify("Please complete the form");
            //     return;
            // }

            if (Object.keys(this.errors).length == 0) {
                $("#logNexus").submit();
            }
        },
        notify: function (text) {
            this.chngLoginBtnTitle = text;
            setTimeout(() => {
                this.chngLoginBtnTitle = "Login";
            }, 3000);
        },
        notifyR: function (text) {
            this.chngRegBtnTitle = text;
            setTimeout(() => {
                this.chngRegBtnTitle = "Complete Registration";
            }, 3000);
        },
        validate: _.debounce(function (type) {
            switch (type) {
                case 'email':
                    if (this.rules.email.test(this.registerForm.email)) {
                        this.queryServer = true;
                        axios.post('/check/mail/exists', {
                            'email': this.registerForm.email
                        }).then(response => {
                            if (response.data) {
                                this.errors.email = true;
                                this.notifyR("Email Already Exists");
                                this.registerForm.validMail = false;
                            } else {
                                this.registerForm.validMail = true;
                                delete this.errors.email;
                            }
                            this.queryServer = false;
                        });
                    } else {
                        this.errors.email = true;
                        this.registerForm.validMail = false;
                        this.notifyR("Invalid Email!");
                    }
                    break;
                case 'fname':
                    if (!this.rules.fname.test(this.registerForm.fname)) {
                        this.errors.fname = true;
                        this.notifyR("Invalid First Name!");
                    } else {
                        delete this.errors.fname;
                    }
                    break;
                case 'lname':
                    // if (!this.rules.lname.test(this.registerForm.lname)) {
                    //     this.errors.lname = true;
                    //     this.notifyR("Invalid Last Name!");
                    // } else {
                    //     delete this.errors.lname;
                    // }
                    break;
                case 'dob':
                    if (!this.rules.dob.test(this.registerForm.dob)) {
                        this.errors.dob = true;
                        this.notifyR("Invalid Date of Birth!");
                    } else {
                        delete this.errors.dob;
                    }
                    break;
                case 'gender':
                    if (!this.rules.gender.test(this.registerForm.gender)) {
                        this.errors.gender = true;
                        this.notifyR("Select Gender!");
                    } else {
                        delete this.errors.gender;
                    }
                    break;
                case 'password':
                    if (!this.rules.password.test(this.registerForm.password)) {
                        this.errors.password = true;
                        this.notifyR("Invalid Password!");
                    } else {
                        delete this.errors.password;
                    }
                    break;

            }
        }, 400),
        hasEmptyFields: function (type) {
            switch (type) {
                case 'login':
                    if (this.email == "" || this.password == "") {
                        return false;
                    }
                    return true;
                    break;
                case 'register':
                    if (this.registerForm.email == "" || this.registerForm.password == "" || this.registerForm.fname == "" || this.registerForm.lname == "" || this.registerForm.dob == "" || this.registerForm.gender == "") {
                        return true;
                    }
                    return false;
                    break;
            }
        }
    },
    watch: {
        email: _.debounce(function () {
            if (!this.rules.email.test(this.email)) {
                this.errors.email = true;
                this.notify("Invalid Email!");
            } else {
                delete this.errors.email;
            }
        }, 200),
        password: _.debounce(
            function () {
                if (!this.rules.password.test(this.password)) {
                    this.errors.password = true;
                    this.notify("Invalid Password!");
                } else {
                    delete this.errors.password;
                }
            }, 200
        )
    }
});
