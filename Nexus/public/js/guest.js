/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/guest.js":
/*!*******************************!*\
  !*** ./resources/js/guest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var app = new Vue({
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
      gender: /^male$|^female$/
    },
    //registration
    registerForm: {
      email: '',
      fname: '',
      lname: '',
      password: '',
      dob: '',
      gender: '',
      validMail: false
    }
  },
  mounted: function mounted() {
    this.csrftoken = $("#csrf-token").attr('content');
  },
  methods: {
    register: function register() {
      var _this = this;

      if (Object.keys(this.errors).length != 0) {
        this.notifyR("Form has invalid details");
        return;
      } // if (this.hasEmptyFields('register')) {
      //     this.notifyR("Please complete the form");
      //     return;
      // }


      var form = $('#regForm')[0];
      this.data = new FormData(form);
      this.queryServer = true;
      axios.post('/register', this.data).then(function (response) {
        _this.queryServer = false;

        if (response.data) {
          _this.notifyR("Registration Successful!");

          setTimeout(function () {
            window.location.href = "/home#/account/personal-info";
          }, 1200);
        } else {
          _this.notifyR('Err! Something went wrong.');
        }
      })["catch"](function (error) {
        _this.notifyR('Err! Something went wrong.');
      });
    },
    loginNex: function loginNex() {
      // if (this.hasEmptyFields('login')) {
      //     this.notify("Please complete the form");
      //     return;
      // }
      if (Object.keys(this.errors).length == 0) {
        $("#logNexus").submit();
      }
    },
    notify: function notify(text) {
      var _this2 = this;

      this.chngLoginBtnTitle = text;
      setTimeout(function () {
        _this2.chngLoginBtnTitle = "Login";
      }, 3000);
    },
    notifyR: function notifyR(text) {
      var _this3 = this;

      this.chngRegBtnTitle = text;
      setTimeout(function () {
        _this3.chngRegBtnTitle = "Complete Registration";
      }, 3000);
    },
    validate: _.debounce(function (type) {
      var _this4 = this;

      switch (type) {
        case 'email':
          if (this.rules.email.test(this.registerForm.email)) {
            this.queryServer = true;
            axios.post('/check/mail/exists', {
              'email': this.registerForm.email
            }).then(function (response) {
              if (response.data) {
                _this4.errors.email = true;

                _this4.notifyR("Email Already Exists");

                _this4.registerForm.validMail = false;
              } else {
                _this4.registerForm.validMail = true;
                delete _this4.errors.email;
              }

              _this4.queryServer = false;
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
    hasEmptyFields: function hasEmptyFields(type) {
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
    password: _.debounce(function () {
      if (!this.rules.password.test(this.password)) {
        this.errors.password = true;
        this.notify("Invalid Password!");
      } else {
        delete this.errors.password;
      }
    }, 200)
  }
});

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/guest.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blake/_workspace/WebApps/MCAMainProject/Nexus/resources/js/guest.js */"./resources/js/guest.js");


/***/ })

/******/ });