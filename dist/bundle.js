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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWFuYWdlTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3JlbmRlckRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuKiB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxcclxcbiAgTmF2YmFyXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxudWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmgyLFxcclxcbmgzLFxcclxcbmEge1xcclxcblxcdGNvbG9yOiAjMzQ0OTVlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEuNDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ28gYSxcXHJcXG4ubWFpbi1uYXYgYSB7XFxyXFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYgYSB7XFxyXFxuXFx0Y29sb3I6ICMzNDQ5NWU7XFxyXFxuXFx0Zm9udC1zaXplOiAuOTllbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IGE6aG92ZXIge1xcclxcblxcdGNvbG9yOiAjNzE4ZGFhO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogLjVlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYTJhMmEyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxcclxcbiAgU2lkZWJhclxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbn1cXHJcXG4uYm9keXtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcbi5wLW5hbWV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjQzBDMEMwO1xcclxcbn1cXHJcXG4uZW50ZXJQcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG5cXHJcXG59XFxyXFxuLnAtZm9ybTo6YWZ0ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxMGRlZyk7XFxyXFxufVxcclxcbi5wLWZvcm0gYnV0dG9ue1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5hY3RpdmUtaWNvbjo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCLvuI/wn5eR77iPXFxcIjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG59XFxyXFxuLmFjdGl2ZS1pY29uOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCLvuI9cXFxcMEZFMEZcXFwiO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxufVxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIFRvZG9zXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLndyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxufVxcclxcbi50b2RvLWZvcm0tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuaW5wdXR7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gICAgbWF4LXdpZHRoOiAxMHZ3O1xcclxcbiAgICBwYWRkaW5nOjhweCA7XFxyXFxufVxcclxcbi53cmFwcGVyIGgxe1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ29sZCBzb2xpZDtcXHJcXG59XFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxcclxcbiAgTWVkaWEgUXVlcmllc1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcclxcblxcdC5oZWFkZXIsXFxyXFxuXFx0Lm1haW4tbmF2IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdH1cXHJcXG5cXHQuaGVhZGVyIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxyXFxuXFx0LmhlYWRlciB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0fVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuc2lkZWJhcntcXHJcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucHJvamVjdHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9ue1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wLWZvcm0ge1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbiAgICAucC1mb3JtIGJ1dHRvbntcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjB2dztcXHJcXG4gICAgfVxcclxcbiAgICAucC1mb3JtIGlucHV0e1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MscUNBQXFDO0NBQ3JDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsaUJBQWlCO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBOztzQ0FFc0M7QUFDdEM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBR0E7OztDQUdDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHFCQUFxQjtJQUNsQixlQUFlO0FBQ25COzs7O0FBSUE7Q0FDQyxTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLFlBQVk7O0FBRWhCO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7OztBQUlBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLHFEQUFxRDtDQUNyRCxrREFBa0Q7Q0FDbEQsNkNBQTZDO0NBQzdDLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBOztzQ0FFc0M7O0FBRXRDO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksT0FBTztJQUNQLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7O0FBRWhCO0FBQ0E7O3NDQUVzQzs7QUFFdEM7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixRQUFROztBQUVaO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTs7c0NBRXNDO0FBQ3RDO0NBQ0M7O0VBRUMsYUFBYTtDQUNkO0NBQ0E7RUFDQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztBQUVEOztBQUVBO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkIsOEJBQThCO0NBQy9COztBQUVEO0FBQ0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjs7SUFFckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuKiB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxcclxcbiAgTmF2YmFyXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxudWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmgyLFxcclxcbmgzLFxcclxcbmEge1xcclxcblxcdGNvbG9yOiAjMzQ0OTVlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEuNDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ28gYSxcXHJcXG4ubWFpbi1uYXYgYSB7XFxyXFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYgYSB7XFxyXFxuXFx0Y29sb3I6ICMzNDQ5NWU7XFxyXFxuXFx0Zm9udC1zaXplOiAuOTllbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IGE6aG92ZXIge1xcclxcblxcdGNvbG9yOiAjNzE4ZGFhO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogLjVlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYTJhMmEyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxcclxcbiAgU2lkZWJhclxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbn1cXHJcXG4uYm9keXtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcbi5wLW5hbWV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjQzBDMEMwO1xcclxcbn1cXHJcXG4uZW50ZXJQcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG5cXHJcXG59XFxyXFxuLnAtZm9ybTo6YWZ0ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxMGRlZyk7XFxyXFxufVxcclxcbi5wLWZvcm0gYnV0dG9ue1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5hY3RpdmUtaWNvbjo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCLvuI/wn5eR77iPXFxcIjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG59XFxyXFxuLmFjdGl2ZS1pY29uOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCLvuI9cXFxcMEZFMEZcXFwiO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxufVxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcXHJcXG4gIFRvZG9zXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLndyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxufVxcclxcbi50b2RvLWZvcm0tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuaW5wdXR7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gICAgbWF4LXdpZHRoOiAxMHZ3O1xcclxcbiAgICBwYWRkaW5nOjhweCA7XFxyXFxufVxcclxcbi53cmFwcGVyIGgxe1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ29sZCBzb2xpZDtcXHJcXG59XFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxcclxcbiAgTWVkaWEgUXVlcmllc1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcclxcblxcdC5oZWFkZXIsXFxyXFxuXFx0Lm1haW4tbmF2IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdH1cXHJcXG5cXHQuaGVhZGVyIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxyXFxuXFx0LmhlYWRlciB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0fVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuc2lkZWJhcntcXHJcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucHJvamVjdHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9ue1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wLWZvcm0ge1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbiAgICAucC1mb3JtIGJ1dHRvbntcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjB2dztcXHJcXG4gICAgfVxcclxcbiAgICAucC1mb3JtIGlucHV0e1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcclxuaW1wb3J0IHsgYWRkUHJvamVjdCwgc2hvd0Zvcm0gfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IG1hbmFnZVByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlcic7XHJcbmltcG9ydCB7IHN1Ym1pdFRvRG8gfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IHN1Ym1pdFByb2plY3QgfSBmcm9tICcuL2V2ZW50cyc7XHJcblxyXG5cclxuY29uc3QgaGVhZGVyID0gKCgpID0+e1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IGEgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgY29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpXHJcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICBhLnRleHRDb250ZW50ID0gXCJEb1RvIExpc3RcIlxyXG5cclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxyXG4gICAgaDEuY2xhc3NMaXN0LmFkZCgnbG9nbycpXHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2JylcclxuXHJcbiAgICBoMS5hcHBlbmRDaGlsZChhKVxyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcclxuICAgIG1haW5OYXYuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWFpbk5hdilcclxuIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXHJcblxyXG59KSgpIFxyXG5cclxuY29uc3Qgc2lkZWJhciA9ICgoKT0+e1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBcclxuICAgIFxyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5JylcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXHJcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpXHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuXHJcblxyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHVsKVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib2R5KVxyXG59KSgpXHJcblxyXG5jb25zdCB0b0RvRm9ybSA9ICgoKSA9PntcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB3cmFwcGVyID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKVxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGNvbnN0IG5vdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHJcblxyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJylcclxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSAnQWRkIHRvZG8nXHJcblxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKVxyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIlxyXG5cclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJylcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCJcclxuXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKVxyXG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSdcclxuICAgIGRhdGVJbnB1dC5uYW1lID0gJ2RhdGUnXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gXCJEYXRlXCJcclxuXHJcbiAgICBub3RlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGUnKVxyXG4gICAgbm90ZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgIG5vdGVJbnB1dC5uYW1lID0gJ25vdGVzJ1xyXG4gICAgbm90ZS50ZXh0Q29udGVudCA9IFwiTm90ZXNcIlxyXG4gICAgXHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIilcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxoND5Qcmlvcml0eTwvaDQ+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZSA9IFwibG93XCI+XHJcblxyXG4gICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlID0gXCJtZWRpdW1cIj5cclxuXHJcbiAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlID0gXCJoaWdoXCI+XHJcbiAgICBgXHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0tY29udGFpbmVyJylcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvcycpXHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlSW5wdXQpXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXQpXHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bilcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuXHJcbiAgICBidG4ub25jbGljayA9IHNob3dGb3JtXHJcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnXHJcbiAgICBzdWJtaXQub25jbGljayA9IHN1Ym1pdFRvRG9cclxuXHJcbn0pKClcclxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCk9PntcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwi4pyU77iPXCJcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncC1mb3JtJylcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLWZvcm0nKSl7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1mb3JtJylcclxuICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID09ICdub25lJz9pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOiBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IFxyXG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncC1uYW1lJylcclxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2VudGVyUHJvamVjdCcpXHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHJcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnXHJcbiAgICBzdWJtaXQub25jbGljayA9IHN1Ym1pdFByb2plY3RcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcclxuICAgIHByb2plY3QuYXBwZW5kKGZvcm0pXHJcblxyXG59KVxyXG5leHBvcnR7aGVhZGVyLHNpZGViYXIsIHRvRG9Gb3JtLCBwcm9qZWN0Rm9ybX0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgdXBkYXRlVmlldyB9IGZyb20gXCIuL3JlbmRlckRvbVwiXHJcbmltcG9ydCB7IG1hbmFnZVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIlxyXG5pbXBvcnQgeyB0b2RvRmFjdG9yeSB9IGZyb20gXCIuL3RvZG9cIlxyXG5pbXBvcnQgeyByZW5kZXJUb0RvIH0gZnJvbSBcIi4vcmVuZGVyRG9tXCJcclxuaW1wb3J0IHsgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9kb21DcmVhdGlvblwiXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXHJcbmltcG9ydCB7IHJlbW92ZVRvRG9CdG4gfSBmcm9tIFwiLlwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zvcm0oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLWNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcclxuICAgIGlmKCFhY3RpdmUpIHJldHVybiBhbGVydCgnUGxlYXNlIFNlbGVjdCBQcm9qZWN0JylcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9PSAnZmxleCcgPyBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc6Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRUb0RvKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcclxuICAgIGxldCBwcm9qZWN0ID0gbWFuYWdlUHJvamVjdHMoKS5yZXRyaWV2ZVByb2plY3QoYWN0aXZlLmlkKVxyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKVxyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGF0ZVwiXScpXHJcblxyXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibm90ZXNcIl0nKVxyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0ZhY3RvcnkodGl0bGUudmFsdWUsZGVzY3JpcHRpb24udmFsdWUsbm90ZXMudmFsdWUsZGF0ZS52YWx1ZSxwcmlvcml0eSlcclxuICAgIGxldCB0b2RvcyA9IHByb2plY3QudG9kb3NcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkVG9kbyhwcm9qZWN0LCB0b2RvKVxyXG4gICAgdXBkYXRlVmlldygndG9kbycpXHJcbiAgICByZW1vdmVUb0RvQnRuKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCl7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JylcclxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHByb2plY3RGb3JtKSBcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0UHJvamVjdChlKXtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpXHJcbiAgICBtYW5hZ2VQcm9qZWN0cygpLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgIHVwZGF0ZVZpZXcoJ3Byb2plY3QnKVxyXG4gICAgcmV0dXJuXHJcbiAgICBcclxufSIsImltcG9ydCB7IGhlYWRlcixzaWRlYmFyLCB0b0RvRm9ybSwgcHJvamVjdEZvcm0gfSBmcm9tIFwiLi9kb21DcmVhdGlvblwiO1xyXG5pbXBvcnQgeyBtYW5hZ2VMb2NhbCB9IGZyb20gXCIuL21hbmFnZUxvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9EbywgdXBkYXRlVmlldyB9IGZyb20gXCIuL3JlbmRlckRvbVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCB7IG1hbmFnZVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcblxyXG5jb25zdCBpbml0ID0gKCgpPT57XHJcbiAgICBsZXQgdG9kbyA9IHRvZG9GYWN0b3J5KCdXb3JrJywgXCJkbyBzaGl0XCIsXCJcIiwgJ1RvZGF5JywgXCJMb3dcIilcclxuICAgIGxldCB0b2RvMSA9IHRvZG9GYWN0b3J5KCdFYXQnLCBcIm1ha2UgZm9vZFwiLFwiXCIsICdUb2RheScsIFwiaGlnaFwiKVxyXG4gICAgbGV0IHRvZG8yID0gdG9kb0ZhY3RvcnkoJ3ZhcGUnLCBcImJ1eSBsaXF1aWRcIixcIlwiLCAnVG9kYXknLCBcImhpZ2hcIilcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnZGVmYXVsdCcpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KCdOZXcnKTtcclxuXHJcbiAgICBjb25zdCBkb29Qcm9qZWN0ID0gUHJvamVjdCgnRG9vbycpO1xyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRUb2RvKGRlZmF1bHRQcm9qZWN0LCB0b2RvMSlcclxuICAgIG1hbmFnZVByb2plY3RzKCkuYWRkVG9kbyhkZWZhdWx0UHJvamVjdCwgdG9kbylcclxuICAgIFxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXHJcbiAgICBtYW5hZ2VQcm9qZWN0cygpLmFkZFByb2plY3QoZG9vUHJvamVjdClcclxuICAgIFxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRUb2RvKG5ld1Byb2plY3QsIHRvZG8xKVxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRUb2RvKG5ld1Byb2plY3QsIHRvZG8pXHJcblxyXG4gICAgbWFuYWdlUHJvamVjdHMoKS5hZGRUb2RvKGRvb1Byb2plY3QsIHRvZG8pXHJcblxyXG4gICAgcmVuZGVyUHJvamVjdHMoKVxyXG4gICAgYWRkUHJvamVjdEZvcm0oKVxyXG59KSgpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpe1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wLW5hbWUnKVxyXG4gICAgYS5mb3JFYWNoKChiKSA9PntcclxuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhcmdldH0gPSBlXHJcbiAgICAgICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1pY29uJykpIHtcclxuICAgICAgICAgICAgICAgIG1hbmFnZVByb2plY3RzKCkucmVtb3ZlUHJvamVjdCh0YXJnZXQuaWQpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KCdwcm9qZWN0JylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKVxyXG4gICAgICAgICAgICByZW1vdmVBY3RpdmVDbGFzcygpXHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB0YXJnZXQuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWljb24nKVxyXG4gICAgICAgICAgICBsZXQgdG9kbyA9IG1hbmFnZVByb2plY3RzKCkucmV0cmlldmVQcm9qZWN0KHRhcmdldC5pZCkudG9kb3NcclxuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIHJlbmRlclRvRG8odG9kbylcclxuICAgICAgICAgICAgcmVtb3ZlVG9Eb0J0bigpLy9Jbml0aWFsaXplcyB0aGUgZnVuY3Rpb24gb3IgaXQgd29udCB3b3JrXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC1uYW1lJylcclxuICAgICAgICBjb25zdCBpY29uICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2knKVxyXG4gICAgICAgIGljb24uZm9yRWFjaCgoaSk9PntcclxuICAgICAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtaWNvbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvamVjdC5mb3JFYWNoKChwKSA9PntcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9Eb0J0bigpe1xyXG4gICAgY29uc3QgcmVtb3ZlVG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtdG9kbycpIFxyXG4gICAgcmVtb3ZlVG9Eb0J0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFyZ2V0fSA9IGVcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG1hbmFnZVByb2plY3RzKCkucmV0cmlldmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LmlkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIG1hbmFnZVByb2plY3RzKCkucmVtb3ZlVG9kbyhwcm9qZWN0LCB0YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcoJ3RvZG8nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5zdGFydCgpIiwiZXhwb3J0IGNsYXNzIG1hbmFnZUxvY2Fse1xyXG4gICAgc3RhdGljIGdldFByb2plY3RzKCl7XHJcbiAgICAgICAgbGV0IHByb2plY3RzO1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09IG51bGwpe1xyXG4gICAgICAgICAgICBwcm9qZWN0cyA9IFtdXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0c1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVtb3ZlVG9Eb0J0biwgc3RhcnQgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBtYW5hZ2VMb2NhbCB9IGZyb20gXCIuL21hbmFnZUxvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hbmFnZVByb2plY3RzID0gKHByb2plY3QpID0+e1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBtYW5hZ2VMb2NhbC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgaWYocHJvamVjdHMuZmlsdGVyKHAgPT4gcC5fbmFtZSA9PT0gcHJvamVjdC5fbmFtZSkubGVuZ3RoID4gMCkgcmV0dXJuIFwiRXhpc3RzXCJcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCh0aXRsZSl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBtYW5hZ2VMb2NhbC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgcHJvamVjdHMuZmlsdGVyKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHAuX25hbWUgPT0gdGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0LCB0b2RvKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IG1hbmFnZUxvY2FsLmdldFByb2plY3RzKClcclxuICAgICAgICBpZihwcm9qZWN0cy5maW5kKChwKSA9PiBwLl9uYW1lID09IHByb2plY3QuX25hbWUpLnRvZG9zLmZpbmQoKHQpID0+IHQuX3RpdGxlID09IHRvZG8uX3RpdGxlKSkgcmV0dXJuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICBwcm9qZWN0cy5maW5kKChwKSA9PiBwLl9uYW1lID09IHByb2plY3QuX25hbWUpLnRvZG9zLnB1c2godG9kbylcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG8ocHJvamVjdCwgdGl0bGUpe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gbWFuYWdlTG9jYWwuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIGxldCBbZmlsdGVyZWRdPSBwcm9qZWN0cy5maWx0ZXIoKGYpID0+IGYuX25hbWUgPT09IHByb2plY3QuX25hbWUpXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBwcm9qZWN0cy5sZW5ndGgtMTsgaSsrKXtcclxuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0uX2lkID09PSBmaWx0ZXJlZC5faWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8PSBwcm9qZWN0c1tpXS50b2Rvcy5sZW5ndGgtMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0c1tpXS50b2Rvc1tqXS5fdGl0bGUgPT0gdGl0bGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS50b2Rvcy5zcGxpY2UoaiwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVRvRG9CdG4oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdChpZCl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBtYW5hZ2VMb2NhbC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgbGV0IFtwcm9qZWN0XSA9IHByb2plY3RzLmZpbHRlcigocCkgPT4gcC5faWQgPT0gaWQpXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2FkZFByb2plY3QscmVtb3ZlUHJvamVjdCwgYWRkVG9kbywgcmVtb3ZlVG9kbywgcmV0cmlldmVQcm9qZWN0fVxyXG59XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gUHJvamVjdChuYW1lKXtcclxuICAgIGxldCBwcm9qZWN0ID0gT2JqZWN0LmNyZWF0ZShwcm90bylcclxuICAgIHByb2plY3QuX2lkID0gY3JlYXRlSUQoKVxyXG4gICAgcHJvamVjdC5fbmFtZSA9IG5hbWVcclxuICAgIHByb2plY3QudG9kb3MgPSBbXVxyXG4gICAgcmV0dXJuIHByb2plY3RcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSUQoKXtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxyXG59XHJcbmNvbnN0IHByb3RvID0ge1xyXG4gICAgZ2V0TmFtZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWVcclxuICAgIH0sXHJcbiAgICBzZXRUb2RvKHRvZG8pe1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbWFuYWdlTG9jYWwgfSBmcm9tIFwiLi9tYW5hZ2VMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgbWFuYWdlUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyJztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyByZW1vdmVUb0RvQnRuIH0gZnJvbSBcIi5cIjtcclxuXHJcbmNvbnN0IHJlbmRlclByb2plY3RzID0gKCgpPT57XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IG1hbmFnZUxvY2FsLmdldFByb2plY3RzKClcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gcHJvamVjdHMubGVuZ3RoLTE7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgICAgIGljb24uaWQ9cHJvamVjdHNbaV0uX25hbWUgXHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChpY29uKVxyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncC1uYW1lJylcclxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0uX25hbWUgXHJcbiAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3RzW2ldLl9pZFxyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHByb2plY3QpXHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChpY29uKVxyXG5cclxuICAgIH1cclxuICAgXHJcbn0pXHJcblxyXG5jb25zdCByZW5kZXJUb0RvID0gKCh0b2Rvcyk9PntcclxuICAgIGNvbnN0IHByb2plY3RzID0gbWFuYWdlTG9jYWwuZ2V0UHJvamVjdHMoKVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JylcclxuICAgIGxldCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJylcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxyXG5cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAvL0NhcmRcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pZCA9IHRvZG9zW2ldLl9pZFxyXG5cclxuICAgICAgICAgICAgLy90aXRsZVxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9zW2ldLl90aXRsZVxyXG5cclxuICAgICAgICAgICAgLy9EZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb246ICcrdG9kb3NbaV0uZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgICAgIC8vRHVlIGRhdGVcclxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpXHJcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICcgKyB0b2Rvc1tpXS5kdWVEYXRlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL05vdGVzXHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgbm90ZXMuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKVxyXG4gICAgICAgICAgICBub3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIHRvZG9zW2ldLm5vdGVzXHJcblxyXG4gICAgICAgICAgICAvL1ByaW9yaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKVxyXG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHRvZG9zW2ldLnByaW9yaXR5XHJcblxyXG4gICAgICAgICAgICAvLyBkZWxldGUgdG9kb1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgYnV0dG9uLmlkID0gdG9kb3NbaV0uX3RpdGxlXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtdG9kbycpXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlIFRvZG9cIlxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZXMpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpXHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuICAgICAgICB9XHJcbn0pXHJcbmZ1bmN0aW9uIGdldFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcclxuICAgIHJldHVybiBtYW5hZ2VQcm9qZWN0cygpLnJldHJpZXZlUHJvamVjdChhY3RpdmUuaWQpXHJcbn1cclxuXHJcbi8vVmVyeSBJbXBvcnRhbnQgZnVuY3Rpb25cclxuY29uc3QgdXBkYXRlVmlldyA9KHN0YXRlKSA9PntcclxuICAgIGlmKHN0YXRlID09ICd0b2RvJyl7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpIFxyXG4gICAgICAgIGNvbnN0IGZvcm0gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS1jb250YWluZXInKVxyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gbWFuYWdlUHJvamVjdHMoKS5yZXRyaWV2ZVByb2plY3QoYWN0aXZlLmlkKVxyXG4gICAgICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcyBcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJylcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcclxuICAgICAgICByZW5kZXJUb0RvKHRvZG9zKVxyXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHJlbW92ZVRvRG9CdG4oKVxyXG4gICAgfVxyXG4gICAgaWYoc3RhdGUgPT0gJ3Byb2plY3QnKXtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKSBcclxuICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyUHJvamVjdHMsIHJlbmRlclRvRG8sdXBkYXRlVmlld30iLCJleHBvcnQgY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBub3RlcywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgXHJcbiAgICBsZXQgdG9kbyA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xyXG4gICAgdG9kby5faWQgPSBjcmVhdGVJRCgpXHJcbiAgICB0b2RvLl90aXRsZSA9IHRpdGxlXHJcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgIHRvZG8ubm90ZXMgPSBub3Rlc1xyXG4gICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICBcclxuICAgIHJldHVybiB0b2RvXHJcbn0gICBcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlEKCl7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcclxufVxyXG5cclxuY29uc3QgcHJvdG8gPSB7XHJcbiAgICBnZXROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXHJcbiAgICB9LFxyXG4gICAgZ2V0SWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==