"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./images/twitterLogo.png
/* harmony default export */ const twitterLogo = ({"src":"/_next/static/media/twitterLogo.01f5f683.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEcofIcofIcofIcoPEdofIdofIcofIdofIdofIdofKbmmJaAAAAC3RSTlMA/AwxRp3DGd3Wjx6I/5QAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVAiZY2BAAUwggpmFgY2DmYGBgYWRk5ERLMTGyMgKludiZAULMLBDKBgAAAwoAFcthr8uAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./images/githubLogo.png
/* harmony default export */ const githubLogo = ({"src":"/_next/static/media/githubLogo.c07b0dc3.png","height":2048,"width":2048,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXEaHiIaHiIaHiIbHiIaHiIaHiMaHiIaHiIaHiIaHiMbHiNwFur7AAAADHRSTlMA/grWwjCYLIKz62vWXeOLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVQImS3LQQ4AIQgEwZ4BQfT//zWb7K0uBZ1SNqyIcyIWGdhkog2wherHxLWvhjVlS18ru5oHHzMA5RLeKtAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "flex justify-between mt-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-sm items-center",
                children: [
                    "Lucas Minter \xa9",
                    new Date().getFullYear()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:text-gray-600",
                            href: "https://twitter.com/LucasMinter2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: twitterLogo,
                                alt: "Twitter Logo",
                                width: 30,
                                height: 30
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "hover:text-gray-600",
                            href: "https://github.com/lsminter",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: githubLogo,
                                alt: "Github Logo",
                                width: 25,
                                height: 25
                            })
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 4683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Header() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "flex justify-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "hover:text-blue-600 pt-2",
                    href: "/",
                    children: "Lucas Minter"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "hover:text-blue-600 px-2",
                        href: "/framer-motion",
                        children: "Framer Motion"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "hover:text-blue-600 px-2",
                        href: "/posts",
                        children: "Posts"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "hover:text-blue-600 pl-2",
                        href: "/",
                        children: "Home"
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6877);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4683);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-max px-4 sm:px-12 bg-background",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__.Analytics, {
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();