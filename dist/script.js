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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_checkNumInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkNumInputs */ "./src/js/modules/checkNumInputs.js");





window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="name"]');
  Object(_modules_checkNumInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="phone"]');
});

/***/ }),

/***/ "./src/js/modules/checkNumInputs.js":
/*!******************************************!*\
  !*** ./src/js/modules/checkNumInputs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkNumInputs = selector => {
  const numberInputs = document.querySelectorAll(selector);
  numberInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (!e.key.match(/[0-9+()-.]/)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkNumInputs);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (!e.key.match(/[а-яёa-zA-Z0-9 ]/i)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    server = 'assets/server.php';
  const message = {
    loading: 'Loading...',
    success: 'Thank you',
    contact: "We'll contact you soon",
    failure: 'Something went wrong...',
    spinner: 'assets/icons/forms/spinner.gif',
    ok: 'assets/icons/forms/ok.png',
    fail: 'assets/icons/forms/fail.png'
  };
  const clearInputs = () => {
    inputs.forEach(input => input.value = '');
  };
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.text();
  };
  const animateStatus = item => {
    item.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => {
      item.classList.remove('animate__fadeIn');
      item.classList.add('animate__fadeOut');
      setTimeout(() => {
        item.style.display = 'none';
      }, 800);
    }, 3000);
  };
  const showBtnImg = (parent, src, alt) => {
    const img = document.createElement('img');
    img.style.width = '30px';
    img.src = src;
    img.alt = alt;
    parent.innerHTML = '';
    animateStatus(img);
    parent.appendChild(img);
  };
  forms.forEach(form => {
    const button = form.querySelector('button'),
      statusMessage = form.querySelector('[data-status-message]'),
      initialButtonValue = button.innerHTML,
      initialStatusMessageValue = statusMessage.innerHTML;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      showBtnImg(button, message.spinner, 'loading...');
      statusMessage.textContent = message.loading;
      postData(server, formData).then(res => {
        showBtnImg(button, message.ok, 'ok');
        if (form.closest('#question')) {
          statusMessage.textContent = message.contact;
        } else {
          statusMessage.textContent = message.success;
        }
        console.log(res);
      }).catch(() => {
        showBtnImg(button, message.fail, 'fail');
        statusMessage.textContent = message.failure;
      }).finally(() => {
        setTimeout(() => {
          clearInputs();
          button.innerHTML = initialButtonValue;
          statusMessage.innerHTML = initialStatusMessageValue;
        }, 3800);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = () => {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    lines = hamburger.querySelectorAll('span');
  let isOpen = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
    menu.classList.toggle('menu__active');
    animateHamburger(isOpen);
  };
  const closeMenu = () => {
    isOpen = !isOpen;
    menu.classList.remove('menu__active');
    animateHamburger(isOpen);
  };
  const animateHamburger = isOpen => {
    const angle = isOpen ? 45 : 0,
      top = isOpen ? '4.5px' : 'auto';
    lines[0].style.transform = `rotate(${angle}deg)`;
    lines[0].style.top = top;
    lines[1].style.transform = `rotate(-${angle}deg)`;
    lines[1].style.top = -top;
    lines[2].style.opacity = isOpen ? '0' : '1';
  };
  window.addEventListener('click', e => {
    if (isOpen && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
  hamburger.addEventListener('click', () => {
    toggleMenu();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scroll = function () {
  const toTopbtn = document.querySelector('.toTop');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 400) {
      toTopbtn.classList.add('show');
    } else {
      toTopbtn.classList.remove('show');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map