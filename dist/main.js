/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --color-t: hsl(212,48%,18%);\\n}\\n\\n\\n*,\\n*::before,\\n*::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'Roboto', sans-serif;\\n}\\n\\nbutton {\\n    background: none;\\n    color: inherit;\\n    border: none;\\n    padding: 0;\\n    font: inherit;\\n    cursor: pointer;\\n    outline: inherit;\\n    display: block;\\n}\\n\\nul,ol {\\n    list-style-type: none;\\n}\\n\\nbody {\\n    display: grid;\\n    grid-template-columns: auto 1fr;\\n}\\n\\n.sidebar {\\n    height: 100vh;\\n    background-color: var(--color-t);\\n    width: 15rem;\\n    padding: 2rem;\\n    color: #eee;\\n}\\n\\n.main {\\n    background-color: hsl(212,48%,78%);\\n    padding: 2rem;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n}\\n\\n.title {\\n    text-align: center;\\n}\\n\\n.example {\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    gap: 1rem;\\n\\n}\\n\\n.todo {\\n    flex: 1;\\n    width: 60%;\\n    align-self: center;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: #ddd;\\n    border-radius: 0.375rem;\\n    padding: 1rem;\\n    gap: 0.5rem;\\n}\\n\\n.todo__notes {\\n    display: none;\\n}\\n\\n.todo__description {\\n    display: none;\\n}\\n\\n.todo__infos {\\n    display: none;\\n}\\n\\ndialog {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translateX(-50%) translateY(-50%);\\n    padding: 2rem;\\n    border: none;\\n    border-radius: 0.375rem;\\n    box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);\\n}\\n\\n\\n\\n/* refactor this */\\n\\n.home {\\n    padding: 1rem;\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size: 1.2rem;\\n}\\n\\n/* .addTodo {\\n    padding: 1rem;\\n    font-size: 1.2rem;\\n    align-self: flex-start;\\n} */\\n\\n.projects {\\n    padding: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 1rem;\\n    font-size: 1.2rem;\\n}\\n\\n.addProject {\\n    padding: 1rem;\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size: 1.2rem;\\n}\\n\\n\\n\\ndetails > summary {\\n    list-style: none;\\n    display: flex;\\n    align-items: center;\\n    cursor: pointer;\\n    gap: 0.5rem;\\n    font-size: 1.2rem;\\n}\\n\\n\\n.project-list {\\n    margin-top: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 1rem;\\n}\\n\\n\\n.project-list li {\\n    display: flex;\\n    align-items: baseline;\\n    gap: 1rem;\\n}\\n\\n.project-list li button {\\n    border-radius: 1rem;\\n    background-color: hsl(212,48%,65%);\\n    width: 2rem;\\n    color: hsl(212,48%,18%);\\n    transition: background-color 0.25s ease-in;\\n}\\n\\n.project-list li button:hover {\\n    background-color: hsl(7, 96%, 57%);\\n}\\n\\n\\n\\n.project-list a {\\n    flex: 1;\\n    display: block;\\n    color: #eee;\\n    text-decoration: none;\\n}\\n\\n.project-list a:hover {\\n    color: hsl(212,48%,65%);\\n}\\n\\n.top {\\n    display: flex;\\n    flex-direction:  column;\\n}\\n\\n.project-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 1rem;\\n}\\n\\n.project-container .addTodo {\\n    padding: 0.7rem 1.4rem;\\n    font-size: 1.1rem;\\n    background-color: hsl(212,58%,38%);\\n    align-self: flex-end;\\n    border-radius: 0.375rem;\\n    display: block;\\n    margin-bottom: 2rem;\\n    color: #eee;\\n}\\n\\n\\n\\n\\n/*BEGIN: PROJECT FORM MODAL */\\n.project-modal {\\n    width: 30rem;\\n}\\n\\n.project-modal h3 {\\n    text-align: center;\\n}\\n\\n.project-form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n    margin-bottom: 1rem;\\n\\n}\\n\\n.project-form .form-field {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n}\\n\\n.form-field input {\\n    flex: 1;\\n    font-size: 1.2rem;\\n    padding: 0.3rem 0.2rem;\\n}\\n\\n.close-btn {\\n    float: right;\\n    padding: 0.5rem 1rem;\\n    background-color: hsl(212,48%,65%);\\n    border-radius: 0.375rem;\\n}\\n\\n\\n/*END: PROJECT FORM MODAL */\\n\\n[type='submit'] {\\n    align-self: flex-end;\\n    padding: 0.5rem 1rem;\\n    background-color: hsl(212,48%,18%);\\n    border-radius: 0.375rem;\\n    color: #eee;\\n}\\n\\n\\n/*BEGIN: TODO FORM MODAL */\\n\\n.modal {\\n    max-width: 40rem;\\n}\\n\\n.todo-form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    margin-bottom: 1rem;\\n}\\n\\n.modal h3 {\\n    text-align: center;\\n}\\n\\n\\n.todo-form .form-field {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.2rem;\\n}\\n\\ntextarea {\\n    resize: none;\\n}\\n\\n.close-button {\\n    float: right;\\n    padding: 0.5rem 1rem;\\n    background-color: hsl(212,48%,65%);\\n    border-radius: 0.375rem;\\n}\\n/*END: TODO FORM MODAL */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://supertodo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://supertodo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://supertodo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://supertodo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://supertodo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://supertodo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://supertodo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://supertodo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://supertodo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://supertodo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/helpers/serialize.js":
/*!**********************************!*\
  !*** ./src/helpers/serialize.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deserialize\": () => (/* binding */ deserialize),\n/* harmony export */   \"serialize\": () => (/* binding */ serialize)\n/* harmony export */ });\nfunction serialize(object) {\n    return JSON.stringify(object);\n}\n\n\nfunction deserialize(string) {\n    return JSON.parse(string);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://supertodo/./src/helpers/serialize.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_domTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/domTodo */ \"./src/todo/domTodo.js\");\n/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project */ \"./src/project/project.js\");\n/* harmony import */ var _project_domProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/domProject */ \"./src/project/domProject.js\");\n/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo */ \"./src/todo/todo.js\");\n/* harmony import */ var _storage_initializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage/initializer */ \"./src/storage/initializer.js\");\n/* harmony import */ var _storage_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage/key */ \"./src/storage/key.js\");\n/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/serialize */ \"./src/helpers/serialize.js\");\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/storage */ \"./src/storage/storage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n\n\nlet projects = {};\nlet createdProjects = 0;\nif(localStorage.getItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.STORAGE_KEY) && localStorage.getItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.CREATED_PROJECTS_COUNT_KEY)) {\n    let projectsHash = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_6__.deserialize)(localStorage.getItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.STORAGE_KEY));\n    let projectCount = +(0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_6__.deserialize)(localStorage.getItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.CREATED_PROJECTS_COUNT_KEY));\n    projects = (0,_storage_initializer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(projectsHash);\n    createdProjects = projectCount;\n} else {\n    localStorage.setItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.STORAGE_KEY, '{}');\n    localStorage.setItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.CREATED_PROJECTS_COUNT_KEY, 0);\n}\n\nconst container = document.querySelector('.example');\nconst modal = document.querySelector('.modal');\nconst pageTitle = document.querySelector('h1');\nconst closeTodoFormBtn = document.querySelector('.close-button');\nconst todoForm = document.querySelector('.todo-form');\nconst projectsBtn = document.querySelector('.projects');\nconst projectsListDetails = document.querySelector('.projects ul');\nconst addProjectBtn = document.querySelector('.addProject');\nconst projectModal = document.querySelector('.project-modal');\nconst projectForm = document.querySelector('.project-form');\nconst closeProjectForm = projectModal.querySelector('.close-btn')\nconst homeBtn = document.querySelector('.home');\nconst ProjectEditForm = document.querySelector('.edit-project-form');\nconst ProjectEditModal = document.querySelector('.edit-project-modal');\nconst closeProjectEditModal = ProjectEditModal.querySelector('.close-btn');\n\nconst  editTodoModal = document.querySelector('.edit-todo-modal');\nconst  editTodoForm = document.querySelector('.edit-todo-form');\n\n\nconst projectExample = new _project_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('starter');\nlet todo = new _todo_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n    {\n        title: 'hello',\n        description: 'potato',\n        dueDate: '9/9/9',\n        priority: 1,\n        notes: 'bla bla bla'\n    }\n);\n\nconst secondProjectExample = new _project_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('second');\nlet secondTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n    {\n        title: 'AAAAAAAAAAAAAA',\n        description: 'potato',\n        dueDate: '9/9/9',\n        priority: 1,\n        notes: 'bla bla bla'\n    }\n)\n\nprojectExample.addTodo(todo);\nsecondProjectExample.addTodo(secondTodo);\nprojects[createdProjects] = projectExample;\n(0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.storeProject)(createdProjects, projectExample);\ncreatedProjects += 1;\n\nprojects[createdProjects] = secondProjectExample;\n(0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.storeProject)(createdProjects, secondProjectExample);\ncreatedProjects += 1;\nconsole.log(createdProjects);\nlocalStorage.setItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.CREATED_PROJECTS_COUNT_KEY, createdProjects);\n\n\n// Loop here.\nfunction renderHome() {\n    // Change the foreach for a hash iteration.\n    let todosList = []\n    for(const projectIndex in projects) {\n        let p = projects[projectIndex];\n        // Change the foreach here since it becomes a hash.\n        for(const index in p.todos) {\n            let todo = p.todos[index];\n            // p.todos.forEach((todo) => {\n            todosList.push((0,_todo_domTodo__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(todo));\n                // })\n        }\n    }\n    // projects.forEach((p, index) => {\n    //     p.todos.forEach((todo) => {\n    //         todosList.push(renderTodo(todo));\n    //     })\n    // })\n\n    return todosList;\n}\n\n// Helpers\n// this is gonna break.\nfunction refreshProject(p, index) {\n    container.replaceChildren((0,_project_domProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(p, index));\n    let todoEditBtn = document.querySelectorAll('.todo__edit-btn');\n    if(todoEditBtn) {\n        todoEditBtn.forEach((button) => button.addEventListener('click', (e) => editTodo(e)));\n    }\n}\n\n\n\n// Event listeners.\n\n\ntodoForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    let data = new FormData(e.target);\n    let dataObject = Object.fromEntries(data);\n    let newTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](dataObject);\n    // retrieve the project's index (from the page itself).\n    const domProject = document.querySelector(`[data-project-index]`);\n    const projectIdx = +domProject.dataset.projectIndex;\n    // find the project Object not dom, call the addTodo method on it.\n    (0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.storeTodo)(projectIdx, projects[projectIdx].createdTodos, newTodo);\n    projects[projectIdx].addTodo(newTodo);\n    (0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.updateProject)(projectIdx, projects[projectIdx]);\n    // domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));\n    // console.log(domProject.childElementCount);\n    // domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));    \n    refreshProject(projects[projectIdx], projectIdx);\n    modal.close();\n    todoForm.reset();\n})\n\ncloseTodoFormBtn.addEventListener('click', () => {\n    modal.close();\n})\n\n\nfunction projectList() {\n    //modify this map, to a for const projectIndx in projects, you can return an array for this purpose.\n    let list = [];\n\n    for(const index in projects) {\n        let p = projects[index];\n    \n    // return projects.map((p, index) => {\n        let deleteBtn = document.createElement('button');\n        deleteBtn.innerHTML = '&cross;';\n        deleteBtn.dataset.project = index;\n        deleteBtn.addEventListener('click', (e) => deleteProject(e));\n\n        let editBtn = document.createElement('button');\n        editBtn.innerHTML = '&#9998;';\n        editBtn.dataset.project = index;\n        editBtn.addEventListener('click', (e) => editProject(e));\n\n        let item = document.createElement('li');\n        let link = document.createElement('a');\n        link.href = '#';\n        link.innerText = p.name;\n        link.dataset.project = index;\n        link.addEventListener('click', () => refreshProject(p,index));\n        item.appendChild(link);\n        item.appendChild(deleteBtn);\n        item.appendChild(editBtn);\n        \n        list.push(item);\n    // });\n    }\n\n    return list;\n}\n\nprojectsBtn.addEventListener('toggle', () => {\n    if(projectsBtn.open) {\n        projectList().forEach((p) => {\n            projectsListDetails.append(p);\n        })\n    } else {\n        projectsListDetails.replaceChildren();\n    }\n})\n\n\n\n// New project logic.\n\naddProjectBtn.addEventListener('click', () => {\n    projectModal.showModal();\n})\n\ncloseProjectForm.addEventListener('click', () => {\n    projectModal.close();\n})\n\n\nprojectForm.addEventListener('submit', (e) => {\n    //This was updated.\n    e.preventDefault();\n    let data = new FormData(e.target);\n    let { name } = Object.fromEntries(data);\n    let newProject = new _project_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n    projects[createdProjects] = newProject;\n    console.log(newProject);\n    (0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.storeProject)(createdProjects, newProject);\n    createdProjects += 1;\n    localStorage.setItem(_storage_key__WEBPACK_IMPORTED_MODULE_5__.CREATED_PROJECTS_COUNT_KEY, createdProjects);\n    projectsListDetails.replaceChildren(...projectList());\n    projectForm.reset()\n    projectModal.close();\n})\n\n\nhomeBtn.addEventListener('click', () => {\n    pageTitle.innerText = 'All todos';\n    container.replaceChildren(...renderHome());\n})\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    container.replaceChildren(...renderHome());\n})\n\n\n// Project Delete/Update;\nfunction  deleteProject(e) {\n    //reaplce the splice with a simple delete  + delete from storage.\n    let projectIndex = e.target.dataset.project;\n    // projects.splice(projectIndex, 1);\n    delete projects[projectIndex];\n    // add deletion from storage here.\n    (0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.deleteProjectFromStorage)(projectIndex);\n    console.log('Project deleted !');\n    projectsListDetails.replaceChildren(...projectList());\n}\n\nfunction editProject(e) {\n    // This should be fine.\n    let editProjectForm = document.querySelector('.edit-project-form');\n    let hiddenField = editProjectForm.querySelector(`[type='hidden']`);\n    let projectIndex = e.target.dataset.project;\n    let projectName = projects[projectIndex].name;\n    let nameField = editProjectForm.querySelector(`[name='name']`);\n    nameField.value = projectName;\n    hiddenField.value = projectIndex;\n    ProjectEditModal.showModal();\n    closeProjectEditModal.addEventListener('click', () => ProjectEditModal.close());\n}\n\n\nProjectEditForm.addEventListener('submit', (e) => {\n    // This should be fine, only add storage method here.\n    e.preventDefault();\n    let data = new FormData(e.target);\n    let { name, projectIdx } = Object.fromEntries(data);\n    projects[projectIdx].name = name;\n    console.log('Project has been updated. ');\n    // add update storage here.\n    (0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.updateProject)(projectIdx, projects[projectIdx]);\n    projectsListDetails.replaceChildren(...projectList());\n    ProjectEditModal.close();\n    ProjectEditForm.reset();\n});\n\n\n\nfunction editTodo(e) {\n    let { todoIdx } = e.target.dataset;\n    let { projectIndex } = document.querySelector('section').dataset;\n    let todoObj = projects[projectIndex].todos[todoIdx]\n\n    // Get the fields.\n    let titleField = editTodoForm.querySelector(`[name='title']`);\n    let descriptionField = editTodoForm.querySelector(`[name='description']`);\n    let dueDateField = 'TODO';\n    let priorityField = editTodoForm.querySelector(`[name='priority']`);\n    let notesField = editTodoForm.querySelector(`[name='notes']`);\n\n    let projectIdHidden = editTodoForm.querySelector(`[name='projectIdx']`)\n    let todoIdHidden = editTodoForm.querySelector(`[name='todoIdx']`)\n    projectIdHidden.value = projectIndex;\n    todoIdHidden.value = todoIdx;\n\n\n    // remove this later ofc.\n    let closeBtn = editTodoModal.querySelector('.close-button');\n    // end\n    titleField.value = todoObj.title;\n    descriptionField.value = todoObj.description;\n    priorityField.value = todoObj.priority;\n    notesField.value = todoObj.notes;\n\n    editTodoModal.showModal();\n    closeBtn.addEventListener('click', () => editTodoModal.close());\n}\n\n\neditTodoForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let data = new FormData(e.target);\n    let dataObject = Object.fromEntries(data);\n    let {   description, notes, priority, projectIdx, title, todoIdx } = dataObject;\n    let p = projects[projectIdx].todos[todoIdx];\n\n    p.description = description;\n    p.notes = notes;\n    p.priority = priority;\n    p.title = title;\n    (0,_storage_storage__WEBPACK_IMPORTED_MODULE_7__.storeTodo)(projectIdx, todoIdx, p);\n    //replace the current todo node with a new node.\n    // get the parent node.\n    // let parent = document.querySelector('section.project-container');\n    // let oldChild = document.querySelector(`[data-todo-index='${todoIdx}']`);\n    // // It's buggy because render todo doesn't include the buttons, we'll fix that.\n    // let newChild = renderTodo(p, todoIdx);\n    // parent.replaceChild(newChild, oldChild);\n\n    refreshProject(projects[projectIdx], projectIdx);\n    editTodoModal.close()\n\n})\n\n//# sourceURL=webpack://supertodo/./src/index.js?");

/***/ }),

/***/ "./src/project/domProject.js":
/*!***********************************!*\
  !*** ./src/project/domProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProject)\n/* harmony export */ });\n/* harmony import */ var _todo_domTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/domTodo */ \"./src/todo/domTodo.js\");\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage */ \"./src/storage/storage.js\");\n\n\n\nfunction renderProject(project, index) {\n    const addTodo = document.createElement('button');\n    addTodo.classList.add('addTodo');\n    addTodo.innerText = 'Add todo';\n    addTodo.addEventListener('click', () => {\n        modal.showModal();\n    })\n    const projectContainer = document.createElement('section');\n    projectContainer.dataset.projectIndex = index;\n    projectContainer.classList.add('project-container');\n    const projectName = document.querySelector('h1');\n    projectName.innerText = project.name;\n    \n\n    const deleteBtn = (todoIndex, c) => {\n        let btn = document.createElement('button');\n        btn.innerText = 'DELETE TODO';\n        btn.addEventListener('click', () => {\n            project.removeTodo(todoIndex);\n            _storage_storage__WEBPACK_IMPORTED_MODULE_1__.deleteTodoFromStorage.call(window, index, todoIndex);\n            projectContainer.removeChild(c);\n        })\n        return btn;\n    }\n\n    const editBtn = (todoIndex) => {\n        let btn = document.createElement('button');\n        btn.innerText = 'EDIT TODO';\n        btn.classList.add('todo__edit-btn');\n        btn.dataset.todoIdx = todoIndex;\n        return btn;\n    }  \n\n    projectContainer.appendChild(addTodo);\n\n    // It's a hash so replace the foreach.\n    for(const index in project.todos) {\n        let todo = project.todos[index];\n        // project.todos.forEach((todo, index) => {\n        let renderedTodo = (0,_todo_domTodo__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(todo, index);\n        let todoHeader = renderedTodo.querySelector('.todo__header');\n        todoHeader.appendChild(deleteBtn(index, renderedTodo));\n        todoHeader.appendChild(editBtn(index));\n        console.log(renderedTodo);\n        projectContainer.appendChild(renderedTodo);\n            // });\n    }\n\n    return projectContainer;\n}   \n\n\n\n//# sourceURL=webpack://supertodo/./src/project/domProject.js?");

/***/ }),

/***/ "./src/project/project.js":
/*!********************************!*\
  !*** ./src/project/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\nclass project {\n\n    constructor(name, todos = {}, createdTodos = 0) {\n        this.name = name;\n        this.todos = todos;\n        this.createdTodos = createdTodos;\n    }\n\n    addTodo = (todo) => {\n        this.todos[this.createdTodos] = todo;\n        this.createdTodos += 1;\n    }\n\n    removeTodo = (index) => {\n        // remove Todo : Use index or something else ?\n        // this.todos.splice(index, 1);\n        delete this.todos[index];\n    }\n}\n\n//# sourceURL=webpack://supertodo/./src/project/project.js?");

/***/ }),

/***/ "./src/storage/initializer.js":
/*!************************************!*\
  !*** ./src/storage/initializer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializer)\n/* harmony export */ });\n/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/todo */ \"./src/todo/todo.js\");\n/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/project */ \"./src/project/project.js\");\n\n\n\nfunction initializer(projectsObject) {\n    let projects = {};\n    for(const projectIndex in projectsObject) {\n        let projectObject = projectsObject[projectIndex];\n        let projectName = projectObject.name;\n        let projectTodos = projectObject.todos;\n        let projectCreatedTodos = +projectObject.createdTodos; // Coerce into number\n\n\n        let todos = {};\n        for(const todoObj in projectTodos) {\n            let newTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectTodos[todoObj]);\n            todos[todoObj] = newTodo;\n        }\n\n        let newProject = new _project_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName, todos, projectCreatedTodos);\n\n        projects[projectIndex] = newProject;\n    }\n\n    return projects;\n}\n\n//# sourceURL=webpack://supertodo/./src/storage/initializer.js?");

/***/ }),

/***/ "./src/storage/key.js":
/*!****************************!*\
  !*** ./src/storage/key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATED_PROJECTS_COUNT_KEY\": () => (/* binding */ CREATED_PROJECTS_COUNT_KEY),\n/* harmony export */   \"STORAGE_KEY\": () => (/* binding */ STORAGE_KEY)\n/* harmony export */ });\nconst STORAGE_KEY = 'SUPER_TODO_PROJECTS';\nconst CREATED_PROJECTS_COUNT_KEY = 'SUPER_TODO_PROJECTS_COUNT';\n\n\n\n//# sourceURL=webpack://supertodo/./src/storage/key.js?");

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProjectFromStorage\": () => (/* binding */ deleteProjectFromStorage),\n/* harmony export */   \"deleteTodoFromStorage\": () => (/* binding */ deleteTodoFromStorage),\n/* harmony export */   \"storeProject\": () => (/* binding */ storeProject),\n/* harmony export */   \"storeTodo\": () => (/* binding */ storeTodo),\n/* harmony export */   \"updateProject\": () => (/* binding */ updateProject),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/storage/key.js\");\n/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/serialize */ \"./src/helpers/serialize.js\");\n\n\n\n\nfunction storeTodo(projectIndex, todoIndex, todoObj) {\n    //1. Get the storage data.\n    let data = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.deserialize)(localStorage.getItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY));\n\n    //2. Operation\n    data[projectIndex].todos[todoIndex] = todoObj;\n\n    //3. Insert the data back.\n    let stringified = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(data);\n    localStorage.setItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, stringified);\n}\n\n\nfunction storeProject(projectIndex, projectObject) {\n    let data = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.deserialize)(localStorage.getItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY));\n    data[projectIndex] = projectObject;\n    let stringified = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(data);\n    localStorage.setItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, stringified);\n}\n\nfunction  updateTodo(projectIndex, todoIndex, todoObj) {\n    storeTodo(projectIndex,todoIndex, todoObj);\n}\n\nfunction updateProject(projectIndex, projectObject) {\n    storeProject(projectIndex, projectObject);\n}\n\nfunction deleteTodoFromStorage(projectIndex, todoIndex) {\n    let data = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.deserialize)(localStorage.getItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY));\n    delete data[projectIndex].todos[todoIndex]\n    let stringified = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(data);\n    localStorage.setItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, stringified);\n}\n\nfunction deleteProjectFromStorage(projectIndex) {\n    let data = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.deserialize)(localStorage.getItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY));\n    delete data[projectIndex];\n    let stringified = (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(data);\n    localStorage.setItem(_key__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, stringified);\n}\n\n\n\n\n\n//# sourceURL=webpack://supertodo/./src/storage/storage.js?");

/***/ }),

/***/ "./src/todo/domTodo.js":
/*!*****************************!*\
  !*** ./src/todo/domTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodo\": () => (/* binding */ renderTodo)\n/* harmony export */ });\nfunction renderContainer() {\n    const element = document.createElement('div');\n    element.classList.add('todo')\n\n    return element;\n}\n\n\nfunction renderDescription(content) {\n    const description = document.createElement('p');\n    description.classList.add('todo__description');\n    description.innerText = content;\n\n    return description;\n\n}\n\n\nfunction renderInformations({dueDate,priority}) {\n\n    const infos = document.createElement('ul');\n    infos.classList.add('todo__infos');\n\n    const dueDateElement = document.createElement('li');\n    dueDateElement.innerText = dueDate;\n\n    const priorityElement = document.createElement('li');\n    priorityElement.innerText = priority;\n\n    infos.appendChild(dueDateElement);\n    infos.appendChild(priorityElement);\n\n    return infos;\n}\n\n\nfunction renderNotes(content) {\n    const notes = document.createElement('p');\n    notes.classList.add('todo__notes');\n    notes.innerText = content;\n\n    return notes;\n\n}\n\nfunction renderHeader(content) {\n    const headerWrapper = document.createElement('div');\n    const title = document.createElement('h4');\n    title.textContent = content;\n    headerWrapper.classList.add('todo__header');\n    headerWrapper.appendChild(title);\n\n    return headerWrapper;\n}\n\n\nfunction renderTodo(todo, index) {\n\n    let container = renderContainer();\n    container.dataset.todoIndex = index;\n    let {title, description, dueDate, priority, notes } = todo;\n    container.append(\n        renderHeader(title),\n        renderDescription(description),\n        renderInformations({dueDate, priority}),\n        renderNotes(notes)\n    )\n\n    return container;\n\n}\n\n\n\n\n//# sourceURL=webpack://supertodo/./src/todo/domTodo.js?");

/***/ }),

/***/ "./src/todo/todo.js":
/*!**************************!*\
  !*** ./src/todo/todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoItem)\n/* harmony export */ });\nclass todoItem {\n    constructor({title, description, dueDate, priority, notes, project}) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.project = project\n        this.completed = false;\n    }\n}\n\n//# sourceURL=webpack://supertodo/./src/todo/todo.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;