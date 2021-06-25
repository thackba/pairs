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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/index.scss ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pairsFrame_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pairsFrame.png */ \"./src/pairsFrame.png\");\n\n\n\nconst PairsGame = __webpack_require__(/*! ./pairsGame */ \"./src/pairsGame.js\");\nconst PairsLocation = __webpack_require__(/*! ./pairsLocation */ \"./src/pairsLocation.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const size = 8;\n  const game = new PairsGame(size);\n  const rootElement = document.getElementById(\"pairs\");\n  const container = document.createElement(\"div\");\n  container.id = \"pairsContainer\";\n  rootElement.appendChild(container);\n  for (let x = 0; x < size; x++) {\n    const xElement = document.createElement(\"div\");\n    xElement.classList.add(\"pairsRow\");\n    for (let y = 0; y < size; y++) {\n      const yElement = document.createElement(\"div\");\n      const cardElement = new Image();\n      cardElement.id = \"pairsCard-\" + x + \"-\" + y;\n      cardElement.src = _pairsFrame_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      yElement.appendChild(cardElement);\n      yElement.classList.add(\"pairsCard\");\n      yElement.addEventListener(\"click\", () => {\n        const result = game.select(new PairsLocation(x, y));\n        if (result.image > 0) {\n          cardElement.classList.add(\"image-\" + result.image);\n        }\n        if (result.toRemove.length > 0) {\n          for (const toRemove of result.toRemove) {\n            const card = document.getElementById(\n              \"pairsCard-\" + toRemove.x + \"-\" + toRemove.y\n            );\n            const classes = [];\n            for (const c of card.classList) {\n              if (c.startsWith(\"image\")) {\n                classes.push(c);\n              }\n            }\n            for (const c of classes) {\n              card.classList.remove(c);\n            }\n          }\n        }\n      });\n      xElement.appendChild(yElement);\n    }\n    container.appendChild(xElement);\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--5-2!../node_modules/sass-loader/dist/cjs.js??ref--5-3!./index.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/pairsBoard.js":
/*!***************************!*\
  !*** ./src/pairsBoard.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction PairsCard(image) {\n  Object.defineProperties(this, {\n    image: { value: image, enumerable: true },\n    open: { value: false, enumerable: true, writable: true }\n  });\n}\n\nclass PairsBoard {\n  constructor(size) {\n    if (size % 2 !== 0) {\n      throw new Error(\"Could not create a board with odd size!\");\n    }\n    Object.defineProperties(this, {\n      size: { value: size, enumerable: true },\n      numberOfFields: { value: Math.pow(size, 2), enumerable: true },\n      initialized: { value: false, enumerable: true, writable: true },\n      board: { value: [], enumerable: true, writable: true }\n    });\n  }\n\n  init(values = this.randomList()) {\n    if (values.length !== this.numberOfFields) {\n      throw new Error(\n        \"Could not init the board. Use a list with \" +\n          this.numberOfFields +\n          \" entries.\"\n      );\n    }\n    let valueCounter = 0;\n    this.board = [];\n    for (let xAxis = 0; xAxis < this.size; xAxis++) {\n      const subAxis = [];\n      for (let yAxis = 0; yAxis < this.size; yAxis++) {\n        subAxis.push(new PairsCard(values[valueCounter++]));\n      }\n      this.board.push(subAxis);\n    }\n    this.initialized = true;\n  }\n\n  getCard(x, y) {\n    if (!this.initialized) {\n      return null;\n    }\n    return this.board[x][y];\n  }\n\n  open(x1, y1, x2, y2) {\n    const card1 = this.getCard(x1, y1);\n    const card2 = this.getCard(x2, y2);\n    if (card1.image === card2.image) {\n      card1.open = true;\n      card2.open = true;\n    }\n  }\n\n  randomList() {\n    const shuffle = list => {\n      for (let i = list.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * i);\n        const temp = list[i];\n        list[i] = list[j];\n        list[j] = temp;\n      }\n      return list;\n    };\n\n    const randomList = [];\n    const imageNumber = this.numberOfFields / 2;\n    for (let counter = 0; counter < imageNumber; counter++) {\n      // Add every image twice (image from 1 to 32)\n      randomList.push(counter + 1);\n      randomList.push(counter + 1);\n    }\n    // Shuffle twice\n    shuffle(randomList);\n    shuffle(randomList);\n    return randomList;\n  }\n}\n\nmodule.exports = PairsBoard;\n\n\n//# sourceURL=webpack:///./src/pairsBoard.js?");

/***/ }),

/***/ "./src/pairsFrame.png":
/*!****************************!*\
  !*** ./src/pairsFrame.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9f2371b65979f023000d62757943c8c0.png\");\n\n//# sourceURL=webpack:///./src/pairsFrame.png?");

/***/ }),

/***/ "./src/pairsGame.js":
/*!**************************!*\
  !*** ./src/pairsGame.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst PairsBoard = __webpack_require__(/*! ./pairsBoard */ \"./src/pairsBoard.js\");\n\nclass SelectResult {\n  constructor(image = 0, toRemove = []) {\n    this.image = image;\n    this.toRemove = toRemove;\n  }\n}\n\nclass PairsGame {\n  constructor(size) {\n    this.board = new PairsBoard(size);\n    this.board.init();\n    this.move = 0;\n    this.selectedLocation = null;\n    this.selectedLocationSecond = null;\n    this.selectedImage = -1;\n    this.points = 0;\n    this.maxPoints = Math.pow(size, 2);\n  }\n\n  select(location) {\n    const card = this.board.getCard(location.x, location.y);\n    if (card.open) {\n      return new SelectResult(-1);\n    } else {\n      if (this.move === 0) {\n        this.selectedLocation = location;\n        this.selectedImage = card.image;\n        this.move = 1;\n        return new SelectResult(card.image);\n      }\n      if (this.move === 1) {\n        // check for different card\n        if (\n          this.selectedLocation.x === location.x &&\n          this.selectedLocation.y === location.y\n        ) {\n          return new SelectResult(-1);\n        }\n        const oldCard = this.board.getCard(\n          this.selectedLocation.x,\n          this.selectedLocation.y\n        );\n        if (card.image === oldCard.image) {\n          // treffer\n          this.board.open(\n            location.x,\n            location.y,\n            this.selectedLocation.x,\n            this.selectedLocation.y\n          );\n          this.points++;\n          if (this.points === this.maxPoints) {\n            // complete !\n          }\n          this.move = 0;\n        } else {\n          this.selectedLocationSecond = location;\n          this.move = 2;\n        }\n        return new SelectResult(card.image);\n      }\n      if (this.move === 2) {\n        const toRemove = [];\n        if (this.selectedLocation !== null) {\n          toRemove.push(this.selectedLocation);\n          this.selectedLocation = null;\n        }\n        if (this.selectedLocationSecond !== null) {\n          toRemove.push(this.selectedLocationSecond);\n          this.selectedLocationSecond = null;\n        }\n        this.selectedImage = -1;\n        this.move = 0;\n        return new SelectResult(0, toRemove);\n      }\n      return new SelectResult(-1);\n    }\n  }\n}\n\nmodule.exports = PairsGame;\n\n\n//# sourceURL=webpack:///./src/pairsGame.js?");

/***/ }),

/***/ "./src/pairsLocation.js":
/*!******************************!*\
  !*** ./src/pairsLocation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class PairsLocation {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nmodule.exports = PairsLocation;\n\n\n//# sourceURL=webpack:///./src/pairsLocation.js?");

/***/ })

/******/ });