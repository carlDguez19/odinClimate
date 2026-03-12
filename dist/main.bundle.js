"use strict";
(self["webpackChunkodinweather"] = self["webpackChunkodinweather"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylings.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylings.css ***!
  \****************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --darkAqua: rgb(0, 130, 255);
    --darkFont: #113;
}

.overall {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
}

.searchBoxArea {
    margin-top: 20px;
    display: flex;
    width: auto;
    height: auto;
    justify-self: center;
    align-self: center;
    font-size: larger;
    font-weight: bold;
}

.tempArea {
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-template-rows: repeat(4, 120px);
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
}

.area {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 2px #222;
    white-space: pre;
    font-size: 12pt;
    font-weight: 500;
    color: var(--darkFont);
}

.mainTempCell {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
    background-color: aqua;
}

.sideTwo {
    grid-column: 4 / 5;
    grid-row: 3 / 5;
}

.sideFour {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    background-color: var(--darkAqua);
}

/* MAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREA */
.mtcMainCont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
}

.tempCont,
.locCont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    text-align: center;
}

.locCont {
    white-space: normal;
    font-size: larger;
    border-radius: 10px;
    background-color: var(--darkAqua);
    margin-left: 10px;
}

.currTemp,
.tempIconDiv,
.extraTempInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 33.3%;
    /* background-color: yellow; */
}

.currTemp {
    font-size: xx-large;
    font-weight: bolder;
}

.tempIconDiv {
    /* background-color: orange; */
    object-fit: cover;
}

.extraTempInfo {
    /* background-color: orangered; */
    border: 15px 15px;
    font-weight: bold;
    white-space: pre-line;
}

/* SIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLE */

.sideOne {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
}

.sideOne,
.sideTwo {
    display: flex;
    flex-direction: column;
    border: 7px;
    background-color: var(--darkAqua);
}

.windIcon,
.windInfo,
.uvIcon,
.uvInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 7px;
}

.windIcon,
.uvIcon {
    height: 30%;
    object-fit: contain;
}

.windInfo,
.uvInfo,
.sideThree {
    height: 70%;
    white-space: pre-line;
    text-align: center;
}

.sideThree {
    height: 100%;
    font-weight: bold;
    background-color: var(--darkAqua);
}

.moInfo {
    margin-left: 10px;
}

.moIcon {
    width: 20%;
    height: 80%;
    object-fit: contain;
}

.windIcon,
.uvIcon,
.moIcon {
    background-color: aqua;
    border-radius: 10px;

}

/* ERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAY */

.errorOverlay {
    background-color: red;
    width: 250px;
    height: 250px;
    font-family: 'Courier New', Courier, monospace;
    font-size: xx-large;
    font-weight: bolder;
    color: var(--darkFont);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -50%;
    border-radius: 10px;
    padding: 20px;
}

.errorMsg {
    text-align: center;
}

@keyframes errorSlideOn {
    from {
        top: -50%;
    }

    to {
        top: 30%;
    }
}

@keyframes errorSlideClose {
    from {
        top: 30%;
    }

    to {
        top: -50%;
    }
}`, "",{"version":3,"sources":["webpack://./src/stylings.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA,6KAA6K;AAC7K;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA,6KAA6K;;AAE7K;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,iCAAiC;AACrC;;AAEA;;;;IAII,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;IAGI,WAAW;IACX,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;IAGI,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA,6HAA6H;;AAE7H;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,8CAA8C;IAC9C,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,SAAS;IACb;;IAEA;QACI,QAAQ;IACZ;AACJ;;AAEA;IACI;QACI,QAAQ;IACZ;;IAEA;QACI,SAAS;IACb;AACJ","sourcesContent":[":root {\n    --darkAqua: rgb(0, 130, 255);\n    --darkFont: #113;\n}\n\n.overall {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.searchBoxArea {\n    margin-top: 20px;\n    display: flex;\n    width: auto;\n    height: auto;\n    justify-self: center;\n    align-self: center;\n    font-size: larger;\n    font-weight: bold;\n}\n\n.tempArea {\n    display: grid;\n    grid-template-columns: repeat(4, 120px);\n    grid-template-rows: repeat(4, 120px);\n    column-gap: 20px;\n    row-gap: 20px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    border-radius: 5px;\n}\n\n.area {\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 4px 4px 2px #222;\n    white-space: pre;\n    font-size: 12pt;\n    font-weight: 500;\n    color: var(--darkFont);\n}\n\n.mainTempCell {\n    grid-column: 1 / 4;\n    grid-row: 1 / 4;\n    background-color: aqua;\n}\n\n.sideTwo {\n    grid-column: 4 / 5;\n    grid-row: 3 / 5;\n}\n\n.sideFour {\n    grid-column: 2 / 4;\n    grid-row: 4 / 5;\n    background-color: var(--darkAqua);\n}\n\n/* MAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREA */\n.mtcMainCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 90%;\n}\n\n.tempCont,\n.locCont {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    height: 100%;\n    text-align: center;\n}\n\n.locCont {\n    white-space: normal;\n    font-size: larger;\n    border-radius: 10px;\n    background-color: var(--darkAqua);\n    margin-left: 10px;\n}\n\n.currTemp,\n.tempIconDiv,\n.extraTempInfo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 33.3%;\n    /* background-color: yellow; */\n}\n\n.currTemp {\n    font-size: xx-large;\n    font-weight: bolder;\n}\n\n.tempIconDiv {\n    /* background-color: orange; */\n    object-fit: cover;\n}\n\n.extraTempInfo {\n    /* background-color: orangered; */\n    border: 15px 15px;\n    font-weight: bold;\n    white-space: pre-line;\n}\n\n/* SIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLE */\n\n.sideOne {\n    grid-column: 4 / 5;\n    grid-row: 1 / 3;\n}\n\n.sideOne,\n.sideTwo {\n    display: flex;\n    flex-direction: column;\n    border: 7px;\n    background-color: var(--darkAqua);\n}\n\n.windIcon,\n.windInfo,\n.uvIcon,\n.uvInfo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 80%;\n    margin-top: 7px;\n}\n\n.windIcon,\n.uvIcon {\n    height: 30%;\n    object-fit: contain;\n}\n\n.windInfo,\n.uvInfo,\n.sideThree {\n    height: 70%;\n    white-space: pre-line;\n    text-align: center;\n}\n\n.sideThree {\n    height: 100%;\n    font-weight: bold;\n    background-color: var(--darkAqua);\n}\n\n.moInfo {\n    margin-left: 10px;\n}\n\n.moIcon {\n    width: 20%;\n    height: 80%;\n    object-fit: contain;\n}\n\n.windIcon,\n.uvIcon,\n.moIcon {\n    background-color: aqua;\n    border-radius: 10px;\n\n}\n\n/* ERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAYERROROVERLAY */\n\n.errorOverlay {\n    background-color: red;\n    width: 250px;\n    height: 250px;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: xx-large;\n    font-weight: bolder;\n    color: var(--darkFont);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: -50%;\n    border-radius: 10px;\n    padding: 20px;\n}\n\n.errorMsg {\n    text-align: center;\n}\n\n@keyframes errorSlideOn {\n    from {\n        top: -50%;\n    }\n\n    to {\n        top: 30%;\n    }\n}\n\n@keyframes errorSlideClose {\n    from {\n        top: 30%;\n    }\n\n    to {\n        top: -50%;\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylings.css":
/*!**************************!*\
  !*** ./src/stylings.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylings_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylings.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylings.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylings_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylings_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_stylings_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_stylings_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchEventListener */ "./src/searchEventListener.js");
/* harmony import */ var _tempDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempDOM */ "./src/tempDOM.js");
/* harmony import */ var _stylings_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylings.css */ "./src/stylings.css");


// eslint-disable-next-line no-unused-vars


(0,_tempDOM__WEBPACK_IMPORTED_MODULE_1__.preFillIcons)();
(0,_searchEventListener__WEBPACK_IMPORTED_MODULE_0__.buttonEventListener)();

/***/ }),

/***/ "./src/searchEventListener.js":
/*!************************************!*\
  !*** ./src/searchEventListener.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonEventListener: () => (/* binding */ buttonEventListener),
/* harmony export */   searchCity: () => (/* binding */ searchCity)
/* harmony export */ });
/* harmony import */ var _tempDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempDOM */ "./src/tempDOM.js");

let searchCity;

function buttonEventListener() {
    const searchInput = document.getElementById("searchCityButton");
    searchInput.addEventListener('click', function () {
        searchCity = document.getElementById("searchBox");
        if (searchCity.value == "") {
            console.log("");
        } else {
            (0,_tempDOM__WEBPACK_IMPORTED_MODULE_0__.setMainTemp)();
        }
    })
}

/***/ }),

/***/ "./src/tempDOM.js":
/*!************************!*\
  !*** ./src/tempDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastUpdateSideThree: () => (/* binding */ lastUpdateSideThree),
/* harmony export */   moistureSideFour: () => (/* binding */ moistureSideFour),
/* harmony export */   preFillIcons: () => (/* binding */ preFillIcons),
/* harmony export */   setMainTemp: () => (/* binding */ setMainTemp),
/* harmony export */   uvSideTwo: () => (/* binding */ uvSideTwo),
/* harmony export */   windSideOne: () => (/* binding */ windSideOne)
/* harmony export */ });
/* harmony import */ var _src_icons_wind_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/icons/wind.png */ "./src/icons/wind.png");
/* harmony import */ var _src_icons_windRose_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/icons/windRose.png */ "./src/icons/windRose.png");
/* harmony import */ var _src_icons_moisture_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/icons/moisture.png */ "./src/icons/moisture.png");
/* harmony import */ var _src_icons_climate_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/icons/climate.png */ "./src/icons/climate.png");
/* harmony import */ var _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weatherApiFetch */ "./src/weatherApiFetch.js");
/* harmony import */ var _searchEventListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchEventListener */ "./src/searchEventListener.js");










function preFillIcons() {
    let tIcon = document.querySelector(".tempIconDiv");
    let wIcon = document.querySelector(".windIcon");
    let uvIcon = document.querySelector(".uvIcon");
    let moIcon = document.querySelector(".moIcon");

    tIcon.src = _src_icons_climate_png__WEBPACK_IMPORTED_MODULE_3__;
    wIcon.src = _src_icons_wind_png__WEBPACK_IMPORTED_MODULE_0__;
    uvIcon.src = _src_icons_windRose_png__WEBPACK_IMPORTED_MODULE_1__;
    moIcon.src = _src_icons_moisture_png__WEBPACK_IMPORTED_MODULE_2__;
}

async function setMainTemp() {
    await (0,_weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.getWeatherData)(_searchEventListener__WEBPACK_IMPORTED_MODULE_5__.searchCity.value);

    if (_weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.errorFound == 1) {
        (0,_weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.displayErrorOverlay)();
    } else {
        let cTemp = document.querySelector(".currTemp");
        let tIcon = document.querySelector(".tempIconDiv");
        let extTemp = document.querySelector(".extraTempInfo");
        let lCont = document.querySelector(".loc");

        tIcon.src = "https:" + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.condition.icon;
        cTemp.textContent = _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.temp_f + "°F";
        extTemp.textContent = _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.condition.text + "\r\n" +
            "Feels Like: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.feelslike_f + "°F\r\n" +
            "Heat Index: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.heatindex_f + "°F\r\n";
        lCont.textContent = _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.location.name + ",\r\n" +
            _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.location.region + ",\r\n" +
            _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.location.country;
        windSideOne();
        uvSideTwo();
        lastUpdateSideThree();
        moistureSideFour();
    }
}

function windSideOne() {
    let wIcon = document.querySelector(".windIcon");
    let windInfo = document.querySelector(".windInfo");

    wIcon.src = _src_icons_wind_png__WEBPACK_IMPORTED_MODULE_0__;
    windInfo.textContent = "WIND\r\n\r\n" + "Speed: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.wind_mph + "mph\r\n" +
        "Gust: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.gust_mph + "mph\r\n" +
        "Direction: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.wind_dir;
}

function uvSideTwo() {
    let uvIcon = document.querySelector(".uvIcon");
    let uvInfo = document.querySelector(".uvInfo");

    uvIcon.src = _src_icons_windRose_png__WEBPACK_IMPORTED_MODULE_1__;
    uvInfo.textContent = "INFO\r\n\r\n" + "UV: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.uv +
        "\r\nVisibility: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.vis_miles +
        "mi\r\nWindchill: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.windchill_f + "°F";
}

function lastUpdateSideThree() {
    let luSpan = document.querySelector(".sideThree");

    luSpan.textContent = "Last Updated: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.last_updated;
}

function moistureSideFour() {
    let moIcon = document.querySelector(".moIcon");
    let moInfo = document.querySelector(".moInfo");

    moIcon.src = _src_icons_moisture_png__WEBPACK_IMPORTED_MODULE_2__;
    moInfo.textContent = "HUMIDITY\r\n\r\nHumidity: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.humidity +
        "%\r\nDewpoint: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.dewpoint_f +
        "°F\r\nPressure: " + _weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData.current.pressure_in + "in";
}



/***/ }),

/***/ "./src/weatherApiFetch.js":
/*!********************************!*\
  !*** ./src/weatherApiFetch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayErrorOverlay: () => (/* binding */ displayErrorOverlay),
/* harmony export */   errorFound: () => (/* binding */ errorFound),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData),
/* harmony export */   weatherData: () => (/* binding */ weatherData)
/* harmony export */ });
let weatherData;
let errorFound;

async function getWeatherData(place) {
    await fetch(`https://api.weatherapi.com/v1/current.json?key=44d73ca092904ea18a8191905241405&q=${place}`, { mode: 'cors' })
        .then(async function (response) {
            if (response.ok) {
                weatherData = await response.json();
                return weatherData;
            } else {
                throw new Error(response.statusText);
            }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(function (error) {
            let eOverlay = document.querySelector(".errorOverlay");
            eOverlay.style.animation = "errorSlideOn 1.5s forwards";
            setTimeout(function () {//wait 2.5 seconds and slide back up
                eOverlay.style.animation = "errorSlideClose 1.5s forwards"
            }, 2500);
            errorFound = 1;
        });
}

function displayErrorOverlay() {
    let eOverlay = document.querySelector(".errorOverlay");
    eOverlay.style.animation = "errorSlideOn 1.5s forwards";
    setTimeout(function () {//wait 2.5 seconds and slide back up
        eOverlay.style.animation = "errorSlideClose 1.5s forwards"
    }, 2500);
}

/***/ }),

/***/ "./src/icons/climate.png":
/*!*******************************!*\
  !*** ./src/icons/climate.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d02d15dbe0d9d8a8444.png";

/***/ }),

/***/ "./src/icons/moisture.png":
/*!********************************!*\
  !*** ./src/icons/moisture.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7520775c9b71d0f50bc9.png";

/***/ }),

/***/ "./src/icons/wind.png":
/*!****************************!*\
  !*** ./src/icons/wind.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7150381f431caed0cf91.png";

/***/ }),

/***/ "./src/icons/windRose.png":
/*!********************************!*\
  !*** ./src/icons/windRose.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85f6de7e418f55b25587.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxP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QUFXO0FBQ3hDLDhCQUE4Qix5REFBVztBQUN6Qzs7QUFFTztBQUNQOztBQUVBLDRDQUE0Qyx5REFBVztBQUN2RDs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsaUJBQWlCLG9EQUFRO0FBQ3pCLHdEQUF3RCx5REFBVztBQUNuRSw0QkFBNEIseURBQVc7QUFDdkMsNkJBQTZCLHlEQUFXO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPO0FBQ0E7O0FBRUE7QUFDUCxvR0FBb0csTUFBTSxLQUFLLGNBQWM7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9zdHlsaW5ncy5jc3MiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9zcmMvc3R5bGluZ3MuY3NzP2NiMmIiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9zZWFyY2hFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vc3JjL3RlbXBET00uanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9zcmMvd2VhdGhlckFwaUZldGNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1kYXJrQXF1YTogcmdiKDAsIDEzMCwgMjU1KTtcbiAgICAtLWRhcmtGb250OiAjMTEzO1xufVxuXG4ub3ZlcmFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLnNlYXJjaEJveEFyZWEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGVtcEFyZWEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMTIwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDEyMHB4KTtcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAycHggIzIyMjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrRm9udCk7XG59XG5cbi5tYWluVGVtcENlbGwge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBncmlkLXJvdzogMSAvIDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLnNpZGVUd28ge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBncmlkLXJvdzogMyAvIDU7XG59XG5cbi5zaWRlRm91ciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgIGdyaWQtcm93OiA0IC8gNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XG59XG5cbi8qIE1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQSAqL1xuLm10Y01haW5Db250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbn1cblxuLnRlbXBDb250LFxuLmxvY0NvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvY0NvbnQge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jdXJyVGVtcCxcbi50ZW1wSWNvbkRpdixcbi5leHRyYVRlbXBJbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMy4zJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXG59XG5cbi5jdXJyVGVtcCB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4udGVtcEljb25EaXYge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmV4dHJhVGVtcEluZm8ge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgKi9cbiAgICBib3JkZXI6IDE1cHggMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi8qIFNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRSAqL1xuXG4uc2lkZU9uZSB7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xuICAgIGdyaWQtcm93OiAxIC8gMztcbn1cblxuLnNpZGVPbmUsXG4uc2lkZVR3byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBcXVhKTtcbn1cblxuLndpbmRJY29uLFxuLndpbmRJbmZvLFxuLnV2SWNvbixcbi51dkluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLndpbmRJY29uLFxuLnV2SWNvbiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLndpbmRJbmZvLFxuLnV2SW5mbyxcbi5zaWRlVGhyZWUge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWRlVGhyZWUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XG59XG5cbi5tb0luZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubW9JY29uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi53aW5kSWNvbixcbi51dkljb24sXG4ubW9JY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1cblxuLyogRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZICovXG5cbi5lcnJvck92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogdmFyKC0tZGFya0ZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmVycm9yTXNnIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZXJyb3JTbGlkZU9uIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdG9wOiAtNTAlO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAzMCU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGVycm9yU2xpZGVDbG9zZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogMzAlO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAtNTAlO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5ncy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUEsNktBQTZLO0FBQzdLO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBLDZLQUE2Szs7QUFFN0s7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBLDZIQUE2SDs7QUFFN0g7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kYXJrQXF1YTogcmdiKDAsIDEzMCwgMjU1KTtcXG4gICAgLS1kYXJrRm9udDogIzExMztcXG59XFxuXFxuLm92ZXJhbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNlYXJjaEJveEFyZWEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50ZW1wQXJlYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDEyMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMTIwcHgpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hcmVhIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAycHggIzIyMjtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya0ZvbnQpO1xcbn1cXG5cXG4ubWFpblRlbXBDZWxsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5zaWRlVHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBncmlkLXJvdzogMyAvIDU7XFxufVxcblxcbi5zaWRlRm91ciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XFxufVxcblxcbi8qIE1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQSAqL1xcbi5tdGNNYWluQ29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLnRlbXBDb250LFxcbi5sb2NDb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jQ29udCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY3VyclRlbXAsXFxuLnRlbXBJY29uRGl2LFxcbi5leHRyYVRlbXBJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMzLjMlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxufVxcblxcbi5jdXJyVGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi50ZW1wSWNvbkRpdiB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5leHRyYVRlbXBJbmZvIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkOyAqL1xcbiAgICBib3JkZXI6IDE1cHggMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLyogU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFICovXFxuXFxuLnNpZGVPbmUge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLnNpZGVPbmUsXFxuLnNpZGVUd28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FxdWEpO1xcbn1cXG5cXG4ud2luZEljb24sXFxuLndpbmRJbmZvLFxcbi51dkljb24sXFxuLnV2SW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcblxcbi53aW5kSWNvbixcXG4udXZJY29uIHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi53aW5kSW5mbyxcXG4udXZJbmZvLFxcbi5zaWRlVGhyZWUge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlVGhyZWUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XFxufVxcblxcbi5tb0luZm8ge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm1vSWNvbiB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ud2luZEljb24sXFxuLnV2SWNvbixcXG4ubW9JY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG59XFxuXFxuLyogRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZRVJST1JPVkVSTEFZICovXFxuXFxuLmVycm9yT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya0ZvbnQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5lcnJvck1zZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBlcnJvclNsaWRlT24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRvcDogLTUwJTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICB0b3A6IDMwJTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGVycm9yU2xpZGVDbG9zZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdG9wOiAzMCU7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wOiAtNTAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxpbmdzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxpbmdzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYnV0dG9uRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL3NlYXJjaEV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCB7IHByZUZpbGxJY29ucyB9IGZyb20gXCIuL3RlbXBET01cIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsaW5ncy5jc3NcIjtcblxucHJlRmlsbEljb25zKCk7XG5idXR0b25FdmVudExpc3RlbmVyKCk7IiwiaW1wb3J0IHsgc2V0TWFpblRlbXAgfSBmcm9tIFwiLi90ZW1wRE9NXCI7XG5leHBvcnQgbGV0IHNlYXJjaENpdHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25FdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hDaXR5QnV0dG9uXCIpO1xuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWFyY2hDaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCb3hcIik7XG4gICAgICAgIGlmIChzZWFyY2hDaXR5LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TWFpblRlbXAoKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwiaW1wb3J0IFdpbmQgZnJvbSAnLi4vc3JjL2ljb25zL3dpbmQucG5nJztcbmltcG9ydCBXaW5kUm9zZSBmcm9tICcuLi9zcmMvaWNvbnMvd2luZFJvc2UucG5nJztcbmltcG9ydCBNb2lzdHVyZSBmcm9tICcuLi9zcmMvaWNvbnMvbW9pc3R1cmUucG5nJztcbmltcG9ydCBDbGltYXRlIGZyb20gJy4uL3NyYy9pY29ucy9jbGltYXRlLnBuZyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJBcGlGZXRjaFwiO1xuaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyQXBpRmV0Y2hcIjtcbmltcG9ydCB7IHNlYXJjaENpdHkgfSBmcm9tIFwiLi9zZWFyY2hFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBlcnJvckZvdW5kIH0gZnJvbSAnLi93ZWF0aGVyQXBpRmV0Y2gnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yT3ZlcmxheSB9IGZyb20gJy4vd2VhdGhlckFwaUZldGNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZUZpbGxJY29ucygpIHtcbiAgICBsZXQgdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBJY29uRGl2XCIpO1xuICAgIGxldCB3SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZEljb25cIik7XG4gICAgbGV0IHV2SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXZJY29uXCIpO1xuICAgIGxldCBtb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vSWNvblwiKTtcblxuICAgIHRJY29uLnNyYyA9IENsaW1hdGU7XG4gICAgd0ljb24uc3JjID0gV2luZDtcbiAgICB1dkljb24uc3JjID0gV2luZFJvc2U7XG4gICAgbW9JY29uLnNyYyA9IE1vaXN0dXJlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0TWFpblRlbXAoKSB7XG4gICAgYXdhaXQgZ2V0V2VhdGhlckRhdGEoc2VhcmNoQ2l0eS52YWx1ZSk7XG5cbiAgICBpZiAoZXJyb3JGb3VuZCA9PSAxKSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJUZW1wXCIpO1xuICAgICAgICBsZXQgdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBJY29uRGl2XCIpO1xuICAgICAgICBsZXQgZXh0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFUZW1wSW5mb1wiKTtcbiAgICAgICAgbGV0IGxDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NcIik7XG5cbiAgICAgICAgdEljb24uc3JjID0gXCJodHRwczpcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgICAgIGNUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YgKyBcIsKwRlwiO1xuICAgICAgICBleHRUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCArIFwiXFxyXFxuXCIgK1xuICAgICAgICAgICAgXCJGZWVscyBMaWtlOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIsKwRlxcclxcblwiICtcbiAgICAgICAgICAgIFwiSGVhdCBJbmRleDogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmhlYXRpbmRleF9mICsgXCLCsEZcXHJcXG5cIjtcbiAgICAgICAgbENvbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lICsgXCIsXFxyXFxuXCIgK1xuICAgICAgICAgICAgd2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9uICsgXCIsXFxyXFxuXCIgK1xuICAgICAgICAgICAgd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgICAgICAgd2luZFNpZGVPbmUoKTtcbiAgICAgICAgdXZTaWRlVHdvKCk7XG4gICAgICAgIGxhc3RVcGRhdGVTaWRlVGhyZWUoKTtcbiAgICAgICAgbW9pc3R1cmVTaWRlRm91cigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpbmRTaWRlT25lKCkge1xuICAgIGxldCB3SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZEljb25cIik7XG4gICAgbGV0IHdpbmRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kSW5mb1wiKTtcblxuICAgIHdJY29uLnNyYyA9IFdpbmQ7XG4gICAgd2luZEluZm8udGV4dENvbnRlbnQgPSBcIldJTkRcXHJcXG5cXHJcXG5cIiArIFwiU3BlZWQ6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waCArIFwibXBoXFxyXFxuXCIgK1xuICAgICAgICBcIkd1c3Q6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC5ndXN0X21waCArIFwibXBoXFxyXFxuXCIgK1xuICAgICAgICBcIkRpcmVjdGlvbjogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXZTaWRlVHdvKCkge1xuICAgIGxldCB1dkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnV2SWNvblwiKTtcbiAgICBsZXQgdXZJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51dkluZm9cIik7XG5cbiAgICB1dkljb24uc3JjID0gV2luZFJvc2U7XG4gICAgdXZJbmZvLnRleHRDb250ZW50ID0gXCJJTkZPXFxyXFxuXFxyXFxuXCIgKyBcIlVWOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQudXYgK1xuICAgICAgICBcIlxcclxcblZpc2liaWxpdHk6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC52aXNfbWlsZXMgK1xuICAgICAgICBcIm1pXFxyXFxuV2luZGNoaWxsOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZGNoaWxsX2YgKyBcIsKwRlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdFVwZGF0ZVNpZGVUaHJlZSgpIHtcbiAgICBsZXQgbHVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlVGhyZWVcIik7XG5cbiAgICBsdVNwYW4udGV4dENvbnRlbnQgPSBcIkxhc3QgVXBkYXRlZDogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vaXN0dXJlU2lkZUZvdXIoKSB7XG4gICAgbGV0IG1vSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9JY29uXCIpO1xuICAgIGxldCBtb0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vSW5mb1wiKTtcblxuICAgIG1vSWNvbi5zcmMgPSBNb2lzdHVyZTtcbiAgICBtb0luZm8udGV4dENvbnRlbnQgPSBcIkhVTUlESVRZXFxyXFxuXFxyXFxuSHVtaWRpdHk6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eSArXG4gICAgICAgIFwiJVxcclxcbkRld3BvaW50OiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQuZGV3cG9pbnRfZiArXG4gICAgICAgIFwiwrBGXFxyXFxuUHJlc3N1cmU6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9pbiArIFwiaW5cIjtcbn1cblxuIiwiZXhwb3J0IGxldCB3ZWF0aGVyRGF0YTtcbmV4cG9ydCBsZXQgZXJyb3JGb3VuZDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHBsYWNlKSB7XG4gICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NDRkNzNjYTA5MjkwNGVhMThhODE5MTkwNTI0MTQwNSZxPSR7cGxhY2V9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JPdmVybGF5XCIpO1xuICAgICAgICAgICAgZU92ZXJsYXkuc3R5bGUuYW5pbWF0aW9uID0gXCJlcnJvclNsaWRlT24gMS41cyBmb3J3YXJkc1wiO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7Ly93YWl0IDIuNSBzZWNvbmRzIGFuZCBzbGlkZSBiYWNrIHVwXG4gICAgICAgICAgICAgICAgZU92ZXJsYXkuc3R5bGUuYW5pbWF0aW9uID0gXCJlcnJvclNsaWRlQ2xvc2UgMS41cyBmb3J3YXJkc1wiXG4gICAgICAgICAgICB9LCAyNTAwKTtcbiAgICAgICAgICAgIGVycm9yRm91bmQgPSAxO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvck92ZXJsYXkoKSB7XG4gICAgbGV0IGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvck92ZXJsYXlcIik7XG4gICAgZU92ZXJsYXkuc3R5bGUuYW5pbWF0aW9uID0gXCJlcnJvclNsaWRlT24gMS41cyBmb3J3YXJkc1wiO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgey8vd2FpdCAyLjUgc2Vjb25kcyBhbmQgc2xpZGUgYmFjayB1cFxuICAgICAgICBlT3ZlcmxheS5zdHlsZS5hbmltYXRpb24gPSBcImVycm9yU2xpZGVDbG9zZSAxLjVzIGZvcndhcmRzXCJcbiAgICB9LCAyNTAwKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=