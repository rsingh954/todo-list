/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tline-height: 1.6;\r\n\tmargin: 0;\r\n\tmin-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/* ================================= \r\n  Navbar\r\n==================================== */\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n\r\nh2,\r\nh3,\r\na {\r\n\tcolor: #34495e;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.logo {\r\n\tmargin: 0;\r\n\tfont-size: 1.45em;\r\n}\r\n\r\n.main-nav {\r\n\tmargin-top: 5px;\r\n    padding: 8px;\r\n\r\n}\r\n.logo a,\r\n.main-nav a {\r\n\tpadding: 10px 15px;\r\n\ttext-transform: uppercase;\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n}\r\n\r\n.main-nav a {\r\n\tcolor: #34495e;\r\n\tfont-size: .99em;\r\n}\r\n\r\n.main-nav a:hover {\r\n\tcolor: #718daa;\r\n}\r\n\r\n\r\n\r\n.header {\r\n\tpadding-top: .5em;\r\n\tpadding-bottom: .5em;\r\n\tborder: 1px solid #a2a2a2;\r\n\tbackground-color: #f4f4f4;\r\n\t-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\r\n\t-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\r\n\tbox-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\r\n\t-webkit-border-radius: 5px;\r\n\t-moz-border-radius: 5px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n/* ================================= \r\n  Sidebar\r\n==================================== */\r\n\r\n.sidebar{\r\n    width: 300px;\r\n    background: #EEEEEE;\r\n    flex-shrink: 0;\r\n    border-radius: 1rem;\r\n\r\n}\r\n.body{\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n.project{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 12px;\r\n}\r\n.p-name{\r\n    display: flex;\r\n    padding: 18px 18px;\r\n    border-radius: 1rem;\r\n    justify-content: space-between;\r\n}\r\n.active{\r\n    background-color: \t#C0C0C0;\r\n}\r\n.enterProject{\r\n    display: flex;\r\n    transition: 1s;\r\n\r\n}\r\n.p-form::after{\r\n    display: none;\r\n    gap: 8px;\r\n    transform: scaleY(10deg);\r\n}\r\n.p-form button{\r\n    padding: 8px;\r\n    border-radius: 1rem;\r\n}\r\n.active-icon::after{\r\n    content: \"️🗑️\";\r\n    margin-left: 0;\r\n    width: 100vw;\r\n\r\n}\r\n.active-icon::before{\r\n    content: \"️\\0FE0F\";\r\n    width: 100vw;\r\n\r\n}\r\n/* ================================= \r\n  Todos\r\n==================================== */\r\n\r\n.wrapper{\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    padding: 16px;\r\n    width: 100vw;\r\n    gap: 25px;\r\n}\r\n.todo-form-container{\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    align-items: center;\r\n    gap: 8px;\r\n    \r\n}\r\ninput{\r\n    max-height: 20px;\r\n}\r\nbutton{\r\n    max-width: 10vw;\r\n    padding:8px ;\r\n}\r\n.wrapper h1{\r\n    border-bottom: 1px gold solid;\r\n}\r\n/* ================================= \r\n  Media Queries\r\n==================================== */\r\n@media (min-width: 769px) {\r\n\t.header,\r\n\t.main-nav {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.header {\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.header {\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .sidebar{\r\n        width: 150px;\r\n    }\r\n    .project{\r\n        display: flex;\r\n        padding: 10px 10px;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        gap: 2rem;\r\n    }\r\n    button{\r\n        max-width: 4rem;\r\n    }\r\n    .p-form {\r\n        flex-wrap: nowrap;\r\n        \r\n    }\r\n    .p-form button{\r\n        max-width: 20vw;\r\n    }\r\n    .p-form input{\r\n        flex-wrap: nowrap;\r\n        max-width: 20vw;\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;CACC,sBAAsB;AACvB;AACA;CACC,qCAAqC;CACrC,gBAAgB;CAChB,SAAS;CACT,iBAAiB;IACd,aAAa;IACb,sBAAsB;AAC1B;AACA;;sCAEsC;AACtC;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;;AAGA;;;CAGC,cAAc;AACf;;AAEA;CACC,qBAAqB;IAClB,eAAe;AACnB;;;;AAIA;CACC,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,eAAe;IACZ,YAAY;;AAEhB;AACA;;CAEC,kBAAkB;CAClB,yBAAyB;CACzB,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,cAAc;AACf;;;;AAIA;CACC,iBAAiB;CACjB,oBAAoB;CACpB,yBAAyB;CACzB,yBAAyB;CACzB,qDAAqD;CACrD,kDAAkD;CAClD,6CAA6C;CAC7C,0BAA0B;CAC1B,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;;sCAEsC;;AAEtC;IACI,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,mBAAmB;;AAEvB;AACA;IACI,OAAO;IACP,aAAa;AACjB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,cAAc;;AAElB;AACA;IACI,aAAa;IACb,QAAQ;IACR,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,cAAc;IACd,YAAY;;AAEhB;AACA;IACI,kBAAkB;IAClB,YAAY;;AAEhB;AACA;;sCAEsC;;AAEtC;IACI,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,QAAQ;;AAEZ;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,6BAA6B;AACjC;AACA;;sCAEsC;AACtC;CACC;;EAEC,aAAa;CACd;CACA;EACC,sBAAsB;EACtB,mBAAmB;CACpB;;AAED;;AAEA;CACC;EACC,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;AACA;IACI;QACI,YAAY;IAChB;IACA;QACI,aAAa;QACb,kBAAkB;QAClB,uBAAuB;QACvB,sBAAsB;QACtB,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;;IAErB;IACA;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;QACjB,eAAe;IACnB;EACF","sourcesContent":["\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tline-height: 1.6;\r\n\tmargin: 0;\r\n\tmin-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/* ================================= \r\n  Navbar\r\n==================================== */\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n\r\nh2,\r\nh3,\r\na {\r\n\tcolor: #34495e;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.logo {\r\n\tmargin: 0;\r\n\tfont-size: 1.45em;\r\n}\r\n\r\n.main-nav {\r\n\tmargin-top: 5px;\r\n    padding: 8px;\r\n\r\n}\r\n.logo a,\r\n.main-nav a {\r\n\tpadding: 10px 15px;\r\n\ttext-transform: uppercase;\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n}\r\n\r\n.main-nav a {\r\n\tcolor: #34495e;\r\n\tfont-size: .99em;\r\n}\r\n\r\n.main-nav a:hover {\r\n\tcolor: #718daa;\r\n}\r\n\r\n\r\n\r\n.header {\r\n\tpadding-top: .5em;\r\n\tpadding-bottom: .5em;\r\n\tborder: 1px solid #a2a2a2;\r\n\tbackground-color: #f4f4f4;\r\n\t-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\r\n\t-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\r\n\tbox-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\r\n\t-webkit-border-radius: 5px;\r\n\t-moz-border-radius: 5px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n/* ================================= \r\n  Sidebar\r\n==================================== */\r\n\r\n.sidebar{\r\n    width: 300px;\r\n    background: #EEEEEE;\r\n    flex-shrink: 0;\r\n    border-radius: 1rem;\r\n\r\n}\r\n.body{\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n.project{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 12px;\r\n}\r\n.p-name{\r\n    display: flex;\r\n    padding: 18px 18px;\r\n    border-radius: 1rem;\r\n    justify-content: space-between;\r\n}\r\n.active{\r\n    background-color: \t#C0C0C0;\r\n}\r\n.enterProject{\r\n    display: flex;\r\n    transition: 1s;\r\n\r\n}\r\n.p-form::after{\r\n    display: none;\r\n    gap: 8px;\r\n    transform: scaleY(10deg);\r\n}\r\n.p-form button{\r\n    padding: 8px;\r\n    border-radius: 1rem;\r\n}\r\n.active-icon::after{\r\n    content: \"️🗑️\";\r\n    margin-left: 0;\r\n    width: 100vw;\r\n\r\n}\r\n.active-icon::before{\r\n    content: \"️\\0FE0F\";\r\n    width: 100vw;\r\n\r\n}\r\n/* ================================= \r\n  Todos\r\n==================================== */\r\n\r\n.wrapper{\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    padding: 16px;\r\n    width: 100vw;\r\n    gap: 25px;\r\n}\r\n.todo-form-container{\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    align-items: center;\r\n    gap: 8px;\r\n    \r\n}\r\ninput{\r\n    max-height: 20px;\r\n}\r\nbutton{\r\n    max-width: 10vw;\r\n    padding:8px ;\r\n}\r\n.wrapper h1{\r\n    border-bottom: 1px gold solid;\r\n}\r\n/* ================================= \r\n  Media Queries\r\n==================================== */\r\n@media (min-width: 769px) {\r\n\t.header,\r\n\t.main-nav {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.header {\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.header {\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .sidebar{\r\n        width: 150px;\r\n    }\r\n    .project{\r\n        display: flex;\r\n        padding: 10px 10px;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        gap: 2rem;\r\n    }\r\n    button{\r\n        max-width: 4rem;\r\n    }\r\n    .p-form {\r\n        flex-wrap: nowrap;\r\n        \r\n    }\r\n    .p-form button{\r\n        max-width: 20vw;\r\n    }\r\n    .p-form input{\r\n        flex-wrap: nowrap;\r\n        max-width: 20vw;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domCreation.js":
/*!****************************!*\
  !*** ./src/domCreation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "toDoForm": () => (/* binding */ toDoForm),
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");







const header = (() =>{
    const header = document.createElement('header');
    const h1 = document.createElement('h1')
    const a =document.createElement('a')
    const mainNav = document.createElement('ul')
    const li = document.createElement('li')
    const addProject = document.createElement('a')
    addProject.classList.add('add-project')
    addProject.textContent = "Add Project"
    a.textContent = "DoTo List"

    header.classList.add('header')
    h1.classList.add('logo')
    mainNav.classList.add('main-nav')

    h1.appendChild(a)
    li.appendChild(addProject)
    mainNav.appendChild(li)
    header.appendChild(h1)
    header.appendChild(mainNav)
 
    document.body.appendChild(header)

})() 

const sidebar = (()=>{
    const sidebar = document.createElement('div')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const body = document.createElement('div')
    
    
    body.classList.add('body')
    sidebar.classList.add('sidebar')
    ul.classList.add('projects')
    li.classList.add('project')


    ul.appendChild(li)
    sidebar.appendChild(ul)
    body.appendChild(sidebar)
    document.body.appendChild(body)
})()

const toDoForm = (() =>{
    const container = document.createElement('div')
    const wrapper =  document.createElement('div')
    const body = document.querySelector('.body')
    const formContainer = document.createElement('div')
    const form = document.createElement('form')
    const title = document.createElement('label')
    const titleInput = document.createElement('input')
    const description = document.createElement('label')
    const descriptionInput = document.createElement('input')
    const date = document.createElement('label')
    const dateInput = document.createElement('input')
    const note = document.createElement('label')
    const noteInput = document.createElement('input')
    const priorityContainer = document.createElement('div')
    const btn = document.createElement("button")
    const submit = document.createElement("button")


    wrapper.classList.add('wrapper')
    submit.textContent = 'Submit'
    btn.textContent = 'Add todo'

    title.setAttribute('for', 'title')
    titleInput.type = 'text'
    titleInput.name = 'title'
    title.textContent = "Title"

    description.setAttribute('for', 'description')
    descriptionInput.type = 'text'
    descriptionInput.name = 'description'
    description.textContent = "Description"

    date.setAttribute('for', 'dueDate')
    dateInput.type = 'date'
    dateInput.name = 'date'
    date.textContent = "Date"

    note.setAttribute('for', 'note')
    noteInput.type = 'text'
    noteInput.name = 'notes'
    note.textContent = "Notes"
    
    priorityContainer.classList.add("priority")
    priorityContainer.innerHTML = `
    <h4>Priority</h4>
    <label class="radio-container">Low</label>
        <input type="radio" name="priority" value = "low">

    <label class="radio-container">Medium</label>
      <input type="radio" name="priority" value = "medium">

    <label class="radio-container">High</label>
      <input type="radio" name="priority" value = "high">
    `

    formContainer.classList.add('todo-form-container')
    container.classList.add('todos')

    formContainer.appendChild(title)
    formContainer.appendChild(titleInput)

    formContainer.appendChild(description)
    formContainer.appendChild(descriptionInput)

    formContainer.appendChild(date)
    formContainer.appendChild(dateInput)
    formContainer.appendChild(note)
    formContainer.appendChild(noteInput)
    formContainer.appendChild(priorityContainer)
    formContainer.appendChild(submit)

    wrapper.appendChild(formContainer)
    wrapper.appendChild(container)
    wrapper.appendChild(btn)
    body.appendChild(wrapper)

    btn.onclick = _events__WEBPACK_IMPORTED_MODULE_1__.showForm
    submit.type = 'submit'
    submit.onclick = _events__WEBPACK_IMPORTED_MODULE_1__.submitToDo

})()
const projectForm = (()=>{
    const form = document.createElement('form')
    const project = document.querySelector('.project')
    const input = document.createElement('input')
    const submit = document.createElement("button")
    submit.textContent = "✔️"
    form.classList.add('p-form')
    if(document.querySelector('.p-form')){
        const input = document.querySelector('.p-form')
        input.style.display == 'none'?input.style.display = 'flex': input.style.display = 'none'
        return
    } 
    input.type = 'text'
    input.classList.add('p-name')
    input.classList.add('enterProject')
    form.style.display = 'flex'

    submit.type = 'submit'
    submit.onclick = _events__WEBPACK_IMPORTED_MODULE_1__.submitProject
    form.appendChild(input)
    form.appendChild(submit)
    project.append(form)

})


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "submitToDo": () => (/* binding */ submitToDo),
/* harmony export */   "addProjectForm": () => (/* binding */ addProjectForm),
/* harmony export */   "submitProject": () => (/* binding */ submitProject)
/* harmony export */ });
/* harmony import */ var _renderDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderDom */ "./src/renderDom.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _domCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domCreation */ "./src/domCreation.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./src/index.js");








function showForm(e){
    e.preventDefault()
    const form = document.querySelector('.todo-form-container')
    const active = document.querySelector('.active')
    if(!active) return alert('Please Select Project')
    form.style.display == 'flex' ? form.style.display = 'none':form.style.display = 'flex'
}

function submitToDo(e){
    e.preventDefault()
    const active = document.querySelector('.active')
    let project = (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.manageProjects)().retrieveProject(active.id)
    
    const title = document.querySelector('input[name="title"]')

    const description = document.querySelector('input[name="description"]')

    const date = document.querySelector('input[name="date"]')

    const notes = document.querySelector('input[name="notes"]')

    const priority = document.querySelector('input[name="priority"]:checked').value;

    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)(title.value,description.value,notes.value,date.value,priority)
    let todos = project.todos
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.manageProjects)().addTodo(project, todo)
    ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_0__.updateView)('todo')
    ;(0,___WEBPACK_IMPORTED_MODULE_5__.removeToDoBtn)()
}

function addProjectForm(){
    const addProject = document.querySelector('.add-project')
    addProject.addEventListener('click',_domCreation__WEBPACK_IMPORTED_MODULE_3__.projectForm) 
}
function submitProject(e){
    const name = e.target.previousElementSibling.value
    e.preventDefault()
    const newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_4__.Project)(name)
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.manageProjects)().addProject(newProject)
    ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_0__.updateView)('project')
    return
    
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "removeToDoBtn": () => (/* binding */ removeToDoBtn)
/* harmony export */ });
/* harmony import */ var _domCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreation */ "./src/domCreation.js");
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");
/* harmony import */ var _renderDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderDom */ "./src/renderDom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events */ "./src/events.js");









const init = (()=>{
    let todo = (0,_todo__WEBPACK_IMPORTED_MODULE_4__.todoFactory)('Work', "do shit","", 'Today', "Low")
    let todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_4__.todoFactory)('Eat', "make food","", 'Today', "high")
    let todo2 = (0,_todo__WEBPACK_IMPORTED_MODULE_4__.todoFactory)('vape', "buy liquid","", 'Today', "high")
    const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.Project)('default');

    const newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.Project)('New');

    const dooProject = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.Project)('Dooo');
    (0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addProject(defaultProject)
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addTodo(defaultProject, todo1)
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addTodo(defaultProject, todo)
    
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addProject(newProject)
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addProject(dooProject)
    
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addTodo(newProject, todo1)
    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addTodo(newProject, todo)

    ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().addTodo(dooProject, todo)

    ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)()
    ;(0,_events__WEBPACK_IMPORTED_MODULE_6__.addProjectForm)()
})()



function start(){
    const a = document.querySelectorAll('.p-name')
    a.forEach((b) =>{
        b.addEventListener('click', e =>{
            const {target} = e
            if(target.classList.contains('active-icon')) {
                (0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().removeProject(target.id)
                ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)()
                ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_2__.updateView)('project')
                return
            }
            let container = document.querySelector('.todos')
            removeActiveClass()
            target.classList.toggle('active')
            target.children[0].classList.toggle('active-icon')
            let todo = (0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().retrieveProject(target.id).todos
            container.innerHTML = ''
            ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_2__.renderToDo)(todo)
            removeToDoBtn()//Initializes the function or it wont work
        })
    })
    
    function removeActiveClass(){
        const project  = document.querySelectorAll('.p-name')
        const icon  = document.querySelectorAll('i')
        icon.forEach((i)=>{
            i.classList.remove('active-icon')
        })

        project.forEach((p) =>{
            p.classList.remove('active')
        })
    }
    
}
function removeToDoBtn(){
    const removeToDoBtn = document.querySelectorAll('.remove-todo') 
    removeToDoBtn.forEach((btn) => {
        btn.addEventListener('click', e =>{
            const {target} = e
            const currentProject = document.querySelector('.active')
            const project = (0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().retrieveProject(currentProject.id)
            console.log(target.id)
            ;(0,_projectManager__WEBPACK_IMPORTED_MODULE_5__.manageProjects)().removeTodo(project, target.id)
            ;(0,_renderDom__WEBPACK_IMPORTED_MODULE_2__.updateView)('todo')
        })
    })
    
}


start()

/***/ }),

/***/ "./src/manageLocalStorage.js":
/*!***********************************!*\
  !*** ./src/manageLocalStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageLocal": () => (/* binding */ manageLocal)
/* harmony export */ });
class manageLocal{
    static getProjects(){
        let projects;
        if(localStorage.getItem('projects') == null){
            projects = []
        }else{
            projects = JSON.parse(localStorage.getItem('projects'))

        }
        return projects
    }
    
}


/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageProjects": () => (/* binding */ manageProjects)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");



const manageProjects = (project) =>{

    function addProject(project){
        const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__.manageLocal.getProjects()
        if(projects.filter(p => p._name === project._name).length > 0) return "Exists"
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
    }
    function removeProject(title){
        const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__.manageLocal.getProjects()
        projects.filter((p, i) => {
            if(p._name == title){
                projects.splice(i, 1)
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        })
    }
    function addTodo(project, todo){
        const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__.manageLocal.getProjects()
        if(projects.find((p) => p._name == project._name).todos.find((t) => t._title == todo._title)) return
        else{
        projects.find((p) => p._name == project._name).todos.push(todo)
        localStorage.setItem('projects', JSON.stringify(projects))
        }

    }
    function removeTodo(project, title){
        const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__.manageLocal.getProjects()
        let [filtered]= projects.filter((f) => f._name === project._name)
        for(let i = 0; i <= projects.length-1; i++){
            if(projects[i]._id === filtered._id){
                for(let j = 0; j <= projects[i].todos.length-1; j++){
                    if(projects[i].todos[j]._title == title){
                        projects[i].todos.splice(j, 1)
                        localStorage.setItem('projects', JSON.stringify(projects))
                        ;(0,___WEBPACK_IMPORTED_MODULE_0__.start)()
                        ;(0,___WEBPACK_IMPORTED_MODULE_0__.removeToDoBtn)()
                    }
                }
            }
        }
    }
    function retrieveProject(id){
        const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__.manageLocal.getProjects()
        let [project] = projects.filter((p) => p._id == id)

        return project
    }
    return {addProject,removeProject, addTodo, removeTodo, retrieveProject}
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
function Project(name){
    let project = Object.create(proto)
    project._id = createID()
    project._name = name
    project.todos = []
    return project
}

function createID(){
    return Math.floor(Math.random()*100)
}
const proto = {
    getName(){
    return this._name
    },
    setTodo(todo){
        this.todos.push(todo)
    }
}

/***/ }),

/***/ "./src/renderDom.js":
/*!**************************!*\
  !*** ./src/renderDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderToDo": () => (/* binding */ renderToDo),
/* harmony export */   "updateView": () => (/* binding */ updateView)
/* harmony export */ });
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");





const renderProjects = (()=>{
    const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_0__.manageLocal.getProjects()
    const li = document.querySelector('.project')

    for(let i = 0; i <= projects.length-1; i++){
        const project = document.createElement('div')
        const icon = document.createElement('i')
        icon.id=projects[i]._name 
        project.appendChild(icon)
        project.classList.add('p-name')
        project.textContent = projects[i]._name 
        project.id = projects[i]._id
        li.appendChild(project)
        project.appendChild(icon)

    }
   
})

const renderToDo = ((todos)=>{
    const projects = _manageLocalStorage__WEBPACK_IMPORTED_MODULE_0__.manageLocal.getProjects()
    const body = document.querySelector('.body')
    let toDoContainer = document.querySelector('.todos')
    let wrapper = document.querySelector('.wrapper')


    for(let i = 0; i < todos.length; i++){
            //Card
            const container = document.createElement('div')
            container.classList.add('container')
            container.id = todos[i]._id

            //title
            const title = document.createElement('h1')
            title.classList.add('title')
            title.textContent = todos[i]._title

            //Description
            const description = document.createElement('div')
            description.classList.add('description')
            description.textContent = 'description: '+todos[i].description

            //Due date
            const dueDate = document.createElement('div')
            dueDate.classList.add('dueDate')
            dueDate.textContent = 'Due Date: ' + todos[i].dueDate
            
            //Notes
            const notes = document.createElement('div')
            notes.classList.add('notes')
            notes.textContent = 'Notes: ' + todos[i].notes

            //Priority
            const priority = document.createElement('div')
            priority.classList.add('priority')
            priority.textContent = 'Priority: ' + todos[i].priority

            // delete todo
            const button = document.createElement('a')
            button.id = todos[i]._title
            button.classList.add('remove-todo')
            button.textContent = "Remove Todo"

            container.appendChild(title)
            container.appendChild(description)
            container.appendChild(dueDate)
            container.appendChild(notes)
            container.appendChild(priority)
            container.appendChild(button)
            
            toDoContainer.appendChild(container)
            wrapper.appendChild(toDoContainer)
            body.appendChild(wrapper)
        }
})
function getProject() {
    const active = document.querySelector('.active')
    return (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.manageProjects)().retrieveProject(active.id)
}

//Very Important function
const updateView =(state) =>{
    if(state == 'todo'){
        const active = document.querySelector('.active') 
        const form  = document.querySelector('.todo-form-container')
        let project = (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.manageProjects)().retrieveProject(active.id)
        const todos = project.todos 
        let container = document.querySelector('.todos')
        container.innerHTML = ''
        renderToDo(todos)
        form.style.display = 'none'
        ;(0,___WEBPACK_IMPORTED_MODULE_2__.removeToDoBtn)()
    }
    if(state == 'project'){
        const sidebar = document.querySelector('.project') 
        sidebar.innerHTML = ''
        renderProjects()
        ;(0,___WEBPACK_IMPORTED_MODULE_2__.start)()// if not dor this then project doesnt init
        return
    }
    
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory)
/* harmony export */ });
const todoFactory = (title, description, notes, dueDate, priority) => {
   
    let todo = Object.create(proto);
    todo._id = createID()
    todo._title = title
    todo.description = description
    todo.notes = notes
    todo.dueDate = dueDate
    todo.priority = priority
    
    return todo
}   

function createID(){
    return Math.floor(Math.random()*100)
}

const proto = {
    getName(){
        return this._title
    },
    getId(){
        return this._id
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21hbmFnZUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9yZW5kZXJEb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbioge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNjtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIE5hdmJhclxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbnVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogIzM0NDk1ZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjQ1ZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdiB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuXFxyXFxufVxcclxcbi5sb2dvIGEsXFxyXFxuLm1haW4tbmF2IGEge1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IGEge1xcclxcblxcdGNvbG9yOiAjMzQ0OTVlO1xcclxcblxcdGZvbnQtc2l6ZTogLjk5ZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogIzcxOGRhYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0cGFkZGluZy10b3A6IC41ZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IC41ZW07XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG5cXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIFNpZGViYXJcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG59XFxyXFxuLmJvZHl7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5wcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG4ucC1uYW1le1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0I0MwQzBDMDtcXHJcXG59XFxyXFxuLmVudGVyUHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuXFxyXFxufVxcclxcbi5wLWZvcm06OmFmdGVye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMTBkZWcpO1xcclxcbn1cXHJcXG4ucC1mb3JtIGJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4uYWN0aXZlLWljb246OmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwi77iP8J+Xke+4j1xcXCI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxufVxcclxcbi5hY3RpdmUtaWNvbjo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiBcXFwi77iPXFxcXDBGRTBGXFxcIjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcblxcclxcbn1cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXFxyXFxuICBUb2Rvc1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi53cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG4udG9kby1mb3JtLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgXFxyXFxufVxcclxcbmlucHV0e1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIG1heC13aWR0aDogMTB2dztcXHJcXG4gICAgcGFkZGluZzo4cHggO1xcclxcbn1cXHJcXG4ud3JhcHBlciBoMXtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdvbGQgc29saWQ7XFxyXFxufVxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIE1lZGlhIFF1ZXJpZXNcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXHJcXG5cXHQuaGVhZGVyLFxcclxcblxcdC5tYWluLW5hdiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxuXFx0LmhlYWRlciB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xcclxcblxcdC5oZWFkZXIge1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLnNpZGViYXJ7XFxyXFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2plY3R7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbntcXHJcXG4gICAgICAgIG1heC13aWR0aDogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucC1mb3JtIHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgLnAtZm9ybSBidXR0b257XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLnAtZm9ybSBpbnB1dHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyMHZ3O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLHFDQUFxQztDQUNyQyxnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGlCQUFpQjtJQUNkLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTs7c0NBRXNDO0FBQ3RDO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7OztBQUdBOzs7Q0FHQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxxQkFBcUI7SUFDbEIsZUFBZTtBQUNuQjs7OztBQUlBO0NBQ0MsU0FBUztDQUNULGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7SUFDWixZQUFZOztBQUVoQjtBQUNBOztDQUVDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7Ozs7QUFJQTtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixxREFBcUQ7Q0FDckQsa0RBQWtEO0NBQ2xELDZDQUE2QztDQUM3QywwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTs7c0NBRXNDOztBQUV0QztJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLE9BQU87SUFDUCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUNBOztzQ0FFc0M7O0FBRXRDO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsUUFBUTs7QUFFWjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7O3NDQUVzQztBQUN0QztDQUNDOztFQUVDLGFBQWE7Q0FDZDtDQUNBO0VBQ0Msc0JBQXNCO0VBQ3RCLG1CQUFtQjtDQUNwQjs7QUFFRDs7QUFFQTtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CLDhCQUE4QjtDQUMvQjs7QUFFRDtBQUNBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbioge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNjtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIE5hdmJhclxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbnVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogIzM0NDk1ZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjQ1ZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdiB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuXFxyXFxufVxcclxcbi5sb2dvIGEsXFxyXFxuLm1haW4tbmF2IGEge1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IGEge1xcclxcblxcdGNvbG9yOiAjMzQ0OTVlO1xcclxcblxcdGZvbnQtc2l6ZTogLjk5ZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogIzcxOGRhYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0cGFkZGluZy10b3A6IC41ZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IC41ZW07XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG5cXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIFNpZGViYXJcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG59XFxyXFxuLmJvZHl7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5wcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG4ucC1uYW1le1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0I0MwQzBDMDtcXHJcXG59XFxyXFxuLmVudGVyUHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuXFxyXFxufVxcclxcbi5wLWZvcm06OmFmdGVye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMTBkZWcpO1xcclxcbn1cXHJcXG4ucC1mb3JtIGJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4uYWN0aXZlLWljb246OmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwi77iP8J+Xke+4j1xcXCI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxufVxcclxcbi5hY3RpdmUtaWNvbjo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiBcXFwi77iPXFxcXDBGRTBGXFxcIjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcblxcclxcbn1cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXFxyXFxuICBUb2Rvc1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi53cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG4udG9kby1mb3JtLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgXFxyXFxufVxcclxcbmlucHV0e1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIG1heC13aWR0aDogMTB2dztcXHJcXG4gICAgcGFkZGluZzo4cHggO1xcclxcbn1cXHJcXG4ud3JhcHBlciBoMXtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdvbGQgc29saWQ7XFxyXFxufVxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIE1lZGlhIFF1ZXJpZXNcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXHJcXG5cXHQuaGVhZGVyLFxcclxcblxcdC5tYWluLW5hdiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxuXFx0LmhlYWRlciB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xcclxcblxcdC5oZWFkZXIge1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLnNpZGViYXJ7XFxyXFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2plY3R7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbntcXHJcXG4gICAgICAgIG1heC13aWR0aDogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucC1mb3JtIHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgLnAtZm9ybSBidXR0b257XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLnAtZm9ybSBpbnB1dHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyMHZ3O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXHJcbmltcG9ydCB7IGFkZFByb2plY3QsIHNob3dGb3JtIH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBtYW5hZ2VQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdE1hbmFnZXInO1xyXG5pbXBvcnQgeyBzdWJtaXRUb0RvIH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBzdWJtaXRQcm9qZWN0IH0gZnJvbSAnLi9ldmVudHMnO1xyXG5cclxuXHJcbmNvbnN0IGhlYWRlciA9ICgoKSA9PntcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBhID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKVxyXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIlxyXG4gICAgYS50ZXh0Q29udGVudCA9IFwiRG9UbyBMaXN0XCJcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdicpXHJcblxyXG4gICAgaDEuYXBwZW5kQ2hpbGQoYSlcclxuICAgIGxpLmFwcGVuZENoaWxkKGFkZFByb2plY3QpXHJcbiAgICBtYWluTmF2LmFwcGVuZENoaWxkKGxpKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1haW5OYXYpXHJcbiBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxufSkoKSBcclxuXHJcbmNvbnN0IHNpZGViYXIgPSAoKCk9PntcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpXHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxyXG4gICAgdWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxyXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXHJcblxyXG5cclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh1bClcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcilcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9keSlcclxufSkoKVxyXG5cclxuY29uc3QgdG9Eb0Zvcm0gPSAoKCkgPT57XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3Qgd3JhcHBlciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JylcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcblxyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpXHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0J1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0FkZCB0b2RvJ1xyXG5cclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJylcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJ1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlXCJcclxuXHJcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCdcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbidcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiXHJcblxyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcclxuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXHJcbiAgICBkYXRlSW5wdXQubmFtZSA9ICdkYXRlJ1xyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZVwiXHJcblxyXG4gICAgbm90ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3RlJylcclxuICAgIG5vdGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICBub3RlSW5wdXQubmFtZSA9ICdub3RlcydcclxuICAgIG5vdGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCJcclxuICAgIFxyXG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpXHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDQ+UHJpb3JpdHk8L2g0PlxyXG4gICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+TG93PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWUgPSBcImxvd1wiPlxyXG5cclxuICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZSA9IFwibWVkaXVtXCI+XHJcblxyXG4gICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZSA9IFwiaGlnaFwiPlxyXG4gICAgYFxyXG5cclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtLWNvbnRhaW5lcicpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3MnKVxyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSlcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUlucHV0KVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcilcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KVxyXG5cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChidG4pXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcblxyXG4gICAgYnRuLm9uY2xpY2sgPSBzaG93Rm9ybVxyXG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0J1xyXG4gICAgc3VibWl0Lm9uY2xpY2sgPSBzdWJtaXRUb0RvXHJcblxyXG59KSgpXHJcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpPT57XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIuKclO+4j1wiXHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3AtZm9ybScpXHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1mb3JtJykpe1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAtZm9ybScpXHJcbiAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZSc/aW5wdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzogaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfSBcclxuICAgIGlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3AtbmFtZScpXHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdlbnRlclByb2plY3QnKVxyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcblxyXG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0J1xyXG4gICAgc3VibWl0Lm9uY2xpY2sgPSBzdWJtaXRQcm9qZWN0XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXHJcbiAgICBwcm9qZWN0LmFwcGVuZChmb3JtKVxyXG5cclxufSlcclxuZXhwb3J0e2hlYWRlcixzaWRlYmFyLCB0b0RvRm9ybSwgcHJvamVjdEZvcm19IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHVwZGF0ZVZpZXcgfSBmcm9tIFwiLi9yZW5kZXJEb21cIlxyXG5pbXBvcnQgeyBtYW5hZ2VQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCJcclxuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tIFwiLi90b2RvXCJcclxuaW1wb3J0IHsgcmVuZGVyVG9EbyB9IGZyb20gXCIuL3JlbmRlckRvbVwiXHJcbmltcG9ydCB7IHByb2plY3RGb3JtIH0gZnJvbSBcIi4vZG9tQ3JlYXRpb25cIlxyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIlxyXG5pbXBvcnQgeyByZW1vdmVUb0RvQnRuIH0gZnJvbSBcIi5cIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS1jb250YWluZXInKVxyXG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXHJcbiAgICBpZighYWN0aXZlKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBTZWxlY3QgUHJvamVjdCcpXHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnID8gZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOmZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0VG9EbyhlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXHJcbiAgICBsZXQgcHJvamVjdCA9IG1hbmFnZVByb2plY3RzKCkucmV0cmlldmVQcm9qZWN0KGFjdGl2ZS5pZClcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKVxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJylcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRhdGVcIl0nKVxyXG5cclxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5vdGVzXCJdJylcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9GYWN0b3J5KHRpdGxlLnZhbHVlLGRlc2NyaXB0aW9uLnZhbHVlLG5vdGVzLnZhbHVlLGRhdGUudmFsdWUscHJpb3JpdHkpXHJcbiAgICBsZXQgdG9kb3MgPSBwcm9qZWN0LnRvZG9zXHJcbiAgICBtYW5hZ2VQcm9qZWN0cygpLmFkZFRvZG8ocHJvamVjdCwgdG9kbylcclxuICAgIHVwZGF0ZVZpZXcoJ3RvZG8nKVxyXG4gICAgcmVtb3ZlVG9Eb0J0bigpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybSgpe1xyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpXHJcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwcm9qZWN0Rm9ybSkgXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoZSl7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChuYW1lKVxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXHJcbiAgICB1cGRhdGVWaWV3KCdwcm9qZWN0JylcclxuICAgIHJldHVyblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBoZWFkZXIsc2lkZWJhciwgdG9Eb0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSBcIi4vZG9tQ3JlYXRpb25cIjtcclxuaW1wb3J0IHsgbWFuYWdlTG9jYWwgfSBmcm9tIFwiLi9tYW5hZ2VMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRvRG8sIHVwZGF0ZVZpZXcgfSBmcm9tIFwiLi9yZW5kZXJEb21cIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHRvZG9GYWN0b3J5IH0gZnJvbSBcIi4vdG9kb1wiO1xyXG5pbXBvcnQgeyBtYW5hZ2VQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3RGb3JtIH0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5cclxuY29uc3QgaW5pdCA9ICgoKT0+e1xyXG4gICAgbGV0IHRvZG8gPSB0b2RvRmFjdG9yeSgnV29yaycsIFwiZG8gc2hpdFwiLFwiXCIsICdUb2RheScsIFwiTG93XCIpXHJcbiAgICBsZXQgdG9kbzEgPSB0b2RvRmFjdG9yeSgnRWF0JywgXCJtYWtlIGZvb2RcIixcIlwiLCAnVG9kYXknLCBcImhpZ2hcIilcclxuICAgIGxldCB0b2RvMiA9IHRvZG9GYWN0b3J5KCd2YXBlJywgXCJidXkgbGlxdWlkXCIsXCJcIiwgJ1RvZGF5JywgXCJoaWdoXCIpXHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ2RlZmF1bHQnKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdCgnTmV3Jyk7XHJcblxyXG4gICAgY29uc3QgZG9vUHJvamVjdCA9IFByb2plY3QoJ0Rvb28nKTtcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdClcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkVG9kbyhkZWZhdWx0UHJvamVjdCwgdG9kbzEpXHJcbiAgICBtYW5hZ2VQcm9qZWN0cygpLmFkZFRvZG8oZGVmYXVsdFByb2plY3QsIHRvZG8pXHJcbiAgICBcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkUHJvamVjdChuZXdQcm9qZWN0KVxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRQcm9qZWN0KGRvb1Byb2plY3QpXHJcbiAgICBcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkVG9kbyhuZXdQcm9qZWN0LCB0b2RvMSlcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkVG9kbyhuZXdQcm9qZWN0LCB0b2RvKVxyXG5cclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkVG9kbyhkb29Qcm9qZWN0LCB0b2RvKVxyXG5cclxuICAgIHJlbmRlclByb2plY3RzKClcclxuICAgIGFkZFByb2plY3RGb3JtKClcclxufSkoKVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKXtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC1uYW1lJylcclxuICAgIGEuZm9yRWFjaCgoYikgPT57XHJcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHt0YXJnZXR9ID0gZVxyXG4gICAgICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtaWNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VQcm9qZWN0cygpLnJlbW92ZVByb2plY3QodGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmlldygncHJvamVjdCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJylcclxuICAgICAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKVxyXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgdGFyZ2V0LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1pY29uJylcclxuICAgICAgICAgICAgbGV0IHRvZG8gPSBtYW5hZ2VQcm9qZWN0cygpLnJldHJpZXZlUHJvamVjdCh0YXJnZXQuaWQpLnRvZG9zXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICByZW5kZXJUb0RvKHRvZG8pXHJcbiAgICAgICAgICAgIHJlbW92ZVRvRG9CdG4oKS8vSW5pdGlhbGl6ZXMgdGhlIGZ1bmN0aW9uIG9yIGl0IHdvbnQgd29ya1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcygpe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnAtbmFtZScpXHJcbiAgICAgICAgY29uc3QgaWNvbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpJylcclxuICAgICAgICBpY29uLmZvckVhY2goKGkpPT57XHJcbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWljb24nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHByb2plY3QuZm9yRWFjaCgocCkgPT57XHJcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvRG9CdG4oKXtcclxuICAgIGNvbnN0IHJlbW92ZVRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXRvZG8nKSBcclxuICAgIHJlbW92ZVRvRG9CdG4uZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhcmdldH0gPSBlXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VQcm9qZWN0cygpLnJldHJpZXZlUHJvamVjdChjdXJyZW50UHJvamVjdC5pZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICBtYW5hZ2VQcm9qZWN0cygpLnJlbW92ZVRvZG8ocHJvamVjdCwgdGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICB1cGRhdGVWaWV3KCd0b2RvJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuc3RhcnQoKSIsImV4cG9ydCBjbGFzcyBtYW5hZ2VMb2NhbHtcclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0cygpe1xyXG4gICAgICAgIGxldCBwcm9qZWN0cztcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PSBudWxsKXtcclxuICAgICAgICAgICAgcHJvamVjdHMgPSBbXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvamVjdHNcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsImltcG9ydCB7IHJlbW92ZVRvRG9CdG4sIHN0YXJ0IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgbWFuYWdlTG9jYWwgfSBmcm9tIFwiLi9tYW5hZ2VMb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYW5hZ2VQcm9qZWN0cyA9IChwcm9qZWN0KSA9PntcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gbWFuYWdlTG9jYWwuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIGlmKHByb2plY3RzLmZpbHRlcihwID0+IHAuX25hbWUgPT09IHByb2plY3QuX25hbWUpLmxlbmd0aCA+IDApIHJldHVybiBcIkV4aXN0c1wiXHJcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QodGl0bGUpe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gbWFuYWdlTG9jYWwuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIHByb2plY3RzLmZpbHRlcigocCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZihwLl9uYW1lID09IHRpdGxlKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZFRvZG8ocHJvamVjdCwgdG9kbyl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBtYW5hZ2VMb2NhbC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgaWYocHJvamVjdHMuZmluZCgocCkgPT4gcC5fbmFtZSA9PSBwcm9qZWN0Ll9uYW1lKS50b2Rvcy5maW5kKCh0KSA9PiB0Ll90aXRsZSA9PSB0b2RvLl90aXRsZSkpIHJldHVyblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgcHJvamVjdHMuZmluZCgocCkgPT4gcC5fbmFtZSA9PSBwcm9qZWN0Ll9uYW1lKS50b2Rvcy5wdXNoKHRvZG8pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHByb2plY3QsIHRpdGxlKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IG1hbmFnZUxvY2FsLmdldFByb2plY3RzKClcclxuICAgICAgICBsZXQgW2ZpbHRlcmVkXT0gcHJvamVjdHMuZmlsdGVyKChmKSA9PiBmLl9uYW1lID09PSBwcm9qZWN0Ll9uYW1lKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gcHJvamVjdHMubGVuZ3RoLTE7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLl9pZCA9PT0gZmlsdGVyZWQuX2lkKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPD0gcHJvamVjdHNbaV0udG9kb3MubGVuZ3RoLTE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvamVjdHNbaV0udG9kb3Nbal0uX3RpdGxlID09IHRpdGxlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0udG9kb3Muc3BsaWNlKGosIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUb0RvQnRuKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXRyaWV2ZVByb2plY3QoaWQpe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gbWFuYWdlTG9jYWwuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIGxldCBbcHJvamVjdF0gPSBwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuX2lkID09IGlkKVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHthZGRQcm9qZWN0LHJlbW92ZVByb2plY3QsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIHJldHJpZXZlUHJvamVjdH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QobmFtZSl7XHJcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUocHJvdG8pXHJcbiAgICBwcm9qZWN0Ll9pZCA9IGNyZWF0ZUlEKClcclxuICAgIHByb2plY3QuX25hbWUgPSBuYW1lXHJcbiAgICBwcm9qZWN0LnRvZG9zID0gW11cclxuICAgIHJldHVybiBwcm9qZWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlEKCl7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcclxufVxyXG5jb25zdCBwcm90byA9IHtcclxuICAgIGdldE5hbWUoKXtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lXHJcbiAgICB9LFxyXG4gICAgc2V0VG9kbyh0b2RvKXtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcclxuICAgIH1cclxufSIsImltcG9ydCB7IG1hbmFnZUxvY2FsIH0gZnJvbSBcIi4vbWFuYWdlTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IG1hbmFnZVByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlcic7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgcmVtb3ZlVG9Eb0J0biB9IGZyb20gXCIuXCI7XHJcblxyXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9ICgoKT0+e1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBtYW5hZ2VMb2NhbC5nZXRQcm9qZWN0cygpXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JylcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHByb2plY3RzLmxlbmd0aC0xOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgICAgICBpY29uLmlkPXByb2plY3RzW2ldLl9uYW1lIFxyXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaWNvbilcclxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3AtbmFtZScpXHJcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLl9uYW1lIFxyXG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0c1tpXS5faWRcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaWNvbilcclxuXHJcbiAgICB9XHJcbiAgIFxyXG59KVxyXG5cclxuY29uc3QgcmVuZGVyVG9EbyA9ICgodG9kb3MpPT57XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IG1hbmFnZUxvY2FsLmdldFByb2plY3RzKClcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpXHJcbiAgICBsZXQgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpXHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcclxuXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgLy9DYXJkXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgICAgICAgICBjb250YWluZXIuaWQgPSB0b2Rvc1tpXS5faWRcclxuXHJcbiAgICAgICAgICAgIC8vdGl0bGVcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2Rvc1tpXS5fdGl0bGVcclxuXHJcbiAgICAgICAgICAgIC8vRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uOiAnK3RvZG9zW2ldLmRlc2NyaXB0aW9uXHJcblxyXG4gICAgICAgICAgICAvL0R1ZSBkYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKVxyXG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnICsgdG9kb3NbaV0uZHVlRGF0ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9Ob3Rlc1xyXG4gICAgICAgICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIG5vdGVzLmNsYXNzTGlzdC5hZGQoJ25vdGVzJylcclxuICAgICAgICAgICAgbm90ZXMudGV4dENvbnRlbnQgPSAnTm90ZXM6ICcgKyB0b2Rvc1tpXS5ub3Rlc1xyXG5cclxuICAgICAgICAgICAgLy9Qcmlvcml0eVxyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcclxuICAgICAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICcgKyB0b2Rvc1tpXS5wcmlvcml0eVxyXG5cclxuICAgICAgICAgICAgLy8gZGVsZXRlIHRvZG9cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IHRvZG9zW2ldLl90aXRsZVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXRvZG8nKVxyXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBUb2RvXCJcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKVxyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcbiAgICAgICAgfVxyXG59KVxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXHJcbiAgICByZXR1cm4gbWFuYWdlUHJvamVjdHMoKS5yZXRyaWV2ZVByb2plY3QoYWN0aXZlLmlkKVxyXG59XHJcblxyXG4vL1ZlcnkgSW1wb3J0YW50IGZ1bmN0aW9uXHJcbmNvbnN0IHVwZGF0ZVZpZXcgPShzdGF0ZSkgPT57XHJcbiAgICBpZihzdGF0ZSA9PSAndG9kbycpe1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKSBcclxuICAgICAgICBjb25zdCBmb3JtICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tY29udGFpbmVyJylcclxuICAgICAgICBsZXQgcHJvamVjdCA9IG1hbmFnZVByb2plY3RzKCkucmV0cmlldmVQcm9qZWN0KGFjdGl2ZS5pZClcclxuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MgXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgcmVuZGVyVG9Ebyh0b2RvcylcclxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICByZW1vdmVUb0RvQnRuKClcclxuICAgIH1cclxuICAgIGlmKHN0YXRlID09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JykgXHJcbiAgICAgICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHJlbmRlclByb2plY3RzKClcclxuICAgICAgICBzdGFydCgpLy8gaWYgbm90IGRvciB0aGlzIHRoZW4gcHJvamVjdCBkb2VzbnQgaW5pdFxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyUHJvamVjdHMsIHJlbmRlclRvRG8sdXBkYXRlVmlld30iLCJleHBvcnQgY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBub3RlcywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgXHJcbiAgICBsZXQgdG9kbyA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xyXG4gICAgdG9kby5faWQgPSBjcmVhdGVJRCgpXHJcbiAgICB0b2RvLl90aXRsZSA9IHRpdGxlXHJcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgIHRvZG8ubm90ZXMgPSBub3Rlc1xyXG4gICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICBcclxuICAgIHJldHVybiB0b2RvXHJcbn0gICBcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlEKCl7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcclxufVxyXG5cclxuY29uc3QgcHJvdG8gPSB7XHJcbiAgICBnZXROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXHJcbiAgICB9LFxyXG4gICAgZ2V0SWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==