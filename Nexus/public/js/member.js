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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account-dash.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/account-dash.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {// this.csrftoken = $("#csrf-token").attr('content');
  },
  data: function data() {
    return {// csrftoken: this.$parent.$data.csrftoken,
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/change-password.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/change-password.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currPassword: "",
      newPassword: "",
      confirmPassword: "",
      chngPswdBtnTitle: "Change Password Now!",
      pattern: /^(?=.*\d).{4,10}$/
    };
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this = this;

      //match entered passwords
      if (this.newPassword == "" || this.currPassword == "" || this.confirmPassword == "") {
        this.notify("Some Fields Are Empty");
      } else if (this.newPassword == this.currPassword) {
        this.notify("You cannot use the same password again!");
      } else if (this.newPassword != this.confirmPassword) {
        this.notify("Passwords do not match!");
      } else if (!this.pattern.test(this.newPassword)) {
        this.notify("Password must be between 4 and 10 digits long and include at least one numeric digit.");
      } else {
        //update password
        axios.post("member/password/change", this.$data).then(function (response) {
          _this.notify(response.data != 0 ? "Password has changed!" : "Wrong current password");
        });
      }
    },
    notify: function notify(text) {
      var _this2 = this;

      this.chngPswdBtnTitle = text;
      setTimeout(function () {
        _this2.chngPswdBtnTitle = "Change Password Now";
      }, 5000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-circle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/friend-circle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      friends: {},
      searchInput: '',
      friendStore: '',
      pattern: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/member/friends').then(function (response) {
      _this.friendStore = response.data;
      _this.friends = _this.friendStore;
    });
  },
  watch: {
    searchInput: _.debounce(function () {
      var pattern = new RegExp('^' + this.searchInput, 'i');
      this.friends = this.friendStore.filter(function (el) {
        return pattern.test(el.fname) || pattern.test(el.lname);
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-requests.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/friend-requests.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.get("member/friends/request").then(function (response) {
      _this.requests = response.data;
    });
  },
  data: function data() {
    return {
      requests: {},
      accepted: [],
      removed: []
    };
  },
  methods: {
    acceptRequest: function acceptRequest(uid) {
      var _this2 = this;

      //   server update
      axios.put("member/friends/active", {
        uid: uid
      }).then(function (response) {
        //   console.log(response.data);
        //	ui update
        var index = _this2.requests.findIndex(function (item) {
          return item.uid == uid;
        });

        var user = _this2.requests.splice(index, 1);

        _this2.accepted.push(user[0]);
      });
    },
    delRequest: function delRequest(uid) {
      var _this3 = this;

      //   server update
      axios.put("member/friends/removed", {
        uid: uid
      }).then(function (response) {
        //   console.log(response.data);
        //	ui update
        var index = _this3.requests.findIndex(function (item) {
          return item.uid == uid;
        });

        var user = _this3.requests.splice(index, 1);

        _this3.removed.push(user[0]);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/my-interests.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/my-interests.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.get("/member/interest").then(function (response) {
      _this.userInterests = response.data;
    });
  },
  data: function data() {
    return {
      intSrchQuery: "Gadgets",
      interestList: [],
      userInterests: [],
      querying: false
    };
  },
  watch: {
    intSrchQuery: _.debounce(function () {
      var _this2 = this;

      //querying server for interests
      if (this.intSrchQuery != "") {
        //no empty query
        this.querying = true;
        var data = {
          query: this.intSrchQuery
        };
        axios.post("/member/interest/search", data).then(function (response) {
          //query result
          _this2.interestList = response.data;
          _this2.querying = false;
        });
      }
    }, 500)
  },
  methods: {
    setInterest: function setInterest(id) {
      var _this3 = this;

      if (!this.userInterests.find(function (item) {
        return item.interest_id == id;
      })) {
        //rejects if it has already added
        var intName = this.interestList.find(function (item) {
          return item.id == id;
        }).name;
        var data = {
          interest_id: id
        }; //update to server

        axios.put("/member/interest", data).then(function (response) {
          if (response.data) {
            var pid = response.data;
            var obj = {
              'interest_id': id,
              'iid': pid,
              'name': intName
            };

            _this3.userInterests.push(obj);
          }
        });
      }
    },
    delInterest: function delInterest(id) {
      var _this4 = this;

      if (this.userInterests.find(function (item) {
        return item.iid == id;
      })) {
        //rejects if not in the list
        var data = {
          id: id
        }; //update to server

        axios.post("/member/interest/del", data).then(function (response) {
          //remove locally
          var pos = _this4.userInterests.findIndex(function (item) {
            return item.iid == id;
          });

          _this4.userInterests.splice(pos, 1);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/personal-info.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/personal-info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    //fetch current-user profile
    axios.get("/member/profile").then(function (response) {
      Object.assign(_this.$data.profile, response.data);
    });
    axios.get("/country").then(function (response) {
      _this.countries = response.data;
    });
    this.getStates();
    this.getCities();
  },
  data: function data() {
    return {
      profile: {
        _token: "",
        fname: "",
        lname: "",
        email: "",
        dob: "",
        website: "",
        mobile: "",
        country_id: "",
        state_id: "",
        city_id: "",
        gender: "",
        about_you: "",
        birth_place: "",
        relationship: "",
        facebook: "",
        twitter: "",
        rss_feed: "",
        dribble: "",
        spotify: ""
      },
      btnTitle: "Save All Changes",
      countries: {},
      states: {},
      cities: {}
    };
  },
  methods: {
    saveProfile: function saveProfile() {
      var _this2 = this;

      this.$data.profile._token = this.$root.csrftoken; //update server request

      this.btnTitle = "...";
      axios.put("/member/profile/0", this.$data.profile).then(function (response) {
        response.data != 0 ? _this2.notify("Profile is Updated") : _this2.notify("Something went wrong! Try again.");
      });
    },
    getStates: function getStates() {
      var _this3 = this;

      this.cities = {};
      console.log("laoding states..");
      axios.get("/state/" + this.profile.country_id).then(function (response) {
        _this3.states = response.data;
      });
    },
    getCities: function getCities() {
      var _this4 = this;

      axios.get("/city/" + this.profile.state_id).then(function (response) {
        _this4.cities = response.data;
      });
    },
    notify: function notify(text) {
      var _this5 = this;

      this.btnTitle = text;
      setTimeout(function () {
        _this5.btnTitle = "Save All Changes";
      }, 5000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/sent-requests.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/sent-requests.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.get("member/friends/sent").then(function (response) {
      _this.sentRequests = response.data;
    }).catch(function (error) {
      _this.sentRequests = "";
    });
  },
  data: function data() {
    return {
      sentRequests: {},
      removed: []
    };
  },
  methods: {
    acceptRequest: function acceptRequest(uid) {
      var _this2 = this;

      //   server update
      axios.put("member/friends/active", {
        uid: uid
      }).then(function (response) {
        //   console.log(response.data);
        //	ui update
        var index = _this2.sentRequests.findIndex(function (item) {
          return item.uid == uid;
        });

        var user = _this2.sentRequests.splice(index, 1);

        _this2.accepted.push(user[0]);
      });
    },
    delRequest: function delRequest(uid) {
      var _this3 = this;

      //   server update
      axios.put("member/friends/removed", {
        uid: uid
      }).then(function (response) {
        //   console.log(response.data);
        //	ui update
        var index = _this3.sentRequests.findIndex(function (item) {
          return item.uid == uid;
        });

        var user = _this3.sentRequests.splice(index, 1);

        _this3.removed.push(user[0]);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/right-side-bar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/feed/right-side-bar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      peopleYouMayKnow: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("member/fsuggestions").then(function (response) {
      if (response.data) {
        _this.peopleYouMayKnow = response.data;
      }
    });
  },
  methods: {
    sendFriendReq: function sendFriendReq($mid) {
      var _this2 = this;

      //move the person to bottom
      var index = this.peopleYouMayKnow.findIndex(function (item) {
        return item.uid == $mid;
      });
      this.peopleYouMayKnow[index].invited = true; //push server update

      axios.post("member/friends", {
        'fid': $mid
      }).then(function (response) {
        _this2.pushBottom(index);
      });
    },
    delFriendReq: function delFriendReq($mid) {
      var _this3 = this;

      //push server update
      axios.delete("member/friends/" + $mid).then(function (response) {
        console.log(response.data); //move the person to bottom

        var index = _this3.peopleYouMayKnow.findIndex(function (item) {
          return item.uid == $mid;
        });

        _this3.peopleYouMayKnow[index].invited = false;

        _this3.pushBottom(index);
      });
    },
    pushBottom: _.debounce(function (index) {
      //push the user to bottom
      var user = this.peopleYouMayKnow.splice(index, 1);
      this.peopleYouMayKnow.push(user[0]);
    }, 150)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account-dash.vue?vue&type=template&id=70b8f70c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/account-dash.vue?vue&type=template&id=70b8f70c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "profile-settings-responsive" }, [
      _c(
        "a",
        {
          staticClass: "js-profile-settings-open profile-settings-open",
          attrs: { href: "#" }
        },
        [
          _c(
            "svg",
            {
              staticClass: "svg-inline--fa fa-angle-right fa-w-8",
              attrs: {
                "aria-hidden": "true",
                "data-prefix": "fa",
                "data-icon": "angle-right",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 512",
                "data-fa-i2svg": ""
              }
            },
            [
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d:
                    "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "svg-inline--fa fa-angle-left fa-w-8",
              attrs: {
                "aria-hidden": "true",
                "data-prefix": "fa",
                "data-icon": "angle-left",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 512",
                "data-fa-i2svg": ""
              }
            },
            [
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d:
                    "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mCustomScrollbar ps ps--theme_default ps--active-y",
          attrs: {
            "data-mcs-theme": "dark",
            "data-ps-id": "fed9c74b-40d0-d0f3-87bb-a3e718c31e2b"
          }
        },
        [
          _c("div", { staticClass: "ui-block" }, [
            _c("div", { staticClass: "your-profile" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  attrs: {
                    id: "accordion1",
                    role: "tablist",
                    "aria-multiselectable": "true"
                  }
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: { role: "tab", id: "headingOne-1" }
                      },
                      [
                        _c("h6", { staticClass: "mb-0" }, [
                          _c(
                            "a",
                            {
                              attrs: {
                                "data-toggle": "collapse",
                                "data-parent": "#accordion",
                                href: "#collapseOne-1",
                                "aria-expanded": "true",
                                "aria-controls": "collapseOne"
                              }
                            },
                            [
                              _vm._v(
                                "\n                      Profile Settings\n                      "
                              ),
                              _c(
                                "svg",
                                { staticClass: "olymp-dropdown-arrow-icon" },
                                [
                                  _c("use", {
                                    attrs: {
                                      "xlink:href":
                                        "svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse show",
                        attrs: {
                          id: "collapseOne-1",
                          role: "tabpanel",
                          "aria-labelledby": "headingOne"
                        }
                      },
                      [
                        _c("ul", { staticClass: "your-profile-menu" }, [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/account/personal-info" } },
                                [
                                  _vm._v(
                                    "\n                        Personal Information\n                      "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/account/change-password" } },
                                [
                                  _vm._v(
                                    "\n                          Change Password\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/account/my-interests" } },
                                [
                                  _vm._v(
                                    "\n                          My Interests\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ui-block-title" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "h6 title",
                      attrs: { to: "/account/friend-requests" }
                    },
                    [
                      _vm._v(
                        "\n                Friend Requests\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "items-round-little bg-blue",
                      attrs: { href: "#" }
                    },
                    [_vm._v("4")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ui-block-title" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "h6 title",
                      attrs: { to: "/account/friend-circle" }
                    },
                    [
                      _vm._v(
                        "\n                Friend Circle\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "items-round-little bg-blue",
                      attrs: { href: "#" }
                    },
                    [_vm._v("4")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6)
            ])
          ]),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _vm._m(8)
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "header-spacer header-spacer-small" }),
    _vm._v(" "),
    _vm._m(9),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container", staticStyle: { "min-height": "90vh" } },
      [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c(
              "div",
              {
                staticClass:
                  "col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 responsive-display-none"
              },
              [
                _c("div", { staticClass: "ui-block" }, [
                  _c("div", { staticClass: "your-profile" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        attrs: {
                          id: "accordion",
                          role: "tablist",
                          "aria-multiselectable": "true"
                        }
                      },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingOne" }
                            },
                            [
                              _c("h6", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseOne",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseOne"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Profile Settings\n                        "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse show",
                              attrs: {
                                id: "collapseOne",
                                role: "tabpanel",
                                "aria-labelledby": "headingOne"
                              }
                            },
                            [
                              _c("ul", { staticClass: "your-profile-menu" }, [
                                _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: { to: "/account/personal-info" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Personal Information\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: "/account/change-password"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Change Password\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: { to: "/account/my-interests" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          My Interests\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "ui-block-title" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "h6 title",
                            attrs: { to: "/account/friend-requests" }
                          },
                          [
                            _vm._v(
                              "\n                Friend Requests\n                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "items-round-little bg-blue",
                            attrs: { href: "#" }
                          },
                          [_vm._v("4")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "ui-block-title" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "h6 title",
                            attrs: { to: "/account/friend-circle" }
                          },
                          [
                            _vm._v(
                              "\n                Friend Circle\n                "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "ui-block-title" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "h6 title",
                            attrs: { to: "/account/sent-requests" }
                          },
                          [
                            _vm._v(
                              "\n                Sent Friend Requests\n                "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("router-view")
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Your PROFILE")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "29-YourAccount-AccountSettings.html" } }, [
        _vm._v("Account Settings")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c(
        "a",
        {
          staticClass: "h6 title",
          attrs: { href: "33-YourAccount-Notifications.html" }
        },
        [_vm._v("Notifications")]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "items-round-little bg-primary", attrs: { href: "#" } },
        [_vm._v("8")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c(
        "a",
        {
          staticClass: "h6 title",
          attrs: { href: "34-YourAccount-ChatMessages.html" }
        },
        [_vm._v("Chat / Messages")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("FAVOURITE PAGE")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c(
        "a",
        {
          staticClass: "h6 title",
          attrs: { href: "36-FavPage-SettingsAndCreatePopup.html" }
        },
        [_vm._v("Create Fav Page")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c(
        "a",
        {
          staticClass: "h6 title",
          attrs: { href: "36-FavPage-SettingsAndCreatePopup.html" }
        },
        [_vm._v("Fav Page Settings")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "ps__scrollbar-x-rail",
        staticStyle: { left: "0px", bottom: "0px" }
      },
      [
        _c("div", {
          staticClass: "ps__scrollbar-x",
          staticStyle: { left: "0px", width: "0px" },
          attrs: { tabindex: "0" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "ps__scrollbar-y-rail",
        staticStyle: { top: "0px", height: "566px", right: "0px" }
      },
      [
        _c("div", {
          staticClass: "ps__scrollbar-y",
          staticStyle: { top: "0px", height: "491px" },
          attrs: { tabindex: "0" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-header" }, [
      _c("div", { staticClass: "content-bg-wrap bg-account" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col col-lg-8 m-auto col-md-8 col-sm-12 col-12" },
            [
              _c("div", { staticClass: "main-header-content" }, [
                _c("h1", [_vm._v("Your Account Dashboard")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                Welcome to your account dashboard! Here you’ll find everything you need to change your\n                profile\n                information, settings, read notifications and requests, view your latest messages,\n                change your\n                pasword and much\n                more! Also you can create or manage your own favourite page, have fun!\n              "
                  )
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "img-bottom",
        attrs: { src: "/theme/img/account-bottom.png", alt: "friends" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Your PROFILE")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/change-password.vue?vue&type=template&id=3445f4f5&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/change-password.vue?vue&type=template&id=3445f4f5& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block-content" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updatePassword($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  },
                  [
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Confirm Current Password")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currPassword,
                            expression: "currPassword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "", type: "password" },
                        domProps: { value: _vm.currPassword },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.currPassword = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group label-floating is-empty" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your New Password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newPassword,
                              expression: "newPassword"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "", type: "password" },
                          domProps: { value: _vm.newPassword },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.newPassword = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group label-floating is-empty" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Confirm New Password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.confirmPassword,
                              expression: "confirmPassword"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "", type: "password" },
                          domProps: { value: _vm.confirmPassword },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.confirmPassword = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  },
                  [
                    _c(
                      "button",
                      { staticClass: "btn btn-primary btn-lg full-width" },
                      [_vm._v(_vm._s(_vm.chngPswdBtnTitle))]
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Change Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-12 col-sm-12 col-sm-12 col-12" },
      [_c("div", { staticClass: "remember" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/education-employment.vue?vue&type=template&id=af1633b8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/education-employment.vue?vue&type=template&id=af1633b8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block-content" }, [
          _c("form", [
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                },
                [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("a", { staticClass: "add-field", attrs: { href: "#" } }, [
                    _c("svg", { staticClass: "olymp-plus-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "svg-icons/sprites/icons.svg#olymp-plus-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Education Field")])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _vm._m(11)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ui-block" }, [
        _vm._m(12),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block-content" }, [
          _c("form", [
            _c("div", { staticClass: "row" }, [
              _vm._m(13),
              _vm._v(" "),
              _vm._m(14),
              _vm._v(" "),
              _vm._m(15),
              _vm._v(" "),
              _vm._m(16),
              _vm._v(" "),
              _vm._m(17),
              _vm._v(" "),
              _vm._m(18),
              _vm._v(" "),
              _vm._m(19),
              _vm._v(" "),
              _vm._m(20),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                },
                [
                  _vm._m(21),
                  _vm._v(" "),
                  _c("a", { staticClass: "add-field", attrs: { href: "#" } }, [
                    _c("svg", { staticClass: "olymp-plus-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "svg-icons/sprites/icons.svg#olymp-plus-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Education Field")])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(22),
              _vm._v(" "),
              _vm._m(23)
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Your Education History")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Title or Place")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              placeholder: "",
              type: "text",
              value: "The New College of Design"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Period of Time")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text", value: "2001 - 2006" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c(
            "textarea",
            { staticClass: "form-control", attrs: { placeholder: "" } },
            [
              _vm._v(
                "Bachelor of Interactive Design in the New College. It was a five years intensive career. Average: A+\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Title or Place")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              placeholder: "",
              type: "text",
              value: "Rembrandt Institute"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Period of Time")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text", value: "2008" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c(
            "textarea",
            { staticClass: "form-control", attrs: { placeholder: "" } },
            [
              _vm._v(
                "Five months Digital Illustration course. Professor: Leonardo Stagg.\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating is-empty" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Title or Place")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating is-empty" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Period of Time")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group label-floating is-empty" }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Description")]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: { placeholder: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "material-input" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("button", { staticClass: "btn btn-secondary btn-lg full-width" }, [
          _vm._v("Cancel")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("button", { staticClass: "btn btn-primary btn-lg full-width" }, [
          _vm._v("Save all Changes")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Your Employement History")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Title or Place")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              placeholder: "",
              type: "text",
              value: "Digital Design Intern"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Period of Time")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text", value: "2006 - 2008" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c(
            "textarea",
            { staticClass: "form-control", attrs: { placeholder: "" } },
            [
              _vm._v(
                "Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Title or Place")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text", value: "UI/UX Designer" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Period of Time")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text", value: "2008 - 2013" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c(
            "textarea",
            { staticClass: "form-control", attrs: { placeholder: "" } },
            [
              _vm._v(
                "UI/UX Designer for the “Daydreams” agency.\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating is-empty" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Title or Place")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("div", { staticClass: "form-group label-floating is-empty" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("Period of Time")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { placeholder: "", type: "text" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "material-input" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group label-floating is-empty" }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Description")]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: { placeholder: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "material-input" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("button", { staticClass: "btn btn-secondary btn-lg full-width" }, [
          _vm._v("Cancel")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
      [
        _c("button", { staticClass: "btn btn-primary btn-lg full-width" }, [
          _vm._v("Save all Changes")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-circle.vue?vue&type=template&id=633c457c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/friend-circle.vue?vue&type=template&id=633c457c& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block responsive-flex" }, [
        _c("div", { staticClass: "ui-block-title" }, [
          _c("div", { staticClass: "h6 title" }, [_vm._v("Your Friends (86)")]),
          _vm._v(" "),
          _c("form", { staticClass: "w-search" }, [
            _c("div", { staticClass: "form-group with-button is-empty" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchInput,
                    expression: "searchInput"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Search Friends..." },
                domProps: { value: _vm.searchInput },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.searchInput = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "material-input" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.friends, function(friend) {
          return _c("div", { key: friend.uid, staticClass: "col-4" }, [
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "friend-item" }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c("div", { staticClass: "friend-item-content" }, [
                  _c("div", { staticClass: "more" }, [
                    _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(1, true)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "friend-avatar" }, [
                    _vm._m(2, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "author-content" }, [
                      _c(
                        "a",
                        { staticClass: "h5 author-name", attrs: { href: "#" } },
                        [_vm._v(_vm._s(friend.fname + " " + friend.lname))]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "country" }, [
                        _vm._v(
                          _vm._s(friend.city_name) +
                            " , " +
                            _vm._s(friend.country_name)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", [_vm._v("Friends Since:")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "color-secondary" }, [
                        _vm._v(_vm._s(friend.date_accepted))
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        }),
        0
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "friend-header-thumb" }, [
      _c("img", { attrs: { src: "theme/img/friend1.jpg", alt: "friend" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "more-dropdown" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Report Profile")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Block Profile")])]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Turn Off Notifications")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar1.jpg", alt: "author" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-requests.vue?vue&type=template&id=bb95cd20&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/friend-requests.vue?vue&type=template&id=bb95cd20& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block" }, [
        _c("div", { staticClass: "ui-block-title" }, [
          _c("h6", { staticClass: "title" }, [_vm._v("Friend Requests")]),
          _vm._v(" "),
          _c("a", { staticClass: "more", attrs: { href: "#" } }, [
            _c("svg", { staticClass: "olymp-three-dots-icon" }, [
              _c("use", {
                attrs: {
                  "xlink:href":
                    "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "notification-list friend-requests" },
          [
            _vm.requests == ""
              ? _c("li", [
                  _c("div", { staticClass: "notification-event" }, [
                    _vm._v("\n\t\t\t  No Pending Friend Requests\n\t\t  ")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.requests, function(user) {
              return _c("li", { key: user.id }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c("div", { staticClass: "notification-event" }, [
                  _c(
                    "a",
                    {
                      staticClass: "h6 notification-friend",
                      attrs: { href: "#" }
                    },
                    [_vm._v(_vm._s(user.fname + " " + user.lname))]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "chat-message-item" }, [
                    _vm._v("Mutual Friend: Sarah Hetfield")
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "notification-icon" }, [
                  _c(
                    "a",
                    {
                      staticClass: "accept-request",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.acceptRequest(user.uid)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "icon-add" }, [
                        _c("svg", { staticClass: "olymp-happy-face-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                            }
                          })
                        ])
                      ]),
                      _vm._v(
                        "\n              Accept Friend Request\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "accept-request request-del",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.delRequest(user.uid)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "icon-minus" }, [
                        _c("svg", { staticClass: "olymp-happy-face-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                            }
                          })
                        ])
                      ])
                    ]
                  )
                ])
              ])
            }),
            _vm._v(" "),
            _c(
              "transition-group",
              { attrs: { "enter-active-class": "animate fade" } },
              _vm._l(_vm.accepted, function(user) {
                return _c("li", { key: user.uid, staticClass: "accepted" }, [
                  _c("div", { staticClass: "author-thumb" }, [
                    _c("img", {
                      attrs: { src: "theme/img/avatar17-sm.jpg", alt: "author" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "notification-event" }, [
                    _vm._v("\n              You and\n              "),
                    _c(
                      "a",
                      {
                        staticClass: "h6 notification-friend",
                        attrs: { href: "#" }
                      },
                      [_vm._v(_vm._s(user.fname + " " + user.lname))]
                    ),
                    _vm._v(" just became friends. Write on\n              "),
                    _c(
                      "a",
                      {
                        staticClass: "notification-link",
                        attrs: { href: "#" }
                      },
                      [
                        user.gender == "male"
                          ? _c("span", [_vm._v("his")])
                          : _vm._e(),
                        _vm._v(" "),
                        user.gender == "female"
                          ? _c("span", [_vm._v("her")])
                          : _vm._e(),
                        _vm._v(" wall\n              ")
                      ]
                    ),
                    _vm._v(".\n            ")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "notification-icon" }, [
                    _c("svg", { staticClass: "olymp-happy-face-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                        }
                      })
                    ])
                  ])
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "transition-group",
              { attrs: { "enter-active-class": "animate fade" } },
              _vm._l(_vm.removed, function(user) {
                return _c("li", { key: user.uid, staticClass: "accepted" }, [
                  _c("div", { staticClass: "author-thumb" }, [
                    _c("img", {
                      attrs: { src: "theme/img/avatar17-sm.jpg", alt: "author" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "notification-event" }, [
                    _vm._v("\n              You removed\n              "),
                    _c(
                      "a",
                      {
                        staticClass: "h6 notification-friend",
                        attrs: { href: "#" }
                      },
                      [_vm._v(_vm._s(user.fname + " " + user.lname))]
                    ),
                    _vm._v("'s friend request.\n            ")
                  ])
                ])
              }),
              0
            )
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar15-sm.jpg", alt: "author" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/my-interests.vue?vue&type=template&id=6d46161b&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/my-interests.vue?vue&type=template&id=6d46161b& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.userInterests, function(uinterest) {
          return _c("div", { key: uinterest.iid, staticClass: "col-4" }, [
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "available-widget" }, [
                _c("div", { staticClass: "h6 title" }, [
                  _vm._v(_vm._s(uinterest.name))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "more",
                    on: {
                      click: function($event) {
                        return _vm.delInterest(uinterest.iid)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-times" })]
                )
              ])
            ])
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "ui-block" }, [
        _c("div", { staticClass: "ui-block-title" }, [
          _c("div", { staticClass: "form-group label-floating" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Search here to Add more!")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.intSrchQuery,
                  expression: "intSrchQuery"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "" },
              domProps: { value: _vm.intSrchQuery },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.intSrchQuery = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "material-input" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block-content" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.querying,
                  expression: "querying"
                }
              ],
              staticClass: "row"
            },
            [_vm._m(1)]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.interestList, function(interest) {
              return _c("div", { key: interest.id, staticClass: "col-4" }, [
                _c("div", { staticClass: "ui-block" }, [
                  _c("div", { staticClass: "available-widget" }, [
                    _c("div", { staticClass: "h6 title" }, [
                      _vm._v(_vm._s(interest.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "more",
                        on: {
                          click: function($event) {
                            return _vm.setInterest(interest.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-plus" })]
                    )
                  ])
                ])
              ])
            }),
            0
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block" }, [
      _c("div", { staticClass: "ui-block-title" }, [
        _c(
          "h6",
          {
            staticClass: "title",
            attrs: {
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "",
              "data-original-title":
                "You build up your circles based on your interests"
            }
          },
          [_vm._v("Your Interests")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-center" }, [
      _c("i", { staticClass: "h5 fa fa-spinner fa-spin form-control-feedback" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/personal-info.vue?vue&type=template&id=7e0b00b8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/personal-info.vue?vue&type=template&id=7e0b00b8& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block-content" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveProfile($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
                  [
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("First Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.fname,
                            expression: "profile.fname"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "",
                          type: "text",
                          value: "James"
                        },
                        domProps: { value: _vm.profile.fname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.profile, "fname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Your Email")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.email,
                            expression: "profile.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "",
                          type: "email",
                          value: "jspiegel@yourmail.com"
                        },
                        domProps: { value: _vm.profile.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.profile, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group date-time-picker label-floating"
                      },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your Birthday")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.dob,
                              expression: "profile.dob"
                            }
                          ],
                          attrs: {
                            name: "datetimepicker",
                            value: "10/24/1984"
                          },
                          domProps: { value: _vm.profile.dob },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.profile, "dob", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "input-group-addon" }, [
                          _c(
                            "svg",
                            { staticClass: "olymp-month-calendar-icon icon" },
                            [
                              _c("use", {
                                attrs: {
                                  "xlink:href":
                                    "svg-icons/sprites/icons.svg#olymp-month-calendar-icon"
                                }
                              })
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
                  [
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Last Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.lname,
                            expression: "profile.lname"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "",
                          type: "text",
                          value: "Spiegel"
                        },
                        domProps: { value: _vm.profile.lname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.profile, "lname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Your Website")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.website,
                            expression: "profile.website"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "",
                          type: "text",
                          value: "daydreamzagency.com"
                        },
                        domProps: { value: _vm.profile.website },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.profile,
                              "website",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Your Phone Number")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.mobile,
                            expression: "profile.mobile"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "", type: "text" },
                        domProps: { value: _vm.profile.mobile },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.profile, "mobile", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-4 col-md-4 col-sm-12 col-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group label-floating is-select" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your Country")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.profile.country_id,
                                expression: "profile.country_id"
                              }
                            ],
                            staticClass: "form-control-lg",
                            attrs: { name: "country_id" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.profile,
                                    "country_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.getStates
                              ]
                            }
                          },
                          _vm._l(_vm.countries, function(country) {
                            return _c(
                              "option",
                              {
                                key: country.id,
                                domProps: { value: country.id }
                              },
                              [_vm._v(_vm._s(country.country_name))]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-4 col-md-4 col-sm-12 col-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group label-floating is-select" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your State/Province")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.profile.state_id,
                                expression: "profile.state_id"
                              }
                            ],
                            staticClass: "form-control-lg",
                            attrs: { name: "state_id" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.profile,
                                    "state_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.getCities
                              ]
                            }
                          },
                          _vm._l(_vm.states, function(state) {
                            return _c(
                              "option",
                              { key: state.id, domProps: { value: state.id } },
                              [_vm._v(_vm._s(state.state_name))]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-4 col-md-4 col-sm-12 col-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group label-floating is-select" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your City")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.profile.city_id,
                                expression: "profile.city_id"
                              }
                            ],
                            staticClass: "form-control-lg",
                            attrs: { name: "state_id" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.profile,
                                    "city_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.getCities
                              ]
                            }
                          },
                          _vm._l(_vm.cities, function(city) {
                            return _c(
                              "option",
                              { key: city.id, domProps: { value: city.id } },
                              [_vm._v(_vm._s(city.city_name))]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-4 col-md-4 col-sm-12 col-12" },
                  [
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Your Birthplace")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.birth_place,
                            expression: "profile.birth_place"
                          }
                        ],
                        staticClass: "form-control-lg",
                        attrs: { placeholder: "", type: "text" },
                        domProps: { value: _vm.profile.birth_place },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.profile,
                              "birth_place",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-4 col-md-4 col-sm-12 col-12" },
                  [
                    _c("div", { staticClass: "form-group label-floating " }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Your Gender")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.gender,
                              expression: "profile.gender"
                            }
                          ],
                          staticClass: " form-control-lg",
                          attrs: { tabindex: "-98" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.profile,
                                "gender",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "male" } }, [
                            _vm._v("Male")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "female" } }, [
                            _vm._v("Female")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-4 col-md-4 col-sm-12 col-12" },
                  [
                    _c("div", { staticClass: "form-group label-floating" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Status")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.relationship,
                              expression: "profile.relationship"
                            }
                          ],
                          staticClass: "form-control-lg",
                          attrs: { tabindex: "-98" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.profile,
                                "relationship",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "married" } }, [
                            _vm._v("Married")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "single" } }, [
                            _vm._v("Single")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "open" } }, [
                            _vm._v("In an open relationship")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "material-input" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group label-floating" }, [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Write a little description about you")
                    ]),
                    _vm._v(" "),
                    _c(
                      "textarea",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profile.about_you,
                            expression: "profile.about_you"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { placeholder: "" },
                        domProps: { value: _vm.profile.about_you },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.profile,
                              "about_you",
                              $event.target.value
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "material-input" })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group with-icon label-floating" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your Facebook Account")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.facebook,
                              expression: "profile.facebook"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            value: "www.facebook.com/james-spiegel95321"
                          },
                          domProps: { value: _vm.profile.facebook },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "facebook",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "svg-inline--fa fa-facebook-f fa-w-9 c-facebook",
                            attrs: {
                              "aria-hidden": "true",
                              "data-prefix": "fab",
                              "data-icon": "facebook-f",
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 264 512",
                              "data-fa-i2svg": ""
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "currentColor",
                                d:
                                  "M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group with-icon label-floating" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your Twitter Account")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.twitter,
                              expression: "profile.twitter"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            value: "www.twitter.com/james_spiegelOK"
                          },
                          domProps: { value: _vm.profile.twitter },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "twitter",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "svg-inline--fa fa-twitter fa-w-16 c-twitter",
                            attrs: {
                              "aria-hidden": "true",
                              "data-prefix": "fab",
                              "data-icon": "twitter",
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 512 512",
                              "data-fa-i2svg": ""
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "currentColor",
                                d:
                                  "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group with-icon label-floating" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your RSS Feed Account")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.rss_feed,
                              expression: "profile.rss_feed"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.profile.rss_feed },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "rss_feed",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass: "svg-inline--fa fa-rss fa-w-14 c-rss",
                            attrs: {
                              "aria-hidden": "true",
                              "data-prefix": "fa",
                              "data-icon": "rss",
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 448 512",
                              "data-fa-i2svg": ""
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "currentColor",
                                d:
                                  "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group with-icon label-floating" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your Dribbble Account")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.dribble,
                              expression: "profile.dribble"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            value: "www.dribbble.com/thecowboydesigner"
                          },
                          domProps: { value: _vm.profile.dribble },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "dribble",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "svg-inline--fa fa-dribbble fa-w-16 c-dribbble",
                            attrs: {
                              "aria-hidden": "true",
                              "data-prefix": "fab",
                              "data-icon": "dribbble",
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 512 512",
                              "data-fa-i2svg": ""
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "currentColor",
                                d:
                                  "M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group with-icon label-floating" },
                      [
                        _c("label", { staticClass: "control-label" }, [
                          _vm._v("Your Spotify Account")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.spotify,
                              expression: "profile.spotify"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.profile.spotify },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "spotify",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass:
                              "svg-inline--fa fa-spotify fa-w-16 c-spotify",
                            attrs: {
                              "aria-hidden": "true",
                              "data-prefix": "fab",
                              "data-icon": "spotify",
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 496 512",
                              "data-fa-i2svg": ""
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "currentColor",
                                d:
                                  "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "material-input" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12"
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col col-lg-6 col-md-6 col-sm-12 col-12" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-lg full-width",
                        attrs: { type: "submit" }
                      },
                      [_vm._v(_vm._s(_vm.btnTitle))]
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Personal Information")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/sent-requests.vue?vue&type=template&id=4e60f014&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/dash/sent-requests.vue?vue&type=template&id=4e60f014& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block" }, [
        _c("div", { staticClass: "ui-block-title" }, [
          _c("h6", { staticClass: "title" }, [_vm._v("Sent Friend Requests")]),
          _vm._v(" "),
          _c("a", { staticClass: "more", attrs: { href: "#" } }, [
            _c("svg", { staticClass: "olymp-three-dots-icon" }, [
              _c("use", {
                attrs: {
                  "xlink:href":
                    "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "notification-list friend-requests" },
          [
            _vm.sentRequests == ""
              ? _c("li", [
                  _c("div", { staticClass: "notification-event" }, [
                    _vm._v("\n\t\t\t  No Pending Sent Friend Requests\n\t\t  ")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.sentRequests, function(user) {
              return _c("li", { key: user.id }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c("div", { staticClass: "notification-event" }, [
                  _c(
                    "a",
                    {
                      staticClass: "h6 notification-friend",
                      attrs: { href: "#" }
                    },
                    [_vm._v(_vm._s(user.fname + " " + user.lname))]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "chat-message-item" }, [
                    _vm._v("Mutual Friend: Sarah Hetfield")
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "notification-icon" }, [
                  _c(
                    "a",
                    {
                      staticClass: "accept-request request-del",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.delRequest(user.uid)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "icon-minus" }, [
                        _c("svg", { staticClass: "olymp-happy-face-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                            }
                          })
                        ])
                      ])
                    ]
                  )
                ])
              ])
            }),
            _vm._v(" "),
            _c(
              "transition-group",
              { attrs: { "enter-active-class": "animate fade" } },
              _vm._l(_vm.removed, function(user) {
                return _c("li", { key: user.uid, staticClass: "accepted" }, [
                  _c("div", { staticClass: "author-thumb" }, [
                    _c("img", {
                      attrs: { src: "theme/img/avatar17-sm.jpg", alt: "author" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "notification-event" }, [
                    _vm._v("\n              You removed\n              "),
                    _c(
                      "a",
                      {
                        staticClass: "h6 notification-friend",
                        attrs: { href: "#" }
                      },
                      [_vm._v(_vm._s(user.fname + " " + user.lname))]
                    ),
                    _vm._v("'s friend request.\n            ")
                  ])
                ])
              }),
              0
            )
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar15-sm.jpg", alt: "author" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/left-side-bar.vue?vue&type=template&id=f50ff568&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/feed/left-side-bar.vue?vue&type=template&id=f50ff568& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "crumina-sticky-sidebar" }, [
        _c(
          "div",
          {
            staticClass: "sidebar__inner",
            staticStyle: { position: "relative" }
          },
          [
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "widget w-wethear" }, [
                _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wethear-now inline-items" }, [
                  _c("div", { staticClass: "temperature-sensor" }, [
                    _vm._v("64°")
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "svg",
                    { staticClass: "olymp-weather-partly-sunny-icon" },
                    [
                      _c("use", {
                        attrs: {
                          "xlink:href": "#olymp-weather-partly-sunny-icon"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("ul", { staticClass: "weekly-forecast" }, [
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("sun")]),
                    _vm._v(" "),
                    _c("svg", { staticClass: "olymp-weather-sunny-icon" }, [
                      _c("use", {
                        attrs: { "xlink:href": "#olymp-weather-sunny-icon" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("60°")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("mon")]),
                    _vm._v(" "),
                    _c(
                      "svg",
                      { staticClass: "olymp-weather-partly-sunny-icon" },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href": "#olymp-weather-partly-sunny-icon"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("58°")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("tue")]),
                    _vm._v(" "),
                    _c("svg", { staticClass: "olymp-weather-cloudy-icon" }, [
                      _c("use", {
                        attrs: { "xlink:href": "#olymp-weather-cloudy-icon" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("67°")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("wed")]),
                    _vm._v(" "),
                    _c("svg", { staticClass: "olymp-weather-rain-icon" }, [
                      _c("use", {
                        attrs: { "xlink:href": "#olymp-weather-rain-icon" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("70°")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("thu")]),
                    _vm._v(" "),
                    _c("svg", { staticClass: "olymp-weather-storm-icon" }, [
                      _c("use", {
                        attrs: { "xlink:href": "#olymp-weather-storm-icon" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("58°")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("fri")]),
                    _vm._v(" "),
                    _c("svg", { staticClass: "olymp-weather-snow-icon" }, [
                      _c("use", {
                        attrs: { "xlink:href": "#olymp-weather-snow-icon" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("68°")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "day" }, [_vm._v("sat")]),
                    _vm._v(" "),
                    _c(
                      "svg",
                      { staticClass: "olymp-weather-wind-icon-header" },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href": "#olymp-weather-wind-icon-header"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "temperature-sensor-day" }, [
                      _vm._v("65°")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "w-calendar calendar-container" }, [
                _c("div", { staticClass: "calendar" }, [
                  _c("header", [
                    _c("h6", { staticClass: "month" }, [_vm._v("March")]),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticClass:
                          "svg-inline--fa fa-angle-left fa-w-8 calendar-btn-prev",
                        attrs: {
                          href: "#",
                          "aria-hidden": "true",
                          "data-prefix": "fas",
                          "data-icon": "angle-left",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 256 512",
                          "data-fa-i2svg": ""
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            fill: "currentColor",
                            d:
                              "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticClass:
                          "svg-inline--fa fa-angle-right fa-w-8 calendar-btn-next",
                        attrs: {
                          href: "#",
                          "aria-hidden": "true",
                          "data-prefix": "fas",
                          "data-icon": "angle-right",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 256 512",
                          "data-fa-i2svg": ""
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            fill: "currentColor",
                            d:
                              "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "list" }, [
                    _c(
                      "div",
                      {
                        staticClass: "day-event",
                        attrs: {
                          id: "accordion-1",
                          role: "tablist",
                          "aria-multiselectable": "true",
                          "data-month": "12",
                          "data-day": "2"
                        }
                      },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingOne-1" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("9:00am")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseOne-1",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseOne-1"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Breakfast at the Agency\n                            "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse",
                              attrs: { id: "collapseOne-1", role: "tabpanel" }
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _vm._v(
                                  "Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!"
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "place inline-items" }, [
                                _c(
                                  "svg",
                                  { staticClass: "olymp-add-a-place-icon" },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Daydreamz Agency")])
                              ]),
                              _vm._v(" "),
                              _vm._m(5)
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingTwo-1" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("9:00am")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseTwo-1",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseTwo-1"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Send the new “Olympus” project files to the Agency\n                            "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(6)
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingThree-1" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("6:30am")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(7)
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "place inline-items" }, [
                            _c(
                              "svg",
                              { staticClass: "olymp-add-a-place-icon" },
                              [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Daydreamz Agency")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "check-all", attrs: { href: "#" } },
                          [_vm._v("Check all your Events")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "day-event",
                        attrs: {
                          id: "accordion-2",
                          role: "tablist",
                          "aria-multiselectable": "true",
                          "data-month": "12",
                          "data-day": "10"
                        }
                      },
                      [
                        _vm._m(8),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingOne-2" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("9:00am")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseOne-2",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseOne-2"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Breakfast at the Agency\n                            "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse",
                              attrs: { id: "collapseOne-2", role: "tabpanel" }
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _vm._v(
                                  "Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!"
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "place inline-items" }, [
                                _c(
                                  "svg",
                                  { staticClass: "olymp-add-a-place-icon" },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Daydreamz Agency")])
                              ]),
                              _vm._v(" "),
                              _vm._m(9)
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "check-all", attrs: { href: "#" } },
                          [_vm._v("Check all your Events")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "day-event",
                        attrs: {
                          id: "accordion-3",
                          role: "tablist",
                          "aria-multiselectable": "true",
                          "data-month": "12",
                          "data-day": "15"
                        }
                      },
                      [
                        _vm._m(10),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingOne-3" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("9:00am")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseOne-3",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseOne-3"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Breakfast at the Agency\n                            "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse",
                              attrs: { id: "collapseOne-3", role: "tabpanel" }
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _vm._v(
                                  "Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!"
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "place inline-items" }, [
                                _c(
                                  "svg",
                                  { staticClass: "olymp-add-a-place-icon" },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Daydreamz Agency")])
                              ]),
                              _vm._v(" "),
                              _vm._m(11)
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingTwo-3" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("12:00pm")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseTwo-3",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseTwo-3"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Send the new “Olympus” project files to the Agency\n                            "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(12)
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingThree-3" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("6:30pm")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(13)
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "place inline-items" }, [
                            _c(
                              "svg",
                              { staticClass: "olymp-add-a-place-icon" },
                              [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Daydreamz Agency")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "check-all", attrs: { href: "#" } },
                          [_vm._v("Check all your Events")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "day-event",
                        attrs: {
                          id: "accordion-4",
                          role: "tablist",
                          "aria-multiselectable": "true",
                          "data-month": "12",
                          "data-day": "28"
                        }
                      },
                      [
                        _vm._m(14),
                        _vm._v(" "),
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "tab", id: "headingOne-4" }
                            },
                            [
                              _c("div", { staticClass: "event-time" }, [
                                _c("span", { staticClass: "circle" }),
                                _vm._v(" "),
                                _c(
                                  "time",
                                  { attrs: { datetime: "2004-07-24T18:18" } },
                                  [_vm._v("9:00am")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "more", attrs: { href: "#" } },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "olymp-three-dots-icon" },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#collapseOne-4",
                                      "aria-expanded": "true",
                                      "aria-controls": "collapseOne-4"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Breakfast at the Agency\n                            "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "olymp-dropdown-arrow-icon"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse",
                              attrs: {
                                id: "collapseOne-4",
                                role: "tabpanel",
                                "aria-labelledby": "headingOne-4"
                              }
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _vm._v(
                                  "Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!"
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "place inline-items" }, [
                                _c(
                                  "svg",
                                  { staticClass: "olymp-add-a-place-icon" },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Daydreamz Agency")])
                              ]),
                              _vm._v(" "),
                              _vm._m(15)
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "check-all", attrs: { href: "#" } },
                          [_vm._v("Check all your Events")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "ui-block-title" }, [
                _c("h6", { staticClass: "title" }, [
                  _vm._v("Pages You May Like")
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "widget w-friend-pages-added notification-list friend-requests"
                },
                [
                  _c("li", { staticClass: "inline-items" }, [
                    _vm._m(16),
                    _vm._v(" "),
                    _vm._m(17),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "notification-icon",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD TO YOUR FAVS"
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("svg", { staticClass: "olymp-star-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-star-icon"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "inline-items" }, [
                    _vm._m(18),
                    _vm._v(" "),
                    _vm._m(19),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "notification-icon",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD TO YOUR FAVS"
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("svg", { staticClass: "olymp-star-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-star-icon"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "inline-items" }, [
                    _vm._m(20),
                    _vm._v(" "),
                    _vm._m(21),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "notification-icon",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD TO YOUR FAVS"
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("svg", { staticClass: "olymp-star-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-star-icon"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "inline-items" }, [
                    _vm._m(22),
                    _vm._v(" "),
                    _vm._m(23),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "notification-icon",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD TO YOUR FAVS"
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("svg", { staticClass: "olymp-star-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-star-icon"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "inline-items" }, [
                    _vm._m(24),
                    _vm._v(" "),
                    _vm._m(25),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "notification-icon",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD TO YOUR FAVS"
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("svg", { staticClass: "olymp-star-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-star-icon"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "inline-items" }, [
                    _vm._m(26),
                    _vm._v(" "),
                    _vm._m(27),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "notification-icon",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD TO YOUR FAVS"
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("svg", { staticClass: "olymp-star-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-star-icon"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "max-min-temperature" }, [
      _c("span", [_vm._v("58°")]),
      _vm._v(" "),
      _c("span", [_vm._v("76°")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wethear-now-description" }, [
      _c("div", { staticClass: "climate" }, [_vm._v("Partly Sunny")]),
      _vm._v(" "),
      _c("span", [
        _vm._v("\n                  Real Feel:\n                  "),
        _c("span", [_vm._v("67°")])
      ]),
      _vm._v(" "),
      _c("span", [
        _vm._v("\n                  Chance of Rain:\n                  "),
        _c("span", [_vm._v("49%")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "date-and-place" }, [
      _c("h5", { staticClass: "date" }, [_vm._v("Saturday, March 26th")]),
      _vm._v(" "),
      _c("div", { staticClass: "place" }, [_vm._v("San Francisco, CA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("td", [_vm._v("Mon")]),
          _vm._v(" "),
          _c("td", [_vm._v("Tue")]),
          _vm._v(" "),
          _c("td", [_vm._v("Wed")]),
          _vm._v(" "),
          _c("td", [_vm._v("Thu")]),
          _vm._v(" "),
          _c("td", [_vm._v("Fri")]),
          _vm._v(" "),
          _c("td", [_vm._v("Sat")]),
          _vm._v(" "),
          _c("td", [_vm._v("San")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", { attrs: { "data-month": "12", "data-day": "1" } }, [
            _vm._v("1")
          ]),
          _vm._v(" "),
          _c(
            "td",
            {
              staticClass: "event-uncomplited event-complited event",
              attrs: { "data-month": "12", "data-day": "2" }
            },
            [_vm._v("2")]
          ),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "3" } }, [
            _vm._v("3")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "4" } }, [
            _vm._v("4")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "5" } }, [
            _vm._v("5")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "6" } }, [
            _vm._v("6")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "7" } }, [
            _vm._v("7")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { "data-month": "12", "data-day": "8" } }, [
            _vm._v("8")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "9" } }, [
            _vm._v("9")
          ]),
          _vm._v(" "),
          _c(
            "td",
            {
              staticClass: "event-complited event",
              attrs: { "data-month": "12", "data-day": "10" }
            },
            [_vm._v("10")]
          ),
          _vm._v(" "),
          _c(
            "td",
            {
              staticClass: "current-day",
              attrs: { "data-month": "12", "data-day": "11" }
            },
            [_vm._v("11")]
          ),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "12" } }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "13" } }, [
            _vm._v("13")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "14" } }, [
            _vm._v("14")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "event-complited-2 event",
              attrs: { "data-month": "12", "data-day": "15" }
            },
            [_vm._v("15")]
          ),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "16" } }, [
            _vm._v("16")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "17" } }, [
            _vm._v("17")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "18" } }, [
            _vm._v("18")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "19" } }, [
            _vm._v("19")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "20" } }, [
            _vm._v("20")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "21" } }, [
            _vm._v("21")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { "data-month": "12", "data-day": "22" } }, [
            _vm._v("22")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "23" } }, [
            _vm._v("23")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "24" } }, [
            _vm._v("24")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "25" } }, [
            _vm._v("25")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "26" } }, [
            _vm._v("26")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "27" } }, [
            _vm._v("27")
          ]),
          _vm._v(" "),
          _c(
            "td",
            {
              staticClass: "event-uncomplited event",
              attrs: { "data-month": "12", "data-day": "28" }
            },
            [_vm._v("28")]
          )
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { "data-month": "12", "data-day": "29" } }, [
            _vm._v("29")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "30" } }, [
            _vm._v("30")
          ]),
          _vm._v(" "),
          _c("td", { attrs: { "data-month": "12", "data-day": "31" } }, [
            _vm._v("31")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("TODAY’S EVENTS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic inline-items" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic5.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic2.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "with-text" }, [_vm._v("Will Assist")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "collapse",
        attrs: { id: "collapseTwo-1", role: "tabpanel" }
      },
      [
        _c("div", { staticClass: "card-body" }, [
          _vm._v(
            "Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!"
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-0" }, [
      _c(
        "a",
        {
          staticClass: "collapsed",
          attrs: {
            "data-toggle": "collapse",
            "data-parent": "#accordion",
            href: "#",
            "aria-expanded": "false"
          }
        },
        [_vm._v("Take Querty to the Veterinarian")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("TODAY’S EVENTS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic inline-items" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic5.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic2.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "with-text" }, [_vm._v("Will Assist")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("TODAY’S EVENTS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic inline-items" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic5.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic2.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "with-text" }, [_vm._v("Will Assist")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "collapse",
        attrs: { id: "collapseTwo-3", role: "tabpanel" }
      },
      [
        _c("div", { staticClass: "card-body" }, [
          _vm._v(
            "Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!"
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mb-0" }, [
      _c(
        "a",
        {
          staticClass: "collapsed",
          attrs: {
            "data-toggle": "collapse",
            "data-parent": "#accordion",
            href: "#",
            "aria-expanded": "false"
          }
        },
        [_vm._v("Take Querty to the Veterinarian")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block-title ui-block-title-small" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("TODAY’S EVENTS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic inline-items" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic5.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic2.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "with-text" }, [_vm._v("Will Assist")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar41-sm.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notification-event" }, [
      _c("a", { staticClass: "h6 notification-friend", attrs: { href: "#" } }, [
        _vm._v("The Marina Bar")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "chat-message-item" }, [
        _vm._v("Restaurant / Bar")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar42-sm.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notification-event" }, [
      _c("a", { staticClass: "h6 notification-friend", attrs: { href: "#" } }, [
        _vm._v("Tapronus Rock")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "chat-message-item" }, [_vm._v("Rock Band")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar43-sm.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notification-event" }, [
      _c("a", { staticClass: "h6 notification-friend", attrs: { href: "#" } }, [
        _vm._v("Pixel Digital Design")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "chat-message-item" }, [_vm._v("Company")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar44-sm.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notification-event" }, [
      _c("a", { staticClass: "h6 notification-friend", attrs: { href: "#" } }, [
        _vm._v("Thompson’s Custom Clothing Boutique")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "chat-message-item" }, [
        _vm._v("Clothing Store")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar45-sm.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notification-event" }, [
      _c("a", { staticClass: "h6 notification-friend", attrs: { href: "#" } }, [
        _vm._v("Crimson Agency")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "chat-message-item" }, [_vm._v("Company")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/avatar46-sm.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notification-event" }, [
      _c("a", { staticClass: "h6 notification-friend", attrs: { href: "#" } }, [
        _vm._v("Mannequin Angel")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "chat-message-item" }, [
        _vm._v("Clothing Store")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/main-feed.vue?vue&type=template&id=0c0ffddb&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/feed/main-feed.vue?vue&type=template&id=0c0ffddb& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    {
      staticClass:
        "col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "ui-block" }, [
        _c("div", { staticClass: "news-feed-form" }, [
          _c(
            "ul",
            { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active inline-items",
                    attrs: {
                      "data-toggle": "tab",
                      href: "#home-1",
                      role: "tab",
                      "aria-expanded": "true"
                    }
                  },
                  [
                    _c("svg", { staticClass: "olymp-status-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-status-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Status")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link inline-items",
                    attrs: {
                      "data-toggle": "tab",
                      href: "#profile-1",
                      role: "tab",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("svg", { staticClass: "olymp-multimedia-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-multimedia-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Multimedia")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link inline-items",
                    attrs: {
                      "data-toggle": "tab",
                      href: "#blog",
                      role: "tab",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("svg", { staticClass: "olymp-blog-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-blog-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Blog Post")])
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane active",
                attrs: {
                  id: "home-1",
                  role: "tabpanel",
                  "aria-expanded": "true"
                }
              },
              [
                _c("form", [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "add-options-message" }, [
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD PHOTOS"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "olymp-camera-icon",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#update-header-photo"
                            }
                          },
                          [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-camera-icon"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "TAG YOUR FRIENDS"
                        }
                      },
                      [
                        _c("svg", { staticClass: "olymp-computer-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-computer-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD LOCATION"
                        }
                      },
                      [
                        _c("svg", { staticClass: "olymp-small-pin-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn btn-primary btn-md-2" }, [
                      _vm._v("Post Status")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-md-2 btn-border-think btn-transparent c-grey"
                      },
                      [_vm._v("Preview")]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                attrs: {
                  id: "profile-1",
                  role: "tabpanel",
                  "aria-expanded": "true"
                }
              },
              [
                _c("form", [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "add-options-message" }, [
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD PHOTOS"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "olymp-camera-icon",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#update-header-photo"
                            }
                          },
                          [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-camera-icon"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "TAG YOUR FRIENDS"
                        }
                      },
                      [
                        _c("svg", { staticClass: "olymp-computer-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-computer-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD LOCATION"
                        }
                      },
                      [
                        _c("svg", { staticClass: "olymp-small-pin-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn btn-primary btn-md-2" }, [
                      _vm._v("Post Status")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-md-2 btn-border-think btn-transparent c-grey"
                      },
                      [_vm._v("Preview")]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                attrs: { id: "blog", role: "tabpanel", "aria-expanded": "true" }
              },
              [
                _c("form", [
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "add-options-message" }, [
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD PHOTOS"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "olymp-camera-icon",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#update-header-photo"
                            }
                          },
                          [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-camera-icon"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "TAG YOUR FRIENDS"
                        }
                      },
                      [
                        _c("svg", { staticClass: "olymp-computer-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-computer-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "options-message",
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          "data-original-title": "ADD LOCATION"
                        }
                      },
                      [
                        _c("svg", { staticClass: "olymp-small-pin-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "theme/svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn btn-primary btn-md-2" }, [
                      _vm._v("Post Status")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-md-2 btn-border-think btn-transparent c-grey"
                      },
                      [_vm._v("Preview")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "newsfeed-items-grid" } }, [
        _c("div", { staticClass: "ui-block" }, [
          _c("article", { staticClass: "hentry post video" }, [
            _c(
              "div",
              { staticClass: "post__author author vcard inline-items" },
              [
                _c("img", {
                  attrs: { src: "theme/img/avatar7-sm.jpg", alt: "author" }
                }),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "more" }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(7)
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _c("div", { staticClass: "post-video" }, [
              _c("div", { staticClass: "video-thumb" }, [
                _c("img", {
                  attrs: { src: "theme/img/video-youtube1.jpg", alt: "photo" }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "play-video",
                    attrs: { href: "https://youtube.com/watch?v=excVFQ2TWig" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-play-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-play-icon"
                        }
                      })
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(9)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-additional-info inline-items" }, [
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("18")])
                ]
              ),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _vm._m(11),
              _vm._v(" "),
              _c("div", { staticClass: "comments-shared" }, [
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-speech-balloon-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("16")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control-block-button post-control-button" },
              [
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-like-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-comments-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ])
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block" }, [
          _c("article", { staticClass: "hentry post" }, [
            _c(
              "div",
              { staticClass: "post__author author vcard inline-items" },
              [
                _c("img", {
                  attrs: { src: "theme/img/avatar10-sm.jpg", alt: "author" }
                }),
                _vm._v(" "),
                _vm._m(12),
                _vm._v(" "),
                _c("div", { staticClass: "more" }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(13)
                ])
              ]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut\n             labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.\n           "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-additional-info inline-items" }, [
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("24")])
                ]
              ),
              _vm._v(" "),
              _vm._m(14),
              _vm._v(" "),
              _vm._m(15),
              _vm._v(" "),
              _c("div", { staticClass: "comments-shared" }, [
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-speech-balloon-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("17")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("24")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control-block-button post-control-button" },
              [
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-like-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-comments-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "comments-list" }, [
            _c("li", { staticClass: "comment-item" }, [
              _c(
                "div",
                { staticClass: "post__author author vcard inline-items" },
                [
                  _c("img", {
                    attrs: { src: "theme/img/author-page.jpg", alt: "author" }
                  }),
                  _vm._v(" "),
                  _vm._m(16),
                  _vm._v(" "),
                  _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                    _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                        }
                      })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium."
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("3")])
                ]
              ),
              _vm._v(" "),
              _c("a", { staticClass: "reply", attrs: { href: "#" } }, [
                _vm._v("Reply")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "comment-item" }, [
              _c(
                "div",
                { staticClass: "post__author author vcard inline-items" },
                [
                  _c("img", {
                    attrs: { src: "theme/img/avatar1-sm.jpg", alt: "author" }
                  }),
                  _vm._v(" "),
                  _vm._m(17),
                  _vm._v(" "),
                  _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                    _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                        }
                      })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n               Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum\n               quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.\n             "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("8")])
                ]
              ),
              _vm._v(" "),
              _c("a", { staticClass: "reply", attrs: { href: "#" } }, [
                _vm._v("Reply")
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(18),
          _vm._v(" "),
          _c("form", { staticClass: "comment-form inline-items" }, [
            _c(
              "div",
              { staticClass: "post__author author vcard inline-items" },
              [
                _c("img", {
                  attrs: { src: "theme/img/author-page.jpg", alt: "author" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group with-icon-right is-empty" },
                  [
                    _c("textarea", {
                      staticClass: "form-control",
                      attrs: { placeholder: "" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "add-options-message" }, [
                      _c(
                        "a",
                        {
                          staticClass: "options-message",
                          attrs: {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#update-header-photo"
                          }
                        },
                        [
                          _c("svg", { staticClass: "olymp-camera-icon" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "theme/svg-icons/sprites/icons.svg#olymp-camera-icon"
                              }
                            })
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "material-input" })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("button", { staticClass: "btn btn-md-2 btn-primary" }, [
              _vm._v("Post Comment")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-md-2 btn-border-think c-grey btn-transparent custom-color"
              },
              [_vm._v("Cancel")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block" }, [
          _c("article", { staticClass: "hentry post has-post-thumbnail" }, [
            _c(
              "div",
              { staticClass: "post__author author vcard inline-items" },
              [
                _c("img", {
                  attrs: { src: "theme/img/avatar5-sm.jpg", alt: "author" }
                }),
                _vm._v(" "),
                _vm._m(19),
                _vm._v(" "),
                _c("div", { staticClass: "more" }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(20)
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(21),
            _vm._v(" "),
            _vm._m(22),
            _vm._v(" "),
            _c("div", { staticClass: "post-additional-info inline-items" }, [
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("49")])
                ]
              ),
              _vm._v(" "),
              _vm._m(23),
              _vm._v(" "),
              _vm._m(24),
              _vm._v(" "),
              _c("div", { staticClass: "comments-shared" }, [
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-speech-balloon-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("264")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("37")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control-block-button post-control-button" },
              [
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-like-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-comments-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ])
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block" }, [
          _c("article", { staticClass: "hentry post has-post-thumbnail" }, [
            _c(
              "div",
              { staticClass: "post__author author vcard inline-items" },
              [
                _c("img", {
                  attrs: { src: "theme/img/avatar3-sm.jpg", alt: "author" }
                }),
                _vm._v(" "),
                _vm._m(25),
                _vm._v(" "),
                _c("div", { staticClass: "more" }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(26)
                ])
              ]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n             mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.\n           "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-additional-info inline-items" }, [
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("0 Likes")])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "comments-shared" }, [
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-speech-balloon-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0 Comments")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("2 Shares")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control-block-button post-control-button" },
              [
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-like-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-comments-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ])
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ui-block" }, [
          _c("article", { staticClass: "hentry post has-post-thumbnail" }, [
            _c(
              "div",
              { staticClass: "post__author author vcard inline-items" },
              [
                _c("img", {
                  attrs: { src: "theme/img/avatar2-sm.jpg", alt: "author" }
                }),
                _vm._v(" "),
                _vm._m(27),
                _vm._v(" "),
                _c("div", { staticClass: "more" }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(28)
                ])
              ]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n             mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n             accusantium doloremque.\n           "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-additional-info inline-items" }, [
              _c(
                "a",
                {
                  staticClass: "post-add-icon inline-items",
                  attrs: { href: "#" }
                },
                [
                  _c("svg", { staticClass: "olymp-heart-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-heart-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("22")])
                ]
              ),
              _vm._v(" "),
              _vm._m(29),
              _vm._v(" "),
              _vm._m(30),
              _vm._v(" "),
              _c("div", { staticClass: "comments-shared" }, [
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-speech-balloon-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "post-add-icon inline-items",
                    attrs: { href: "#" }
                  },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("2")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control-block-button post-control-button" },
              [
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-like-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-comments-post-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-control", attrs: { href: "#" } },
                  [
                    _c("svg", { staticClass: "olymp-share-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-share-icon"
                        }
                      })
                    ])
                  ]
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-control btn-more",
          attrs: {
            id: "load-more-button",
            href: "#",
            "data-load-link": "items-to-load.html",
            "data-container": "newsfeed-items-grid"
          }
        },
        [
          _c("svg", { staticClass: "olymp-three-dots-icon" }, [
            _c("use", {
              attrs: {
                "xlink:href":
                  "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
              }
            })
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/author-page.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group with-icon label-floating is-empty" },
      [
        _c("label", { staticClass: "control-label" }, [
          _vm._v("Share what you are thinking here...")
        ]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: { placeholder: "" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "material-input" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/author-page.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group with-icon label-floating is-empty" },
      [
        _c("label", { staticClass: "control-label" }, [
          _vm._v("Share what you are thinking here...")
        ]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: { placeholder: "" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "material-input" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-thumb" }, [
      _c("img", { attrs: { src: "theme/img/author-page.jpg", alt: "author" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group with-icon label-floating is-empty" },
      [
        _c("label", { staticClass: "control-label" }, [
          _vm._v("Share what you are thinking here...")
        ]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: { placeholder: "" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "material-input" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        { staticClass: "h6 post__author-name fn", attrs: { href: "#" } },
        [_vm._v("Marina Valentine")]
      ),
      _vm._v(" shared a\n               "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("link")]),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("March 4 at 2:05pm")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "more-dropdown" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Edit Post")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Delete Post")])]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Turn Off Notifications")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Select as Featured")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n             Hey\n             "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Cindi")]),
      _vm._v(
        ", you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!\n           "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "video-content" }, [
      _c("a", { staticClass: "h4 title", attrs: { href: "#" } }, [
        _vm._v("Iron Maid - ChillGroves")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                 Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt\n                 ut labore et dolore magna aliqua...\n               "
        )
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "link-site", attrs: { href: "#" } }, [
        _vm._v("YOUTUBE.COM")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic9.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic11.jpg", alt: "friend" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "names-people-likes" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Jenny")]),
      _vm._v(",\n               "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Robert")]),
      _vm._v(" and\n               "),
      _c("br"),
      _vm._v("18 more liked this\n             ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        { staticClass: "h6 post__author-name fn", attrs: { href: "#" } },
        [_vm._v("Elaine Dreyfuss")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("9 hours ago")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "more-dropdown" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Edit Post")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Delete Post")])]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Turn Off Notifications")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Select as Featured")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic9.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic11.jpg", alt: "friend" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "names-people-likes" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("You")]),
      _vm._v(",\n               "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Elaine")]),
      _vm._v(" and\n               "),
      _c("br"),
      _vm._v("22 more liked this\n             ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        {
          staticClass: "h6 post__author-name fn",
          attrs: { href: "02-ProfilePage.html" }
        },
        [_vm._v("James Spiegel")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("38 mins ago")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        { staticClass: "h6 post__author-name fn", attrs: { href: "#" } },
        [_vm._v("Mathilda Brinker")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("1 hour ago")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "more-comments", attrs: { href: "#" } }, [
      _vm._v("\n           View more comments\n           "),
      _c("span", [_vm._v("+")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        { staticClass: "h6 post__author-name fn", attrs: { href: "#" } },
        [_vm._v("Green Goo Rock")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("March 8 at 6:42pm")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "more-dropdown" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Edit Post")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Delete Post")])]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Turn Off Notifications")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Select as Featured")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n             Hey guys! We are gona be playing this Saturday of\n             "
      ),
      _c("a", { attrs: { href: "#" } }, [_vm._v("The Marina Bar")]),
      _vm._v(
        " for their new Mystic Deer Party.\n             If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!\n           "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "post-thumb" }, [
      _c("img", { attrs: { src: "theme/img/post__thumb1.jpg", alt: "photo" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic9.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic11.jpg", alt: "friend" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "names-people-likes" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Jimmy")]),
      _vm._v(",\n               "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Andrea")]),
      _vm._v(" and\n               "),
      _c("br"),
      _vm._v("47 more liked this\n             ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        { staticClass: "h6 post__author-name fn", attrs: { href: "#" } },
        [_vm._v("Sarah Hetfield")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("March 2 at 9:06am")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "more-dropdown" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Edit Post")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Delete Post")])]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Turn Off Notifications")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Select as Featured")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author-date" }, [
      _c(
        "a",
        { staticClass: "h6 post__author-name fn", attrs: { href: "#" } },
        [_vm._v("Nicholas Grissom")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "post__date" }, [
        _c(
          "time",
          { staticClass: "published", attrs: { datetime: "2004-07-24T18:18" } },
          [_vm._v("March 2 at 8:34am")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "more-dropdown" }, [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Edit Post")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Delete Post")])]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Turn Off Notifications")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Select as Featured")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "friends-harmonic" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic9.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic10.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic7.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic8.jpg", alt: "friend" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "theme/img/friend-harmonic11.jpg", alt: "friend" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "names-people-likes" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Jimmy")]),
      _vm._v(",\n               "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Andrea")]),
      _vm._v(" and\n               "),
      _c("br"),
      _vm._v("47 more liked this\n             ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/right-side-bar.vue?vue&type=template&id=698d5255&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/feed/right-side-bar.vue?vue&type=template&id=698d5255& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12"
    },
    [
      _c("div", { staticClass: "crumina-sticky-sidebar" }, [
        _c(
          "div",
          {
            staticClass: "sidebar__inner",
            staticStyle: { position: "relative" }
          },
          [
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "widget w-birthday-alert" }, [
                _c("div", { staticClass: "icons-block" }, [
                  _c("svg", { staticClass: "olymp-cupcake-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-cupcake-icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                    _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "ui-block-title" }, [
                _c("h6", { staticClass: "title" }, [
                  _vm._v("Friend Suggestions")
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "widget w-friend-pages-added notification-list friend-requests"
                },
                [
                  _c(
                    "transition-group",
                    { attrs: { "leave-active-class": "animate fade" } },
                    _vm._l(_vm.peopleYouMayKnow, function(people) {
                      return _c(
                        "li",
                        { key: people.uid, staticClass: "inline-items" },
                        [
                          _c("div", { staticClass: "author-thumb" }, [
                            _c("img", {
                              attrs: {
                                src: "theme/img/avatar38-sm.jpg",
                                alt: "author"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "notification-event" }, [
                            _c(
                              "a",
                              {
                                staticClass: "h6 notification-friend",
                                attrs: { href: "#" }
                              },
                              [_vm._v(_vm._s(people.name))]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "chat-message-item" }, [
                              _vm._v("8 Friends in Common")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !people.invited,
                                  expression: "!people.invited"
                                }
                              ],
                              staticClass: "notification-icon",
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "bottom",
                                title: "Send Request"
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "accept-request",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.sendFriendReq(people.uid)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "without-text icon-add" },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "olymp-happy-face-icon"
                                        },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: people.invited,
                                  expression: "people.invited"
                                }
                              ],
                              staticClass: "notification-icon",
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "bottom",
                                title: "Cancel Request"
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "accept-request bg-secondary",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.delFriendReq(people.uid)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "without-text icon-minus" },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "olymp-happy-face-icon"
                                        },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "ui-block-title" }, [
                _c("h6", { staticClass: "title" }, [_vm._v("Activity Feed")]),
                _vm._v(" "),
                _c("a", { staticClass: "more", attrs: { href: "#" } }, [
                  _c("svg", { staticClass: "olymp-three-dots-icon" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _vm._m(2)
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "author-thumb" }, [
        _c("img", {
          attrs: { src: "theme/img/avatar48-sm.jpg", alt: "author" }
        })
      ]),
      _vm._v(" "),
      _c("span", [_vm._v("Today is")]),
      _vm._v(" "),
      _c("a", { staticClass: "h4 title", attrs: { href: "#" } }, [
        _vm._v("Marina Valentine’s Birthday!")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Leave her a message with your best wishes on her profile page!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "widget w-activity-feed notification-list" },
      [
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar49-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Marina Polson")]
            ),
            _vm._v(" commented on Jason Mark’s\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("photo.")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("2 mins ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar9-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Jake Parker")]
            ),
            _vm._v(" liked Nicholas Grissom’s\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("status update.")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("5 mins ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar50-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Mary Jane Stark")]
            ),
            _vm._v(" added 20 new photos to her\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("gallery album.")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("12 mins ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar51-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Nicholas Grissom")]
            ),
            _vm._v(" updated his profile\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("photo")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("1 hour ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar48-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Marina Valentine")]
            ),
            _vm._v(" commented on Chris Greyson’s\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("status update")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("1 hour ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar52-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Green Goo Rock")]
            ),
            _vm._v(" posted a\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("status update")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("1 hour ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar10-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Elaine Dreyfuss")]
            ),
            _vm._v(" liked your\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("blog post")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("2 hours ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar10-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Elaine Dreyfuss")]
            ),
            _vm._v(" commented on your\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("blog post")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("2 hours ago")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "author-thumb" }, [
            _c("img", {
              attrs: { src: "theme/img/avatar53-sm.jpg", alt: "author" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "notification-event" }, [
            _c(
              "a",
              { staticClass: "h6 notification-friend", attrs: { href: "#" } },
              [_vm._v("Bruce Peterson")]
            ),
            _vm._v(" changed his\n              "),
            _c(
              "a",
              { staticClass: "notification-link", attrs: { href: "#" } },
              [_vm._v("profile picture")]
            ),
            _vm._v(".\n              "),
            _c("span", { staticClass: "notification-date" }, [
              _c(
                "time",
                {
                  staticClass: "entry-date updated",
                  attrs: { datetime: "2004-07-24T18:18" }
                },
                [_vm._v("15 hours ago")]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-block" }, [
      _c("div", { staticClass: "widget w-action" }, [
        _c("img", { attrs: { src: "theme/img/logo.png", alt: "Olympus" } }),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [
          _c("h4", { staticClass: "title" }, [_vm._v("OLYMPUS")]),
          _vm._v(" "),
          _c("span", [_vm._v("THE BEST SOCIAL NETWORK THEME IS HERE!")]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-bg-secondary btn-md",
              attrs: { href: "01-LandingPage.html" }
            },
            [_vm._v("Register Now!")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/news-feed.vue?vue&type=template&id=f8549824&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/news-feed.vue?vue&type=template&id=f8549824& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "header-spacer" }),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("main-feed"),
          _vm._v(" "),
          _c("left-side-bar"),
          _vm._v(" "),
          _c("right-side-bar")
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal-dialog window-popup update-header-photo",
        attrs: { role: "document" }
      },
      [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "a",
            {
              staticClass: "close icon-close",
              attrs: {
                href: "#",
                "data-dismiss": "modal",
                "aria-label": "Close"
              }
            },
            [
              _c("svg", { staticClass: "olymp-close-icon" }, [
                _c("use", {
                  attrs: {
                    "xlink:href": "svg-icons/sprites/icons.svg#olymp-close-icon"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "a",
              { staticClass: "upload-photo-item", attrs: { href: "#" } },
              [
                _c("svg", { staticClass: "olymp-computer-icon" }, [
                  _c("use", {
                    attrs: {
                      "xlink:href":
                        "svg-icons/sprites/icons.svg#olymp-computer-icon"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Upload Photo")]),
                _vm._v(" "),
                _c("span", [_vm._v("Browse your computer.")])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "upload-photo-item",
                attrs: {
                  href: "#",
                  "data-toggle": "modal",
                  "data-target": "#choose-from-my-photo"
                }
              },
              [
                _c("svg", { staticClass: "olymp-photos-icon" }, [
                  _c("use", {
                    attrs: {
                      "xlink:href":
                        "svg-icons/sprites/icons.svg#olymp-photos-icon"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Choose from My Photos")]),
                _vm._v(" "),
                _c("span", [_vm._v("Choose from your uploaded photos")])
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h6", { staticClass: "title" }, [_vm._v("Update Header Photo")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/profile-page.vue?vue&type=template&id=13694f8d&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/profile-page.vue?vue&type=template&id=13694f8d& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "header-spacer" }),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" },
          [
            _c("div", { staticClass: "ui-block" }, [
              _c("div", { staticClass: "top-header top-header-favorit" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "profile-section" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "control-block-button" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-control bg-primary",
                        attrs: { href: "#" }
                      },
                      [
                        _c("svg", { staticClass: "olymp-star-icon" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "svg-icons/sprites/icons.svg#olymp-star-icon"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-control bg-purple",
                        attrs: { href: "#" }
                      },
                      [
                        _c(
                          "svg",
                          { staticClass: "olymp-chat---messages-icon" },
                          [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "svg-icons/sprites/icons.svg#olymp-chat---messages-icon"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "top-header-thumb" }, [
      _c("img", { attrs: { src: "theme/img/top-header2.jpg", alt: "nature" } }),
      _vm._v(" "),
      _c("div", { staticClass: "top-header-author" }, [
        _c("div", { staticClass: "author-thumb" }, [
          _c("img", {
            attrs: { src: "theme/img/author-main2.jpg", alt: "author" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "author-content" }, [
          _c("a", { staticClass: "h3 author-name", attrs: { href: "#" } }, [
            _vm._v("Green Goo Rock")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "country" }, [
            _vm._v("Rock Band  |  San Francisco, CA")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col col-xl-8 m-auto col-lg-8 col-md-12" }, [
        _c("ul", { staticClass: "profile-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "active",
                attrs: { href: "12-FavouritePage.html" }
              },
              [_vm._v("Timeline")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "13-FavouritePage-About.html" } }, [
              _vm._v("About")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "15-FavouritePage-Events.html" } }, [
              _vm._v("Auctions")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "15-FavouritePage-Events.html" } }, [
              _vm._v("Items")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./resources/js/components/member/account-dash.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/member/account-dash.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_dash_vue_vue_type_template_id_70b8f70c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-dash.vue?vue&type=template&id=70b8f70c& */ "./resources/js/components/member/account-dash.vue?vue&type=template&id=70b8f70c&");
/* harmony import */ var _account_dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-dash.vue?vue&type=script&lang=js& */ "./resources/js/components/member/account-dash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _account_dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _account_dash_vue_vue_type_template_id_70b8f70c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _account_dash_vue_vue_type_template_id_70b8f70c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/account-dash.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/account-dash.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/member/account-dash.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./account-dash.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account-dash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/account-dash.vue?vue&type=template&id=70b8f70c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/member/account-dash.vue?vue&type=template&id=70b8f70c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_account_dash_vue_vue_type_template_id_70b8f70c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./account-dash.vue?vue&type=template&id=70b8f70c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account-dash.vue?vue&type=template&id=70b8f70c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_account_dash_vue_vue_type_template_id_70b8f70c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_account_dash_vue_vue_type_template_id_70b8f70c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/change-password.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/member/dash/change-password.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_password_vue_vue_type_template_id_3445f4f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.vue?vue&type=template&id=3445f4f5& */ "./resources/js/components/member/dash/change-password.vue?vue&type=template&id=3445f4f5&");
/* harmony import */ var _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.vue?vue&type=script&lang=js& */ "./resources/js/components/member/dash/change-password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _change_password_vue_vue_type_template_id_3445f4f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _change_password_vue_vue_type_template_id_3445f4f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/change-password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/change-password.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/member/dash/change-password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./change-password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/change-password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/dash/change-password.vue?vue&type=template&id=3445f4f5&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/member/dash/change-password.vue?vue&type=template&id=3445f4f5& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_3445f4f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./change-password.vue?vue&type=template&id=3445f4f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/change-password.vue?vue&type=template&id=3445f4f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_3445f4f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_3445f4f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/education-employment.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/member/dash/education-employment.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _education_employment_vue_vue_type_template_id_af1633b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-employment.vue?vue&type=template&id=af1633b8& */ "./resources/js/components/member/dash/education-employment.vue?vue&type=template&id=af1633b8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _education_employment_vue_vue_type_template_id_af1633b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _education_employment_vue_vue_type_template_id_af1633b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/education-employment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/education-employment.vue?vue&type=template&id=af1633b8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/member/dash/education-employment.vue?vue&type=template&id=af1633b8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_education_employment_vue_vue_type_template_id_af1633b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./education-employment.vue?vue&type=template&id=af1633b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/education-employment.vue?vue&type=template&id=af1633b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_education_employment_vue_vue_type_template_id_af1633b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_education_employment_vue_vue_type_template_id_af1633b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/friend-circle.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/member/dash/friend-circle.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _friend_circle_vue_vue_type_template_id_633c457c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-circle.vue?vue&type=template&id=633c457c& */ "./resources/js/components/member/dash/friend-circle.vue?vue&type=template&id=633c457c&");
/* harmony import */ var _friend_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend-circle.vue?vue&type=script&lang=js& */ "./resources/js/components/member/dash/friend-circle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _friend_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _friend_circle_vue_vue_type_template_id_633c457c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _friend_circle_vue_vue_type_template_id_633c457c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/friend-circle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/friend-circle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/member/dash/friend-circle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./friend-circle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-circle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/dash/friend-circle.vue?vue&type=template&id=633c457c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/member/dash/friend-circle.vue?vue&type=template&id=633c457c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_circle_vue_vue_type_template_id_633c457c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./friend-circle.vue?vue&type=template&id=633c457c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-circle.vue?vue&type=template&id=633c457c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_circle_vue_vue_type_template_id_633c457c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_circle_vue_vue_type_template_id_633c457c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/friend-requests.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/member/dash/friend-requests.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _friend_requests_vue_vue_type_template_id_bb95cd20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-requests.vue?vue&type=template&id=bb95cd20& */ "./resources/js/components/member/dash/friend-requests.vue?vue&type=template&id=bb95cd20&");
/* harmony import */ var _friend_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend-requests.vue?vue&type=script&lang=js& */ "./resources/js/components/member/dash/friend-requests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _friend_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _friend_requests_vue_vue_type_template_id_bb95cd20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _friend_requests_vue_vue_type_template_id_bb95cd20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/friend-requests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/friend-requests.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/member/dash/friend-requests.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./friend-requests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-requests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/dash/friend-requests.vue?vue&type=template&id=bb95cd20&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/member/dash/friend-requests.vue?vue&type=template&id=bb95cd20& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_requests_vue_vue_type_template_id_bb95cd20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./friend-requests.vue?vue&type=template&id=bb95cd20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/friend-requests.vue?vue&type=template&id=bb95cd20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_requests_vue_vue_type_template_id_bb95cd20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_requests_vue_vue_type_template_id_bb95cd20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/my-interests.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/member/dash/my-interests.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_interests_vue_vue_type_template_id_6d46161b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-interests.vue?vue&type=template&id=6d46161b& */ "./resources/js/components/member/dash/my-interests.vue?vue&type=template&id=6d46161b&");
/* harmony import */ var _my_interests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-interests.vue?vue&type=script&lang=js& */ "./resources/js/components/member/dash/my-interests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _my_interests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_interests_vue_vue_type_template_id_6d46161b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_interests_vue_vue_type_template_id_6d46161b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/my-interests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/my-interests.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/member/dash/my-interests.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_my_interests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./my-interests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/my-interests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_my_interests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/dash/my-interests.vue?vue&type=template&id=6d46161b&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/member/dash/my-interests.vue?vue&type=template&id=6d46161b& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_interests_vue_vue_type_template_id_6d46161b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./my-interests.vue?vue&type=template&id=6d46161b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/my-interests.vue?vue&type=template&id=6d46161b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_interests_vue_vue_type_template_id_6d46161b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_interests_vue_vue_type_template_id_6d46161b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/personal-info.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/member/dash/personal-info.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _personal_info_vue_vue_type_template_id_7e0b00b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-info.vue?vue&type=template&id=7e0b00b8& */ "./resources/js/components/member/dash/personal-info.vue?vue&type=template&id=7e0b00b8&");
/* harmony import */ var _personal_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-info.vue?vue&type=script&lang=js& */ "./resources/js/components/member/dash/personal-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _personal_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _personal_info_vue_vue_type_template_id_7e0b00b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _personal_info_vue_vue_type_template_id_7e0b00b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/personal-info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/personal-info.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/member/dash/personal-info.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./personal-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/personal-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/dash/personal-info.vue?vue&type=template&id=7e0b00b8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/member/dash/personal-info.vue?vue&type=template&id=7e0b00b8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_info_vue_vue_type_template_id_7e0b00b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./personal-info.vue?vue&type=template&id=7e0b00b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/personal-info.vue?vue&type=template&id=7e0b00b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_info_vue_vue_type_template_id_7e0b00b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_info_vue_vue_type_template_id_7e0b00b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/dash/sent-requests.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/member/dash/sent-requests.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sent_requests_vue_vue_type_template_id_4e60f014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sent-requests.vue?vue&type=template&id=4e60f014& */ "./resources/js/components/member/dash/sent-requests.vue?vue&type=template&id=4e60f014&");
/* harmony import */ var _sent_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sent-requests.vue?vue&type=script&lang=js& */ "./resources/js/components/member/dash/sent-requests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sent_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sent_requests_vue_vue_type_template_id_4e60f014___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sent_requests_vue_vue_type_template_id_4e60f014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/dash/sent-requests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/dash/sent-requests.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/member/dash/sent-requests.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sent-requests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/sent-requests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/dash/sent-requests.vue?vue&type=template&id=4e60f014&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/member/dash/sent-requests.vue?vue&type=template&id=4e60f014& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_requests_vue_vue_type_template_id_4e60f014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sent-requests.vue?vue&type=template&id=4e60f014& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/dash/sent-requests.vue?vue&type=template&id=4e60f014&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_requests_vue_vue_type_template_id_4e60f014___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_requests_vue_vue_type_template_id_4e60f014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/feed/left-side-bar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/member/feed/left-side-bar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _left_side_bar_vue_vue_type_template_id_f50ff568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left-side-bar.vue?vue&type=template&id=f50ff568& */ "./resources/js/components/member/feed/left-side-bar.vue?vue&type=template&id=f50ff568&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _left_side_bar_vue_vue_type_template_id_f50ff568___WEBPACK_IMPORTED_MODULE_0__["render"],
  _left_side_bar_vue_vue_type_template_id_f50ff568___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/feed/left-side-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/feed/left-side-bar.vue?vue&type=template&id=f50ff568&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/member/feed/left-side-bar.vue?vue&type=template&id=f50ff568& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_bar_vue_vue_type_template_id_f50ff568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./left-side-bar.vue?vue&type=template&id=f50ff568& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/left-side-bar.vue?vue&type=template&id=f50ff568&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_bar_vue_vue_type_template_id_f50ff568___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_bar_vue_vue_type_template_id_f50ff568___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/feed/main-feed.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/member/feed/main-feed.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_feed_vue_vue_type_template_id_0c0ffddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-feed.vue?vue&type=template&id=0c0ffddb& */ "./resources/js/components/member/feed/main-feed.vue?vue&type=template&id=0c0ffddb&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _main_feed_vue_vue_type_template_id_0c0ffddb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_feed_vue_vue_type_template_id_0c0ffddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/feed/main-feed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/feed/main-feed.vue?vue&type=template&id=0c0ffddb&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/member/feed/main-feed.vue?vue&type=template&id=0c0ffddb& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_feed_vue_vue_type_template_id_0c0ffddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main-feed.vue?vue&type=template&id=0c0ffddb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/main-feed.vue?vue&type=template&id=0c0ffddb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_feed_vue_vue_type_template_id_0c0ffddb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_feed_vue_vue_type_template_id_0c0ffddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/feed/right-side-bar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/member/feed/right-side-bar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_side_bar_vue_vue_type_template_id_698d5255___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-side-bar.vue?vue&type=template&id=698d5255& */ "./resources/js/components/member/feed/right-side-bar.vue?vue&type=template&id=698d5255&");
/* harmony import */ var _right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-side-bar.vue?vue&type=script&lang=js& */ "./resources/js/components/member/feed/right-side-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _right_side_bar_vue_vue_type_template_id_698d5255___WEBPACK_IMPORTED_MODULE_0__["render"],
  _right_side_bar_vue_vue_type_template_id_698d5255___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/feed/right-side-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/feed/right-side-bar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/member/feed/right-side-bar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side-bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/right-side-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/feed/right-side-bar.vue?vue&type=template&id=698d5255&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/member/feed/right-side-bar.vue?vue&type=template&id=698d5255& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_template_id_698d5255___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side-bar.vue?vue&type=template&id=698d5255& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/feed/right-side-bar.vue?vue&type=template&id=698d5255&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_template_id_698d5255___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_template_id_698d5255___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/news-feed.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/member/news-feed.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_feed_vue_vue_type_template_id_f8549824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-feed.vue?vue&type=template&id=f8549824& */ "./resources/js/components/member/news-feed.vue?vue&type=template&id=f8549824&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _news_feed_vue_vue_type_template_id_f8549824___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_feed_vue_vue_type_template_id_f8549824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/news-feed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/news-feed.vue?vue&type=template&id=f8549824&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/member/news-feed.vue?vue&type=template&id=f8549824& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_feed_vue_vue_type_template_id_f8549824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./news-feed.vue?vue&type=template&id=f8549824& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/news-feed.vue?vue&type=template&id=f8549824&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_feed_vue_vue_type_template_id_f8549824___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_feed_vue_vue_type_template_id_f8549824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/member/profile-page.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/member/profile-page.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_page_vue_vue_type_template_id_13694f8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page.vue?vue&type=template&id=13694f8d& */ "./resources/js/components/member/profile-page.vue?vue&type=template&id=13694f8d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _profile_page_vue_vue_type_template_id_13694f8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_page_vue_vue_type_template_id_13694f8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/profile-page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/profile-page.vue?vue&type=template&id=13694f8d&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/member/profile-page.vue?vue&type=template&id=13694f8d& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_template_id_13694f8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile-page.vue?vue&type=template&id=13694f8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/profile-page.vue?vue&type=template&id=13694f8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_template_id_13694f8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_template_id_13694f8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/member.js":
/*!********************************!*\
  !*** ./resources/js/member.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_member_account_dash_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/member/account-dash.vue */ "./resources/js/components/member/account-dash.vue");
/* harmony import */ var _components_member_dash_personal_info_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/member/dash/personal-info.vue */ "./resources/js/components/member/dash/personal-info.vue");
/* harmony import */ var _components_member_dash_change_password_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/member/dash/change-password.vue */ "./resources/js/components/member/dash/change-password.vue");
/* harmony import */ var _components_member_dash_my_interests_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/member/dash/my-interests.vue */ "./resources/js/components/member/dash/my-interests.vue");
/* harmony import */ var _components_member_dash_friend_requests_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/member/dash/friend-requests.vue */ "./resources/js/components/member/dash/friend-requests.vue");
/* harmony import */ var _components_member_dash_sent_requests_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/member/dash/sent-requests.vue */ "./resources/js/components/member/dash/sent-requests.vue");
/* harmony import */ var _components_member_dash_friend_circle_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/member/dash/friend-circle.vue */ "./resources/js/components/member/dash/friend-circle.vue");
/* harmony import */ var _components_member_dash_education_employment_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/member/dash/education-employment.vue */ "./resources/js/components/member/dash/education-employment.vue");
/* harmony import */ var _components_member_profile_page_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/member/profile-page.vue */ "./resources/js/components/member/profile-page.vue");
/* harmony import */ var _components_member_news_feed_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/member/news-feed.vue */ "./resources/js/components/member/news-feed.vue");
/* harmony import */ var _components_member_feed_main_feed_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/member/feed/main-feed.vue */ "./resources/js/components/member/feed/main-feed.vue");
/* harmony import */ var _components_member_feed_left_side_bar_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/member/feed/left-side-bar.vue */ "./resources/js/components/member/feed/left-side-bar.vue");
/* harmony import */ var _components_member_feed_right_side_bar_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/member/feed/right-side-bar.vue */ "./resources/js/components/member/feed/right-side-bar.vue");
// vue router
// ________________________

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]); // bootstrap-vue
// components
// _____________________
// import SBar from './components/admin/SideBar.vue'
// import Places from './components/admin/Places.vue'







 // 







Vue.component('PersonalInfo', _components_member_dash_personal_info_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
Vue.component('ChangePassword', _components_member_dash_change_password_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.component('FriendRequests', _components_member_dash_friend_requests_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
Vue.component('SentRequests', _components_member_dash_sent_requests_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
Vue.component('AccountDash', _components_member_account_dash_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
Vue.component('MyInterests', _components_member_dash_my_interests_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.component('EducationEmployment', _components_member_dash_education_employment_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
Vue.component('ProfilePage', _components_member_profile_page_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
Vue.component('NewsFeed', _components_member_news_feed_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);
Vue.component('MainFeed', _components_member_feed_main_feed_vue__WEBPACK_IMPORTED_MODULE_11__["default"]);
Vue.component('LeftSideBar', _components_member_feed_left_side_bar_vue__WEBPACK_IMPORTED_MODULE_12__["default"]);
Vue.component('RightSideBar', _components_member_feed_right_side_bar_vue__WEBPACK_IMPORTED_MODULE_13__["default"]);
Vue.component('FriendCircle', _components_member_dash_friend_circle_vue__WEBPACK_IMPORTED_MODULE_7__["default"]); // routes
// __________________

var routes = [{
  path: '/account',
  component: _components_member_account_dash_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  children: [{
    path: '/account/personal-info',
    component: _components_member_dash_personal_info_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/account/change-password',
    component: _components_member_dash_change_password_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: '/account/friend-requests',
    component: _components_member_dash_friend_requests_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    path: '/account/sent-requests',
    component: _components_member_dash_sent_requests_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    path: '/account/friend-circle',
    component: _components_member_dash_friend_circle_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    path: '/account/my-interests',
    component: _components_member_dash_my_interests_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/account/education-employment',
    component: _components_member_dash_education_employment_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }]
}, {
  path: '/profile-page',
  component: _components_member_profile_page_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/',
  component: _components_member_news_feed_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  routes: routes // short for `routes: routes`

}); // admin app
// ____________________

var app = new Vue({
  el: '#memberApp',
  mounted: function mounted() {
    var _this = this;

    this.csrftoken = $("#csrf-token").attr('content'); // get user info

    axios.post('/user/info').then(function (response) {
      _this.user = response.data;
      _this.newUserStatus = _this.user.status_text;
    });
  },
  data: {
    fresher: true,
    user: {},
    csrftoken: '',
    data: '',
    breadCumbPath: "Dashboard",
    newUserStatus: ''
  },
  router: router,
  methods: {
    setMyStatus: function setMyStatus() {
      var _this2 = this;

      axios.post('member/status/text', {
        'status_text': this.newUserStatus
      }).then(function (response) {
        if (response.data) {
          _this2.user.status_text = _this2.newUserStatus;
        }
      });
    }
  }
});

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./resources/js/member.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blake/Workspace/WebApps/MCAMainProject/Nexus/resources/js/member.js */"./resources/js/member.js");


/***/ })

/******/ });