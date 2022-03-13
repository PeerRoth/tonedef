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

/***/ "./components/loopy.js":
/*!*****************************!*\
  !*** ./components/loopy.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction Loopy() {\n    var _this = this;\n    var startLoopy = function() {\n        var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n        var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n            synthA.triggerAttackRelease(\"C2\", \"8n\", time);\n        }, \"4n\").start(0);\n        loopA.start();\n    // Tone.Transport.start()\n    // ramp up to 800 bpm over 10 seconds\n    // Tone.Transport.bpm.rampTo(800, 10);\n    };\n    // loopy();\n    var handleChange = function(event, newNoteValue) {\n        startLoopy();\n    };\n    var handleStopClick = function(event, newVal) {\n        stopLoopy();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                exclusive: true,\n                onChange: handleChange,\n                children: [\n                    'loopy'\n                ].map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note.toUpperCase(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = Loopy;\nvar _c;\n$RefreshReg$(_c, \"Loopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvb3B5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDdUI7QUFDVTtBQUNWO0FBQ3pCO0FBR2IsUUFBUSxDQUFDSyxLQUFLLEdBQUcsQ0FBQzs7SUFHN0IsR0FBSyxDQUFDQyxVQUFVLEdBQUMsUUFDcEIsR0FEd0IsQ0FBQztRQUNsQixHQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNILHlDQUFZLEdBQUdLLGFBQWE7UUFDL0MsR0FBSyxDQUFDQyxLQUFLLEdBQUcsR0FBRyxDQUFDTixzQ0FBUyxDQUFDUSxRQUFRLENBQVJBLElBQUksRUFBSSxDQUFDO1lBQ2pDTCxNQUFNLENBQUNNLG9CQUFvQixDQUFDLENBQUksS0FBRSxDQUFJLEtBQUVELElBQUk7UUFDaEQsQ0FBQyxFQUFFLENBQUksS0FBRUUsS0FBSyxDQUFDLENBQUM7UUFDaEJKLEtBQUssQ0FBQ0ksS0FBSztJQUNYLEVBQXlCO0lBQ3pCLEVBQXFDO0lBQ3JDLEVBQXNDO0lBQzlDLENBQUM7SUFDRCxFQUFXO0lBQ1AsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxZQUFZLEVBQUssQ0FBQztRQUMzQ1YsVUFBVTtJQUNkLENBQUM7SUFFRCxHQUFLLENBQUNZLGVBQWUsR0FBRyxRQUFRLENBQU5ELEtBQUssRUFBRUUsTUFBTSxFQUFNLENBQUM7UUFDMUNDLFNBQVM7SUFDYixDQUFDO0lBRUgsTUFBTTs7d0ZBRURDLENBQUU7Ozs7O3dGQUNKbkIsdUVBQWlCO2dCQUNoQm9CLEtBQUssRUFBQyxDQUFTO2dCQUNmQyxTQUFTO2dCQUNUQyxRQUFRLEVBQUVULFlBQVk7MEJBRXZCLENBQUM7b0JBQUEsQ0FBTztnQkFBQSxDQUFDLENBQUNVLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxJQUFJO2tDQUNqQixNQUFNLCtEQUFMekIsa0VBQVk7d0JBQW1CMEIsS0FBSyxFQUFFRCxJQUFJOzs0QkFDdENBLElBQUksQ0FBQ0UsV0FBVzt3R0FDcEJ6QixtRUFBVzs7Ozs7O3VCQUZPLENBQU0sUUFBQ3VCLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFRcEMsQ0FBQztLQXZDdUJyQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9vcHkuanM/MGQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBEaWFscGFkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpYWxwYWQnO1xyXG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9vcHkoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHN0YXJ0TG9vcHk9KCk9PntcclxuICAgICAgICBjb25zdCBzeW50aEEgPSBuZXcgVG9uZS5GTVN5bnRoKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGxvb3BBID0gbmV3IFRvbmUuTG9vcCh0aW1lID0+IHtcclxuICAgICAgICAgICAgc3ludGhBLnRyaWdnZXJBdHRhY2tSZWxlYXNlKFwiQzJcIiwgXCI4blwiLCB0aW1lKTtcclxuICAgICAgICB9LCBcIjRuXCIpLnN0YXJ0KDApO1xyXG4gICAgICAgIGxvb3BBLnN0YXJ0KClcclxuICAgICAgICAvLyBUb25lLlRyYW5zcG9ydC5zdGFydCgpXHJcbiAgICAgICAgLy8gcmFtcCB1cCB0byA4MDAgYnBtIG92ZXIgMTAgc2Vjb25kc1xyXG4gICAgICAgIC8vIFRvbmUuVHJhbnNwb3J0LmJwbS5yYW1wVG8oODAwLCAxMCk7XHJcbn07XHJcbi8vIGxvb3B5KCk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld05vdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0TG9vcHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcENsaWNrID0gKCBldmVudCwgbmV3VmFsICkgPT4ge1xyXG4gICAgICAgIHN0b3BMb29weSgpO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8YnIgLz5cclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBleGNsdXNpdmVcclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgID5cclxuICAgIHtbJ2xvb3B5J10ubWFwKG5vdGU9PihcclxuICAgICAgPFRvZ2dsZUJ1dHRvbiBrZXk9eydub3RhJytub3RlfSB2YWx1ZT17bm90ZX0+XHJcbiAgICAgICAgICB7bm90ZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICA8RGlhbHBhZEljb24gLz5cclxuICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICkpfVxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiVG9uZSIsIkxvb3B5Iiwic3RhcnRMb29weSIsInN5bnRoQSIsIkZNU3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwibG9vcEEiLCJMb29wIiwidGltZSIsInRyaWdnZXJBdHRhY2tSZWxlYXNlIiwic3RhcnQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdOb3RlVmFsdWUiLCJldmVudCIsImhhbmRsZVN0b3BDbGljayIsIm5ld1ZhbCIsInN0b3BMb29weSIsImJyIiwiY29sb3IiLCJleGNsdXNpdmUiLCJvbkNoYW5nZSIsIm1hcCIsIm5vdGUiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/loopy.js\n");

/***/ })

});