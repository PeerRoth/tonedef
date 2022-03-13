"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/soundboards/firstsoundboard",{

/***/ "./components/togglebuttongroup.js":
/*!*****************************************!*\
  !*** ./components/togglebuttongroup.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleGroupie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction ToggleGroupie(param) {\n    var chordNotes = param.chordNotes, name = param.name, userInstrument = param.userInstrument;\n    var _this = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[instrument]().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(val, now);\n        synth.triggerRelease(now + 1);\n    };\n    var notes = [];\n    var iterations = [\n        'a',\n        'a',\n        'a',\n        'a', \n    ];\n    iterations.forEach(function(it, itIdx) {\n        chordNotes.forEach(function(cn) {\n            notes.push(cn[0] + (cn[1] + itIdx - 2));\n        });\n    });\n    ;\n    var handleChange = function(event, newNoteValue) {\n        playNote(newNoteValue, userInstrument);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                exclusive: true,\n                onChange: handleChange,\n                children: notes.map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                                lineNumber: 42,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note + name, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = ToggleGroupie;\nvar _c;\n$RefreshReg$(_c, \"ToggleGroupie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDdUI7QUFDVTtBQUNWO0FBQ3pCO0FBRWIsUUFBUSxDQUFDSyxhQUFhLENBQUMsS0FBZ0MsRUFBRSxDQUFDO1FBQWxDQyxVQUFVLEdBQVgsS0FBZ0MsQ0FBL0JBLFVBQVUsRUFBQ0MsSUFBSSxHQUFoQixLQUFnQyxDQUFwQkEsSUFBSSxFQUFDQyxjQUFjLEdBQS9CLEtBQWdDLENBQWZBLGNBQWM7O1FBVXhEQyxRQUFRLEdBQWpCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDQyxHQUFHLEVBQW9CLENBQUM7WUFBcEJDLFVBQVUsb0VBQUMsQ0FBTztRQUNwQyxHQUFLLENBQUNDLEtBQUssR0FBRyxHQUFHLENBQUNSLGlDQUFJLENBQUNPLFVBQVUsSUFBSUUsYUFBYTtRQUNsRCxHQUFLLENBQUNDLEdBQUcsR0FBR1YscUNBQVE7UUFDcEJRLEtBQUssQ0FBQ0csYUFBYSxDQUFDTCxHQUFHLEVBQUVJLEdBQUc7UUFDNUJGLEtBQUssQ0FBQ0ksY0FBYyxDQUFDRixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBWkQsR0FBSyxDQUFDRyxLQUFLLEdBQUMsQ0FBQyxDQUFDO0lBQ2QsR0FBSyxDQUFDQyxVQUFVLEdBQUMsQ0FBQztRQUFBLENBQUc7UUFBQyxDQUFHO1FBQUMsQ0FBRztRQUFDLENBQUc7SUFBQyxDQUFDO0lBQ25DQSxVQUFVLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBQ0MsS0FBSyxFQUFHLENBQUM7UUFDNUJmLFVBQVUsQ0FBQ2EsT0FBTyxDQUFDRyxRQUMxQixDQUQwQkEsRUFBRSxFQUFFLENBQUM7WUFDcEJMLEtBQUssQ0FBQ00sSUFBSSxDQUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFHQSxFQUFFLENBQUMsQ0FBQyxJQUFFRCxLQUFLLEdBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQzs7SUFRRCxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELFlBQVksRUFBSyxDQUFDO1FBQzNDaEIsUUFBUSxDQUFDZ0IsWUFBWSxFQUFDakIsY0FBYztJQUN4QyxDQUFDO0lBRUgsTUFBTTs7WUFFREQsSUFBSTt3RkFDSm9CLENBQUU7Ozs7O3dGQUNGQSxDQUFFOzs7Ozt3RkFDRkEsQ0FBRTs7Ozs7d0ZBQ0p6Qix1RUFBaUI7Z0JBQ2hCMEIsS0FBSyxFQUFDLENBQVM7Z0JBQ2ZDLFNBQVM7Z0JBQ1RDLFFBQVEsRUFBRU4sWUFBWTswQkFFdkJQLEtBQUssQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7a0NBQ2IsTUFBTSwrREFBTC9CLGtFQUFZO3dCQUF3QmdDLEtBQUssRUFBRUQsSUFBSTs7NEJBQzNDQSxJQUFJO3dHQUNSN0IsbUVBQVc7Ozs7Ozt1QkFGTyxDQUFNLFFBQUM2QixJQUFJLEdBQUN6QixJQUFJOzs7Ozs7Ozs7Ozs7O0FBUXpDLENBQUM7S0F6Q3VCRixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9nZ2xlYnV0dG9uZ3JvdXAuanM/ZjlkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBEaWFscGFkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpYWxwYWQnO1xyXG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2dnbGVHcm91cGllKHtjaG9yZE5vdGVzLG5hbWUsdXNlckluc3RydW1lbnR9KSB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBub3Rlcz1bXTtcclxuICAgIGNvbnN0IGl0ZXJhdGlvbnM9WydhJywnYScsJ2EnLCdhJyxdO1xyXG4gICAgaXRlcmF0aW9ucy5mb3JFYWNoKChpdCxpdElkeCk9PntcclxuICAgICAgICBjaG9yZE5vdGVzLmZvckVhY2goY249PntcclxuICAgICAgICAgICAgbm90ZXMucHVzaChjblswXSsoY25bMV0raXRJZHgtMikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBwbGF5Tm90ZSh2YWwsaW5zdHJ1bWVudD0nU3ludGgnKXtcclxuICAgICAgICBjb25zdCBzeW50aCA9IG5ldyBUb25lW2luc3RydW1lbnRdKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IFRvbmUubm93KClcclxuICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrKHZhbCwgbm93KVxyXG4gICAgICAgIHN5bnRoLnRyaWdnZXJSZWxlYXNlKG5vdyArIDEpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3Tm90ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgcGxheU5vdGUobmV3Tm90ZVZhbHVlLHVzZXJJbnN0cnVtZW50KTtcclxuICAgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgPlxyXG4gICAge25vdGVzLm1hcChub3RlPT4oXHJcbiAgICAgIDxUb2dnbGVCdXR0b24ga2V5PXsnbm90YScrbm90ZStuYW1lfSB2YWx1ZT17bm90ZX0+XHJcbiAgICAgICAgICB7bm90ZX1cclxuICAgICAgPERpYWxwYWRJY29uIC8+XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICApKX1cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJEaWFscGFkSWNvbiIsIlRvbmUiLCJUb2dnbGVHcm91cGllIiwiY2hvcmROb3RlcyIsIm5hbWUiLCJ1c2VySW5zdHJ1bWVudCIsInBsYXlOb3RlIiwidmFsIiwiaW5zdHJ1bWVudCIsInN5bnRoIiwidG9EZXN0aW5hdGlvbiIsIm5vdyIsInRyaWdnZXJBdHRhY2siLCJ0cmlnZ2VyUmVsZWFzZSIsIm5vdGVzIiwiaXRlcmF0aW9ucyIsImZvckVhY2giLCJpdCIsIml0SWR4IiwiY24iLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwibmV3Tm90ZVZhbHVlIiwiZXZlbnQiLCJiciIsImNvbG9yIiwiZXhjbHVzaXZlIiwib25DaGFuZ2UiLCJtYXAiLCJub3RlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/togglebuttongroup.js\n");

/***/ })

});