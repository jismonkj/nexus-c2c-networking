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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Nav.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Nav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Nav.vue?vue&type=template&id=ee9219f0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Nav.vue?vue&type=template&id=ee9219f0& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass: "navbar navbar-custom navbar-fixed-top",
        attrs: { role: "navigation" }
      },
      [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "navbar-header" }, [
            _c(
              "button",
              {
                staticClass: "navbar-toggle collapsed",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#sidebar-collapse"
                }
              },
              [
                _c("span", { staticClass: "sr-only" }, [
                  _vm._v("Toggle navigation")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" })
              ]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
              _c("span", [_vm._v("Lumino")]),
              _vm._v("Admin")
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "nav navbar-top-links navbar-right" }, [
              _c("li", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle count-info",
                    attrs: { "data-toggle": "dropdown", href: "#" }
                  },
                  [
                    _c("em", { staticClass: "fa fa-envelope" }),
                    _c("span", { staticClass: "label label-danger" }, [
                      _vm._v("15")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "dropdown-menu dropdown-messages" }, [
                  _c("li", [
                    _c("div", { staticClass: "dropdown-messages-box" }, [
                      _c(
                        "a",
                        {
                          staticClass: "pull-left",
                          attrs: { href: "profile.html" }
                        },
                        [
                          _c("img", {
                            staticClass: "img-circle",
                            attrs: {
                              alt: "image",
                              src: "http://placehold.it/40/30a5ff/fff"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "message-body" }, [
                        _c("small", { staticClass: "pull-right" }, [
                          _vm._v("3 mins ago")
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _c("strong", [_vm._v("John Doe")]),
                          _vm._v(" commented on "),
                          _c("strong", [_vm._v("your photo")]),
                          _vm._v(".")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("1:24 pm - 25/03/2015")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "dropdown-messages-box" }, [
                      _c(
                        "a",
                        {
                          staticClass: "pull-left",
                          attrs: { href: "profile.html" }
                        },
                        [
                          _c("img", {
                            staticClass: "img-circle",
                            attrs: {
                              alt: "image",
                              src: "http://placehold.it/40/30a5ff/fff"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "message-body" }, [
                        _c("small", { staticClass: "pull-right" }, [
                          _vm._v("1 hour ago")
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("New message from "),
                          _c("strong", [_vm._v("Jane Doe")]),
                          _vm._v(".")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("12:27 pm - 25/03/2015")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "all-button" }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("em", { staticClass: "fa fa-inbox" }),
                        _vm._v(" "),
                        _c("strong", [_vm._v("All Messages")])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle count-info",
                    attrs: { "data-toggle": "dropdown", href: "#" }
                  },
                  [
                    _c("em", { staticClass: "fa fa-bell" }),
                    _c("span", { staticClass: "label label-info" }, [
                      _vm._v("5")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "dropdown-menu dropdown-alerts" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("div", [
                        _c("em", { staticClass: "fa fa-envelope" }),
                        _vm._v(
                          " 1 New Message\n                                           "
                        ),
                        _c(
                          "span",
                          { staticClass: "pull-right text-muted small" },
                          [_vm._v("3 mins ago")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("div", [
                        _c("em", { staticClass: "fa fa-heart" }),
                        _vm._v(
                          " 12 New Likes\n                                           "
                        ),
                        _c(
                          "span",
                          { staticClass: "pull-right text-muted small" },
                          [_vm._v("4 mins ago")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("div", [
                        _c("em", { staticClass: "fa fa-user" }),
                        _vm._v(
                          " 5 New Followers\n                                           "
                        ),
                        _c(
                          "span",
                          { staticClass: "pull-right text-muted small" },
                          [_vm._v("4 mins ago")]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
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

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// components
Vue.component('admin-nav', __webpack_require__(/*! ./components/admin/Nav.vue */ "./resources/js/components/admin/Nav.vue").default); // admin app____________________

var app = new Vue({
  el: '#adminApp',
  data: {
    csrftoken: '',
    data: '' // info:null

  },
  mounted: function mounted() {
    this.csrftoken = $("#csrf-token").attr('content');
  },
  methods: {
    register: function register() {
      var form = $('#regForm')[0];
      this.data = new FormData(form); // this.data.append('_token', this.csrftoken);

      axios.post('/register', this.data).then(function (response) {
        return console.log(response.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/Nav.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/admin/Nav.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav_vue_vue_type_template_id_ee9219f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=ee9219f0& */ "./resources/js/components/admin/Nav.vue?vue&type=template&id=ee9219f0&");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nav_vue_vue_type_template_id_ee9219f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nav_vue_vue_type_template_id_ee9219f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Nav.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/Nav.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Nav.vue?vue&type=template&id=ee9219f0&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/Nav.vue?vue&type=template&id=ee9219f0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_ee9219f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=template&id=ee9219f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Nav.vue?vue&type=template&id=ee9219f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_ee9219f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_ee9219f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blake/Workspace/WebApps/MCAMainProject/Nexus/resources/js/admin.js */"./resources/js/admin.js");


/***/ })

/******/ });