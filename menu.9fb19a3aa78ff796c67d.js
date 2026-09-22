/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/js/card.js":
/*!*****************************!*\
  !*** ./src/scss/js/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
class Card {
  constructor(_ref) {
    let {
      name,
      description,
      price,
      category,
      sizes
    } = _ref;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
  renderingCard() {
    let template = '';
    let card = document.createElement('div');
    card.className = 'menu__card';
    template += "<div class=\"menu__box\"><img class=\"menu__img\" src=\"assets/".concat(this.name, ".png\" alt=\"").concat(this.name, "\"></div>");
    template += "<div class=\"menu__card-content\">\n          <h3 class=\"menu__title\">".concat(this.name, "</h3>\n          <p class=\"menu__text\">").concat(this.description, "</p>\n          <p class=\"menu__price\">").concat(this.price, "</p></div>\n        </div>");
    card.innerHTML = template;
    return card;
  }
}

/***/ }),

/***/ "./src/scss/js/modal.js":
/*!******************************!*\
  !*** ./src/scss/js/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }
  buildModal(content) {
    //Overlay
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    //Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    //Close Button
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
    this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>';
    this.setContent(content);
    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    // Open Modal
    this.openModal();
  }
  createDomNode(node, element) {
    node = document.createElement(element);
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    node.classList.add(...classes);
    return node;
  }
  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }
  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }
  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }
  openModal() {
    console.log(this.overlay);
    document.body.append(this.overlay);
  }
  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      document.querySelector('.overlay').remove();
    }
  }
}

/***/ }),

/***/ "./src/scss/js/products.js":
/*!*********************************!*\
  !*** ./src/scss/js/products.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   products: () => (/* binding */ products)
/* harmony export */ });
const products = [{
  "name": "Irish coffee",
  "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
  "price": "7.00",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Kahlua coffee",
  "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
  "price": "7.00",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Honey raf",
  "description": "Espresso with frothed milk, cream and aromatic honey",
  "price": "5.50",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Ice cappuccino",
  "description": "Cappuccino with soft thick foam in summer version with ice",
  "price": "5.00",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Espresso",
  "description": "Classic black coffee",
  "price": "4.50",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Latte",
  "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
  "price": "5.50",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Latte macchiato",
  "description": "Espresso with frothed milk and chocolate",
  "price": "5.50",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Coffee with cognac",
  "description": "Fragrant black coffee with cognac and whipped cream",
  "price": "6.50",
  "category": "coffee",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Moroccan",
  "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
  "price": "4.50",
  "category": "tea",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Ginger",
  "description": "Original black tea with fresh ginger, lemon and honey",
  "price": "5.00",
  "category": "tea",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Cranberry",
  "description": "Invigorating black tea with cranberry and honey",
  "price": "5.00",
  "category": "tea",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Sea buckthorn",
  "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
  "price": "5.50",
  "category": "tea",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Marble cheesecake",
  "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
  "price": "3.50",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Red velvet",
  "description": "Layer cake with cream cheese frosting",
  "price": "4.00",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Cheesecakes",
  "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
  "price": "4.50",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Creme brulee",
  "description": "Delicate creamy dessert in a caramel basket with wild berries",
  "price": "4.00",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Pancakes",
  "description": "Tender pancakes with strawberry jam and fresh strawberries",
  "price": "4.50",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Honey cake",
  "description": "Classic honey cake with delicate custard",
  "price": "4.50",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Chocolate cake",
  "description": "Cake with hot chocolate filling and nuts with dried apricots",
  "price": "5.50",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Black forest",
  "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
  "price": "6.50",
  "category": "dessert",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/scss/main.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Regular.otf */ "./src/assets/fonts/Inter-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter-Bold.otf */ "./src/assets/fonts/Inter-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/coffee-cup.svg */ "./src/assets/icons/coffee-cup.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/Icon-apple.svg */ "./src/assets/icons/contacts/Icon-apple.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/Icon-apple-light.svg */ "./src/assets/icons/contacts/Icon-apple-light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/icon-google.svg */ "./src/assets/icons/contacts/icon-google.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/icon-google-light.svg */ "./src/assets/icons/contacts/icon-google-light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/items/arrow-right.svg */ "./src/assets/icons/items/arrow-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/items/arrow-right-light.svg */ "./src/assets/icons/items/arrow-right-light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/items/arrow-left.svg */ "./src/assets/icons/items/arrow-left.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/items/arrow-left-light.svg */ "./src/assets/icons/items/arrow-left-light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/twitter.svg */ "./src/assets/icons/contacts/twitter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/twitter-dark.svg */ "./src/assets/icons/contacts/twitter-dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/instagram.svg */ "./src/assets/icons/contacts/instagram.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/instagram-dark.svg */ "./src/assets/icons/contacts/instagram-dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/facebook.svg */ "./src/assets/icons/contacts/facebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/facebook-dark.svg */ "./src/assets/icons/contacts/facebook-dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/pin-alt.svg */ "./src/assets/icons/contacts/pin-alt.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/phone.svg */ "./src/assets/icons/contacts/phone.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/contacts/clock.svg */ "./src/assets/icons/contacts/clock.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/mobile-screens.png */ "./src/assets/img/mobile-screens.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-cup.svg */ "./src/assets/icons/icon-cup.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-teapot.svg */ "./src/assets/icons/icon-teapot.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-cake.svg */ "./src/assets/icons/icon-cake.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/button-icon-dark.svg */ "./src/assets/icons/button-icon-dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-primary: #E1D4C9;
  --color-primary-darker: #B0907A;
  --color-background: #E1D4C9;
  --color-text: #403F3D;
  --color-text-light: #E1D4C9;
  --color-text-accent: #B0907A;
  --color-heading: #403F3D;
  --color-border-light: #C1B6AD;
  --color-border-dark: #665F55;
}

[data-theme] {
  --color-primary: #211F1D;
  --color-background: #292826;
  --color-text: #E1D4C9;
  --color-text-light: #403F3D;
  --color-text-accent: #C1B6AD;
  --color-border-light: #665F55;
  --color-border-dark: #C1B6AD;
}

.card__button, .button, h5, h4, h3, h2, h1, body {
  font-family: "Inter", sans-serif;
}

.menu .menu__card .menu__box .menu__img:hover, .menu .menu__card .menu__box .menu__img, .about .about__box .about__img:hover, .about .about__box .about__img, .navigation .navigation__link:hover::after, .navigation .navigation__link:focus::after, .navigation .navigation__link::after, .navigation, .footer .contacts__us .contacts__us-link:hover::after, .footer .contacts__us .contacts__us-link:focus::after, .footer .contacts__us .contacts__us-link::after, .footer .contacts__socials .socials .socials__button:nth-child(3):hover, .footer .contacts__socials .socials .socials__button:nth-child(2):hover, .footer .contacts__socials .socials .socials__button:nth-child(1):hover, .footer .contacts__socials .socials, .header__hamburger .hamburger .hamburger__line, .slider-control, .button-theme-switch:hover .switch-moon-icon, .button-theme-switch:hover .circle-moon-icon, .animation:hover, .card__button, .button_mobile:nth-child(2):hover, .button_mobile:nth-child(1):hover, .button_mobile, .button_menu:hover::after, .button_menu:focus::after, .button_menu::after, .button {
  transition: all 0.3s ease-out;
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  -webkit-text-decoration: underline;
  text-decoration: underline; /* 2 */
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 10px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  color: #403F3D;
  color: var(--color-text);
  background-color: #E1D4C9;
  background-color: var(--color-background);
}
body .body__wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
}
body section, body header, body footer {
  padding: 0 40px;
}

h1 {
  font-size: 7.2rem;
  font-style: normal;
  font-weight: bold;
  line-height: 7.56rem;
  color: #E1D4C9;
  color: var(--color-primary);
}

h2, h3, h4, h5 {
  color: #403F3D;
  color: var(--color-heading);
}

h2 {
  font-size: 6rem;
  font-style: normal;
  font-weight: bold;
  line-height: 7.5rem;
  color: #403F3D;
  color: var(--color-text);
}

h3 {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: bold;
  line-height: 3rem;
}

h4 {
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.3rem;
}

h5 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.65rem;
}

@font-face {
  font-family: "Inter-Regular", sans-serif;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("opentype");
}
@font-face {
  font-family: "Inter-Bold", sans-serif;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("opentype");
}
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ul > li {
  margin: 0;
}

.body {
  min-height: 100vh;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a,
link {
  display: inline-block;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  position: relative;
  border-radius: 10px;
  background-color: #E1D4C9;
  background-color: var(--color-primary);
  width: 675px;
  min-height: 120px;
  max-height: 90%;
  overflow: auto;
}

.modal__close-icon {
  position: absolute;
  top: 30px;
  right: 26px;
  cursor: pointer;
}
.modal__close-icon svg {
  pointer-events: none;
}

.button {
  width: 200px;
  height: 64px;
  padding: 20px 78px;
  border-radius: 100px;
  border: none;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: bold;
  line-height: 2.4rem;
  color: #403F3D;
  color: var(--color-text);
  background-color: #E1D4C9;
  background-color: var(--color-background);
}
.button_menu {
  width: 100px;
  height: 60px;
  padding: 0;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 100% 46% no-repeat;
  display: inline-block;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: bold;
  line-height: 2.4rem;
  line-height: 150%;
}
.button_menu::after {
  display: block;
  content: "";
  width: 0;
  height: 2px;
  margin: 0 auto;
  background-color: #665F55;
  background-color: var(--color-border-dark);
}
.button_menu:hover::after, .button_menu:focus::after {
  width: 75%;
  margin-left: 30px;
}
.button:hover {
  background-color: #E1D4C9;
  background-color: var(--color-primary);
  cursor: pointer;
}
.button_mobile {
  border: 1px solid #665F55;
  border: 1px solid var(--color-border-dark);
  padding: 5px 25px 6px 63px;
  cursor: pointer;
}
.button_mobile:nth-child(1) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat 13% 50%;
}
.button_mobile:nth-child(1):hover {
  background: #665F55 url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat 13% 50%;
  background: var(--color-border-dark) url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat 13% 50%;
  color: #C1B6AD;
  color: var(--color-border-light);
}
.button_mobile:nth-child(2) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat 13% 50%;
}
.button_mobile:nth-child(2):hover {
  background: #665F55 url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat 13% 50%;
  background: var(--color-border-dark) url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat 13% 50%;
  color: #C1B6AD;
  color: var(--color-border-light);
}

.card__button {
  font-size: rem;
  font-style: normal;
  font-weight: 400;
  line-height: rem;
  background-color: #color;
  border-radius: 30px;
  color: #color;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__button:hover {
  background-color: #E1D4C9;
  background-color: var(--color-primary);
  cursor: pointer;
}

.socials__button {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 1px solid #C1B6AD;
  border: 1px solid var(--color-border-light);
}

.animation:hover {
  background: #E1D4C9 url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat 70% 50%;
  background: var(--color-primary) url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat 70% 50%;
}

.button_inner {
  display: none !important;
}

.button-theme-switch {
  border: none;
  background-color: #E1D4C9;
  background-color: var(--color-background);
}
.button-theme-switch .circle-sun-icon {
  fill: #B0907A;
  fill: var(--color-primary-darker);
}
.button-theme-switch .circle-moon-icon {
  fill: #E1D4C9;
  fill: var(--color-background);
}
.button-theme-switch .switch-moon-icon {
  fill: #403F3D;
  fill: var(--color-text);
}
.button-theme-switch:hover .circle-moon-icon {
  fill: #665F55;
  fill: var(--color-border-dark);
}
.button-theme-switch:hover .switch-moon-icon {
  fill: #E1D4C9;
  fill: var(--color-background);
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-row: 2/3;
  grid-column: 2/3;
}
.slider .slider__container {
  overflow: hidden;
  width: 480px;
}
.slider .slider__container .carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 1440px;
  left: -480px;
}
.slider .slider__container .carousel .slider-card {
  width: 480px;
}
.slider .slider__container .carousel .slider-card .slider-card__text, .slider .slider__container .carousel .slider-card .slider-card__title, .slider .slider__container .carousel .slider-card .slider-card__price {
  text-align: center;
  margin-top: 17px;
}
.slider .slider__container .carousel .slider-card .slider-card__price {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: bold;
  line-height: 3rem;
}
.move-left {
  animation: roll-left 0.3s;
}

.move-right {
  animation: roll-right 0.3s;
}

@keyframes roll-left {
  from {
    left: -348px;
  }
  to {
    left: 0;
  }
  @media (max-width: 767px) {
    from {
      left: -348px;
    }
    to {
      left: 0;
    }
  }
}
@keyframes roll-right {
  from {
    left: -480px;
  }
  to {
    left: -960px;
  }
  @media (max-width: 767px) {
    from {
      left: -348px;
    }
    to {
      left: -696px;
    }
  }
}
.slider-control {
  width: 60px;
  height: 60px;
  border: 1px solid #665F55;
  border: 1px solid var(--color-border-dark);
  border-radius: 100%;
  cursor: pointer;
}
.slider-control.right {
  grid-column: 3/4;
  grid-row: 2/3;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) 50% 50% no-repeat;
  margin-right: 4px;
}
.slider-control.right:hover {
  background: #665F55 url(${___CSS_LOADER_URL_REPLACEMENT_8___}) 50% 50% no-repeat;
  background: var(--color-border-dark) url(${___CSS_LOADER_URL_REPLACEMENT_8___}) 50% 50% no-repeat;
}
.slider-control.left {
  grid-column: 1/2;
  grid-row: 2/3;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) 50% 50% no-repeat;
  margin-left: 4px;
}
.slider-control.left:hover {
  background: #665F55 url(${___CSS_LOADER_URL_REPLACEMENT_10___}) 50% 50% no-repeat;
  background: var(--color-border-dark) url(${___CSS_LOADER_URL_REPLACEMENT_10___}) 50% 50% no-repeat;
}

.progress-bar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-column: 2/3;
  grid-row: 3/4;
  gap: 12px;
}
.progress-bar-wrapper .progress-bar {
  width: 40px;
  height: 4px;
  background-color: #C1B6AD;
  background-color: var(--color-border-light);
  border-radius: 100px;
}
.progress-bar-wrapper .progress-bar.active-bar {
  background: #665F55;
  background: var(--color-border-dark);
}

.header__hamburger {
  width: 60px;
  align-self: end;
  justify-self: flex-end;
}
.header__hamburger .hamburger {
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid #665F55;
  border: 1px solid var(--color-border-dark);
  z-index: 4;
}
.header__hamburger .hamburger .hamburger__line {
  position: absolute;
  left: 30%;
  width: 40%;
  height: 2px;
  background-color: #665F55;
  background-color: var(--color-border-dark);
}
.header__hamburger .hamburger .hamburger__line:nth-child(1) {
  top: 40%;
}
.header__hamburger .hamburger .hamburger__line:nth-child(2) {
  bottom: 35%;
}
.header__hamburger .hamburger.open .hamburger__line {
  transform: scale(0);
}
.header__hamburger .hamburger.open .hamburger__line:nth-child(1) {
  transform: rotate(-45deg);
  top: calc(50% - 1px);
}
.header__hamburger .hamburger.open .hamburger__line:nth-child(2) {
  transform: rotate(45deg);
  bottom: calc(50% - 1px);
}

.hidden {
  display: none;
}

.blackout {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(41, 41, 41, 0.6);
  cursor: pointer;
}

.scroll-disabled {
  overflow-y: hidden;
}

.header {
  margin-top: 20px;
  margin-bottom: 20px;
}
.header .logo {
  z-index: 4;
}

.footer {
  margin-top: 100px;
}
.footer .footer__wrapper {
  background-color: #665F55;
  background-color: var(--color-border-dark);
  border-radius: 40px;
  margin-bottom: 40px;
}
.footer .contacts__socials {
  grid-column: 2/3;
  grid-row: 2/3;
}
.footer .contacts__socials .footer__title {
  color: #E1D4C9;
  color: var(--color-text-light);
}
.footer .contacts__socials .footer__title .cursive {
  color: #B0907A;
  color: var(--color-text-accent);
}
.footer .contacts__socials .socials {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 12px;
}
.footer .contacts__socials .socials .socials__button:nth-child(1) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_11___}) no-repeat 50% 50%;
}
.footer .contacts__socials .socials .socials__button:nth-child(1):hover {
  background: #E1D4C9 url(${___CSS_LOADER_URL_REPLACEMENT_12___}) no-repeat 50% 50%;
  background: var(--color-primary) url(${___CSS_LOADER_URL_REPLACEMENT_12___}) no-repeat 50% 50%;
}
.footer .contacts__socials .socials .socials__button:nth-child(2) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_13___}) no-repeat 50% 50%;
}
.footer .contacts__socials .socials .socials__button:nth-child(2):hover {
  background: #E1D4C9 url(${___CSS_LOADER_URL_REPLACEMENT_14___}) no-repeat 50% 50%;
  background: var(--color-primary) url(${___CSS_LOADER_URL_REPLACEMENT_14___}) no-repeat 50% 50%;
}
.footer .contacts__socials .socials .socials__button:nth-child(3) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_15___}) no-repeat 50% 50%;
}
.footer .contacts__socials .socials .socials__button:nth-child(3):hover {
  background: #E1D4C9 url(${___CSS_LOADER_URL_REPLACEMENT_16___}) no-repeat 50% 50%;
  background: var(--color-primary) url(${___CSS_LOADER_URL_REPLACEMENT_16___}) no-repeat 50% 50%;
}
.footer .contacts__us {
  grid-column: 4/5;
  grid-row: 2/3;
  color: #E1D4C9;
  color: var(--color-text-light);
}
.footer .contacts__us .contacts__us-title {
  color: #E1D4C9;
  color: var(--color-text-light);
  margin-top: 27px;
  margin-bottom: 34px;
  font-size: 2;
  font-style: bold;
  font-weight: 3rem;
  line-height: 4rem;
}
.footer .contacts__us .contacts__us-links {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 18px;
}
.footer .contacts__us .contacts__us-link {
  padding-left: 29px;
}
.footer .contacts__us .contacts__us-link:nth-child(1) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_17___}) no-repeat 0 50%;
}
.footer .contacts__us .contacts__us-link:nth-child(2) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_18___}) no-repeat 0 50%;
}
.footer .contacts__us .contacts__us-link:nth-child(3) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_19___}) no-repeat 0 50%;
}
.footer .contacts__us .contacts__us-link::after {
  display: block;
  content: "";
  width: 0;
  height: 2px;
  margin: 0 auto;
  background-color: #E1D4C9;
  background-color: var(--color-primary);
}
.footer .contacts__us .contacts__us-link:hover::after, .footer .contacts__us .contacts__us-link:focus::after {
  width: 100%;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  list-style-type: none;
  column-gap: 39.5px;
  height: 63px;
  margin-right: 12px;
}
.navigation .navigation__link {
  display: inline-block;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: bold;
  line-height: 2.4rem;
  color: #color;
  line-height: 150%;
  height: 30px;
}
.navigation .navigation__link::after {
  display: block;
  content: "";
  width: 0;
  height: 2px;
  margin: 0 auto;
  background-color: #665F55;
  background-color: var(--color-border-dark);
}
.navigation .navigation__link:hover::after, .navigation .navigation__link:focus::after {
  width: 100%;
}
.navigation.active {
  right: 0;
}

.selected_link {
  -webkit-text-decoration: underline !important;
  text-decoration: underline !important;
  text-decoration-color: #E1D4C9 !important;
  text-decoration-color: var(--color-primary) !important;
}

.selected_link {
  text-underline-position: under;
  color: #E1D4C9;
  color: var(--color-primary);
}

.wrapper {
  max-width: 1360px;
  margin: auto;
}

.grid-main-page {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 0;
  gap: 0;
}

.grid-our-page {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 0;
  gap: 0;
}

.grid-header {
  display: grid;
  grid-template-columns: 100px 1fr 100px 100px;
  grid-template-rows: 60px;
}

.grid-enjoy {
  display: grid;
  grid-template-columns: 100px 530px 1fr;
  grid-template-rows: 100px 444px 100px;
}

.grid-favourites-coffee {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: 75px 640px 4px;
  grid-row-gap: 40px;
  row-gap: 40px;
  align-items: center;
}

.grid-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 225px 430px 1fr 430px;
  grid-gap: 40px;
  gap: 40px;
}

.grid-mobile-app {
  display: grid;
  grid-template-columns: 630px 1fr;
  grid-template-rows: 144px 1fr 144px;
}

.grid-footer {
  display: grid;
  grid-template-columns: 100px 530px 100px 530px 100px;
  grid-template-rows: 100px 250px 100px;
}

.grid-menu {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 46px minmax(500px, 1052px);
  grid-row-gap: 40px;
  row-gap: 40px;
}

.grid-menu-s {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 46px 1052px;
  grid-row-gap: 40px;
  row-gap: 40px;
}

.menu__cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 310px);
  grid-template-rows: repeat(2, minmax(0, 506px));
  grid-gap: 40px;
  gap: 40px;
}

.menu__cards-grid-s {
  display: grid;
  grid-template-columns: repeat(4, 310px);
  grid-template-rows: repeat(2, 506px);
  grid-gap: 40px;
  gap: 40px;
}

.layout-5-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.layout-5-column > * {
  flex-basis: 0%;
}

.layout-4-column {
  flex-wrap: wrap;
}

.layout-3-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.layout-3-column > * {
  flex-basis: 0%;
}

.layout-2-column {
  display: flex;
  justify-content: spacespace-between;
  align-items: center;
  flex-direction: row;
}

.enjoy .enjoy__video {
  grid-row: 1/4;
  grid-column: 1/4;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
}

.enjoy__content {
  display: flex;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  grid-row: 2/3;
  grid-column: 2/3;
  gap: 40px;
}
.enjoy__content .enjoy__text {
  color: #E1D4C9;
  color: var(--color-text-light);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
}
.enjoy__content .enjoy__cursive {
  color: #B0907A;
  color: var(--color-primary-darker);
}

.favourites-coffee {
  margin-top: 100px;
}
.favourites-coffee .favourites-coffee__title {
  grid-row: 1/2;
  grid-column: 1/4;
  text-align: center;
}
.favourites-coffee .favourites-coffee__title .favourites-coffee__cursive {
  color: #B0907A;
  color: var(--color-text-accent);
}

.about {
  margin-top: 100px;
}
.about .about__cursive {
  color: #B0907A;
  color: var(--color-text-accent);
}
.about .about__title {
  grid-column: 1/3;
  grid-row: 1/2;
  letter-spacing: -0.4px;
}
.about .about__box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  border-radius: 20px;
}
.about .about__box:nth-child(1n) {
  width: 660px;
  height: 590px;
  grid-column: 1/2;
  grid-row: 2/4;
}
.about .about__box:nth-child(2n) {
  width: 660px;
  height: 430px;
  grid-column: 1/2;
  grid-row: 4/5;
}
.about .about__box:nth-child(3n) {
  width: 660px;
  height: 430px;
  grid-column: 2/3;
  grid-row: 2/3;
}
.about .about__box:nth-child(4n) {
  width: 660px;
  height: 590px;
  grid-column: 2/3;
  grid-row: 3/5;
}
.about .about__box .about__img {
  max-width: none;
  max-width: initial;
}
.about .about__box .about__img:hover {
  transform: scale(0.92);
}

.mobile-app {
  margin-top: 100px;
}
.mobile-app .mobile-app__wrapper {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_20___}) no-repeat 100% 0;
}
.mobile-app .mobile-app__wrapper .mobile-app__cursive {
  color: #B0907A;
  color: var(--color-text-accent);
  letter-spacing: 0.01px;
}
.mobile-app .mobile-app__wrapper .mobile-app__content {
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  flex-direction: column;
  gap: 40px;
}
.mobile-app .mobile-app__wrapper .mobile-app__content .mobile-app__buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 20px;
}
.mobile-app .mobile-app__wrapper .mobile-app__content .mobile-app__buttons .button__text .button__text-1 {
  font-size: 1rem;
  font-style: bold;
  font-weight: 4rem;
  line-height: 1;
}

.menu {
  margin-top: 20px;
}
.menu .menu-page__title {
  color: #403F3D;
  color: var(--color-text);
  text-align: center;
  padding: 0 250px 0 250px;
}
.menu .menu-page__title .cursive {
  color: #B0907A;
  color: var(--color-text-accent);
}
.menu .menu-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  padding: 0;
}
.menu .menu-buttons .menu__button {
  width: auto;
  height: 46px;
  padding: 11px 16px 8px 45px;
  border: 1px solid #C1B6AD;
  border: 1px solid var(--color-border-light);
  border-radius: 100px;
}
.menu .menu-buttons .menu__button:nth-child(1) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_21___}) 9% 50% no-repeat;
}
.menu .menu-buttons .menu__button:nth-child(2) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_22___}) 9% 50% no-repeat;
}
.menu .menu-buttons .menu__button:nth-child(3) {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_23___}) 9% 50% no-repeat;
}
.menu .menu-buttons .menu__button_selected {
  background-color: #665F55 !important;
  background-color: var(--color-border-dark) !important;
}
.menu .menu-buttons .menu__button_selected {
  color: #E1D4C9;
  color: var(--color-text-light);
}
.menu .menu-buttons .menu__button:hover {
  background-color: #665F55;
  background-color: var(--color-border-dark);
  color: #E1D4C9;
  color: var(--color-text-light);
}
.menu .menu__card {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #C1B6AD;
  border: 1px solid var(--color-border-light);
  border-radius: 40px;
}
.menu .menu__card .menu__box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  border-radius: 40px;
  width: 309px;
  height: 310px;
}
.menu .menu__card .menu__box .menu__img {
  max-width: none;
  max-width: initial;
}
.menu .menu__card .menu__box .menu__img:hover {
  transform: scale(0.92);
}
.menu .menu__card .menu__card-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 20px;
  height: 156px;
}
.menu .menu__card .menu__text {
  min-height: 72px;
}
.menu .menu__card .menu__price {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: bold;
  line-height: 3rem;
}
.menu .cards-button {
  width: 60px;
  height: 60px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_24___});
  display: none;
  justify-self: center;
}

.display-none {
  display: none !important;
}

@media (max-width: 767px) {
  body section, body header, body footer {
    padding: 0 16px;
  }
  h1 {
    font-size: 4.2rem;
    font-style: normal;
    font-weight: bold;
    line-height: 4.83rem;
  }
  h2 {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: bold;
    line-height: 4rem;
  }
  .modal {
    width: 90%;
  }
  .button_menu {
    display: none;
  }
  .button_inner {
    display: inline-block !important;
  }
  .slider .slider__container {
    width: 348px;
  }
  .slider .slider__container .carousel {
    width: 1044px;
    left: -348px;
  }
  .slider .slider__container .carousel .slider-card {
    width: 348px;
  }
  .slider-control {
    display: none;
  }
  .header__hamburger .hamburger {
    display: inline-block;
  }
  .navigation .navigation__link {
    font-size: 2.9rem;
    font-style: normal;
    font-weight: bold;
    line-height: 4rem;
  }
  .navigation {
    position: absolute;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    margin-right: 0;
    background-color: #E1D4C9;
    background-color: var(--color-primary);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
  }
  .enjoy .enjoy__video {
    grid-column: 1/5;
  }
  .mobile-app .mobile-app__wrapper .mobile-app__content .mobile-app__buttons {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .menu .menu-buttons {
    gap: 8px;
  }
}

@media (max-width: 1439px) {
  .button_enjoy {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-position: 70% 50%;
  }
  .footer .contacts__socials {
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 0 33px 0 60px;
  }
  .footer .contacts__us {
    grid-column: 1/2;
    grid-row: 4/5;
    padding-left: 60px;
  }
  .grid-enjoy {
    display: grid;
    grid-template-columns: 60px 530px 1fr;
    grid-template-rows: 100px 444px 100px;
  }
  .grid-favourites-coffee {
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    grid-template-rows: 150px 640px 4px;
  }
  .grid-about {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 590px 590px;
    grid-column-gap: 0;
    grid-row-gap: 40px;
  }
  .grid-mobile-app {
    display: grid;
    grid-template-columns: 688px;
    grid-template-rows: 342px 630px;
    grid-row-gap: 100px;
    justify-content: center;
  }
  .grid-footer {
    display: grid;
    grid-template-columns: 688px;
    grid-template-rows: 100px 250px 68px 186px 132px;
    justify-content: center;
  }
  .grid-menu {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 225px 46px 1052px 60px;
  }
  .grid-menu-s {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 225px 46px 2144px 60px;
  }
  .menu__cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 310px);
    grid-template-rows: repeat(4, 506px);
    justify-self: center;
  }
  .menu__cards-grid-s {
    display: grid;
    grid-template-columns: repeat(2, 310px);
    grid-template-rows: repeat(8, 506px);
    justify-self: center;
  }
  .layout-2-column {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .about .about__box:nth-child(1n) {
    width: 688px;
    grid-row: 2/3;
    justify-self: center;
  }
  .about .about__box:nth-child(3n) {
    display: none;
  }
  .about .about__box:nth-child(4n) {
    width: 688px;
    grid-column: 1/2;
    grid-row: 3/4;
    justify-self: center;
  }
  .mobile-app .mobile-app__wrapper {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_20___}) no-repeat 50% 100%;
  }
  .mobile-app .mobile-app__wrapper .mobile-app__content {
    grid-row: 1/2;
    justify-self: center;
  }
  .menu .menu-page__title {
    padding: 0;
  }
  .menu .menu__card:nth-child(n+5) {
    display: none;
  }
  .menu .cards-button {
    display: block;
  }
}

@media (max-width: 1439px) and (max-width: 767px) {
  .footer .contacts__socials {
    padding: 0 0 0 17px;
  }
  .footer .contacts__us {
    padding-left: 17px;
  }
  .grid-enjoy {
    display: grid;
    grid-template-columns: 16px minmax(300px, 380px) 16px minmax(0, auto);
    grid-template-rows: 60px 432px 60px;
  }
  .grid-favourites-coffee {
    display: grid;
    grid-template-columns: 1px 1fr 1px;
    grid-template-rows: 1fr 532px 4px;
  }
  .grid-mobile-app {
    display: grid;
    grid-template-columns: 348px;
    grid-template-rows: 380px 348px;
    grid-row-gap: 40px;
  }
  .grid-footer {
    display: grid;
    grid-template-columns: 348px;
    grid-template-rows: 60px 180px 10px 145px 132px;
  }
  .grid-menu {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 46px 2144px 60px;
  }
  .grid-menu-s {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 46px 4288px 60px;
  }
  .menu__cards-grid {
    display: grid;
    grid-template-columns: 310px;
    grid-template-rows: repeat(4, 506px);
  }
  .menu__cards-grid-s {
    display: grid;
    grid-template-columns: 310px;
    grid-template-rows: repeat(8, 506px);
  }
  .about .about__box:nth-child(1n) {
    width: 348px;
  }
  .about .about__box:nth-child(4n) {
    width: 348px;
  }
  .mobile-app .mobile-app__wrapper {
    background-size: 348px 348px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
    background-repeat: no-repeat;
    background-position: 50% 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/utils/_variables.scss","webpack://./src/scss/main.scss","webpack://./src/scss/utils/_placeholders.scss","webpack://./src/scss/vendors/_normalize.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/utils/_mixins.scss","webpack://./src/scss/base/_fonts.scss","webpack://./src/scss/base/_reset.scss","webpack://./src/scss/base/_modal.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_slider.scss","webpack://./src/scss/components/_slider-control.scss","webpack://./src/scss/components/_hamburger.scss","webpack://./src/scss/components/_blackout.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_nav.scss","webpack://./src/scss/layout/_wrapper.scss","webpack://./src/scss/layout/_grid.scss","webpack://./src/scss/layout/_columns.scss","webpack://./src/scss/layout/_enjoy.scss","webpack://./src/scss/layout/_favourites-coffee.scss","webpack://./src/scss/layout/_about.scss","webpack://./src/scss/layout/_mobile-app.scss","webpack://./src/scss/layout/_menu.scss","webpack://./<no source>"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,+BAAA;EACA,2BAAA;EAEA,qBAAA;EACA,2BAAA;EACA,4BAAA;EACA,wBAAA;EAEA,6BAAA;EACA,4BAAA;ACDF;;ADIA;EACE,wBAAA;EACA,2BAAA;EAGA,qBAAA;EAGA,2BAAA;EACA,4BAAA;EAEA,6BAAA;EACA,4BAAA;ACNF;;ACpBA;EACE,gCAAA;ADuBF;;AChBA;EACE,6BAAA;ADmBF;;AE5BA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;AF4BF;;AEzBA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;AF0BF;;AEvBA;;EAAA;AAIA;EACE,cAAA;AFyBF;;AEtBA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;AFwBF;;AErBA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;AFsBF;;AEnBA;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AFqBF;;AElBA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;AFmBF;;AEhBA;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,kCAAA;EAAA,0BAAA,EAAA,MAAA;EACA,0BAAA;EAAA,yCAAA;UAAA,iCAAA,EAAA,MAAA;AFkBF;;AEfA;;EAAA;AAIA;;EAEE,mBAAA;AFiBF;;AEdA;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AFgBF;;AEbA;;EAAA;AAIA;EACE,cAAA;AFeF;;AEZA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AFcF;;AEXA;EACE,eAAA;AFcF;;AEXA;EACE,WAAA;AFcF;;AEXA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;AFYF;;AETA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AFUF;;AEPA;;;EAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;AFSF;;AENA;;;EAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;AFQF;;AELA;;EAAA;AAIA;;;;EAIE,0BAAA;AFOF;;AEJA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;AFMF;;AEHA;;EAAA;AAIA;;;;EAIE,8BAAA;AFKF;;AEFA;;EAAA;AAIA;EACE,8BAAA;AFIF;;AEDA;;;;;EAAA;AAOA;EACE,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AFGF;;AEAA;;EAAA;AAIA;EACE,wBAAA;AFEF;;AECA;;EAAA;AAIA;EACE,cAAA;AFCF;;AEEA;;;EAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AFAF;;AEGA;;EAAA;AAIA;;EAEE,YAAA;AFDF;;AEIA;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AFFF;;AEKA;;EAAA;AAIA;EACE,wBAAA;AFHF;;AEMA;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AFJF;;AEOA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;AFNF;;AESA;;EAAA;AAIA;EACE,kBAAA;AFPF;;AEUA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;AFTF;;AEYA;;EAAA;AAIA;EACE,aAAA;AFVF;;AGnVA;EACE,sBAAA;EACA,uBAAA;EACA,eAAA;AHsVF;;AGnVA;;;EAGE,mBAAA;AHsVF;;AGnVA;ECXE,iBDYc;ECXd,kBAFuD;EAGvD,gBAH0C;EAI1C,mBDSsB;EAEtB,cJkBW;EIlBX,wBJkBW;EIjBX,yBJeiB;EIfjB,yCJeiB;ACyUnB;AGtVE;EACE,gBAAA;EACA,WAAA;EACA,kBAAA;AHwVJ;AGrVE;EACE,eAAA;AHuVJ;;AG9UA;ECjCE,iBDmCc;EClCd,kBAFuD;EAGvD,iBDiC+B;EChC/B,oBDgCsB;EACtB,cJRc;EIQd,2BJRc;ACgWhB;;AGjVA;EACE,cJTc;EISd,2BJTc;ACqWhB;;AGzVA;EC/CE,eDiDc;EChDd,kBAFuD;EAGvD,iBD+C4B;EC9C5B,mBD8CoB;EACpB,cJlBW;EIkBX,wBJlBW;ACgXb;;AGxVA;ECxDE,iBD0Dc;ECzDd,kBAFuD;EAGvD,iBDwD4B;ECvD5B,iBDuDsB;AHqWxB;;AGlWA;EC7DE,eD+Dc;EC9Dd,kBAFuD;EAGvD,gBAH0C;EAI1C,mBD4DoB;AHuWtB;;AGpWA;EClEE,iBDoEc;ECnEd,kBAFuD;EAGvD,gBAH0C;EAI1C,oBDiEsB;AHyWxB;;AK9aA;EACE,wCAAA;EACA,+DAAA;ALibF;AK/aA;EACE,qCAAA;EACA,+DAAA;ALibF;AMvbA;;;;;;;;;EASE,SAAA;ANybF;;AMtbA;EACE,iBAAA;ANybF;;AMtbA;EACE,gBAAA;ANybF;;AMtbA;EACE,cAAA;EACA,eAAA;EACA,YAAA;ANybF;;AMtbA;;EAEE,qBAAA;EACA,cAAA;EACA,6BAAA;EAAA,qBAAA;ANybF;;AOvdA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AP0dF;;AOvdA;EACE,kBAAA;EACA,mBAAA;EACA,yBRcc;EQdd,sCRcc;EQbd,YAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;AP0dF;;AOldA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AP0dF;AOzdE;EACE,oBAAA;AP2dJ;;AQ5fA;EACE,YAAA;EACA,YAAA;EAEA,kBAAA;EACA,oBAAA;EACA,YAAA;EJLA,iBIQc;EJPd,kBAFuD;EAGvD,iBIM8B;EJL9B,mBIKsB;EACtB,cTuBW;ESvBX,wBTuBW;ESrBX,yBTmBiB;ESnBjB,yCTmBiB;AC2enB;AQlfE;EACE,YAAA;EACA,YAAA;EAEA,UAAA;EAEA,sEAAA;EAEA,qBAAA;EACA,6BAAA;EAAA,qBAAA;EJhCF,iBIkCgB;EJjChB,kBAFuD;EAGvD,iBIgCgC;EJ/BhC,mBI+BwB;EAEtB,iBAAA;ARyfJ;AQnfI;EACE,cAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,yBTVc;ESUd,0CTVc;ACogBpB;AQtfI;EACE,UAAA;EACA,iBAAA;ARwfN;AQnfE;EACE,yBThCY;ESgCZ,sCThCY;ESiCZ,eAAA;ARqfJ;AQlfE;EACE,yBAAA;EAAA,0CAAA;EACA,0BAAA;EACA,eAAA;ARofJ;AQhfI;EACE,qEAAA;ARkfN;AQhfM;EACE,6EAAA;EAAA,8FAAA;EACA,cTvCa;ESuCb,gCTvCa;ACyhBrB;AQ7eI;EACE,qEAAA;AR+eN;AQ7eM;EACE,6EAAA;EAAA,8FAAA;EACA,cTjDa;ESiDb,gCTjDa;ACgiBrB;;AQxeA;EJ7FE,cIiGc;EJhGd,kBAFuD;EAGvD,gBAH0C;EAI1C,gBI8FmB;EAEnB,wBTlDe;ESoDf,mBAAA;EACA,aT5DY;ES6DZ,aAAA;EACA,uBAAA;EACA,mBAAA;ARyeF;AQteE;EACE,yBTjFY;ESiFZ,sCTjFY;ESkFZ,eAAA;ARweJ;;AQpeA;EACE,WAAA;EACA,YAAA;EAEA,mBAAA;EAEA,yBAAA;EAAA,2CAAA;ARqeF;;AQ/dE;EACE,6EAAA;EAAA,0FAAA;ARkeJ;;AQ5dA;EACE,wBAAA;AR+dF;;AQxdA;EACE,YAAA;EACA,yBTjHiB;ESiHjB,yCTjHiB;ACilBnB;AQ7dE;EACE,aTtHmB;ESsHnB,iCTtHmB;ACqlBvB;AQzdE;EACE,aT5He;ES4Hf,6BT5He;ACulBnB;AQzdE;EACE,aT7HS;ES6HT,uBT7HS;ACwlBb;AQtdI;EACE,aT7Hc;ES6Hd,8BT7Hc;ACqlBpB;AQrdI;EACE,aTzIa;ESyIb,6BTzIa;ACgmBnB;;AS/nBA;ELQE,aAAA;EACA,uBKRc;ELSd,mBKTsB;ELUtB,mBKV8B;EAE9B,aAAA;EACA,gBAAA;ATooBF;ASloBE;EACE,gBAAA;EACA,YAAA;ATooBJ;AShoBI;EACE,kBAAA;ELLJ,aAAA;EACA,uBKKkB;ELJlB,mBKI0B;ELH1B,mBKGkC;EAC9B,aAAA;EACA,YAAA;AT0oBN;ASroBM;EACE,YAAA;AT6oBR;ASvoBQ;EACE,kBAAA;EAEA,gBAAA;AT6oBV;AS1oBQ;ELjCN,iBKkCsB;ELjCtB,kBAFuD;EAGvD,iBKgCoC;EL/BpC,iBK+B8B;AT+oBhC;ASroBA;EACE,yBAAA;ATuoBF;;ASroBA;EACE,0BAAA;ATwoBF;;ASroBA;EACE;IAAM,YAAA;ETyoBN;ESxoBA;IAAI,OAAA;ET2oBJ;EI1pBA;IKiBE;MAAM,YAAA;IT6oBN;IS5oBA;MAAI,OAAA;IT+oBJ;EACF;AACF;AS7oBA;EACE;IAAM,YAAA;ETgpBN;ES/oBA;IAAI,YAAA;ETkpBJ;EI1qBA;IK0BE;MAAM,YAAA;ITopBN;ISnpBA;MAAI,YAAA;ITspBJ;EACF;AACF;AU1tBA;EACE,WAAA;EACA,YAAA;EAEA,yBAAA;EAAA,0CAAA;EACA,mBAAA;EACA,eAAA;AV2tBF;AUntBE;EACE,gBAAA;EACA,aAAA;EACA,qEAAA;EAEA,iBAAA;AVytBJ;AUvtBI;EACE,6EAAA;EAAA,8FAAA;AVytBN;AUrtBE;EACE,gBAAA;EACA,aAAA;EACA,qEAAA;EAEA,gBAAA;AVstBJ;AUptBI;EACE,8EAAA;EAAA,+FAAA;AVstBN;;AUhtBA;ENhCE,aAAA;EACA,uBMgCc;EN/Bd,mBAH2C;EAI3C,mBAJ+D;EMoC/D,gBAAA;EACA,aAAA;EAEA,SAAA;AVotBF;AUltBE;EACE,WAAA;EACA,WAAA;EACA,yBXbiB;EWajB,2CXbiB;EWcjB,oBAAA;AVotBJ;AUntBI;EACE,mBXfc;EWed,oCXfc;ACouBpB;;AW3wBA;EAEE,WAAA;EACA,eAAA;EACA,sBAAA;AX6wBF;AW3wBE;EACE,aAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EAAA,0CAAA;EAEA,UAAA;AX4wBJ;AWtwBI;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,yBZcc;EYdd,0CZcc;AC+vBpB;AW1wBM;EACE,QAAA;AX4wBR;AWzwBM;EACE,WAAA;AX2wBR;AWtwBM;EACE,mBAAA;AXwwBR;AWtwBQ;EACE,yBAAA;EACA,oBAAA;AXwwBV;AWrwBQ;EACE,wBAAA;EACA,uBAAA;AXuwBV;;AYvzBA;EACE,aAAA;AZ0zBF;;AYvzBA;EACE,YAAA;EACA,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,uCAAA;EACA,eAAA;AZ0zBF;;AYvzBA;EACE,kBAAA;AZ0zBF;;Aaz0BA;EAEE,gBAAA;EACA,mBAAA;Ab20BF;Aaz0BA;EACE,UAAA;Ab20BF;;Acj1BA;EACE,iBAAA;Ado1BF;Acl1BE;EACE,yBfmCgB;EenChB,0CfmCgB;EelChB,mBAAA;EACA,mBAAA;Ado1BJ;Acj1BE;EACE,gBAAA;EACA,aAAA;Adm1BJ;Acz0BI;EACE,cfYa;EeZb,8BfYa;AC20BnB;Acr1BM;EACE,cfUY;EeVZ,+BfUY;AC60BpB;Acn1BI;EACE,gBAAA;EVtBJ,aAAA;EACA,2BUuBkB;EVtBlB,mBUsB8B;EVrB9B,mBAJ+D;EU0B3D,SAAA;Adu1BN;Acj1BQ;EACE,sEAAA;Adm1BV;Acj1BU;EAEE,8EAAA;EAAA,2FAAA;Adk1BZ;Ac90BQ;EACE,sEAAA;Adg1BV;Ac90BU;EAEE,8EAAA;EAAA,2FAAA;Ad+0BZ;Ac30BQ;EACE,sEAAA;Ad60BV;Ac30BU;EAEE,8EAAA;EAAA,2FAAA;Ad40BZ;Acr0BE;EACE,gBAAA;EACA,aAAA;EAUA,cf/Ce;Ee+Cf,8Bf/Ce;AC62BnB;Ac5zBI;EACE,cflDa;EekDb,8BflDa;EeoDb,gBAAA;EACA,mBAAA;EVtFJ,YUwFkB;EVvFlB,gBUuFiC;EVtFjC,iBUsF2B;EVrF3B,iBUqFqB;Ad20BvB;Acx0BI;EVpFF,aAAA;EACA,2BUoFkB;EVnFlB,uBUmF8B;EVlF9B,sBUkF0C;EACtC,SAAA;Ad60BN;Acz0BI;EACE,kBAAA;Ad20BN;Acz0BM;EACE,oEAAA;Ad20BR;Acx0BM;EACE,oEAAA;Ad00BR;Acv0BM;EACE,oEAAA;Ady0BR;Act0BM;EACE,cAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,yBf1FQ;Ee0FR,sCf1FQ;ACk6BhB;Acp0BM;EACE,WAAA;Ads0BR;;Ael8BA;EXQE,aAAA;EACA,uBWRc;EXSd,mBWTsB;EXUtB,mBWV8B;EAC9B,qBAAA;EAEA,kBAAA;EAEA,YAAA;EAEA,kBAAA;Afq8BF;Aej8BE;EACE,qBAAA;EACA,6BAAA;EAAA,qBAAA;EXbF,iBWegB;EXdhB,kBAFuD;EAGvD,iBWagC;EXZhC,mBWYwB;EAEtB,ahBuBS;EgBrBT,iBAAA;EAEA,YAAA;Afk8BJ;Aeh8BI;EACE,cAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,yBhBSc;EgBTd,0ChBSc;ACy7BpB;Ae97BI;EACE,WAAA;Afg8BN;Aez6BE;EACE,QAAA;Afo8BJ;;Aeh8BA;EACE,6CAAA;EAAA,qCAAA;EACA,yCAAA;EAAA,sDAAA;Afq8BF;;Aev8BA;EAIE,8BAAA;EACA,chBvCc;EgBuCd,2BhBvCc;ACy+BhB;;AgBtgCA;EACE,iBAAA;EACA,YAAA;AhBygCF;;AiB3gCA;EACE,aAAA;EACA,0BAAA;EACA,6BAAA;EACA,WAAA;EAAA,MAAA;AjB8gCF;;AiB3gCA;EACE,aAAA;EACA,0BAAA;EACA,6BAAA;EACA,WAAA;EAAA,MAAA;AjB8gCF;;AiB3gCA;EACE,aAAA;EACA,4CAAA;EACA,wBAAA;AjB8gCF;;AiB3gCA;EbLE,aAAA;EACA,sCaKc;EbJd,qCaI+B;AjBghCjC;;AiBrgCA;EbjBE,aAAA;EACA,oCaiBc;EbhBd,kCagB6B;EAU7B,kBAAA;EAAA,aAAA;EAEA,mBAAA;AjB8gCF;;AiB3gCA;EbjCE,aAAA;EACA,8BaiCc;EbhCd,yCagCuB;EAEvB,cAAA;EAAA,SAAA;AjB6hCF;;AiBphCA;Eb7CE,aAAA;EACA,gCa6Cc;Eb5Cd,mCa4CyB;AjBkiC3B;;AiBrhCA;Eb3DE,aAAA;EACA,oDa2Dc;Eb1Dd,qCa0D6C;AjB2iC/C;;AiB9hCA;EbzEE,aAAA;EACA,0BayEc;EbxEd,oDawEmB;EACnB,kBAAA;EAAA,aAAA;AjBkjCF;;AiBxiCA;EbrFE,aAAA;EACA,0BaqFc;EbpFd,qCaoFmB;EACnB,kBAAA;EAAA,aAAA;AjB2jCF;;AiBjjCA;EbjGE,aAAA;EACA,uCaiGc;EbhGd,+CagGgC;EAChC,cAAA;EAAA,SAAA;AjBokCF;;AiBzjCA;Eb9GE,aAAA;EACA,uCa8Gc;Eb7Gd,oCa6GgC;EAChC,cAAA;EAAA,SAAA;AjB6kCF;;AkB5sCA;Ed0BE,aAAA;EACA,eAAA;EACA,8BAAA;AJqsCF;AIpsCE;EACE,cc7BuB;AlBmuC3B;;AkBhuCA;EACE,eAAA;AlBmuCF;;AkBhuCA;EdkBE,aAAA;EACA,eAAA;EACA,8BAAA;AJktCF;AIjtCE;EACE,ccrBuB;AlBwuC3B;;AkBruCA;EdJE,aAAA;EACA,mCcIc;EdHd,mBAH2C;EAI3C,mBAJ+D;AJivCjE;;AmBpvCE;EACE,aAAA;EACA,gBAAA;EAKA,WAAA;EAEA,WAAA;EACA,YAAA;EACA,iBAAA;EAEA,mBAAA;AnByvCJ;;AmBrvCA;EACE,aAAA;EfdA,aAAA;EACA,2Beec;Efdd,uBec0B;Efb1B,sBeasC;EAEtC,aAAA;EACA,gBAAA;EAMA,SAAA;AnByvCF;AmBvvCE;EACE,cpBFe;EoBEf,8BpBFe;EKjCjB,iBeoCgB;EfnChB,kBAFuD;EAGvD,gBAH0C;EAI1C,mBeiCwB;AnB4vC1B;AmBzvCE;EACE,cpBXmB;EoBWnB,kCpBXmB;ACswCvB;;AoBpyCA;EACE,iBAAA;ApBuyCF;AoBryCE;EACE,aAAA;EACA,gBAAA;EACA,kBAAA;ApBuyCJ;AoBryCI;EACE,crB0Bc;EqB1Bd,+BrB0Bc;AC6wCpB;;AqBhzCA;EACE,iBAAA;ArBmzCF;AqBjzCE;EACE,ctB+BgB;EsB/BhB,+BtB+BgB;ACoxCpB;AqBhzCE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;ArBkzCJ;AqB/yCE;EjBLA,aAAA;EACA,uBiBKgB;EjBJhB,mBiBIwB;EjBHxB,mBAJ+D;EiBQ7D,gBAAA;EACA,mBAAA;ArBozCJ;AqBlzCI;EACE,YAAA;EACA,aAAA;EAEA,gBAAA;EACA,aAAA;ArBmzCN;AqBpyCI;EACE,YAAA;EACA,aAAA;EAEA,gBAAA;EACA,aAAA;ArBizCN;AqB7yCI;EACE,YAAA;EACA,aAAA;EAEA,gBAAA;EACA,aAAA;ArB8yCN;AqBvyCI;EACE,YAAA;EACA,aAAA;EAEA,gBAAA;EACA,aAAA;ArB6yCN;AqB7xCI;EACE,eAAA;EAAA,kBAAA;ArB4yCN;AqB1yCM;EACE,sBAAA;ArB4yCR;;AsBh4CA;EACE,iBAAA;AtBm4CF;AsBj4CE;EACE,qEAAA;AtBm4CJ;AsBt3CI;EACE,cvBiBc;EuBjBd,+BvBiBc;EuBhBd,sBAAA;AtBq4CN;AsBl4CI;EACE,gBAAA;EACA,aAAA;ElBhBJ,aAAA;EACA,2BkBiBkB;ElBhBlB,0BkBgB8B;ElBf9B,sBkBe6C;EAEzC,SAAA;AtBq4CN;AsB/3CM;ElB1BJ,aAAA;EACA,2BkB0BoB;ElBzBpB,mBAH2C;EAI3C,mBAJ+D;EkB6BzD,SAAA;AtBo4CR;AsB73CU;ElB1CR,ekB2CwB;ElB1CxB,gBkB0CuC;ElBzCvC,iBkByCiC;ElBxCjC,ckBwC8B;AtB04ChC;;AuBt7CA;EACE,gBAAA;AvB+7CF;AuB77CE;EACE,cxB6BS;EwB7BT,wBxB6BS;EwB5BT,kBAAA;EACA,wBAAA;AvB+7CJ;AuBz7CI;EACE,cxBsBc;EwBtBd,+BxBsBc;AC06CpB;AuB57CE;EnBTA,aAAA;EACA,uBmBSgB;EnBRhB,mBAH2C;EAI3C,mBAJ+D;EmBY7D,SAAA;EACA,UAAA;AvBi8CJ;AuB57CI;EACE,WAAA;EACA,YAAA;EACA,2BAAA;EACA,yBAAA;EAAA,2CAAA;EACA,oBAAA;AvBm8CN;AuBl8CM;EACE,qEAAA;AvBo8CR;AuBl8CM;EACE,qEAAA;AvBo8CR;AuBl8CM;EACE,qEAAA;AvBo8CR;AuBl8CM;EACE,oCAAA;EAAA,qDAAA;AvBq8CR;AuBt8CM;EAEE,cxBRW;EwBQX,8BxBRW;AC48CnB;AuBl8CM;EACE,yBxBNY;EwBMZ,0CxBNY;EwBOZ,cxBZW;EwBYX,8BxBZW;ACg9CnB;AuB/7CE;EnB3CA,aAAA;EACA,2BmB2CgB;EnB1ChB,uBmB0C4B;EnBzC5B,sBmByCwC;EACtC,SAAA;EAEA,yBAAA;EAAA,2CAAA;EACA,mBAAA;AvBm8CJ;AuB77CI;EnBtDF,aAAA;EACA,uBmBsDkB;EnBrDlB,mBmBqD0B;EnBpD1B,mBAJ+D;EmByD3D,gBAAA;EACA,mBAAA;EAEA,YAAA;EACA,aAAA;AvBs8CN;AuBp8CM;EACE,eAAA;EAAA,kBAAA;AvBs8CR;AuBp8CQ;EACE,sBAAA;AvBs8CV;AuBh8CI;EnBxEF,aAAA;EACA,8BmBwEkB;EnBvElB,uBmBuEiC;EnBtEjC,sBmBsE6C;EACzC,eAAA;EACA,aAAA;AvBq8CN;AuBl8CI;EACE,gBAAA;AvBo8CN;AuBj8CI;EnBzFF,iBmB0FkB;EnBzFlB,kBAFuD;EAGvD,iBmBwFgC;EnBvFhC,iBmBuF0B;AvBs8C5B;AuBl8CE;EACE,WAAA;EACA,YAAA;EAEA,oDAAA;EAEA,aAAA;EAEA,oBAAA;AvBi8CJ;;AuBz7CA;EACE,wBAAA;AvBi8CF;;AwBjjDA;ErBwBE;IAII,eAAA;EHwVJ;EGlVF;ICjCE,iBDuCgB;ICtChB,kBAFuD;IAGvD,iBDqCiC;ICpCjC,oBDoCwB;EH4VxB;EGpVF;IC/CE,iBDoDgB;ICnDhB,kBAFuD;IAGvD,iBDkD8B;ICjD9B,iBDiDwB;EHmWxB;EO5YF;IAWI,UAAA;EP0dF;EQzdA;IAgBI,aAAA;ER0fJ;EQ5ZF;IAII,gCAAA;ERgeF;ESpmBA;IAII,YAAA;ETsoBJ;ESpoBE;IAMI,aAAA;IACA,YAAA;ET4oBN;ES1oBI;IAII,YAAA;ET8oBR;EUvqBF;IAWI,aAAA;EV0tBF;EW/tBA;IAWI,qBAAA;EX6wBJ;EelxBA;IXXA,iBWsCkB;IXrClB,kBAFuD;IAGvD,iBWoCgC;IXnChC,iBWmC0B;Efm8B1B;Ee1+BF;IA6CI,kBAAA;IACA,MAAA;IACA,YAAA;IACA,aAAA;IACA,WAAA;IAEA,eAAA;IACA,yBhBvBY;IgBuBZ,sChBvBY;IgBwBZ,UAAA;IX7CF,aAAA;IACA,uBW8CgB;IX7ChB,mBW6CwB;IX5CxB,sBW4CgC;IAC9B,SAAA;Efm8BF;EmBv/BA;IAII,gBAAA;EnBswCJ;EsB5uCI;IlB1BJ,aAAA;IACA,2BkB8BsB;IlB7BtB,uBkB6BkC;IlB5BlC,sBkB4B8C;EtBw4C9C;EuB95CA;IAMI,QAAA;EvBk8CJ;AA3KF;;AwB9yCA;EhBgBE;IAEI,yDAAA;IACA,4BAAA;IACA,4BAAA;ER4fJ;EcvgBA;IAII,gBAAA;IACA,aAAA;IACA,sBAAA;Edq1BJ;Ec/xBA;IAII,gBAAA;IACA,aAAA;IACA,kBAAA;Ed00BJ;EiBj4BF;IbLE,aAAA;IACA,qCaQgB;IbPhB,qCaOgC;EjBmhChC;EiB3gCF;IbjBE,aAAA;IACA,oCaoBgB;IbnBhB,mCamB+B;EjB6hC/B;EiBjhCF;IbjCE,aAAA;IACA,0BasCgB;IbrChB,mCaqCqB;IACnB,kBAAA;IACA,kBAAA;EjBgiCF;EiB5hCF;Ib7CE,aAAA;IACA,4Ba+CgB;Ib9ChB,+Ba8CuB;IACrB,mBAAA;IACA,uBAAA;EjBsiCF;EiB7hCF;Ib3DE,aAAA;IACA,4Ba+DgB;Ib9DhB,gDa8DuB;IACrB,uBAAA;EjB6iCF;EiBriCF;IbzEE,aAAA;IACA,0Ba4EgB;Ib3EhB,0Ca2EqB;EjBsjCrB;EiB9iCF;IbrFE,aAAA;IACA,0BawFgB;IbvFhB,0CauFqB;EjB+jCrB;EiBvjCF;IbjGE,aAAA;IACA,uCaoGgB;IbnGhB,oCamGkC;IAChC,oBAAA;EjBwkCF;EiBhkCF;Ib9GE,aAAA;IACA,uCaiHgB;IbhHhB,oCagHkC;IAChC,oBAAA;EjBilCF;EkBvsCF;IdJE,aAAA;IACA,8BcOgB;IdNhB,mBcM+B;IdL/B,sBcKuC;ElB+uCvC;EqB7uCE;IAQI,YAAA;IAEA,aAAA;IAEA,oBAAA;ErBkzCN;EqBjyCE;IAQI,aAAA;ErB+yCN;EqB3yCE;IAQI,YAAA;IAEA,gBAAA;IACA,aAAA;IAEA,oBAAA;ErB4yCN;EsBj3CA;IAII,uEAAA;EtBo4CJ;EsBr3CE;IA4BI,aAAA;IACA,oBAAA;EtBw4CN;EuBx7CA;IAMI,UAAA;EvBg8CJ;EuB/4CI;IACE,aAAA;EvBo8CN;EuBh6CA;IAWI,cAAA;EvBk8CJ;AApJF;;AwBx5CA;EVSE;IAQM,mBAAA;Edw1BN;EcpyBA;IAQM,kBAAA;Ed60BN;EiBt4BF;IbLE,aAAA;IACA,qEaWkB;IbVlB,mCaUkE;EjBuhClE;EiBlhCF;IbjBE,aAAA;IACA,kCauBkB;IbtBlB,iCasB+B;EjBiiC/B;EiB5gCF;Ib7CE,aAAA;IACA,4BaoDkB;IbnDlB,+BamDyB;IACrB,kBAAA;EjB0iCJ;EiBriCF;Ib3DE,aAAA;IACA,4BamEkB;IblElB,+CakEyB;EjBijCzB;EiB5iCF;IbzEE,aAAA;IACA,0Ba+EkB;Ib9ElB,0Ca8EuB;EjB0jCvB;EiBrjCF;IbrFE,aAAA;IACA,0Ba2FkB;Ib1FlB,0Ca0FuB;EjBmkCvB;EiB9jCF;IbjGE,aAAA;IACA,4BawGmB;IbvGnB,oCauG0B;EjB4kC1B;EiBvkCF;Ib9GE,aAAA;IACA,4BaqHmB;IbpHnB,oCaoH0B;EjBqlC1B;EqBxsCE;IAeM,YAAA;ErBozCR;EqB1xCE;IAgBM,YAAA;ErB8yCR;EsBt3CA;IAOM,4BAAA;IACA,0DAAA;IACA,4BAAA;IACA,6BAAA;EtBs4CN;AAmEF","sourcesContent":[":root {\r\n  --color-primary: #E1D4C9;\r\n  --color-primary-darker: #B0907A;\r\n  --color-background: #E1D4C9;\r\n\r\n  --color-text: #403F3D;\r\n  --color-text-light: #E1D4C9;\r\n  --color-text-accent: #B0907A;\r\n  --color-heading: #403F3D;\r\n\r\n  --color-border-light: #C1B6AD;\r\n  --color-border-dark: #665F55;\r\n}\r\n\r\n[data-theme] {\r\n  --color-primary: #211F1D;\r\n  --color-background: #292826;\r\n  //--color-primary-darker: #665F55;\r\n\r\n  --color-text: #E1D4C9;\r\n  //--color-heading: #E1D4C9;\r\n\r\n  --color-text-light: #403F3D;\r\n  --color-text-accent: #C1B6AD;\r\n\r\n  --color-border-light: #665F55;\r\n  --color-border-dark: #C1B6AD;\r\n}\r\n\r\n$color-primary: var(--color-primary);\r\n$color-primary-darker: var(--color-primary-darker);\r\n$color-background: var(--color-background);\r\n\r\n$color-text: var(--color-text);\r\n$color-text-light: var(--color-text-light);\r\n$color-text-accent: var(--color-text-accent);\r\n$color-heading: var(--color-heading);\r\n\r\n$color-border-light: var(--color-border-light);\r\n$color-border-dark: var(--color-border-dark);\r\n\r\n$color-link: #color;\r\n$color-hovered-link: #color;\r\n$color-arrow: #color;\r\n$color-paragraph: #color;\r\n$color-paragraph-m: #color;\r\n\r\n$color-dark-s: #color;\r\n$color-dark-2xl: #color;\r\n\r\n$color-light-xl: #color;\r\n$color-light-l: #color;\r\n$color-light-s: #color;\r\n\r\n$spacing: 0.011em;\r\n\r\n$content-width: 1439px;\r\n$intermediate-width: 1099px;\r\n$tablet-width: 767px;\r\n$mobile-width: 379px;\r\n\r\n",":root {\n  --color-primary: #E1D4C9;\n  --color-primary-darker: #B0907A;\n  --color-background: #E1D4C9;\n  --color-text: #403F3D;\n  --color-text-light: #E1D4C9;\n  --color-text-accent: #B0907A;\n  --color-heading: #403F3D;\n  --color-border-light: #C1B6AD;\n  --color-border-dark: #665F55;\n}\n\n[data-theme] {\n  --color-primary: #211F1D;\n  --color-background: #292826;\n  --color-text: #E1D4C9;\n  --color-text-light: #403F3D;\n  --color-text-accent: #C1B6AD;\n  --color-border-light: #665F55;\n  --color-border-dark: #C1B6AD;\n}\n\n.card__button, .button, h5, h4, h3, h2, h1, body {\n  font-family: \"Inter\", sans-serif;\n}\n\n.menu .menu__card .menu__box .menu__img:hover, .menu .menu__card .menu__box .menu__img, .about .about__box .about__img:hover, .about .about__box .about__img, .navigation .navigation__link:hover::after, .navigation .navigation__link:focus::after, .navigation .navigation__link::after, .navigation, .footer .contacts__us .contacts__us-link:hover::after, .footer .contacts__us .contacts__us-link:focus::after, .footer .contacts__us .contacts__us-link::after, .footer .contacts__socials .socials .socials__button:nth-child(3):hover, .footer .contacts__socials .socials .socials__button:nth-child(2):hover, .footer .contacts__socials .socials .socials__button:nth-child(1):hover, .footer .contacts__socials .socials, .header__hamburger .hamburger .hamburger__line, .slider-control, .button-theme-switch:hover .switch-moon-icon, .button-theme-switch:hover .circle-moon-icon, .animation:hover, .card__button, .button_mobile:nth-child(2):hover, .button_mobile:nth-child(1):hover, .button_mobile, .button_menu:hover::after, .button_menu:focus::after, .button_menu::after, .button {\n  transition: all 0.3s ease-out;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-size: 10px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 2.4rem;\n  color: var(--color-text);\n  background-color: var(--color-background);\n}\nbody .body__wrapper {\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\nbody section, body header, body footer {\n  padding: 0 40px;\n}\n@media (max-width: 767px) {\n  body section, body header, body footer {\n    padding: 0 16px;\n  }\n}\n\nh1 {\n  font-size: 7.2rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 7.56rem;\n  color: var(--color-primary);\n}\n@media (max-width: 767px) {\n  h1 {\n    font-size: 4.2rem;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 4.83rem;\n  }\n}\n\nh2, h3, h4, h5 {\n  color: var(--color-heading);\n}\n\nh2 {\n  font-size: 6rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 7.5rem;\n  color: var(--color-text);\n}\n@media (max-width: 767px) {\n  h2 {\n    font-size: 3.2rem;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 4rem;\n  }\n}\n\nh3 {\n  font-size: 2.4rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 3rem;\n}\n\nh4 {\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 2.3rem;\n}\n\nh5 {\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.65rem;\n}\n\n@font-face {\n  font-family: \"Inter-Regular\", sans-serif;\n  src: url(\"../../assets/fonts/Inter-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: \"Inter-Bold\", sans-serif;\n  src: url(\"../../assets/fonts/Inter-Bold.otf\") format(\"opentype\");\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nul,\nul > li {\n  margin: 0;\n}\n\n.body {\n  min-height: 100vh;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\na,\nlink {\n  display: inline-block;\n  color: inherit;\n  text-decoration: none;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: red;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal {\n  position: relative;\n  border-radius: 10px;\n  background-color: var(--color-primary);\n  width: 675px;\n  min-height: 120px;\n  max-height: 90%;\n  overflow: auto;\n}\n@media (max-width: 767px) {\n  .modal {\n    width: 90%;\n  }\n}\n\n.modal__close-icon {\n  position: absolute;\n  top: 30px;\n  right: 26px;\n  cursor: pointer;\n}\n.modal__close-icon svg {\n  pointer-events: none;\n}\n\n.button {\n  width: 200px;\n  height: 64px;\n  padding: 20px 78px;\n  border-radius: 100px;\n  border: none;\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 2.4rem;\n  color: var(--color-text);\n  background-color: var(--color-background);\n}\n@media (max-width: 1439px) {\n  .button_enjoy {\n    background-image: url(\"../../assets/icons/coffee-cup.svg\");\n    background-repeat: no-repeat;\n    background-position: 70% 50%;\n  }\n}\n.button_menu {\n  width: 100px;\n  height: 60px;\n  padding: 0;\n  background: url(\"../../assets/icons/coffee-cup.svg\") 100% 46% no-repeat;\n  display: inline-block;\n  text-decoration: none;\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 2.4rem;\n  line-height: 150%;\n}\n@media (max-width: 767px) {\n  .button_menu {\n    display: none;\n  }\n}\n.button_menu::after {\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 2px;\n  margin: 0 auto;\n  background-color: var(--color-border-dark);\n}\n.button_menu:hover::after, .button_menu:focus::after {\n  width: 75%;\n  margin-left: 30px;\n}\n.button:hover {\n  background-color: var(--color-primary);\n  cursor: pointer;\n}\n.button_mobile {\n  border: 1px solid var(--color-border-dark);\n  padding: 5px 25px 6px 63px;\n  cursor: pointer;\n}\n.button_mobile:nth-child(1) {\n  background: url(\"../../assets/icons/contacts/Icon-apple.svg\") no-repeat 13% 50%;\n}\n.button_mobile:nth-child(1):hover {\n  background: var(--color-border-dark) url(\"../../assets/icons/contacts/Icon-apple-light.svg\") no-repeat 13% 50%;\n  color: var(--color-border-light);\n}\n.button_mobile:nth-child(2) {\n  background: url(\"../../assets/icons/contacts/icon-google.svg\") no-repeat 13% 50%;\n}\n.button_mobile:nth-child(2):hover {\n  background: var(--color-border-dark) url(\"../../assets/icons/contacts/icon-google-light.svg\") no-repeat 13% 50%;\n  color: var(--color-border-light);\n}\n\n.card__button {\n  font-size: rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: rem;\n  background-color: #color;\n  border-radius: 30px;\n  color: #color;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card__button:hover {\n  background-color: var(--color-primary);\n  cursor: pointer;\n}\n\n.socials__button {\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  border: 1px solid var(--color-border-light);\n}\n\n.animation:hover {\n  background: var(--color-primary) url(\"../../assets/icons/coffee-cup.svg\") no-repeat 70% 50%;\n}\n\n.button_inner {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .button_inner {\n    display: inline-block !important;\n  }\n}\n\n.button-theme-switch {\n  border: none;\n  background-color: var(--color-background);\n}\n.button-theme-switch .circle-sun-icon {\n  fill: var(--color-primary-darker);\n}\n.button-theme-switch .circle-moon-icon {\n  fill: var(--color-background);\n}\n.button-theme-switch .switch-moon-icon {\n  fill: var(--color-text);\n}\n.button-theme-switch:hover .circle-moon-icon {\n  fill: var(--color-border-dark);\n}\n.button-theme-switch:hover .switch-moon-icon {\n  fill: var(--color-background);\n}\n\n.slider {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  grid-row: 2/3;\n  grid-column: 2/3;\n}\n.slider .slider__container {\n  overflow: hidden;\n  width: 480px;\n}\n@media (max-width: 767px) {\n  .slider .slider__container {\n    width: 348px;\n  }\n}\n.slider .slider__container .carousel {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 1440px;\n  left: -480px;\n}\n@media (max-width: 767px) {\n  .slider .slider__container .carousel {\n    width: 1044px;\n    left: -348px;\n  }\n}\n.slider .slider__container .carousel .slider-card {\n  width: 480px;\n}\n@media (max-width: 767px) {\n  .slider .slider__container .carousel .slider-card {\n    width: 348px;\n  }\n}\n.slider .slider__container .carousel .slider-card .slider-card__text, .slider .slider__container .carousel .slider-card .slider-card__title, .slider .slider__container .carousel .slider-card .slider-card__price {\n  text-align: center;\n  margin-top: 17px;\n}\n.slider .slider__container .carousel .slider-card .slider-card__price {\n  font-size: 2.4rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 3rem;\n}\n.move-left {\n  animation: roll-left 0.3s;\n}\n\n.move-right {\n  animation: roll-right 0.3s;\n}\n\n@keyframes roll-left {\n  from {\n    left: -348px;\n  }\n  to {\n    left: 0;\n  }\n  @media (max-width: 767px) {\n    from {\n      left: -348px;\n    }\n    to {\n      left: 0;\n    }\n  }\n}\n@keyframes roll-right {\n  from {\n    left: -480px;\n  }\n  to {\n    left: -960px;\n  }\n  @media (max-width: 767px) {\n    from {\n      left: -348px;\n    }\n    to {\n      left: -696px;\n    }\n  }\n}\n.slider-control {\n  width: 60px;\n  height: 60px;\n  border: 1px solid var(--color-border-dark);\n  border-radius: 100%;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .slider-control {\n    display: none;\n  }\n}\n.slider-control.right {\n  grid-column: 3/4;\n  grid-row: 2/3;\n  background: url(\"../../assets/icons/items/arrow-right.svg\") 50% 50% no-repeat;\n  margin-right: 4px;\n}\n.slider-control.right:hover {\n  background: var(--color-border-dark) url(\"../../assets/icons/items/arrow-right-light.svg\") 50% 50% no-repeat;\n}\n.slider-control.left {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  background: url(\"../../assets/icons/items/arrow-left.svg\") 50% 50% no-repeat;\n  margin-left: 4px;\n}\n.slider-control.left:hover {\n  background: var(--color-border-dark) url(\"../../assets/icons/items/arrow-left-light.svg\") 50% 50% no-repeat;\n}\n\n.progress-bar-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  grid-column: 2/3;\n  grid-row: 3/4;\n  gap: 12px;\n}\n.progress-bar-wrapper .progress-bar {\n  width: 40px;\n  height: 4px;\n  background-color: var(--color-border-light);\n  border-radius: 100px;\n}\n.progress-bar-wrapper .progress-bar.active-bar {\n  background: var(--color-border-dark);\n}\n\n.header__hamburger {\n  width: 60px;\n  align-self: end;\n  justify-self: flex-end;\n}\n.header__hamburger .hamburger {\n  display: none;\n  position: relative;\n  width: 44px;\n  height: 44px;\n  border-radius: 100%;\n  border: 1px solid var(--color-border-dark);\n  z-index: 4;\n}\n@media (max-width: 767px) {\n  .header__hamburger .hamburger {\n    display: inline-block;\n  }\n}\n.header__hamburger .hamburger .hamburger__line {\n  position: absolute;\n  left: 30%;\n  width: 40%;\n  height: 2px;\n  background-color: var(--color-border-dark);\n}\n.header__hamburger .hamburger .hamburger__line:nth-child(1) {\n  top: 40%;\n}\n.header__hamburger .hamburger .hamburger__line:nth-child(2) {\n  bottom: 35%;\n}\n.header__hamburger .hamburger.open .hamburger__line {\n  transform: scale(0);\n}\n.header__hamburger .hamburger.open .hamburger__line:nth-child(1) {\n  transform: rotate(-45deg);\n  top: calc(50% - 1px);\n}\n.header__hamburger .hamburger.open .hamburger__line:nth-child(2) {\n  transform: rotate(45deg);\n  bottom: calc(50% - 1px);\n}\n\n.hidden {\n  display: none;\n}\n\n.blackout {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(41, 41, 41, 0.6);\n  cursor: pointer;\n}\n\n.scroll-disabled {\n  overflow-y: hidden;\n}\n\n.header {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.header .logo {\n  z-index: 4;\n}\n\n.footer {\n  margin-top: 100px;\n}\n.footer .footer__wrapper {\n  background-color: var(--color-border-dark);\n  border-radius: 40px;\n  margin-bottom: 40px;\n}\n.footer .contacts__socials {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n@media (max-width: 1439px) {\n  .footer .contacts__socials {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    padding: 0 33px 0 60px;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .footer .contacts__socials {\n    padding: 0 0 0 17px;\n  }\n}\n.footer .contacts__socials .footer__title {\n  color: var(--color-text-light);\n}\n.footer .contacts__socials .footer__title .cursive {\n  color: var(--color-text-accent);\n}\n.footer .contacts__socials .socials {\n  margin-top: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  gap: 12px;\n}\n.footer .contacts__socials .socials .socials__button:nth-child(1) {\n  background: url(\"../../assets/icons/contacts/twitter.svg\") no-repeat 50% 50%;\n}\n.footer .contacts__socials .socials .socials__button:nth-child(1):hover {\n  background: var(--color-primary) url(\"../../assets/icons/contacts/twitter-dark.svg\") no-repeat 50% 50%;\n}\n.footer .contacts__socials .socials .socials__button:nth-child(2) {\n  background: url(\"../../assets/icons/contacts/instagram.svg\") no-repeat 50% 50%;\n}\n.footer .contacts__socials .socials .socials__button:nth-child(2):hover {\n  background: var(--color-primary) url(\"../../assets/icons/contacts/instagram-dark.svg\") no-repeat 50% 50%;\n}\n.footer .contacts__socials .socials .socials__button:nth-child(3) {\n  background: url(\"../../assets/icons/contacts/facebook.svg\") no-repeat 50% 50%;\n}\n.footer .contacts__socials .socials .socials__button:nth-child(3):hover {\n  background: var(--color-primary) url(\"../../assets/icons/contacts/facebook-dark.svg\") no-repeat 50% 50%;\n}\n.footer .contacts__us {\n  grid-column: 4/5;\n  grid-row: 2/3;\n  color: var(--color-text-light);\n}\n@media (max-width: 1439px) {\n  .footer .contacts__us {\n    grid-column: 1/2;\n    grid-row: 4/5;\n    padding-left: 60px;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .footer .contacts__us {\n    padding-left: 17px;\n  }\n}\n.footer .contacts__us .contacts__us-title {\n  color: var(--color-text-light);\n  margin-top: 27px;\n  margin-bottom: 34px;\n  font-size: 2;\n  font-style: bold;\n  font-weight: 3rem;\n  line-height: 4rem;\n}\n.footer .contacts__us .contacts__us-links {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 18px;\n}\n.footer .contacts__us .contacts__us-link {\n  padding-left: 29px;\n}\n.footer .contacts__us .contacts__us-link:nth-child(1) {\n  background: url(\"../../assets/icons/contacts/pin-alt.svg\") no-repeat 0 50%;\n}\n.footer .contacts__us .contacts__us-link:nth-child(2) {\n  background: url(\"../../assets/icons/contacts/phone.svg\") no-repeat 0 50%;\n}\n.footer .contacts__us .contacts__us-link:nth-child(3) {\n  background: url(\"../../assets/icons/contacts/clock.svg\") no-repeat 0 50%;\n}\n.footer .contacts__us .contacts__us-link::after {\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 2px;\n  margin: 0 auto;\n  background-color: var(--color-primary);\n}\n.footer .contacts__us .contacts__us-link:hover::after, .footer .contacts__us .contacts__us-link:focus::after {\n  width: 100%;\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  list-style-type: none;\n  column-gap: 39.5px;\n  height: 63px;\n  margin-right: 12px;\n}\n.navigation .navigation__link {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 2.4rem;\n  color: #color;\n  line-height: 150%;\n  height: 30px;\n}\n.navigation .navigation__link::after {\n  display: block;\n  content: \"\";\n  width: 0;\n  height: 2px;\n  margin: 0 auto;\n  background-color: var(--color-border-dark);\n}\n.navigation .navigation__link:hover::after, .navigation .navigation__link:focus::after {\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .navigation .navigation__link {\n    font-size: 2.9rem;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 4rem;\n  }\n}\n@media (max-width: 767px) {\n  .navigation {\n    position: absolute;\n    top: 0;\n    right: -100%;\n    height: 100vh;\n    width: 100%;\n    margin-right: 0;\n    background-color: var(--color-primary);\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 60px;\n  }\n}\n.navigation.active {\n  right: 0;\n}\n\n.selected_link {\n  text-decoration: underline !important;\n  text-decoration-color: var(--color-primary) !important;\n  text-underline-position: under;\n  color: var(--color-primary);\n}\n\n.wrapper {\n  max-width: 1360px;\n  margin: auto;\n}\n\n.grid-main-page {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto;\n  gap: 0;\n}\n\n.grid-our-page {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto;\n  gap: 0;\n}\n\n.grid-header {\n  display: grid;\n  grid-template-columns: 100px 1fr 100px 100px;\n  grid-template-rows: 60px;\n}\n\n.grid-enjoy {\n  display: grid;\n  grid-template-columns: 100px 530px 1fr;\n  grid-template-rows: 100px 444px 100px;\n}\n@media (max-width: 1439px) {\n  .grid-enjoy {\n    display: grid;\n    grid-template-columns: 60px 530px 1fr;\n    grid-template-rows: 100px 444px 100px;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .grid-enjoy {\n    display: grid;\n    grid-template-columns: 16px minmax(300px, 380px) 16px minmax(0, auto);\n    grid-template-rows: 60px 432px 60px;\n  }\n}\n\n.grid-favourites-coffee {\n  display: grid;\n  grid-template-columns: 60px 1fr 60px;\n  grid-template-rows: 75px 640px 4px;\n  row-gap: 40px;\n  align-items: center;\n}\n@media (max-width: 1439px) {\n  .grid-favourites-coffee {\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    grid-template-rows: 150px 640px 4px;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .grid-favourites-coffee {\n    display: grid;\n    grid-template-columns: 1px 1fr 1px;\n    grid-template-rows: 1fr 532px 4px;\n  }\n}\n\n.grid-about {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 225px 430px 1fr 430px;\n  gap: 40px;\n}\n@media (max-width: 1439px) {\n  .grid-about {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 590px 590px;\n    grid-column-gap: 0;\n    grid-row-gap: 40px;\n  }\n}\n\n.grid-mobile-app {\n  display: grid;\n  grid-template-columns: 630px 1fr;\n  grid-template-rows: 144px 1fr 144px;\n}\n@media (max-width: 1439px) {\n  .grid-mobile-app {\n    display: grid;\n    grid-template-columns: 688px;\n    grid-template-rows: 342px 630px;\n    grid-row-gap: 100px;\n    justify-content: center;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .grid-mobile-app {\n    display: grid;\n    grid-template-columns: 348px;\n    grid-template-rows: 380px 348px;\n    grid-row-gap: 40px;\n  }\n}\n\n.grid-footer {\n  display: grid;\n  grid-template-columns: 100px 530px 100px 530px 100px;\n  grid-template-rows: 100px 250px 100px;\n}\n@media (max-width: 1439px) {\n  .grid-footer {\n    display: grid;\n    grid-template-columns: 688px;\n    grid-template-rows: 100px 250px 68px 186px 132px;\n    justify-content: center;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .grid-footer {\n    display: grid;\n    grid-template-columns: 348px;\n    grid-template-rows: 60px 180px 10px 145px 132px;\n  }\n}\n\n.grid-menu {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 150px 46px minmax(500px, 1052px);\n  row-gap: 40px;\n}\n@media (max-width: 1439px) {\n  .grid-menu {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 225px 46px 1052px 60px;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .grid-menu {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 120px 46px 2144px 60px;\n  }\n}\n\n.grid-menu-s {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 150px 46px 1052px;\n  row-gap: 40px;\n}\n@media (max-width: 1439px) {\n  .grid-menu-s {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 225px 46px 2144px 60px;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .grid-menu-s {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 120px 46px 4288px 60px;\n  }\n}\n\n.menu__cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 310px);\n  grid-template-rows: repeat(2, minmax(0, 506px));\n  gap: 40px;\n}\n@media (max-width: 1439px) {\n  .menu__cards-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 310px);\n    grid-template-rows: repeat(4, 506px);\n    justify-self: center;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .menu__cards-grid {\n    display: grid;\n    grid-template-columns: 310px;\n    grid-template-rows: repeat(4, 506px);\n  }\n}\n\n.menu__cards-grid-s {\n  display: grid;\n  grid-template-columns: repeat(4, 310px);\n  grid-template-rows: repeat(2, 506px);\n  gap: 40px;\n}\n@media (max-width: 1439px) {\n  .menu__cards-grid-s {\n    display: grid;\n    grid-template-columns: repeat(2, 310px);\n    grid-template-rows: repeat(8, 506px);\n    justify-self: center;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .menu__cards-grid-s {\n    display: grid;\n    grid-template-columns: 310px;\n    grid-template-rows: repeat(8, 506px);\n  }\n}\n\n.layout-5-column {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.layout-5-column > * {\n  flex-basis: 0%;\n}\n\n.layout-4-column {\n  flex-wrap: wrap;\n}\n\n.layout-3-column {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.layout-3-column > * {\n  flex-basis: 0%;\n}\n\n.layout-2-column {\n  display: flex;\n  justify-content: spacespace-between;\n  align-items: center;\n  flex-direction: row;\n}\n@media (max-width: 1439px) {\n  .layout-2-column {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n\n.enjoy .enjoy__video {\n  grid-row: 1/4;\n  grid-column: 1/4;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 40px;\n}\n@media (max-width: 767px) {\n  .enjoy .enjoy__video {\n    grid-column: 1/5;\n  }\n}\n\n.enjoy__content {\n  display: flex;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  grid-row: 2/3;\n  grid-column: 2/3;\n  gap: 40px;\n}\n.enjoy__content .enjoy__text {\n  color: var(--color-text-light);\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 2.4rem;\n}\n.enjoy__content .enjoy__cursive {\n  color: var(--color-primary-darker);\n}\n\n.favourites-coffee {\n  margin-top: 100px;\n}\n.favourites-coffee .favourites-coffee__title {\n  grid-row: 1/2;\n  grid-column: 1/4;\n  text-align: center;\n}\n.favourites-coffee .favourites-coffee__title .favourites-coffee__cursive {\n  color: var(--color-text-accent);\n}\n\n.about {\n  margin-top: 100px;\n}\n.about .about__cursive {\n  color: var(--color-text-accent);\n}\n.about .about__title {\n  grid-column: 1/3;\n  grid-row: 1/2;\n  letter-spacing: -0.4px;\n}\n.about .about__box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  overflow: hidden;\n  border-radius: 20px;\n}\n.about .about__box:nth-child(1n) {\n  width: 660px;\n  height: 590px;\n  grid-column: 1/2;\n  grid-row: 2/4;\n}\n@media (max-width: 1439px) {\n  .about .about__box:nth-child(1n) {\n    width: 688px;\n    grid-row: 2/3;\n    justify-self: center;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .about .about__box:nth-child(1n) {\n    width: 348px;\n  }\n}\n.about .about__box:nth-child(2n) {\n  width: 660px;\n  height: 430px;\n  grid-column: 1/2;\n  grid-row: 4/5;\n}\n.about .about__box:nth-child(3n) {\n  width: 660px;\n  height: 430px;\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n@media (max-width: 1439px) {\n  .about .about__box:nth-child(3n) {\n    display: none;\n  }\n}\n.about .about__box:nth-child(4n) {\n  width: 660px;\n  height: 590px;\n  grid-column: 2/3;\n  grid-row: 3/5;\n}\n@media (max-width: 1439px) {\n  .about .about__box:nth-child(4n) {\n    width: 688px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    justify-self: center;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .about .about__box:nth-child(4n) {\n    width: 348px;\n  }\n}\n.about .about__box .about__img {\n  max-width: initial;\n}\n.about .about__box .about__img:hover {\n  transform: scale(0.92);\n}\n\n.mobile-app {\n  margin-top: 100px;\n}\n.mobile-app .mobile-app__wrapper {\n  background: url(\"../../assets/img/mobile-screens.png\") no-repeat 100% 0;\n}\n@media (max-width: 1439px) {\n  .mobile-app .mobile-app__wrapper {\n    background: url(\"../../assets/img/mobile-screens.png\") no-repeat 50% 100%;\n  }\n}\n@media (max-width: 1439px) and (max-width: 767px) {\n  .mobile-app .mobile-app__wrapper {\n    background-size: 348px 348px;\n    background-image: url(\"../../assets/img/mobile-screens.png\");\n    background-repeat: no-repeat;\n    background-position: 50% 100%;\n  }\n}\n.mobile-app .mobile-app__wrapper .mobile-app__cursive {\n  color: var(--color-text-accent);\n  letter-spacing: 0.01px;\n}\n.mobile-app .mobile-app__wrapper .mobile-app__content {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: flex;\n  justify-content: flex-start;\n  align-items: space-between;\n  flex-direction: column;\n  gap: 40px;\n}\n.mobile-app .mobile-app__wrapper .mobile-app__content .mobile-app__buttons {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  gap: 20px;\n}\n@media (max-width: 767px) {\n  .mobile-app .mobile-app__wrapper .mobile-app__content .mobile-app__buttons {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n.mobile-app .mobile-app__wrapper .mobile-app__content .mobile-app__buttons .button__text .button__text-1 {\n  font-size: 1rem;\n  font-style: bold;\n  font-weight: 4rem;\n  line-height: 1;\n}\n@media (max-width: 1439px) {\n  .mobile-app .mobile-app__wrapper .mobile-app__content {\n    grid-row: 1/2;\n    justify-self: center;\n  }\n}\n\n.menu {\n  margin-top: 20px;\n}\n.menu .menu-page__title {\n  color: var(--color-text);\n  text-align: center;\n  padding: 0 250px 0 250px;\n}\n@media (max-width: 1439px) {\n  .menu .menu-page__title {\n    padding: 0;\n  }\n}\n.menu .menu-page__title .cursive {\n  color: var(--color-text-accent);\n}\n.menu .menu-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 16px;\n  padding: 0;\n}\n@media (max-width: 767px) {\n  .menu .menu-buttons {\n    gap: 8px;\n  }\n}\n.menu .menu-buttons .menu__button {\n  width: auto;\n  height: 46px;\n  padding: 11px 16px 8px 45px;\n  border: 1px solid var(--color-border-light);\n  border-radius: 100px;\n}\n.menu .menu-buttons .menu__button:nth-child(1) {\n  background: url(\"../../assets/icons/icon-cup.svg\") 9% 50% no-repeat;\n}\n.menu .menu-buttons .menu__button:nth-child(2) {\n  background: url(\"../../assets/icons/icon-teapot.svg\") 9% 50% no-repeat;\n}\n.menu .menu-buttons .menu__button:nth-child(3) {\n  background: url(\"../../assets/icons/icon-cake.svg\") 9% 50% no-repeat;\n}\n.menu .menu-buttons .menu__button_selected {\n  background-color: var(--color-border-dark) !important;\n  color: var(--color-text-light);\n}\n.menu .menu-buttons .menu__button:hover {\n  background-color: var(--color-border-dark);\n  color: var(--color-text-light);\n}\n.menu .menu__card {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 20px;\n  border: 1px solid var(--color-border-light);\n  border-radius: 40px;\n}\n@media (max-width: 1439px) {\n  .menu .menu__card:nth-child(n+5) {\n    display: none;\n  }\n}\n.menu .menu__card .menu__box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  overflow: hidden;\n  border-radius: 40px;\n  width: 309px;\n  height: 310px;\n}\n.menu .menu__card .menu__box .menu__img {\n  max-width: initial;\n}\n.menu .menu__card .menu__box .menu__img:hover {\n  transform: scale(0.92);\n}\n.menu .menu__card .menu__card-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 0 20px;\n  height: 156px;\n}\n.menu .menu__card .menu__text {\n  min-height: 72px;\n}\n.menu .menu__card .menu__price {\n  font-size: 2.4rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 3rem;\n}\n.menu .cards-button {\n  width: 60px;\n  height: 60px;\n  background: url(\"../../assets/icons/button-icon-dark.svg\");\n  display: none;\n  justify-self: center;\n}\n@media (max-width: 1439px) {\n  .menu .cards-button {\n    display: block;\n  }\n}\n\n.display-none {\n  display: none !important;\n}","%font-prim {\r\n  font-family: \"Inter\", sans-serif;\r\n}\r\n\r\n%font-add {\r\n  font-family: \"Arial\", sans-serif;\r\n}\r\n\r\n%transition {\r\n  transition: all .3s ease-out;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  font-size: 10px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  @include font(1.6rem, 2.4rem);\r\n  @extend %font-prim;\r\n  color: $color-text;\r\n  background-color: $color-background;\r\n\r\n  .body__wrapper{\r\n    overflow: hidden;\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n  //@include flex(flex-start, stretch, column);\r\n  & section, header, footer {\r\n    padding: 0 40px;\r\n\r\n    @include media-tablet {\r\n      padding: 0 16px;\r\n    }\r\n  }\r\n\r\n}\r\n\r\nh1 {\r\n  @extend %font-prim;\r\n  @include font(7.2rem, 7.56rem, bold);\r\n  color: $color-primary;\r\n\r\n  @include media-tablet {\r\n    @include font(4.2rem, 4.83rem, bold);\r\n  }\r\n}\r\n\r\nh2, h3, h4, h5 {\r\n  color: $color-heading;\r\n}\r\n\r\nh2 {\r\n  @extend %font-prim;\r\n  @include font(6rem, 7.5rem, bold);\r\n  color: $color-text;\r\n  @include media-tablet {\r\n    @include font(3.2rem, 4rem, bold);\r\n  }\r\n}\r\n\r\nh3 {\r\n  @extend %font-prim;\r\n  @include font(2.4rem, 3rem, bold);\r\n}\r\n\r\nh4 {\r\n  @extend %font-prim;\r\n  @include font(2rem, 2.3rem);\r\n}\r\n\r\nh5 {\r\n  @extend %font-prim;\r\n  @include font(1.5rem, 1.65rem);\r\n}\r\n\r\n","@mixin font($size, $height: $size, $weight: 400, $style: normal) {\r\n  font-size: $size;\r\n  font-style: $style;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n}\r\n\r\n@mixin flex($justify: space-between, $align: center, $direction: row) {\r\n  display: flex;\r\n  justify-content: $justify;\r\n  align-items: $align;\r\n  flex-direction: $direction;\r\n}\r\n\r\n@mixin grid($cols, $rows) {\r\n  display: grid;\r\n  grid-template-columns: $cols;\r\n  grid-template-rows: $rows;\r\n}\r\n\r\n@mixin grid-chi($col, $row) {\r\n  grid-column: $col;\r\n  grid-row: $row;\r\n}\r\n\r\n@mixin columns($width) {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  > * {\r\n    flex-basis: $width;\r\n  }\r\n}\r\n\r\n@mixin media-laptop {\r\n  @media (max-width: $content-width) { @content; }\r\n}\r\n\r\n@mixin media-tablet {\r\n  @media (max-width: $tablet-width) { @content; }\r\n}\r\n\r\n@mixin media-mobile {\r\n  @media (max-width: $mobile-width) { @content; }\r\n}\r\n\r\n@mixin media-intermediate {\r\n  @media (max-width: $intermediate-width) { @content; }\r\n}","@font-face {\r\n  font-family: 'Inter-Regular', sans-serif;\r\n  src: url('../../assets/fonts/Inter-Regular.otf') format('opentype');\r\n}\r\n@font-face {\r\n  font-family: 'Inter-Bold', sans-serif;\r\n  src: url('../../assets/fonts/Inter-Bold.otf') format('opentype');\r\n}","body,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\np,\r\nul,\r\nul > li {\r\n  margin: 0;\r\n}\r\n\r\n.body {\r\n  min-height: 100vh;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\na,\r\nlink {\r\n  display: inline-block;\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n",".overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: red;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.modal {\r\n  position: relative;\r\n  border-radius: 10px;\r\n  background-color: $color-primary;\r\n  width: 675px;\r\n  min-height: 120px;\r\n  max-height: 90%;\r\n  overflow: auto;\r\n  //@extend %custom-scroll;\r\n\r\n  @include media-tablet {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n.modal__close-icon {\r\n  position: absolute;\r\n  top: 30px;\r\n  right: 26px;\r\n  cursor: pointer;\r\n  svg {\r\n    pointer-events: none;\r\n  }\r\n}",".button {\r\n  width: 200px;\r\n  height: 64px;\r\n\r\n  padding: 20px 78px;\r\n  border-radius: 100px;\r\n  border: none;\r\n\r\n  @extend %font-prim;\r\n  @include font(1.6rem, 2.4rem, bold);\r\n  color: $color-text;\r\n\r\n  background-color: $color-background;\r\n\r\n  @extend %transition;\r\n\r\n  &_enjoy {\r\n    @include media-laptop {\r\n      background-image: url(\"../../assets/icons/coffee-cup.svg\");\r\n      background-repeat: no-repeat;\r\n      background-position: 70% 50%;\r\n    }\r\n  }\r\n\r\n  &_menu {\r\n    width: 100px;\r\n    height: 60px;\r\n\r\n    padding: 0;\r\n\r\n    background: url(\"../../assets/icons/coffee-cup.svg\") 100% 46% no-repeat;\r\n\r\n    display: inline-block;\r\n    text-decoration: none;\r\n\r\n    @include font(1.6rem, 2.4rem, bold);\r\n\r\n    line-height: 150%;\r\n\r\n    @include media-tablet {\r\n      display: none;\r\n    }\r\n\r\n    &::after {\r\n      display: block;\r\n      content: \"\";\r\n      width: 0;\r\n      height: 2px;\r\n      margin: 0 auto;\r\n      background-color: $color-border-dark;\r\n      @extend %transition;\r\n    }\r\n\r\n    &:hover::after, &:focus::after {\r\n      width: 75%;\r\n      margin-left: 30px;\r\n      @extend %transition;\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    background-color: $color-primary;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &_mobile {\r\n    border: 1px solid $color-border-dark;\r\n    padding: 5px 25px 6px 63px;\r\n    cursor: pointer;\r\n\r\n    @extend %transition;\r\n\r\n    &:nth-child(1) {\r\n      background: url(\"../../assets/icons/contacts/Icon-apple.svg\") no-repeat 13% 50%;\r\n\r\n      &:hover {\r\n        background: $color-border-dark url(\"../../assets/icons/contacts/Icon-apple-light.svg\") no-repeat 13% 50%;\r\n        color: $color-border-light;\r\n        @extend %transition;\r\n      }\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      background: url(\"../../assets/icons/contacts/icon-google.svg\") no-repeat 13% 50%;\r\n\r\n      &:hover {\r\n        background: $color-border-dark url(\"../../assets/icons/contacts/icon-google-light.svg\") no-repeat 13% 50%;\r\n        color: $color-border-light;\r\n        @extend %transition;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.card__button {\r\n  //width: $px;\r\n  //height: $px;\r\n  @extend %font-prim;\r\n  @include font(rem, rem);\r\n  //letter-spacing: $px;\r\n  background-color: $color-light-xl;\r\n  //border: $px solid $color-primary;\r\n  border-radius: 30px;\r\n  color: $color-arrow;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  @extend %transition;\r\n\r\n  &:hover {\r\n    background-color: $color-primary;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.socials__button {\r\n  width: 60px;\r\n  height: 60px;\r\n\r\n  border-radius: 100%;\r\n\r\n  border: 1px solid $color-border-light;\r\n\r\n\r\n}\r\n\r\n.animation {\r\n  &:hover {\r\n    background: $color-primary url(\"../../assets/icons/coffee-cup.svg\") no-repeat 70% 50%;\r\n    @extend %transition;\r\n\r\n  }\r\n}\r\n\r\n.button_inner {\r\n  display: none !important;\r\n\r\n  @include media-tablet {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n\r\n.button-theme-switch {\r\n  border: none;\r\n  background-color: $color-background;\r\n\r\n\r\n  .circle-sun-icon {\r\n    fill: $color-primary-darker;\r\n  }\r\n  .switch-sun-icon {\r\n\r\n  }\r\n\r\n  .circle-moon-icon {\r\n    fill: $color-background;\r\n  }\r\n  .switch-moon-icon {\r\n    fill: $color-text;\r\n\r\n  }\r\n\r\n  &:hover {\r\n    .circle-moon-icon {\r\n      fill: $color-border-dark;\r\n      @extend %transition;\r\n    }\r\n    .switch-moon-icon {\r\n      fill: $color-background;\r\n      @extend %transition;\r\n    }\r\n  }\r\n}",".slider {\r\n  @include flex(center, center, row);\r\n\r\n  grid-row: 2 / 3;\r\n  grid-column: 2 / 3;\r\n\r\n  .slider__container {\r\n    overflow: hidden;\r\n    width: 480px;\r\n    @include media-tablet {\r\n      width: 348px;\r\n    }\r\n    .carousel {\r\n      position: relative;\r\n      @include flex(center, center, row);\r\n      width: 1440px;\r\n      left: -480px;\r\n      @include media-tablet {\r\n        width: 1044px;\r\n        left: -348px;\r\n      }\r\n      .slider-card {\r\n        width: 480px;\r\n\r\n        @include media-tablet {\r\n          width: 348px;\r\n        }\r\n\r\n        .slider-card__text, .slider-card__title, .slider-card__price {\r\n          text-align: center;\r\n\r\n          margin-top: 17px;\r\n        }\r\n\r\n        .slider-card__price {\r\n          @include font(2.4rem, 3rem, bold);\r\n        }\r\n\r\n        .slider-card__text {\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.move-left {\r\n  animation: roll-left 0.3s;\r\n}\r\n.move-right {\r\n  animation: roll-right 0.3s;\r\n}\r\n\r\n@keyframes roll-left {\r\n  from {left: -348px;}\r\n  to {left: 0;}\r\n  @include media-tablet {\r\n    from {left: -348px;}\r\n    to {left: 0;}\r\n  }\r\n}\r\n\r\n@keyframes roll-right {\r\n  from {left: -480px;}\r\n  to {left: -960px;}\r\n  @include media-tablet {\r\n    from {left: -348px;}\r\n    to {left: -696px;}\r\n  }\r\n}",".slider-control {\r\n  width: 60px;\r\n  height: 60px;\r\n\r\n  border: 1px solid $color-border-dark;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n\r\n  @extend %transition;\r\n\r\n  @include media-tablet {\r\n    display: none;\r\n  }\r\n\r\n  &.right {\r\n    grid-column: 3 / 4;\r\n    grid-row: 2 / 3;\r\n    background: url(\"../../assets/icons/items/arrow-right.svg\") 50% 50% no-repeat;\r\n\r\n    margin-right: 4px;\r\n\r\n    &:hover {\r\n      background: $color-border-dark url(\"../../assets/icons/items/arrow-right-light.svg\") 50% 50% no-repeat;\r\n    }\r\n  }\r\n\r\n  &.left {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n    background: url(\"../../assets/icons/items/arrow-left.svg\") 50% 50% no-repeat;\r\n\r\n    margin-left: 4px;\r\n\r\n    &:hover {\r\n      background: $color-border-dark url(\"../../assets/icons/items/arrow-left-light.svg\") 50% 50% no-repeat;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.progress-bar-wrapper {\r\n  @include flex(center);\r\n\r\n  grid-column: 2 / 3;\r\n  grid-row: 3 / 4;\r\n\r\n  gap: 12px;\r\n\r\n  .progress-bar {\r\n    width: 40px;\r\n    height: 4px;\r\n    background-color: $color-border-light;\r\n    border-radius: 100px;\r\n    &.active-bar {\r\n      background: $color-border-dark;\r\n    }\r\n  }\r\n}",".header__hamburger {\r\n\r\n  width: 60px;\r\n  align-self: end;\r\n  justify-self: flex-end;\r\n\r\n  .hamburger {\r\n    display: none;\r\n    position: relative;\r\n    width: 44px;\r\n    height: 44px;\r\n    border-radius: 100%;\r\n    border: 1px solid $color-border-dark;\r\n\r\n    z-index: 4;\r\n\r\n    @include media-tablet {\r\n      display: inline-block;\r\n    }\r\n\r\n    .hamburger__line {\r\n      position: absolute;\r\n      left: 30%;\r\n      width: 40%;\r\n      height: 2px;\r\n      background-color: $color-border-dark;\r\n      @extend %transition;\r\n\r\n      &:nth-child(1) {\r\n        top: 40%;\r\n      }\r\n\r\n      &:nth-child(2) {\r\n        bottom: 35%;\r\n      }\r\n    }\r\n\r\n    &.open {\r\n      .hamburger__line {\r\n        transform: scale(0);\r\n\r\n        &:nth-child(1) {\r\n          transform: rotate(-45deg);\r\n          top: calc(50% - 1px);\r\n        }\r\n\r\n        &:nth-child(2) {\r\n          transform: rotate(45deg);\r\n          bottom: calc(50% - 1px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n//.move-back {\r\n//  animation: hmove-back 0.6s ease-in-out;\r\n//}\r\n\r\n//@keyframes hmove {\r\n//  0% {right: -375px}\r\n//  100% {right: 0}\r\n//}\r\n//\r\n//@keyframes hmove-back {\r\n//  0% {right: 0}\r\n//  100% {right: -375px}\r\n//}\r\n",".hidden {\r\n  display: none;\r\n}\r\n\r\n.blackout {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(41, 41, 41, 0.6);\r\n  cursor: pointer;\r\n}\r\n\r\n.scroll-disabled {\r\n  overflow-y: hidden;\r\n}",".header {\r\n\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n\r\n.logo {\r\n  z-index: 4;\r\n}\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n",".footer {\r\n  margin-top: 100px;\r\n\r\n  .footer__wrapper {\r\n    background-color: $color-border-dark;\r\n    border-radius: 40px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .contacts__socials {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n    @include media-laptop {\r\n      grid-column: 1 / 2;\r\n      grid-row: 2 / 3;\r\n      padding: 0 33px 0 60px;\r\n      @include media-tablet {\r\n        padding: 0 0 0 17px;\r\n      }\r\n    }\r\n\r\n    .footer__title {\r\n      color: $color-text-light;\r\n\r\n      .cursive {\r\n        color: $color-text-accent;\r\n      }\r\n    }\r\n\r\n    .socials {\r\n      margin-top: 40px;\r\n\r\n      @include flex(flex-start, center);\r\n      gap: 12px;\r\n\r\n      @extend %transition;\r\n\r\n      .socials__button {\r\n\r\n        &:nth-child(1) {\r\n          background: url(\"../../assets/icons/contacts/twitter.svg\") no-repeat 50% 50%;\r\n\r\n          &:hover {\r\n            @extend %transition;\r\n            background: $color-primary url(\"../../assets/icons/contacts/twitter-dark.svg\") no-repeat 50% 50%;\r\n          }\r\n        }\r\n\r\n        &:nth-child(2) {\r\n          background: url(\"../../assets/icons/contacts/instagram.svg\") no-repeat 50% 50%;\r\n\r\n          &:hover {\r\n            @extend %transition;\r\n            background: $color-primary url(\"../../assets/icons/contacts/instagram-dark.svg\") no-repeat 50% 50%;\r\n          }\r\n        }\r\n\r\n        &:nth-child(3) {\r\n          background: url(\"../../assets/icons/contacts/facebook.svg\") no-repeat 50% 50%;\r\n\r\n          &:hover {\r\n            @extend %transition;\r\n            background: $color-primary url(\"../../assets/icons/contacts/facebook-dark.svg\") no-repeat 50% 50%;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .contacts__us {\r\n    grid-column: 4 / 5;\r\n    grid-row: 2 / 3;\r\n    @include media-laptop {\r\n      grid-column: 1 / 2;\r\n      grid-row: 4 / 5;\r\n      padding-left: 60px;\r\n      @include media-tablet {\r\n        padding-left: 17px;\r\n      }\r\n    }\r\n\r\n    color: $color-text-light;\r\n\r\n    .contacts__us-title {\r\n      color: $color-text-light;\r\n\r\n      margin-top: 27px;\r\n      margin-bottom: 34px;\r\n\r\n      @include font(2, 4rem, 3rem, bold)\r\n    }\r\n\r\n    .contacts__us-links {\r\n      @include flex(flex-start, flex-start, column);\r\n      gap: 18px;\r\n\r\n    }\r\n\r\n    .contacts__us-link {\r\n      padding-left: 29px;\r\n\r\n      &:nth-child(1) {\r\n        background: url(\"../../assets/icons/contacts/pin-alt.svg\") no-repeat 0 50%;\r\n      }\r\n\r\n      &:nth-child(2) {\r\n        background: url(\"../../assets/icons/contacts/phone.svg\") no-repeat 0 50%;\r\n      }\r\n\r\n      &:nth-child(3) {\r\n        background: url(\"../../assets/icons/contacts/clock.svg\") no-repeat 0 50%;\r\n      }\r\n\r\n      &::after {\r\n        display: block;\r\n        content: \"\";\r\n        width: 0;\r\n        height: 2px;\r\n        margin: 0 auto;\r\n        background-color: $color-primary;\r\n        @extend %transition;\r\n      }\r\n\r\n      &:hover::after, &:focus::after {\r\n        width: 100%;\r\n        @extend %transition;\r\n      }\r\n    }\r\n  }\r\n}",".navigation {\r\n  @include flex(center, center, row);\r\n  list-style-type: none;\r\n\r\n  column-gap: 39.5px;\r\n\r\n  height: 63px;\r\n\r\n  margin-right: 12px;\r\n\r\n  @extend %transition;\r\n\r\n  .navigation__link {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n\r\n    @include font(1.6rem, 2.4rem, bold);\r\n\r\n    color: $color-link;\r\n\r\n    line-height: 150%;\r\n\r\n    height: 30px;\r\n\r\n    &::after {\r\n      display: block;\r\n      content: \"\";\r\n      width: 0;\r\n      height: 2px;\r\n      margin: 0 auto;\r\n      background-color: $color-border-dark;\r\n      @extend %transition;\r\n    }\r\n\r\n    &:hover::after,&:focus::after {\r\n      width: 100%;\r\n      @extend %transition;\r\n    }\r\n    @include media-tablet {\r\n      @include font(2.9rem, 4rem, bold);\r\n    }\r\n  }\r\n\r\n\r\n  @include media-tablet {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -100%;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    margin-right: 0;\r\n    background-color: $color-primary;\r\n    z-index: 2;\r\n\r\n    @include flex(center, center, column);\r\n    gap: 60px;\r\n  }\r\n  &.active {\r\n    right: 0;\r\n  }\r\n}\r\n\r\n.selected_link {\r\n  text-decoration: underline !important;\r\n  text-decoration-color: $color-primary !important;\r\n  //text-decoration-thickness: $px !important;\r\n  text-underline-position: under;\r\n  color: $color-primary;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n",".wrapper {\r\n  max-width: 1360px;\r\n  margin: auto;\r\n}\r\n",".grid-main-page {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto auto;\r\n  gap: 0;\r\n}\r\n\r\n.grid-our-page {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto auto;\r\n  gap: 0;\r\n}\r\n\r\n.grid-header {\r\n  display: grid;\r\n  grid-template-columns: 100px 1fr 100px 100px;\r\n  grid-template-rows: 60px;\r\n}\r\n\r\n.grid-enjoy {\r\n  @include grid(100px 530px 1fr, 100px 444px 100px);\r\n\r\n  @include media-laptop {\r\n    @include grid(60px 530px 1fr, 100px 444px 100px);\r\n\r\n    @include media-tablet {\r\n      @include grid(16px minmax(300px, 380px) 16px minmax(0, auto), 60px 432px 60px);\r\n    }\r\n  }\r\n}\r\n\r\n.grid-favourites-coffee {\r\n  @include grid(60px 1fr 60px, 75px 640px 4px);\r\n\r\n  @include media-laptop {\r\n    @include grid(60px 1fr 60px, 150px 640px 4px);\r\n\r\n    @include media-tablet {\r\n      @include grid(1px 1fr 1px, 1fr 532px 4px);\r\n    }\r\n  }\r\n\r\n  row-gap: 40px;\r\n\r\n  align-items: center;\r\n}\r\n\r\n.grid-about {\r\n  @include grid(1fr 1fr, 225px 430px 1fr 430px);\r\n\r\n  gap: 40px;\r\n\r\n  @include media-laptop {\r\n    @include grid(1fr, 1fr 590px 590px);\r\n    grid-column-gap: 0;\r\n    grid-row-gap: 40px;\r\n  }\r\n}\r\n\r\n.grid-mobile-app {\r\n  @include grid(630px 1fr, 144px 1fr 144px);\r\n  @include media-laptop {\r\n    @include grid(688px, 342px 630px);\r\n    grid-row-gap: 100px;\r\n    justify-content: center;\r\n\r\n    @include media-tablet {\r\n      @include grid(348px, 380px 348px);\r\n      grid-row-gap: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n.grid-footer {\r\n  @include grid(100px 530px 100px 530px 100px, 100px 250px 100px);\r\n\r\n  @include media-laptop {\r\n\r\n    @include grid(688px, 100px 250px 68px 186px 132px);\r\n    justify-content: center;\r\n\r\n    @include media-tablet {\r\n      @include grid(348px, 60px 180px 10px 145px 132px);\r\n    }\r\n  }\r\n}\r\n\r\n.grid-menu {\r\n  @include grid(1fr, 150px 46px minmax(500px ,1052px));\r\n  row-gap: 40px;\r\n  @include media-laptop {\r\n    @include grid(1fr, 225px 46px 1052px 60px);\r\n\r\n    @include media-tablet {\r\n      @include grid(1fr, 120px 46px 2144px 60px);\r\n    }\r\n  }\r\n}\r\n\r\n.grid-menu-s {\r\n  @include grid(1fr, 150px 46px 1052px);\r\n  row-gap: 40px;\r\n  @include media-laptop {\r\n    @include grid(1fr, 225px 46px 2144px 60px);\r\n\r\n    @include media-tablet {\r\n      @include grid(1fr, 120px 46px 4288px 60px);\r\n    }\r\n  }\r\n}\r\n\r\n.menu__cards-grid {\r\n  @include grid(repeat(4, 310px), repeat(2, minmax(0,506px)));\r\n  gap: 40px;\r\n  @include media-laptop {\r\n    @include grid(repeat(2, 310px), repeat(4, 506px));\r\n    justify-self: center;\r\n\r\n    @include media-tablet {\r\n      @include grid( 310px, repeat(4, 506px));\r\n    }\r\n  }\r\n}\r\n\r\n.menu__cards-grid-s {\r\n  @include grid(repeat(4, 310px), repeat(2, 506px));\r\n  gap: 40px;\r\n  @include media-laptop {\r\n    @include grid(repeat(2, 310px), repeat(8, 506px));\r\n    justify-self: center;\r\n\r\n    @include media-tablet {\r\n      @include grid( 310px, repeat(8, 506px));\r\n    }\r\n  }\r\n}",".layout-5-column {\r\n  @include columns($width: 0%);\r\n}\r\n\r\n.layout-4-column {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.layout-3-column {\r\n  @include columns($width: 0%);\r\n}\r\n\r\n.layout-2-column {\r\n  @include flex(spacespace-between);\r\n\r\n  @include media-laptop {\r\n    @include flex(space-between, center, column);\r\n  }\r\n}\r\n",".enjoy {\r\n  .enjoy__wrapper {\r\n\r\n  }\r\n  .enjoy__video {\r\n    grid-row: 1/ 4;\r\n    grid-column: 1/ 4;\r\n    @include media-tablet {\r\n      grid-column: 1/ 5;\r\n    }\r\n\r\n    z-index: -1;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n\r\n    border-radius: 40px;\r\n  }\r\n}\r\n\r\n.enjoy__content {\r\n  display: flex;\r\n\r\n  @include flex(flex-start, flex-start, column);\r\n\r\n  grid-row: 2/ 3;\r\n  grid-column: 2/ 3;\r\n\r\n  @include media-tablet {\r\n\r\n  }\r\n\r\n  gap: 40px;\r\n\r\n  .enjoy__text {\r\n    color: $color-text-light;\r\n    @include font(1.6rem, 2.4rem);\r\n  }\r\n\r\n  .enjoy__cursive {\r\n    color: $color-primary-darker;\r\n  }\r\n}",".favourites-coffee {\r\n  margin-top: 100px;\r\n\r\n  .favourites-coffee__title{\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 4;\r\n    text-align: center;\r\n\r\n    .favourites-coffee__cursive {\r\n      color: $color-text-accent;\r\n    }\r\n  }\r\n}",".about {\r\n  margin-top: 100px;\r\n\r\n  .about__cursive {\r\n    color: $color-text-accent;\r\n  }\r\n\r\n  .about__title {\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n    letter-spacing: -0.4px;\r\n  }\r\n\r\n  .about__box {\r\n    @include flex(center, center);\r\n    overflow: hidden;\r\n    border-radius: 20px;\r\n\r\n    &:nth-child(1n) {\r\n      width: 660px;\r\n      height: 590px;\r\n\r\n      grid-column: 1 / 2;\r\n      grid-row: 2 / 4;\r\n\r\n      @include media-laptop {\r\n        width: 688px;\r\n\r\n        grid-row: 2 / 3;\r\n\r\n        justify-self: center;\r\n\r\n        @include media-tablet{\r\n          width: 348px;\r\n        }\r\n      }\r\n    }\r\n\r\n    &:nth-child(2n) {\r\n      width: 660px;\r\n      height: 430px;\r\n\r\n      grid-column: 1 / 2;\r\n      grid-row: 4 / 5;\r\n\r\n    }\r\n\r\n    &:nth-child(3n) {\r\n      width: 660px;\r\n      height: 430px;\r\n\r\n      grid-column: 2 / 3;\r\n      grid-row: 2 / 3;\r\n\r\n      @include media-laptop {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    &:nth-child(4n) {\r\n      width: 660px;\r\n      height: 590px;\r\n\r\n      grid-column: 2 / 3;\r\n      grid-row: 3 / 5;\r\n\r\n      @include media-laptop {\r\n        width: 688px;\r\n\r\n        grid-column: 1 / 2;\r\n        grid-row: 3 / 4;\r\n\r\n        justify-self: center;\r\n\r\n        @include media-tablet{\r\n          width: 348px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .about__img {\r\n      max-width: initial;\r\n      @extend %transition;\r\n      &:hover{\r\n        transform: scale(0.92);\r\n        @extend %transition;\r\n      }\r\n    }\r\n  }\r\n}",".mobile-app {\r\n  margin-top: 100px;\r\n\r\n  .mobile-app__wrapper {\r\n    background: url(\"../../assets/img/mobile-screens.png\") no-repeat 100% 0;\r\n\r\n    @include media-laptop {\r\n      background: url(\"../../assets/img/mobile-screens.png\") no-repeat 50% 100%;\r\n\r\n      @include media-tablet {\r\n        background-size: 348px 348px;\r\n        background-image: url(\"../../assets/img/mobile-screens.png\");\r\n        background-repeat: no-repeat;\r\n        background-position: 50% 100%;\r\n      }\r\n    }\r\n\r\n    .mobile-app__cursive {\r\n      color: $color-text-accent;\r\n      letter-spacing: 0.01px;\r\n    }\r\n\r\n    .mobile-app__content {\r\n      grid-column: 1 / 2;\r\n      grid-row: 2 / 3;\r\n\r\n      @include flex(flex-start, space-between, column);\r\n\r\n      gap: 40px;\r\n\r\n      .mobile-app__text {\r\n\r\n      }\r\n\r\n      .mobile-app__buttons {\r\n        @include flex(flex-start);\r\n        gap: 20px;\r\n\r\n        @include media-tablet {\r\n          @include flex(flex-start, flex-start, column);\r\n        }\r\n\r\n        .button__text {\r\n          .button__text-1 {\r\n            @include font(1rem, 1, 4rem, bold)\r\n          }\r\n        }\r\n      }\r\n\r\n      @include media-laptop {\r\n        grid-row: 1 / 2;\r\n        justify-self: center;\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  margin-top: 20px;\r\n\r\n  .menu-page__title {\r\n    color: $color-text;\r\n    text-align: center;\r\n    padding: 0 250px 0 250px;\r\n\r\n    @include media-laptop {\r\n      padding: 0;\r\n    }\r\n\r\n    .cursive {\r\n      color: $color-text-accent;\r\n    }\r\n  }\r\n\r\n  .menu-buttons {\r\n    @include flex(center);\r\n    gap: 16px;\r\n    padding: 0;\r\n\r\n    @include media-tablet {\r\n      gap: 8px;\r\n    }\r\n    .menu__button {\r\n      width: auto;\r\n      height: 46px;\r\n      padding: 11px 16px 8px 45px;\r\n      border: 1px solid $color-border-light;\r\n      border-radius: 100px;\r\n      &:nth-child(1) {\r\n        background: url(\"../../assets/icons/icon-cup.svg\") 9% 50% no-repeat;\r\n      }\r\n      &:nth-child(2) {\r\n        background: url(\"../../assets/icons/icon-teapot.svg\") 9% 50% no-repeat;\r\n      }\r\n      &:nth-child(3) {\r\n        background: url(\"../../assets/icons/icon-cake.svg\") 9% 50% no-repeat;\r\n      }\r\n      &_selected {\r\n        background-color: $color-border-dark !important;\r\n        color: $color-text-light;\r\n      }\r\n      &:hover {\r\n        background-color: $color-border-dark;\r\n        color: $color-text-light;\r\n      }\r\n    }\r\n  }\r\n\r\n  .menu__card {\r\n    @include flex(flex-start, flex-start, column);\r\n    gap: 20px;\r\n\r\n    border: 1px solid $color-border-light;\r\n    border-radius: 40px;\r\n    @include media-laptop {\r\n      &:nth-child(n + 5) {\r\n        display: none;\r\n      }\r\n    }\r\n    .menu__box {\r\n      @include flex(center, center);\r\n      overflow: hidden;\r\n      border-radius: 40px;\r\n\r\n      width: 309px;\r\n      height: 310px;\r\n\r\n      .menu__img {\r\n        max-width: initial;\r\n        @extend %transition;\r\n        &:hover{\r\n          transform: scale(0.92);\r\n          @extend %transition;\r\n        }\r\n      }\r\n    }\r\n\r\n    .menu__card-content {\r\n      @include flex(space-between, flex-start, column);\r\n      padding: 0 20px;\r\n      height: 156px;\r\n    }\r\n\r\n    .menu__text {\r\n      min-height: 72px;\r\n    }\r\n\r\n    .menu__price {\r\n      @include font(2.4rem, 3rem, bold)\r\n    }\r\n  }\r\n\r\n  .cards-button {\r\n    width: 60px;\r\n    height: 60px;\r\n\r\n    background: url(\"../../assets/icons/button-icon-dark.svg\");\r\n\r\n    display: none;\r\n\r\n    justify-self: center;\r\n\r\n    @include media-laptop {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n\r\n.display-none {\r\n  display: none !important;\r\n}",null],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/fonts/Inter-Bold.otf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Inter-Bold.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Bold.otf";

/***/ }),

/***/ "./src/assets/fonts/Inter-Regular.otf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Inter-Regular.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Inter-Regular.otf";

/***/ }),

/***/ "./src/assets/icons/button-icon-dark.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/button-icon-dark.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/button-icon-dark.svg";

/***/ }),

/***/ "./src/assets/icons/coffee-cup.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/coffee-cup.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/coffee-cup.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/Icon-apple-light.svg":
/*!********************************************************!*\
  !*** ./src/assets/icons/contacts/Icon-apple-light.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Icon-apple-light.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/Icon-apple.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/contacts/Icon-apple.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Icon-apple.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/clock.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/contacts/clock.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/clock.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/facebook-dark.svg":
/*!*****************************************************!*\
  !*** ./src/assets/icons/contacts/facebook-dark.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/facebook-dark.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/facebook.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/contacts/facebook.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/facebook.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/icon-google-light.svg":
/*!*********************************************************!*\
  !*** ./src/assets/icons/contacts/icon-google-light.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-google-light.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/icon-google.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/contacts/icon-google.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-google.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/instagram-dark.svg":
/*!******************************************************!*\
  !*** ./src/assets/icons/contacts/instagram-dark.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/instagram-dark.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/instagram.svg":
/*!*************************************************!*\
  !*** ./src/assets/icons/contacts/instagram.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/instagram.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/phone.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/contacts/phone.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/phone.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/pin-alt.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/contacts/pin-alt.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pin-alt.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/twitter-dark.svg":
/*!****************************************************!*\
  !*** ./src/assets/icons/contacts/twitter-dark.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/twitter-dark.svg";

/***/ }),

/***/ "./src/assets/icons/contacts/twitter.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/contacts/twitter.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/twitter.svg";

/***/ }),

/***/ "./src/assets/icons/icon-cake.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/icon-cake.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-cake.svg";

/***/ }),

/***/ "./src/assets/icons/icon-cup.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/icon-cup.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-cup.svg";

/***/ }),

/***/ "./src/assets/icons/icon-teapot.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/icon-teapot.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-teapot.svg";

/***/ }),

/***/ "./src/assets/icons/items/arrow-left-light.svg":
/*!*****************************************************!*\
  !*** ./src/assets/icons/items/arrow-left-light.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow-left-light.svg";

/***/ }),

/***/ "./src/assets/icons/items/arrow-left.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/items/arrow-left.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow-left.svg";

/***/ }),

/***/ "./src/assets/icons/items/arrow-right-light.svg":
/*!******************************************************!*\
  !*** ./src/assets/icons/items/arrow-right-light.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow-right-light.svg";

/***/ }),

/***/ "./src/assets/icons/items/arrow-right.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/items/arrow-right.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow-right.svg";

/***/ }),

/***/ "./src/assets/img/mobile-screens.png":
/*!*******************************************!*\
  !*** ./src/assets/img/mobile-screens.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mobile-screens.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"menu": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/scss/pages/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ "./src/scss/main.scss");
/* harmony import */ var _js_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/products.js */ "./src/scss/js/products.js");
/* harmony import */ var _js_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/card.js */ "./src/scss/js/card.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modal.js */ "./src/scss/js/modal.js");

// import './menu.html';



const menu = document.querySelector('.menu');
menu.classList.toggle('active');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const blackout = document.querySelector('.blackout');
hamburger.addEventListener('click', function () {
  navigation.classList.toggle('active');
  hamburger.classList.toggle('open');
  blackout.classList.toggle('hidden');
  document.querySelector('body').classList.toggle('scroll-disabled');
  navigation.addEventListener('click', function (event) {
    if (event.target.classList.contains('navigation__link')) {
      hamburger.classList.remove('open');
      navigation.classList.remove('active');
      blackout.classList.add('hidden');
      document.querySelector('body').classList.remove('scroll-disabled');
    }
  });
  blackout.addEventListener('click', function (event) {
    if (event.target.classList.contains('blackout')) {
      hamburger.classList.remove('open');
      navigation.classList.remove('active');
      blackout.classList.add('hidden');
      document.querySelector('body').classList.remove('scroll-disabled');
    }
  });
});

//render cards
window.onload = function () {
  renderingMenuCards();
  // addToolsClickHandler();
};

function renderingMenuCards() {
  let menuCards = getClearMenuCards();
  let actualProducts = getActualProducts();
  generateCardInstances(actualProducts).forEach(Card => {
    menuCards.append(Card.renderingCard());
  });
}
function getClearMenuCards() {
  let MenuCards = document.querySelector('.menu__cards');
  MenuCards.innerHTML = '';
  return MenuCards;
}
function generateCardInstances(actualProducts) {
  let instances = [];
  actualProducts.forEach(prodObj => {
    instances.push(new _js_card_js__WEBPACK_IMPORTED_MODULE_2__.Card(prodObj));
  });
  return instances;
}

//buttons menu category switch
const menuCategoryBTN = document.querySelector('.menu-buttons');
menuCategoryBTN.addEventListener('click', function (event) {
  if (event.target.classList.contains('menu__button')) {
    let BTN = document.querySelector('.menu__button_selected');
    BTN.classList.remove('menu__button_selected');
    event.target.classList.add('menu__button_selected');
    renderingMenuCards();
  }
});
function getActualProducts() {
  let category = document.querySelector('.menu__button_selected').innerHTML;
  return _js_products_js__WEBPACK_IMPORTED_MODULE_1__.products.filter(obj => obj.category === category.toLowerCase());
}
let cardsBTN = document.querySelector('.cards-button');
const menuWrapper = document.querySelector('.grid-menu');
const menuCardsGrid = document.querySelector('.menu__cards-grid');
cardsBTN.addEventListener('click', function () {
  const cards = document.querySelectorAll('.menu__card');
  for (let card of cards) {
    card.style.display = 'flex';
  }
  menuWrapper.classList.toggle('grid-menu');
  menuWrapper.classList.toggle('grid-menu-s');
  menuCardsGrid.classList.toggle('menu__cards-grid');
  menuCardsGrid.classList.toggle('menu__cards-grid-s');
  cardsBTN.classList.add('display-none');
});

//theme
const themeToggleBtn = document.querySelector('.button-theme-switch');
const rootHtml = document.documentElement;
if (localStorage.getItem('theme-dark') === 'true') {
  rootHtml.toggleAttribute('data-theme', true);
}
themeToggleBtn.addEventListener('click', () => {
  const isDark = rootHtml.toggleAttribute('data-theme');
  localStorage.setItem('theme-dark', isDark);
});
})();

/******/ })()
;
//# sourceMappingURL=menu.9fb19a3aa78ff796c67d.js.map