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

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Nav_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/Nav.styled */ \"./styles/Nav.styled.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Me\\\\Documents\\\\ruby\\\\website\\\\portfolio\\\\components\\\\Navigation.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nlet logo = \"../assets/images/layout/logo.svg\";\nlet logo2 = \"../assets/images/layout/logo-white.svg\";\nlet img1 = \"../assets/images/work/thumbs/2.jpg\";\nlet img2 = \"../assets/images/work/thumbs/1.jpg\";\nconst images = [{\n  imagePath: img1,\n  linkPath: \"/section-one\",\n  transitionTiming: 2\n}, {\n  imagePath: img2,\n  linkPath: \"/section-two\",\n  transitionTiming: 2.5\n}];\n\nconst Navigation = ({\n  navAnimation,\n  setNavAnimation,\n  windowWidth,\n  windowHeight,\n  display\n}) => {\n  _s();\n\n  const {\n    0: navButton,\n    1: setNavButton\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  console.log(display);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_Nav_styled__WEBPACK_IMPORTED_MODULE_1__.NavStyled, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: `main-nav${navAnimation ? \" active\" : \"\"}`,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"logo\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n          src: display ? logo : logo2,\n          alt: \"Logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 27\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: `nav-button${navButton ? \" active\" : \"\"}${display ? \" alt\" : \"\"}`,\n        onClick: () => {\n          setNavButton(!navButton);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"nav\", {\n        className: `nav${navButton ? \" active\" : \"\"}`,\n        style: {\n          width: `${windowWidth}px`,\n          minHeight: `${windowHeight}px`\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"menu-title\",\n          children: \"Menu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/section-one\",\n                children: \"Section One\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 11\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 7\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n              children: \"Section Two\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 11\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 7\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 6\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, undefined), display && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"bottom-nav\",\n        children: images.map((item, index) => {\n          const {\n            imagePath,\n            linkPath,\n            transitionTiming\n          } = item;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n              className: \"box\",\n              onClick: () => {\n                linkPath;\n              },\n              initial: {\n                opacity: 0,\n                translateY: 25\n              },\n              animate: {\n                opacity: 1,\n                translateY: 0\n              },\n              transition: {\n                duration: 1,\n                delay: transitionTiming\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                whileHover: {\n                  scale: 1.2,\n                  transition: {\n                    duration: .2\n                  }\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                  src: imagePath,\n                  alt: \"Thumbs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 13\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 12\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 10\n            }, undefined)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 9\n          }, undefined);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(Navigation, \"UKuvwl9Pi4gzQzn9vltzzBkPOUE=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2U3R5bGVkIH0gZnJvbSAnLi8uLi9zdHlsZXMvTmF2LnN0eWxlZCc7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmxldCBsb2dvID0gIFwiLi4vYXNzZXRzL2ltYWdlcy9sYXlvdXQvbG9nby5zdmdcIlxyXG5sZXQgbG9nbzIgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2xvZ28td2hpdGUuc3ZnXCJcclxubGV0IGltZzEgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvd29yay90aHVtYnMvMi5qcGdcIlxyXG5sZXQgaW1nMiA9IFwiLi4vYXNzZXRzL2ltYWdlcy93b3JrL3RodW1icy8xLmpwZ1wiXHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcblx0e1xyXG5cdFx0aW1hZ2VQYXRoOiBpbWcxLFxyXG5cdFx0bGlua1BhdGg6IFwiL3NlY3Rpb24tb25lXCIsXHJcblx0XHR0cmFuc2l0aW9uVGltaW5nOiAyXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZVBhdGg6aW1nMixcclxuXHRcdGxpbmtQYXRoOiBcIi9zZWN0aW9uLXR3b1wiLFxyXG5cdFx0dHJhbnNpdGlvblRpbWluZzogMi41XHJcblx0fVx0XHJcbl1cclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoe25hdkFuaW1hdGlvbiwgc2V0TmF2QW5pbWF0aW9uLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0LCBkaXNwbGF5fSkgPT4ge1xyXG5cclxuXHRcclxuXHRjb25zdFtuYXZCdXR0b24sIHNldE5hdkJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0XHJcblx0Y29uc29sZS5sb2coZGlzcGxheSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0XHRcdFxyXG5cdFx0PE5hdlN0eWxlZD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2BtYWluLW5hdiR7bmF2QW5pbWF0aW9uID8gXCIgYWN0aXZlXCIgOiBcIlwifWB9PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsb2dvJz48aW1nIHNyYz17ZGlzcGxheSA/IGxvZ28gOiBsb2dvMn0gYWx0PVwiTG9nb1wiIC8+PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BuYXYtYnV0dG9uJHtuYXZCdXR0b24gPyBcIiBhY3RpdmVcIiA6IFwiXCJ9JHtkaXNwbGF5ID8gXCIgYWx0XCIgOiBcIlwifWB9IG9uQ2xpY2s9eygpID0+IHtzZXROYXZCdXR0b24oIW5hdkJ1dHRvbil9fT48L2J1dHRvbj5cclxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT17YG5hdiR7bmF2QnV0dG9uID8gXCIgYWN0aXZlXCIgOiBcIlwifWB9IHN0eWxlPXt7d2lkdGg6YCR7d2luZG93V2lkdGh9cHhgLCBtaW5IZWlnaHQ6YCR7d2luZG93SGVpZ2h0fXB4YH19PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnUtdGl0bGUnPk1lbnU8L2Rpdj5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0PGxpPjxidXR0b24+PExpbmsgaHJlZj1cIi9zZWN0aW9uLW9uZVwiPlNlY3Rpb24gT25lPC9MaW5rPjwvYnV0dG9uPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YnV0dG9uPlNlY3Rpb24gVHdvPC9idXR0b24+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7ZGlzcGxheSAmJiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdzaWRlLWJ1dHRvbnMnPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+e3ByZXZCdXR0b24oKX19PlByZXY8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PntuZXh0QnV0dG9uKCl9fT5OZXh0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3R0b20tbmF2Jz5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdHtpbWFnZVBhdGgsIGxpbmtQYXRoLCB0cmFuc2l0aW9uVGltaW5nfSA9IGl0ZW07XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+e2xpbmtQYXRofX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e3tvcGFjaXR5OjAsIHRyYW5zbGF0ZVk6MjV9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17e29wYWNpdHk6MSwgdHJhbnNsYXRlWTowfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb249e3tkdXJhdGlvbjoxLCBkZWxheTp0cmFuc2l0aW9uVGltaW5nfX0gIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLHRyYW5zaXRpb246IHsgZHVyYXRpb246IC4yIH0sfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlUGF0aH0gYWx0PVwiVGh1bWJzXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICAgIFxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L05hdlN0eWxlZD5cclxuXHRcdFxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdlN0eWxlZCIsIm1vdGlvbiIsIkxpbmsiLCJsb2dvIiwibG9nbzIiLCJpbWcxIiwiaW1nMiIsImltYWdlcyIsImltYWdlUGF0aCIsImxpbmtQYXRoIiwidHJhbnNpdGlvblRpbWluZyIsIk5hdmlnYXRpb24iLCJuYXZBbmltYXRpb24iLCJzZXROYXZBbmltYXRpb24iLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImRpc3BsYXkiLCJuYXZCdXR0b24iLCJzZXROYXZCdXR0b24iLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvcGFjaXR5IiwidHJhbnNsYXRlWSIsImR1cmF0aW9uIiwiZGVsYXkiLCJzY2FsZSIsInRyYW5zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ })

});