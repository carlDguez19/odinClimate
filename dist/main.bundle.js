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

}`, "",{"version":3,"sources":["webpack://./src/stylings.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA,6KAA6K;AAC7K;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA,6KAA6K;;AAE7K;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,iCAAiC;AACrC;;AAEA;;;;IAII,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;IAGI,WAAW;IACX,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;IAGI,sBAAsB;IACtB,mBAAmB;;AAEvB","sourcesContent":[":root {\n    --darkAqua: rgb(0, 130, 255);\n    --darkFont: #113;\n}\n\n.overall {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.searchBoxArea {\n    margin-top: 20px;\n    display: flex;\n    width: auto;\n    height: auto;\n    justify-self: center;\n    align-self: center;\n    font-size: larger;\n    font-weight: bold;\n}\n\n.tempArea {\n    display: grid;\n    grid-template-columns: repeat(4, 120px);\n    grid-template-rows: repeat(4, 120px);\n    column-gap: 20px;\n    row-gap: 20px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    border-radius: 5px;\n}\n\n.area {\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 4px 4px 2px #222;\n    white-space: pre;\n    font-size: 12pt;\n    font-weight: 500;\n    color: var(--darkFont);\n}\n\n.mainTempCell {\n    grid-column: 1 / 4;\n    grid-row: 1 / 4;\n    background-color: aqua;\n}\n\n.sideTwo {\n    grid-column: 4 / 5;\n    grid-row: 3 / 5;\n}\n\n.sideFour {\n    grid-column: 2 / 4;\n    grid-row: 4 / 5;\n    background-color: var(--darkAqua);\n}\n\n/* MAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREAMAINTEMPAREA */\n.mtcMainCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 90%;\n}\n\n.tempCont,\n.locCont {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    height: 100%;\n    text-align: center;\n}\n\n.locCont {\n    white-space: normal;\n    font-size: larger;\n    border-radius: 10px;\n    background-color: var(--darkAqua);\n    margin-left: 10px;\n}\n\n.currTemp,\n.tempIconDiv,\n.extraTempInfo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 33.3%;\n    /* background-color: yellow; */\n}\n\n.currTemp {\n    font-size: xx-large;\n    font-weight: bolder;\n}\n\n.tempIconDiv {\n    /* background-color: orange; */\n    object-fit: cover;\n}\n\n.extraTempInfo {\n    /* background-color: orangered; */\n    border: 15px 15px;\n    font-weight: bold;\n    white-space: pre-line;\n}\n\n/* SIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLESIDEONESTYLE */\n\n.sideOne {\n    grid-column: 4 / 5;\n    grid-row: 1 / 3;\n}\n\n.sideOne,\n.sideTwo {\n    display: flex;\n    flex-direction: column;\n    border: 7px;\n    background-color: var(--darkAqua);\n}\n\n.windIcon,\n.windInfo,\n.uvIcon,\n.uvInfo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 80%;\n    margin-top: 7px;\n}\n\n.windIcon,\n.uvIcon {\n    height: 30%;\n    object-fit: contain;\n}\n\n.windInfo,\n.uvInfo,\n.sideThree {\n    height: 70%;\n    white-space: pre-line;\n    text-align: center;\n}\n\n.sideThree {\n    height: 100%;\n    font-weight: bold;\n    background-color: var(--darkAqua);\n}\n\n.moInfo {\n    margin-left: 10px;\n}\n\n.moIcon {\n    width: 20%;\n    height: 80%;\n    object-fit: contain;\n}\n\n.windIcon,\n.uvIcon,\n.moIcon {\n    background-color: aqua;\n    border-radius: 10px;\n\n}"],"sourceRoot":""}]);
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
//import { getWeatherData } from "./weatherApiFetch";


// eslint-disable-next-line no-unused-vars



//const epWeather = getWeatherData('el paso');
//console.log(epWeather);
(0,_tempDOM__WEBPACK_IMPORTED_MODULE_1__.preFillIcons)();
(0,_searchEventListener__WEBPACK_IMPORTED_MODULE_0__.buttonEventListener)();
// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.innerHTML = "hello world poochy!";
//   return element;


// }

// document.body.appendChild(component());

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
//import { getWeatherData } from "./weatherApiFetch";
//import { fillMainTempGrid } from "./tempGridDOM";

let searchCity;

function buttonEventListener() {
    const searchInput = document.getElementById("searchCityButton");
    searchInput.addEventListener('click', function () {
        searchCity = document.getElementById("searchBox");
        if (searchCity.value == "") {
            console.log("1");
        } else {
            console.log(searchCity.value);
            (0,_tempDOM__WEBPACK_IMPORTED_MODULE_0__.setMainTemp)();
            // const currWeather = getWeatherData(searchCity.value);
            // console.log(currWeather);
            //call method to fill temperature grid passing currWeather as parameter
            //fillMainTempGrid(currWeather, "f");
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

    let cTemp = document.querySelector(".currTemp");
    let tIcon = document.querySelector(".tempIconDiv");
    let extTemp = document.querySelector(".extraTempInfo");
    let lCont = document.querySelector(".loc");

    console.log(_weatherApiFetch__WEBPACK_IMPORTED_MODULE_4__.weatherData);
    //let mainTempDiv = document.querySelector(".mainTempCell");
    //mainTempDiv.textContent = weatherData.current.temp_f + " " + weatherData.location.name;

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
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData),
/* harmony export */   weatherData: () => (/* binding */ weatherData)
/* harmony export */ });
//import { fillMainTempGrid } from "./tempGridDOM";
let weatherData;

async function getWeatherData(place) {
    await fetch(`https://api.weatherapi.com/v1/current.json?key=44d73ca092904ea18a8191905241405&q=${place}`, { mode: 'cors' })
        .then(async function (response) {
            weatherData = await response.json();
            return weatherData;
        })
        .catch(function (error) {
            console.log("no such place O_o " + error);
        });
}
// //     try {
// //         let resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=44d73ca092904ea18a8191905241405&q=${place}`, { mode: 'cors' });
// //         weatherData = await resp.json();
// //         return weatherData;
// //     } catch (error) {
// //         console.log("no such place o_O " + error.message);
// //     }
// // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1AsVUFBVSxnRUFBYyxDQUFDLDREQUFVOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseURBQVc7QUFDM0I7QUFDQTs7QUFFQSwyQkFBMkIseURBQVc7QUFDdEMsd0JBQXdCLHlEQUFXO0FBQ25DLDBCQUEwQix5REFBVztBQUNyQyx5QkFBeUIseURBQVc7QUFDcEMseUJBQXlCLHlEQUFXO0FBQ3BDLHdCQUF3Qix5REFBVztBQUNuQyxRQUFRLHlEQUFXO0FBQ25CLFFBQVEseURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsZ0JBQWdCLGdEQUFJO0FBQ3BCLHdEQUF3RCx5REFBVztBQUNuRSxtQkFBbUIseURBQVc7QUFDOUIsd0JBQXdCLHlEQUFXO0FBQ25DOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSxpQkFBaUIsb0RBQVE7QUFDekIsbURBQW1ELHlEQUFXO0FBQzlELDZCQUE2Qix5REFBVztBQUN4Qyw4QkFBOEIseURBQVc7QUFDekM7O0FBRU87QUFDUDs7QUFFQSw0Q0FBNEMseURBQVc7QUFDdkQ7O0FBRU87QUFDUDtBQUNBOztBQUVBLGlCQUFpQixvREFBUTtBQUN6Qix3REFBd0QseURBQVc7QUFDbkUsNEJBQTRCLHlEQUFXO0FBQ3ZDLDZCQUE2Qix5REFBVztBQUN4Qzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBLFdBQVcsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ1Asb0dBQW9HLE1BQU0sS0FBSyxjQUFjO0FBQzdIO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5SEFBeUgsTUFBTSxLQUFLLGNBQWM7QUFDbEo7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9zdHlsaW5ncy5jc3MiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9zcmMvc3R5bGluZ3MuY3NzP2NiMmIiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9zZWFyY2hFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL29kaW53ZWF0aGVyLy4vc3JjL3RlbXBET00uanMiLCJ3ZWJwYWNrOi8vb2RpbndlYXRoZXIvLi9zcmMvd2VhdGhlckFwaUZldGNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1kYXJrQXF1YTogcmdiKDAsIDEzMCwgMjU1KTtcbiAgICAtLWRhcmtGb250OiAjMTEzO1xufVxuXG4ub3ZlcmFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLnNlYXJjaEJveEFyZWEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGVtcEFyZWEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMTIwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDEyMHB4KTtcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAycHggIzIyMjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrRm9udCk7XG59XG5cbi5tYWluVGVtcENlbGwge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBncmlkLXJvdzogMSAvIDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLnNpZGVUd28ge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBncmlkLXJvdzogMyAvIDU7XG59XG5cbi5zaWRlRm91ciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgIGdyaWQtcm93OiA0IC8gNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XG59XG5cbi8qIE1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQSAqL1xuLm10Y01haW5Db250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbn1cblxuLnRlbXBDb250LFxuLmxvY0NvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvY0NvbnQge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jdXJyVGVtcCxcbi50ZW1wSWNvbkRpdixcbi5leHRyYVRlbXBJbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMy4zJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXG59XG5cbi5jdXJyVGVtcCB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4udGVtcEljb25EaXYge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmV4dHJhVGVtcEluZm8ge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgKi9cbiAgICBib3JkZXI6IDE1cHggMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi8qIFNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRVNJREVPTkVTVFlMRSAqL1xuXG4uc2lkZU9uZSB7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xuICAgIGdyaWQtcm93OiAxIC8gMztcbn1cblxuLnNpZGVPbmUsXG4uc2lkZVR3byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBcXVhKTtcbn1cblxuLndpbmRJY29uLFxuLndpbmRJbmZvLFxuLnV2SWNvbixcbi51dkluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLndpbmRJY29uLFxuLnV2SWNvbiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLndpbmRJbmZvLFxuLnV2SW5mbyxcbi5zaWRlVGhyZWUge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWRlVGhyZWUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XG59XG5cbi5tb0luZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubW9JY29uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi53aW5kSWNvbixcbi51dkljb24sXG4ubW9JY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5ncy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUEsNktBQTZLO0FBQzdLO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBLDZLQUE2Szs7QUFFN0s7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kYXJrQXF1YTogcmdiKDAsIDEzMCwgMjU1KTtcXG4gICAgLS1kYXJrRm9udDogIzExMztcXG59XFxuXFxuLm92ZXJhbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNlYXJjaEJveEFyZWEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50ZW1wQXJlYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDEyMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMTIwcHgpO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hcmVhIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAycHggIzIyMjtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya0ZvbnQpO1xcbn1cXG5cXG4ubWFpblRlbXBDZWxsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5zaWRlVHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBncmlkLXJvdzogMyAvIDU7XFxufVxcblxcbi5zaWRlRm91ciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XFxufVxcblxcbi8qIE1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQU1BSU5URU1QQVJFQSAqL1xcbi5tdGNNYWluQ29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLnRlbXBDb250LFxcbi5sb2NDb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jQ29udCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY3VyclRlbXAsXFxuLnRlbXBJY29uRGl2LFxcbi5leHRyYVRlbXBJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMzLjMlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxufVxcblxcbi5jdXJyVGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi50ZW1wSWNvbkRpdiB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5leHRyYVRlbXBJbmZvIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkOyAqL1xcbiAgICBib3JkZXI6IDE1cHggMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLyogU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFU0lERU9ORVNUWUxFICovXFxuXFxuLnNpZGVPbmUge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLnNpZGVPbmUsXFxuLnNpZGVUd28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FxdWEpO1xcbn1cXG5cXG4ud2luZEljb24sXFxuLndpbmRJbmZvLFxcbi51dkljb24sXFxuLnV2SW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcblxcbi53aW5kSWNvbixcXG4udXZJY29uIHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi53aW5kSW5mbyxcXG4udXZJbmZvLFxcbi5zaWRlVGhyZWUge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlVGhyZWUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQXF1YSk7XFxufVxcblxcbi5tb0luZm8ge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm1vSWNvbiB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ud2luZEljb24sXFxuLnV2SWNvbixcXG4ubW9JY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGluZ3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGluZ3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2ltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckFwaUZldGNoXCI7XG5pbXBvcnQgeyBidXR0b25FdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vc2VhcmNoRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgcHJlRmlsbEljb25zIH0gZnJvbSBcIi4vdGVtcERPTVwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxpbmdzLmNzc1wiO1xuXG5cbi8vY29uc3QgZXBXZWF0aGVyID0gZ2V0V2VhdGhlckRhdGEoJ2VsIHBhc28nKTtcbi8vY29uc29sZS5sb2coZXBXZWF0aGVyKTtcbnByZUZpbGxJY29ucygpO1xuYnV0dG9uRXZlbnRMaXN0ZW5lcigpO1xuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vICAgLy8gTG9kYXNoLCBjdXJyZW50bHkgaW5jbHVkZWQgdmlhIGEgc2NyaXB0LCBpcyByZXF1aXJlZCBmb3IgdGhpcyBsaW5lIHRvIHdvcmtcbi8vICAgLy9lbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSBcImhlbGxvIHdvcmxkIHBvb2NoeSFcIjtcbi8vICAgcmV0dXJuIGVsZW1lbnQ7XG5cblxuLy8gfVxuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCIvL2ltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckFwaUZldGNoXCI7XG4vL2ltcG9ydCB7IGZpbGxNYWluVGVtcEdyaWQgfSBmcm9tIFwiLi90ZW1wR3JpZERPTVwiO1xuaW1wb3J0IHsgc2V0TWFpblRlbXAgfSBmcm9tIFwiLi90ZW1wRE9NXCI7XG5leHBvcnQgbGV0IHNlYXJjaENpdHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25FdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hDaXR5QnV0dG9uXCIpO1xuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWFyY2hDaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCb3hcIik7XG4gICAgICAgIGlmIChzZWFyY2hDaXR5LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaENpdHkudmFsdWUpO1xuICAgICAgICAgICAgc2V0TWFpblRlbXAoKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGN1cnJXZWF0aGVyID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQ2l0eS52YWx1ZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyV2VhdGhlcik7XG4gICAgICAgICAgICAvL2NhbGwgbWV0aG9kIHRvIGZpbGwgdGVtcGVyYXR1cmUgZ3JpZCBwYXNzaW5nIGN1cnJXZWF0aGVyIGFzIHBhcmFtZXRlclxuICAgICAgICAgICAgLy9maWxsTWFpblRlbXBHcmlkKGN1cnJXZWF0aGVyLCBcImZcIik7XG4gICAgICAgIH1cbiAgICB9KVxufSIsImltcG9ydCBXaW5kIGZyb20gJy4uL3NyYy9pY29ucy93aW5kLnBuZyc7XG5pbXBvcnQgV2luZFJvc2UgZnJvbSAnLi4vc3JjL2ljb25zL3dpbmRSb3NlLnBuZyc7XG5pbXBvcnQgTW9pc3R1cmUgZnJvbSAnLi4vc3JjL2ljb25zL21vaXN0dXJlLnBuZyc7XG5pbXBvcnQgQ2xpbWF0ZSBmcm9tICcuLi9zcmMvaWNvbnMvY2xpbWF0ZS5wbmcnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyQXBpRmV0Y2hcIjtcbmltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckFwaUZldGNoXCI7XG5pbXBvcnQgeyBzZWFyY2hDaXR5IH0gZnJvbSBcIi4vc2VhcmNoRXZlbnRMaXN0ZW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlRmlsbEljb25zKCkge1xuICAgIGxldCB0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcEljb25EaXZcIik7XG4gICAgbGV0IHdJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kSWNvblwiKTtcbiAgICBsZXQgdXZJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51dkljb25cIik7XG4gICAgbGV0IG1vSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9JY29uXCIpO1xuXG4gICAgdEljb24uc3JjID0gQ2xpbWF0ZTtcbiAgICB3SWNvbi5zcmMgPSBXaW5kO1xuICAgIHV2SWNvbi5zcmMgPSBXaW5kUm9zZTtcbiAgICBtb0ljb24uc3JjID0gTW9pc3R1cmU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNYWluVGVtcCgpIHtcbiAgICBhd2FpdCBnZXRXZWF0aGVyRGF0YShzZWFyY2hDaXR5LnZhbHVlKTtcblxuICAgIGxldCBjVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VyclRlbXBcIik7XG4gICAgbGV0IHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wSWNvbkRpdlwiKTtcbiAgICBsZXQgZXh0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFUZW1wSW5mb1wiKTtcbiAgICBsZXQgbENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY1wiKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAvL2xldCBtYWluVGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblRlbXBDZWxsXCIpO1xuICAgIC8vbWFpblRlbXBEaXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZiArIFwiIFwiICsgd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcblxuICAgIHRJY29uLnNyYyA9IFwiaHR0cHM6XCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIGNUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YgKyBcIsKwRlwiO1xuICAgIGV4dFRlbXAudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0ICsgXCJcXHJcXG5cIiArXG4gICAgICAgIFwiRmVlbHMgTGlrZTogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mICsgXCLCsEZcXHJcXG5cIiArXG4gICAgICAgIFwiSGVhdCBJbmRleDogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmhlYXRpbmRleF9mICsgXCLCsEZcXHJcXG5cIjtcbiAgICBsQ29udC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUgKyBcIixcXHJcXG5cIiArXG4gICAgICAgIHdlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbiArIFwiLFxcclxcblwiICtcbiAgICAgICAgd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgICB3aW5kU2lkZU9uZSgpO1xuICAgIHV2U2lkZVR3bygpO1xuICAgIGxhc3RVcGRhdGVTaWRlVGhyZWUoKTtcbiAgICBtb2lzdHVyZVNpZGVGb3VyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aW5kU2lkZU9uZSgpIHtcbiAgICBsZXQgd0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRJY29uXCIpO1xuICAgIGxldCB3aW5kSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZEluZm9cIik7XG5cbiAgICB3SWNvbi5zcmMgPSBXaW5kO1xuICAgIHdpbmRJbmZvLnRleHRDb250ZW50ID0gXCJXSU5EXFxyXFxuXFxyXFxuXCIgKyBcIlNwZWVkOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGggKyBcIm1waFxcclxcblwiICtcbiAgICAgICAgXCJHdXN0OiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQuZ3VzdF9tcGggKyBcIm1waFxcclxcblwiICtcbiAgICAgICAgXCJEaXJlY3Rpb246IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2Rpcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHV2U2lkZVR3bygpIHtcbiAgICBsZXQgdXZJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51dkljb25cIik7XG4gICAgbGV0IHV2SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXZJbmZvXCIpO1xuXG4gICAgdXZJY29uLnNyYyA9IFdpbmRSb3NlO1xuICAgIHV2SW5mby50ZXh0Q29udGVudCA9IFwiSU5GT1xcclxcblxcclxcblwiICsgXCJVVjogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LnV2ICtcbiAgICAgICAgXCJcXHJcXG5WaXNpYmlsaXR5OiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQudmlzX21pbGVzICtcbiAgICAgICAgXCJtaVxcclxcbldpbmRjaGlsbDogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRjaGlsbF9mICsgXCLCsEZcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RVcGRhdGVTaWRlVGhyZWUoKSB7XG4gICAgbGV0IGx1U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZVRocmVlXCIpO1xuXG4gICAgbHVTcGFuLnRleHRDb250ZW50ID0gXCJMYXN0IFVwZGF0ZWQ6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2lzdHVyZVNpZGVGb3VyKCkge1xuICAgIGxldCBtb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vSWNvblwiKTtcbiAgICBsZXQgbW9JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb0luZm9cIik7XG5cbiAgICBtb0ljb24uc3JjID0gTW9pc3R1cmU7XG4gICAgbW9JbmZvLnRleHRDb250ZW50ID0gXCJIVU1JRElUWVxcclxcblxcclxcbkh1bWlkaXR5OiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHkgK1xuICAgICAgICBcIiVcXHJcXG5EZXdwb2ludDogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmRld3BvaW50X2YgK1xuICAgICAgICBcIsKwRlxcclxcblByZXNzdXJlOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW4gKyBcImluXCI7XG59IiwiLy9pbXBvcnQgeyBmaWxsTWFpblRlbXBHcmlkIH0gZnJvbSBcIi4vdGVtcEdyaWRET01cIjtcbmV4cG9ydCBsZXQgd2VhdGhlckRhdGE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShwbGFjZSkge1xuICAgIGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTQ0ZDczY2EwOTI5MDRlYTE4YTgxOTE5MDUyNDE0MDUmcT0ke3BsYWNlfWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gc3VjaCBwbGFjZSBPX28gXCIgKyBlcnJvcik7XG4gICAgICAgIH0pO1xufVxuLy8gLy8gICAgIHRyeSB7XG4vLyAvLyAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NDRkNzNjYTA5MjkwNGVhMThhODE5MTkwNTI0MTQwNSZxPSR7cGxhY2V9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4vLyAvLyAgICAgICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4vLyAvLyAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbi8vIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gLy8gICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN1Y2ggcGxhY2Ugb19PIFwiICsgZXJyb3IubWVzc2FnZSk7XG4vLyAvLyAgICAgfVxuLy8gLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==