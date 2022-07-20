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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_domTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/domTodo */ \"./src/todo/domTodo.js\");\n/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project */ \"./src/project/project.js\");\n/* harmony import */ var _project_domProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/domProject */ \"./src/project/domProject.js\");\n/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo */ \"./src/todo/todo.js\");\n\n\n\n\n\n\n\nconst projectExample = new _project_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet todo = new _todo_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n    {\n        title: 'hello',\n        description: 'potato',\n        dueDate: '9/9/9',\n        priority: 1,\n        notes: 'bla bla bla'\n    }\n);\nlet secondTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n    {\n        title: 'hello',\n        description: 'potato',\n        dueDate: '9/9/9',\n        priority: 1,\n        notes: 'bla bla bla'\n    }\n)\n\nprojectExample.addTodo(todo);\nprojectExample.addTodo(secondTodo);\n\n\nconst container = document.querySelector('.example');\nconst projectContainer = (0,_project_domProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectExample);\ncontainer.appendChild(projectContainer);\nconst modal = document.querySelector('.modal');\nconst addTodoBtn = document.querySelector('.addTodo');\nconst closeTodoFormBtn = document.querySelector('.close-button');\n\naddTodoBtn.addEventListener('click', () => {\n    modal.showModal();\n})\n\ncloseTodoFormBtn.addEventListener('click', () => {\n    modal.close();\n})\n\n//# sourceURL=webpack://supertodo/./src/index.js?");

/***/ }),

/***/ "./src/project/domProject.js":
/*!***********************************!*\
  !*** ./src/project/domProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProject)\n/* harmony export */ });\n/* harmony import */ var _todo_domTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/domTodo */ \"./src/todo/domTodo.js\");\n\n\nfunction renderProject(project) {\n    const projectContainer = document.createElement('section');\n    const projectName = document.createElement('h2');\n    projectName.innerText = project.name;\n\n    project.todos.forEach(todo => {\n        projectContainer.appendChild((0,_todo_domTodo__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(todo));\n    });\n\n    return projectContainer;\n}   \n\n\n\n//# sourceURL=webpack://supertodo/./src/project/domProject.js?");

/***/ }),

/***/ "./src/project/project.js":
/*!********************************!*\
  !*** ./src/project/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\nclass project {\n\n    constructor(name, todos = []) {\n        this.name = name;\n        this.todos = todos;\n    }\n\n    addTodo = (todo) => {\n        this.todos.push(todo)\n    }\n\n    removeTodo = (todo) => {\n        // remove Todo : Use index or something else ?\n    }\n}\n\n//# sourceURL=webpack://supertodo/./src/project/project.js?");

/***/ }),

/***/ "./src/todo/domTodo.js":
/*!*****************************!*\
  !*** ./src/todo/domTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodo\": () => (/* binding */ renderTodo)\n/* harmony export */ });\nfunction renderContainer() {\n    const element = document.createElement('div');\n    element.classList.add('todo')\n\n    return element;\n}\n\n\nfunction renderDescription(content) {\n    const description = document.createElement('p');\n    description.classList.add('todo__description');\n    description.innerText = content;\n\n    return description;\n\n}\n\n\nfunction renderInformations({dueDate,priority}) {\n\n    const infos = document.createElement('ul');\n    infos.classList.add('todo__infos');\n\n    const dueDateElement = document.createElement('li');\n    dueDateElement.innerText = dueDate;\n\n    const priorityElement = document.createElement('li');\n    priorityElement.innerText = priority;\n\n    infos.appendChild(dueDateElement);\n    infos.appendChild(priorityElement);\n\n    return infos;\n}\n\n\nfunction renderNotes(content) {\n    const notes = document.createElement('p');\n    notes.innerText = content;\n\n    return notes;\n\n}\n\nfunction renderTitle(content) {\n    const title = document.createElement('h4');\n    title.textContent = content;\n    title.classList.add('todo__title');\n    \n    return title;\n}\n\n\nfunction renderTodo(todo) {\n\n    let container = renderContainer();\n    let {title, description, dueDate, priority, notes } = todo;\n    container.append(\n        renderTitle(title),\n        renderDescription(description),\n        renderInformations({dueDate, priority}),\n        renderNotes(notes)\n    )\n\n    return container;\n\n}\n\n\n\n\n//# sourceURL=webpack://supertodo/./src/todo/domTodo.js?");

/***/ }),

/***/ "./src/todo/todo.js":
/*!**************************!*\
  !*** ./src/todo/todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoItem)\n/* harmony export */ });\nclass todoItem {\n    constructor({title, description, dueDate, priority, notes}) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n    }\n}\n\n//# sourceURL=webpack://supertodo/./src/todo/todo.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;