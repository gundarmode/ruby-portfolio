"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Me_Documents_ruby_website_portfolio_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/theme.config */ \"./styles/theme.config.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Me\\\\Documents\\\\ruby\\\\website\\\\portfolio\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Me_Documents_ruby_website_portfolio_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  _s();\n\n  const [navAnimation, setNavAnimation] = useState(true); // Get window width and height\n\n  const [size, setSize] = useState({// windowWidth: window.innerWidth,\n    // windowHeight: window.innerHeight\n  });\n\n  const updateSize = () => {\n    setSize({\n      windowWidth: window.innerWidth,\n      windowHeight: window.innerHeight\n    });\n  };\n\n  useEffect(() => {\n    setSize({\n      windowWidth: window.innerWidth,\n      windowHeight: window.innerHeight\n    });\n    window.onresize = updateSize;\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n    theme: _styles_theme_config__WEBPACK_IMPORTED_MODULE_1__.lightTheme,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_theme_config__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      navAnimation: navAnimation,\n      setNavAnimation: setNavAnimation,\n      windowWidth: size.windowWidth,\n      windowHeight: size.windowHeight\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(MyApp, \"OoUTV/33Z1IheNjGFB3QgM3c+bE=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFBQTs7QUFFckMsUUFBSyxDQUFDQyxZQUFELEVBQWNDLGVBQWQsSUFBaUNDLFFBQVEsQ0FBQyxJQUFELENBQTlDLENBRnFDLENBSXhDOztBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCRixRQUFRLENBQUMsQ0FDMUI7QUFDTjtBQUZnQyxHQUFELENBQWhDOztBQUlBLFFBQU1HLFVBQVUsR0FBRyxNQUFNO0FBQ3hCRCxJQUFBQSxPQUFPLENBQUM7QUFDUEUsTUFBQUEsV0FBVyxFQUFFQyxNQUFNLENBQUNDLFVBRGI7QUFFUEMsTUFBQUEsWUFBWSxFQUFFRixNQUFNLENBQUNHO0FBRmQsS0FBRCxDQUFQO0FBSUEsR0FMRDs7QUFRQUMsRUFBQUEsU0FBUyxDQUFDLE1BQU07QUFDVFAsSUFBQUEsT0FBTyxDQUFDO0FBQ2JFLE1BQUFBLFdBQVcsRUFBRUMsTUFBTSxDQUFDQyxVQURQO0FBRWJDLE1BQUFBLFlBQVksRUFBRUYsTUFBTSxDQUFDRztBQUZSLEtBQUQsQ0FBUDtBQUlOSCxJQUFBQSxNQUFNLENBQUNLLFFBQVAsR0FBa0JQLFVBQWxCO0FBQ0EsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVVHLHNCQUNJLDhEQUFDLDREQUFEO0FBQWUsU0FBSyxFQUFFViw0REFBdEI7QUFBQSw0QkFDSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyw4REFBRDtBQUFZLGtCQUFZLEVBQUVLLFlBQTFCO0FBQXdDLHFCQUFlLEVBQUVDLGVBQXpEO0FBQTBFLGlCQUFXLEVBQUVFLElBQUksQ0FBQ0csV0FBNUY7QUFBeUcsa0JBQVksRUFBRUgsSUFBSSxDQUFDTTtBQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyxTQUFELG9CQUFlVixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQW5DUUY7O0tBQUFBO0FBcUNULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlcywgbGlnaHRUaGVtZSB9IGZyb20gXCIuLy4uL3N0eWxlcy90aGVtZS5jb25maWdcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gICAgY29uc3RbbmF2QW5pbWF0aW9uLHNldE5hdkFuaW1hdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cdC8vIEdldCB3aW5kb3cgd2lkdGggYW5kIGhlaWdodFxuXHRjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIC8vIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHQvLyB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH0pXG5cdGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XG5cdFx0c2V0U2l6ZSh7XG5cdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdH0pXG5cdH1cblxuIFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTaXplKHtcblx0XHRcdHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG5cdFx0fSlcblx0XHR3aW5kb3cub25yZXNpemUgPSB1cGRhdGVTaXplXG5cdH0sIFtdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtsaWdodFRoZW1lfT5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIG5hdkFuaW1hdGlvbj17bmF2QW5pbWF0aW9ufSBzZXROYXZBbmltYXRpb249e3NldE5hdkFuaW1hdGlvbn0gd2luZG93V2lkdGg9e3NpemUud2luZG93V2lkdGh9IHdpbmRvd0hlaWdodD17c2l6ZS53aW5kb3dIZWlnaHR9Lz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbiBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwibGlnaHRUaGVtZSIsIk5hdmlnYXRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5hdkFuaW1hdGlvbiIsInNldE5hdkFuaW1hdGlvbiIsInVzZVN0YXRlIiwic2l6ZSIsInNldFNpemUiLCJ1cGRhdGVTaXplIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJvbnJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});