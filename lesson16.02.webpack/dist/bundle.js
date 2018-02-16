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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _sum2.default)(7, 8));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};
exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

var _small = __webpack_require__(5);

var _small2 = _interopRequireDefault(_small);

var _bigImage = __webpack_require__(6);

var _bigImage2 = _interopRequireDefault(_bigImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement("img");
image.src = _small2.default;

document.body.appendChild(image);

var imageBig = document.createElement("img");
imageBig.src = _bigImage2.default;

document.body.appendChild(imageBig);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ff2b12d70efa2acf6cd30b9568e6cb1.jpg";

/***/ })
/******/ ]);