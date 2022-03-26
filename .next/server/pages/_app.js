"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Nav_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8759);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






let logo = "../assets/images/layout/logo.svg";
let logo2 = "../assets/images/layout/logo-white.svg";
let img1 = "../assets/images/work/thumbs/2.jpg";
let img2 = "../assets/images/work/thumbs/1.jpg";
const images = [{
  imagePath: img1,
  linkPath: "/section-one",
  transitionTiming: 2
}, {
  imagePath: img2,
  linkPath: "/section-two",
  transitionTiming: 2.5
}];

const Navigation = ({
  navAnimation,
  setNavAnimation,
  windowWidth,
  windowHeight,
  display
}) => {
  const {
    0: navButton,
    1: setNavButton
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_Nav_styled__WEBPACK_IMPORTED_MODULE_1__/* .NavStyled */ .K, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `main-nav${navAnimation ? " active" : ""}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
            src: display ? logo : logo2,
            alt: "Logo"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        className: `nav-button${navButton ? " active" : ""}${display ? " alt" : ""}`,
        onClick: () => {
          setNavButton(!navButton);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
        className: `nav${navButton ? " active" : ""}`,
        style: {
          width: `${windowWidth}px`,
          minHeight: `${windowHeight}px`
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "menu-title",
          children: "Menu"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/section-one",
                children: "Jennie Kim - Transcription"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/section-two",
                children: "Jennie Kim - Transcription"
              })
            })
          })]
        })]
      })]
    }), display && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "bottom-nav",
        children: images.map((item, index) => {
          const {
            imagePath,
            linkPath,
            transitionTiming
          } = item;
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: linkPath,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "box",
                initial: {
                  opacity: 0,
                  translateY: 25
                },
                animate: {
                  opacity: 1,
                  translateY: 0
                },
                transition: {
                  duration: 1,
                  delay: transitionTiming
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                  whileHover: {
                    scale: 1.2,
                    transition: {
                      duration: .2
                    }
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                    src: imagePath,
                    alt: "Thumbs"
                  })
                }), "`"]
              })
            })
          }, index);
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);
});

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5207);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4330);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navigation__WEBPACK_IMPORTED_MODULE_2__]);
_components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const {
    0: navAnimation,
    1: setNavAnimation
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    0: display,
    1: setDisplay
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // Init window width and height

  const {
    0: size,
    1: setSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  const updateSize = () => {
    setSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Get intitial window width/height
    updateSize(); // Get window dimensions everytime it is resized

    window.onresize = updateSize;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Change nav styling when not on homepage
    setDisplay(router.pathname !== "/" ? true : false);
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
    theme: _styles_theme_config__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ .W,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles_theme_config__WEBPACK_IMPORTED_MODULE_1__/* .GlobalStyles */ .n, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      navAnimation: navAnimation,
      setNavAnimation: setNavAnimation,
      windowWidth: size.windowWidth,
      windowHeight: size.windowHeight,
      display: display,
      router: router
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, _objectSpread(_objectSpread({
      windowWidth: size.windowWidth,
      windowHeight: size.windowHeight
    }, pageProps), {}, {
      router: router,
      headerRef: headerRef
    }))]
  }, router.asPath);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
});

/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ MediaQueries)
/* harmony export */ });
const MediaQueries = {
  smallDevices: "575.98px",
  mediumDevices: "767.98px",
  largeDevices: "991.98px",
  xLargeDevices: "1199.98px",
  xxLargeDevices: "1399.98px",
  xxxLargeDevices: "1599.98px"
};

/***/ }),

/***/ 8759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ NavStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(867);


const NavStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navstyled__NavStyled",
  componentId: "sc-1r49b1a-0"
})([".main-nav{display:flex;justify-content:space-between;padding:50px;position:absolute;top:0;z-index:99;width:100%;&.active{}.logo{img{width:200px;cursor:pointer;}}.nav-button{height:34px;width:40px;padding:0;display:flex;flex-direction:column;position:relative;border:none;border-bottom:3px solid #fff;background:none;cursor:pointer;z-index:2;transition:all ease .2s;&:before,&:after{content:\"\";width:40px;height:3px;display:block;top:0;position:absolute;background:#fff;transition:all ease .2s;}&:after{bottom:auto;top:auto;bottom:12px;}&.alt{border-color:#000;&::after,&:before{background:#000}}&.active{transform:rotate(90deg);border-color:#fff;&::after,&:before{background:#fff}}}}.nav{position:absolute;top:0;right:0;background:rgba(0,0,0,0.8);z-index:1;transform:translate(200%);transition:all ease .2s;padding:40px;&.active{transform:translate(0);transition:all ease .2s;}li{&:before{display:none;}}.menu-title{color:#fff;font-size:24px;margin-bottom:30px;}button{background:none;border:none;cursor:pointer;color:#fff;font-size:24px;font-weight:700;}a{text-decoration:none;color:#fff;&:hover{color:#f5b800;}}}.side-buttons{position:relative;button{position:fixed;top:50%;transform:translateY(-50%);z-index:99;width:120px;height:100px;border:0;border-radius:50%;left:-20px;right:auto;padding:0 25px;text-align:center;cursor:pointer;background:rgba(0,0,0,.5);font-weight:700;font-size:21px;color:#fff;&:last-child{right:-20px;left:auto;padding:0 25px;}&:hover{transform:scale(1.1);transition:all ease .2s;}}}.bottom-nav{position:fixed;bottom:30px;left:50%;transform:translateX(-50%);display:flex;z-index:1;@media (max-width:", "){display:none;}.box{margin-right:20px;cursor:pointer;transition:all ease .2s;&:hover{transform:scale(1.1);transition:all ease .2s;}}img{border-radius:50%;width:100px;}}"], _MediaQueries__WEBPACK_IMPORTED_MODULE_1__/* .MediaQueries.xxLargeDevices */ .z.xxLargeDevices);

/***/ }),

/***/ 5207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ lightTheme),
/* harmony export */   "n": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(867);


const lightTheme = {
  body: '#fffff',
  main: '#5C14DB',
  mainColor: '#FFFFFF',
  accent: '#E5DE17',
  accentColor: '#161616',
  secondary: '#FFFFFF',
  secondaryColor: '#343434',
  dullColor: '#343434',
  ternary: '#000000',
  codeColor: '#D121C5'
};
const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,img,strong,ul,li,form,br{margin:0;padding:0;border:0;font-size:100%;vertical-align:top;}html{background:#fff;height:100%;}body{background:#fff;position:relative;color:#000;font-family:\"Montserrat\",sans-serif;-webkit-text-size-adjust:none;transition:transform ease .4s;overflow-x:hidden;}sup{padding:0;margin:0;font-size:90%;line-height:normal;}a{text-decoration:none;color:#003fb8;text-decoration:underline;}a:hover{color:#0e91f5;}a img{border:none;}input[type=text],input[type=password],textarea{background:#F3F3F3;border:1px solid #EEE;padding:6px 5px;font:normal 1em/16px \"Open Sans\",sans-serif;outline:none;border-radius:0;transition:.3s all ease-in-out;color:#555;-webkit-appearance:none;}*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}li{list-style:none;}sup{font-size:.65em;line-height:0;}h1,h2,h3,h4{font-weight:700;letter-spacing:-1px;}h1{font-size:60px;line-height:60px;margin-bottom:40px;}h1:after{content:\"\";width:200px;height:2px;display:block;background:rgb(32,35,112);background:linear-gradient(90deg,rgba(32,35,112,1) 0%,rgba(236,0,140,1) 100%);margin-top:30px;}h2{font-size:30px;line-height:30px;margin-bottom:30px;}@media (max-width:", "){h1{font-size:30px;}h2{font-size:24px;}}p{margin-bottom:30px;line-height:30px;}.slide{transform:translateY(30px);opacity:0;&.active{opacity:1;transform:translateY(0);transition:all ease .5s;}}.col-half{width:50%;padding:10%;@media (max-width:", "){padding:5%;}}.row{display:flex;width:100%}ul{margin-bottom:30px;li{margin-bottom:20px;list-style:none;&:before{content:\"\u25A0\";width:10px;height:10px;display:inline-block;margin-right:10px;}}}section{background-size:contain;background-position:right bottom;background-repeat:no-repeat;}.btn{font-weight:700;display:inline-block;z-index:1;font-size:24px;border-radius:25px;padding:10px 25px;border:1px solid #fff;background:none;color:#fff;text-transform:uppercase;cursor:pointer;transition:all ease .2s;text-decoration:none;@media (max-width:", "){font-size:18px;}&:hover{border-color:#f5b800;color:#f5b800;transition:all ease .2s;}}"], _MediaQueries__WEBPACK_IMPORTED_MODULE_1__/* .MediaQueries.mediumDevices */ .z.mediumDevices, _MediaQueries__WEBPACK_IMPORTED_MODULE_1__/* .MediaQueries.xLargeDevices */ .z.xLargeDevices, _MediaQueries__WEBPACK_IMPORTED_MODULE_1__/* .MediaQueries.xLargeDevices */ .z.xLargeDevices);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();