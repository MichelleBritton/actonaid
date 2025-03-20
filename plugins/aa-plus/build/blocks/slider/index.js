/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/slider/block.json":
/*!**************************************!*\
  !*** ./src/blocks/slider/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"aa-plus/slider","title":"AA Slider","category":"design","icon":"star-filled","description":"Adds a slider","keywords":["slider","carousel"],"version":"1","textdomain":"aa-plus","editorScript":"file:./index.js","supports":{"html":false},"attributes":{"items":{"type":"array","default":[]}}}');

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/blocks/slider/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slider/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit({
    attributes,
    setAttributes,
    isSelected
  }) {
    // Local state to manage item additions before syncing back to attributes
    const [items, setItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(attributes.items || []);

    // Function to add a new empty item (without an image)
    const handleAddItem = () => {
      const newItems = [...items, {
        id: Date.now(),
        image: "",
        title: "",
        ctaText: "",
        ctaUrl: ""
      }];
      setItems(newItems);
      setAttributes({
        items: newItems
      });
    };

    // Function to handle image upload for a specific item
    const handleImageSelect = (image, index) => {
      const newItems = [...items];
      const imageSizes = image.sizes || {};

      // Construct srcSet from available image sizes
      const srcSet = `
        ${imageSizes.thumbnail?.url} 150w,
        ${imageSizes.medium?.url} 300w,
        ${imageSizes.small?.url} 620w,
        ${imageSizes.large?.url} 1024w,
        ${imageSizes.full?.url} 1600w       
      `;

      // Now add the srcSet to the image object
      newItems[index].image = {
        url: image.url,
        // The default/original image URL
        srcSet: srcSet,
        // The srcSet we've just built
        sizes: "(max-width: 600px) 620px, (min-width: 601px) and (max-width: 1024px) 1024px, (min-width: 1025px) and (max-width: 1600px) 1600px, 100vw" // Breakpoints for loading different sizes
      };
      setItems(newItems);
      setAttributes({
        items: newItems
      });
    };

    // Function to delete an item (remove the image from the array)
    const handleDeleteItem = index => {
      const newItems = items.filter((_, i) => i !== index); // Remove the item by filtering it out
      setItems(newItems); // Update local state
      setAttributes({
        items: newItems
      }); // Sync with WordPress block attributes
    };

    // Define styles for the editor preview to make the carousel easier to edit
    const editorStyles = {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px"
    };
    const itemStyles = {
      width: "100%",
      height: "500px",
      border: "1px dashed #ccc",
      padding: "10px",
      overflow: "hidden",
      position: "relative"
    };
    const buttonStyles = {
      fontSize: "16px",
      fontWeight: "bold",
      display: "block",
      width: "100%",
      height: "auto",
      overflow: "hidden"
    };
    const titleStyles = {
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "bold",
      border: "1px dashed #ccc",
      padding: "5px",
      backgroundColor: "#fff",
      cursor: "text"
    };
    const LinkStyles = {
      display: "block",
      textAlign: "center",
      marginTop: "10px",
      color: "#000"
    };
    const deleteButtonStyles = {
      position: "absolute",
      top: "10px",
      right: "10px",
      zIndex: 3,
      backgroundColor: "red",
      color: "white",
      padding: "5px 8px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer"
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Carousel Settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: handleAddItem,
            children: "Add a slider image"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "carousel-editor-preview",
        style: editorStyles // Apply grid layout in the editor
        ,
        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: itemStyles,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: image => handleImageSelect(image, index),
              allowedTypes: ["image"],
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                className: "button button-large",
                style: buttonStyles,
                children: item.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: item.image.url,
                  srcSet: item.image.srcSet,
                  sizes: item.image.sizes,
                  className: "size-full object-cover",
                  alt: `Acton Aid ${index + 1}`
                }) : "Upload Image"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              marginTop: "10px",
              width: "100%"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h2",
              value: item.title || "",
              onChange: title => {
                const newItems = [...items];
                newItems[index] = {
                  ...newItems[index],
                  title
                };
                setItems(newItems);
                setAttributes({
                  items: newItems
                });
              },
              placeholder: "Enter slide title...",
              style: titleStyles
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "a",
            value: item.ctaText || "",
            onChange: ctaText => {
              const newItems = [...items];
              newItems[index] = {
                ...newItems[index],
                ctaText
              };
              setItems(newItems);
              setAttributes({
                items: newItems
              });
            },
            placeholder: "Enter button text...",
            className: "text-base btn-animate md:text-lg lg:text-xl",
            style: LinkStyles
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            value: item.ctaUrl || "",
            onChange: ctaUrl => {
              const newItems = [...items];
              newItems[index] = {
                ...newItems[index],
                ctaUrl
              };
              setItems(newItems);
              setAttributes({
                items: newItems
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            style: deleteButtonStyles,
            onClick: () => handleDeleteItem(index),
            children: "Delete"
          })]
        }, item.id))
      })]
    });
  },
  save({
    attributes
  }) {
    const {
      items = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      class: "relative z-0 h-[80vh] w-full overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        id: "carousel",
        class: "flex transition-transform duration-700 ease-in-out",
        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "relative h-[80vh] w-full flex-shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "absolute flex size-full items-center justify-center",
            children: item.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
              className: "flex flex-col items-center px-8 py-4 text-center text-4xl text-white repeating-diagonal-gradient md:text-6xl xl:text-8xl",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: item.title
              }), item.ctaUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: item.ctaUrl,
                className: "text-base btn-animate md:text-lg lg:text-xl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: item.ctaText
                })
              })]
            })
          }), item.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: item.image.url // The main image URL
            ,
            srcSet: item.image.srcSet // Responsive image set
            ,
            sizes: item.image.sizes // Responsive size rules
            ,
            className: "size-full object-cover",
            alt: `Acton Aid Slide ${index + 1}`
          }) : null]
        }, item.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        id: "carousel-indicators",
        class: "absolute bottom-28 left-1/2 flex -translate-x-1/2 transform space-x-2"
      })]
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map