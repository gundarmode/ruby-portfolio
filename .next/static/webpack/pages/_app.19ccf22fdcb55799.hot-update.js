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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Me_Documents_ruby_website_portfolio_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/theme.config */ \"./styles/theme.config.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Me\\\\Documents\\\\ruby\\\\website\\\\portfolio\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Me_Documents_ruby_website_portfolio_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  _s();\n\n  const {\n    0: navAnimation,\n    1: setNavAnimation\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n  const {\n    0: display,\n    1: setDisplay\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Get window width and height\n\n  const {\n    0: size,\n    1: setSize\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({// windowWidth: window.innerWidth,\n    // windowHeight: window.innerHeight\n  });\n\n  const updateSize = () => {\n    setSize({\n      windowWidth: window.innerWidth,\n      windowHeight: window.innerHeight\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    setSize({\n      windowWidth: window.innerWidth,\n      windowHeight: window.innerHeight\n    });\n    window.onresize = updateSize;\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    if (router.pathname !== \"/\") {\n      setDisplay(true);\n    }\n  }, [display]);\n  console.log(router);\n  console.log(display);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n    theme: _styles_theme_config__WEBPACK_IMPORTED_MODULE_1__.lightTheme,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_theme_config__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      navAnimation: navAnimation,\n      setNavAnimation: setNavAnimation,\n      windowWidth: size.windowWidth,\n      windowHeight: size.windowHeight,\n      display: display\n    }, router.asPath, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({\n      windowWidth: size.windowWidth,\n      windowHeight: size.windowHeight\n    }, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, this);\n}\n\n_s(MyApp, \"Fd36WB+0PZh4bNLjYCtSzM/JovY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUFBOztBQUVyQyxRQUFLO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWNDO0FBQWQsTUFBaUNQLCtDQUFRLENBQUMsSUFBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDUSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlQsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsUUFBTVUsTUFBTSxHQUFHUixzREFBUyxFQUF4QixDQUxxQyxDQU94Qzs7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JaLCtDQUFRLENBQUMsQ0FDMUI7QUFDTjtBQUZnQyxHQUFELENBQWhDOztBQUlBLFFBQU1hLFVBQVUsR0FBRyxNQUFNO0FBQ3hCRCxJQUFBQSxPQUFPLENBQUM7QUFDUEUsTUFBQUEsV0FBVyxFQUFFQyxNQUFNLENBQUNDLFVBRGI7QUFFUEMsTUFBQUEsWUFBWSxFQUFFRixNQUFNLENBQUNHO0FBRmQsS0FBRCxDQUFQO0FBSUEsR0FMRDs7QUFRQWpCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNUVyxJQUFBQSxPQUFPLENBQUM7QUFDYkUsTUFBQUEsV0FBVyxFQUFFQyxNQUFNLENBQUNDLFVBRFA7QUFFYkMsTUFBQUEsWUFBWSxFQUFFRixNQUFNLENBQUNHO0FBRlIsS0FBRCxDQUFQO0FBSU5ILElBQUFBLE1BQU0sQ0FBQ0ksUUFBUCxHQUFrQk4sVUFBbEI7QUFDQSxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUdaLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlTLE1BQU0sQ0FBQ1UsUUFBUCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QlgsTUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNIO0FBQ1AsR0FKVyxFQUlULENBQUNELE9BQUQsQ0FKUyxDQUFUO0FBT0FhLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixNQUFaO0FBQ0FXLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxPQUFaO0FBR0Esc0JBQ0ksOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVWLDREQUF0QjtBQUFBLDRCQUNJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLDhEQUFEO0FBQVksa0JBQVksRUFBRVEsWUFBMUI7QUFBd0MscUJBQWUsRUFBRUMsZUFBekQ7QUFBMEUsaUJBQVcsRUFBRUksSUFBSSxDQUFDRyxXQUE1RjtBQUF5RyxrQkFBWSxFQUFFSCxJQUFJLENBQUNNLFlBQTVIO0FBQTBJLGFBQU8sRUFBRVQ7QUFBbkosT0FBaUtFLE1BQU0sQ0FBQ2EsTUFBeEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0ksOERBQUMsU0FBRDtBQUFXLGlCQUFXLEVBQUVaLElBQUksQ0FBQ0csV0FBN0I7QUFBMEMsa0JBQVksRUFBRUgsSUFBSSxDQUFDTTtBQUE3RCxPQUErRVosU0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBL0NRRjtVQUtVRDs7O0tBTFZDO0FBaURULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlcywgbGlnaHRUaGVtZSB9IGZyb20gXCIuLy4uL3N0eWxlcy90aGVtZS5jb25maWdcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gICAgY29uc3RbbmF2QW5pbWF0aW9uLHNldE5hdkFuaW1hdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Ly8gR2V0IHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0XG5cdGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgLy8gd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdC8vIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSlcblx0Y29uc3QgdXBkYXRlU2l6ZSA9ICgpID0+IHtcblx0XHRzZXRTaXplKHtcblx0XHRcdHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG5cdFx0fSlcblx0fVxuXG4gXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFNpemUoe1xuXHRcdFx0d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0d2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR9KVxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IHVwZGF0ZVNpemVcblx0fSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lICE9PSBcIi9cIikge1xuICAgICAgICAgICAgc2V0RGlzcGxheSh0cnVlKVxuICAgICAgICB9XHRcblx0fSwgW2Rpc3BsYXldKVxuXG4gICAgXG4gICAgY29uc29sZS5sb2cocm91dGVyKVxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXkpXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0VGhlbWV9PlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICAgICAgPE5hdmlnYXRpb24gbmF2QW5pbWF0aW9uPXtuYXZBbmltYXRpb259IHNldE5hdkFuaW1hdGlvbj17c2V0TmF2QW5pbWF0aW9ufSB3aW5kb3dXaWR0aD17c2l6ZS53aW5kb3dXaWR0aH0gd2luZG93SGVpZ2h0PXtzaXplLndpbmRvd0hlaWdodH0gZGlzcGxheT17ZGlzcGxheX0ga2V5PXtyb3V0ZXIuYXNQYXRofS8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHdpbmRvd1dpZHRoPXtzaXplLndpbmRvd1dpZHRofSB3aW5kb3dIZWlnaHQ9e3NpemUud2luZG93SGVpZ2h0fSB7Li4ucGFnZVByb3BzfSAgLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbiBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwibGlnaHRUaGVtZSIsIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibmF2QW5pbWF0aW9uIiwic2V0TmF2QW5pbWF0aW9uIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJyb3V0ZXIiLCJzaXplIiwic2V0U2l6ZSIsInVwZGF0ZVNpemUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9ucmVzaXplIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});