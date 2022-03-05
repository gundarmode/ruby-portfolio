"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/Header.styled */ \"./styles/Header.styled.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Me\\\\Documents\\\\ruby\\\\website\\\\portfolio\\\\components\\\\Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ({\n  windowWidth,\n  windowHeight\n}) => {\n  _s();\n\n  const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const subTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const coolTextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const header1Ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const header2Ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const header3Ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const btnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const extraBG = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  const timer = (el, time) => {\n    setTimeout(() => {\n      el.current.classList.add(\"active\");\n    }, time);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    timer(coolTextRef, 500);\n    timer(headerRef, 750);\n    timer(header1Ref, 1000);\n    timer(header2Ref, 1250);\n    timer(header3Ref, 1500);\n    timer(titleRef, 1750);\n    timer(subTitleRef, 2000);\n    timer(btnRef, 2500); // setTimeout(() => {\n    //     setInterval(() => {\n    //         extraBG.current.classList.toggle(\"bg-transition\")\n    //     }, 4000);\n    // }, 2500);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_Header_styled__WEBPACK_IMPORTED_MODULE_1__.StyledHeader, {\n    ref: headerRef,\n    style: {\n      width: `${windowWidth}px`,\n      height: `${windowHeight}px`\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"extra-bg\",\n      ref: extraBG\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"header-elements\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"header-element element-1\",\n        ref: header1Ref\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"header-element element-2\",\n        ref: header2Ref\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"header-element element-3\",\n        ref: header3Ref\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"intro-box slide\",\n      ref: titleRef,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: \"Rubyann Yau\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"sub-title\",\n        ref: subTitleRef,\n        children: \"Graphic Designer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"cool-text\",\n      ref: coolTextRef,\n      children: \"Rubyann Yau\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/section-one\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n        className: \"btn\",\n        children: \"View Portfolio\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 39\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Header, \"hOoPKBTMJiKyY+JnRzVMittVVGo=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBRyxFQUFFQyxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFXSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUcsRUFBRUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEosZUFhSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQUEsNkJBQTBCO0FBQUcsaUJBQVMsRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFA7QUFpQkEsQ0FwREQ7O0dBQU1OOztLQUFBQTtBQXNETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3R5bGVkSGVhZGVyIH0gZnJvbSAnLi8uLi9zdHlsZXMvSGVhZGVyLnN0eWxlZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHt3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0fSkgPT4ge1xyXG5cclxuXHJcblx0Y29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpXHJcblx0Y29uc3QgdGl0bGVSZWYgPSB1c2VSZWYobnVsbClcclxuXHRjb25zdCBzdWJUaXRsZVJlZiA9IHVzZVJlZihudWxsKVxyXG5cdGNvbnN0IGNvb2xUZXh0UmVmID0gdXNlUmVmKG51bGwpXHJcblx0Y29uc3QgaGVhZGVyMVJlZiA9IHVzZVJlZihudWxsKVxyXG5cdGNvbnN0IGhlYWRlcjJSZWYgPSB1c2VSZWYobnVsbClcclxuXHRjb25zdCBoZWFkZXIzUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBidG5SZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGV4dHJhQkcgPSB1c2VSZWYobnVsbClcclxuXHRcclxuXHRjb25zdCB0aW1lciA9IChlbCwgdGltZSkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7ZWwuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpfSwgdGltZSk7XHJcblx0fVxyXG4gXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHRpbWVyKGNvb2xUZXh0UmVmLCA1MDApXHRcclxuXHQgICBcdHRpbWVyKGhlYWRlclJlZiwgNzUwKVxyXG5cdFx0dGltZXIoaGVhZGVyMVJlZiwgMTAwMClcclxuXHRcdHRpbWVyKGhlYWRlcjJSZWYsIDEyNTApXHJcblx0XHR0aW1lcihoZWFkZXIzUmVmLCAxNTAwKVxyXG5cdFx0dGltZXIodGl0bGVSZWYsIDE3NTApXHJcblx0XHR0aW1lcihzdWJUaXRsZVJlZiwgMjAwMCkgXHJcbiAgICAgICAgdGltZXIoYnRuUmVmLCAyNTAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBleHRyYUJHLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXRyYW5zaXRpb25cIilcclxuICAgICAgICAvLyAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgLy8gfSwgMjUwMCk7XHJcbiAgICAgICAgXHJcblx0fSxbXSlcclxuXHJcblx0cmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkSGVhZGVyIHJlZj17aGVhZGVyUmVmfSBzdHlsZT17e3dpZHRoOmAke3dpbmRvd1dpZHRofXB4YCwgaGVpZ2h0OmAke3dpbmRvd0hlaWdodH1weGB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V4dHJhLWJnJyByZWY9e2V4dHJhQkd9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1lbGVtZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZWxlbWVudCBlbGVtZW50LTFcIiByZWY9e2hlYWRlcjFSZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZWxlbWVudCBlbGVtZW50LTJcIiByZWY9e2hlYWRlcjJSZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZWxlbWVudCBlbGVtZW50LTNcIiByZWY9e2hlYWRlcjNSZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1ib3ggc2xpZGVcIiByZWY9e3RpdGxlUmVmfT5cclxuICAgICAgICAgICAgICAgIDxoMT5SdWJ5YW5uIFlhdTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiIHJlZj17c3ViVGl0bGVSZWZ9PkdyYXBoaWMgRGVzaWduZXI8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29vbC10ZXh0XCIgcmVmPXtjb29sVGV4dFJlZn0+UnVieWFubiBZYXU8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VjdGlvbi1vbmVcIj48YSBjbGFzc05hbWU9J2J0bic+VmlldyBQb3J0Zm9saW88L2E+PC9MaW5rPiAgXHJcbiAgICAgICAgPC9TdHlsZWRIZWFkZXI+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiU3R5bGVkSGVhZGVyIiwiTGluayIsIkhlYWRlciIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiaGVhZGVyUmVmIiwidGl0bGVSZWYiLCJzdWJUaXRsZVJlZiIsImNvb2xUZXh0UmVmIiwiaGVhZGVyMVJlZiIsImhlYWRlcjJSZWYiLCJoZWFkZXIzUmVmIiwiYnRuUmVmIiwiZXh0cmFCRyIsInRpbWVyIiwiZWwiLCJ0aW1lIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});