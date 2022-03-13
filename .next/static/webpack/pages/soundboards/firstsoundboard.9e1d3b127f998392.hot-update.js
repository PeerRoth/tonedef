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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Loopy() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), aLoop = ref[0], setALoop = ref[1];\n    var startLoopy = function() {\n        var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n        var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n            synthA.triggerAttackRelease(\"C2\", \"8n\", time);\n        }, \"4n\").start(0);\n        // loopA.Transport.start()\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n    // ramp up to 800 bpm over 10 seconds\n    // Tone.Transport.bpm.rampTo(800, 10);\n    };\n    var startaLoo = function() {\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n    };\n    var stopaLoo = function() {\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.stop();\n    };\n    // loopy();\n    var handleChange = function(event, newNoteValue) {\n        startLoopy();\n    };\n    var handleStartStopLoo = function(event, newVal) {\n        switch(newVal){\n            case 'start':\n                startaLoo();\n                break;\n            case 'stop':\n                stopaLoo();\n                break;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                exclusive: true,\n                onChange: handleChange,\n                children: [\n                    'loopy'\n                ].map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note.toUpperCase(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                                lineNumber: 47,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                exclusive: true,\n                onChange: handleStartStopLoo,\n                children: [\n                    'start',\n                    'stop'\n                ].map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note.toUpperCase(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                                lineNumber: 63,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Loopy, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Loopy;\nvar _c;\n$RefreshReg$(_c, \"Loopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvb3B5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDaUI7QUFDVTtBQUNWO0FBQ3pCOztBQUViLFFBQVEsQ0FBQ00sS0FBSyxHQUFFLENBQUM7OztJQUU1QixHQUFLLENBQW9CTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUEvQk0sS0FBSyxHQUFhTixHQUFjLEtBQTFCTyxRQUFRLEdBQUlQLEdBQWM7SUFFdkMsR0FBSyxDQUFDUSxVQUFVLEdBQUMsUUFDcEIsR0FEd0IsQ0FBQztRQUNsQixHQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNMLHlDQUFZLEdBQUdPLGFBQWE7UUFDL0MsR0FBSyxDQUFDQyxLQUFLLEdBQUksR0FBRyxDQUFDUixzQ0FBUyxDQUFDVSxRQUFRLENBQVJBLElBQUksRUFBSSxDQUFDO1lBQ2xDTCxNQUFNLENBQUNNLG9CQUFvQixDQUFDLENBQUksS0FBRSxDQUFJLEtBQUVELElBQUk7UUFDaEQsQ0FBQyxFQUFDLENBQUksS0FBRUUsS0FBSyxDQUFDLENBQUM7UUFDZixFQUEwQjtRQUMxQlosaURBQW9CO0lBQ3BCLEVBQXFDO0lBQ3JDLEVBQXNDO0lBQzFDLENBQUM7SUFFRCxHQUFLLENBQUNjLFNBQVMsR0FBRyxRQUFRZCxHQUFGLENBQUM7UUFBQ0EsaURBQW9CO0lBQUksQ0FBQztJQUNuRCxHQUFLLENBQUNlLFFBQVEsR0FBSSxRQUFRZixHQUFGLENBQUM7UUFBQ0EsZ0RBQW1CO0lBQUssQ0FBQztJQUN2RCxFQUFXO0lBQ1AsR0FBSyxDQUFDaUIsWUFBWSxHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsWUFBWSxFQUFLLENBQUM7UUFDM0NkLFVBQVU7SUFDZCxDQUFDO0lBQ0wsR0FBSyxDQUFDZ0Isa0JBQWtCLEdBQUcsUUFBUSxDQUFORCxLQUFLLEVBQUVFLE1BQU0sRUFBTSxDQUFDO1FBQzdDLE1BQU0sQ0FBRUEsTUFBTTtZQUNWLElBQUksQ0FBQyxDQUFPO2dCQUFFUCxTQUFTO2dCQUN2QixLQUFLO1lBQ0wsSUFBSSxDQUFDLENBQU07Z0JBQUVDLFFBQVE7Z0JBQ3JCLEtBQUs7O0lBRWIsQ0FBQztJQUNDLE1BQU07O3dGQUVETyxDQUFFOzs7Ozt3RkFDSnhCLHVFQUFpQjtnQkFDaEJ5QixLQUFLLEVBQUMsQ0FBUztnQkFDZkMsU0FBUztnQkFDVEMsUUFBUSxFQUFFUixZQUFZOzBCQUV2QixDQUFDO29CQUFBLENBQU87Z0JBQUEsQ0FBQyxDQUFDUyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTtrQ0FDakIsTUFBTSwrREFBTDlCLGtFQUFZO3dCQUFtQitCLEtBQUssRUFBRUQsSUFBSTs7NEJBQ3RDQSxJQUFJLENBQUNFLFdBQVc7d0dBQ3BCOUIsbUVBQVc7Ozs7Ozt1QkFGTyxDQUFNLFFBQUM0QixJQUFJOzs7Ozs7Ozs7Ozt3RkFPL0JMLENBQUU7Ozs7O3dGQUdGeEIsdUVBQWlCO2dCQUNoQnlCLEtBQUssRUFBQyxDQUFTO2dCQUNmQyxTQUFTO2dCQUNUQyxRQUFRLEVBQUVMLGtCQUFrQjswQkFFN0IsQ0FBQztvQkFBQSxDQUFPO29CQUFDLENBQU07Z0JBQUEsQ0FBQyxDQUFDTSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTtrQ0FDeEIsTUFBTSwrREFBTDlCLGtFQUFZO3dCQUFtQitCLEtBQUssRUFBRUQsSUFBSTs7NEJBQ3RDQSxJQUFJLENBQUNFLFdBQVc7d0dBQ3BCOUIsbUVBQVc7Ozs7Ozt1QkFGTyxDQUFNLFFBQUM0QixJQUFJOzs7Ozs7Ozs7Ozs7O0FBUXBDLENBQUM7R0E5RHVCMUIsS0FBSztLQUFMQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9vcHkuanM/MGQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBEaWFscGFkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpYWxwYWQnO1xyXG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb29weSgpe1xyXG5cclxuICAgIGNvbnN0IFthTG9vcCxzZXRBTG9vcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBzdGFydExvb3B5PSgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ludGhBID0gbmV3IFRvbmUuRk1TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgICAgICBjb25zdCBsb29wQSA9ICBuZXcgVG9uZS5Mb29wKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICBzeW50aEEudHJpZ2dlckF0dGFja1JlbGVhc2UoXCJDMlwiLCBcIjhuXCIsIHRpbWUpO1xyXG4gICAgICAgIH0sXCI0blwiKS5zdGFydCgwKTtcclxuICAgICAgICAvLyBsb29wQS5UcmFuc3BvcnQuc3RhcnQoKVxyXG4gICAgICAgIFRvbmUuVHJhbnNwb3J0LnN0YXJ0KClcclxuICAgICAgICAvLyByYW1wIHVwIHRvIDgwMCBicG0gb3ZlciAxMCBzZWNvbmRzXHJcbiAgICAgICAgLy8gVG9uZS5UcmFuc3BvcnQuYnBtLnJhbXBUbyg4MDAsIDEwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3RhcnRhTG9vID0gKCkgPT4geyBUb25lLlRyYW5zcG9ydC5zdGFydCgpOyB9O1xyXG4gICAgY29uc3Qgc3RvcGFMb28gID0gKCkgPT4geyBUb25lLlRyYW5zcG9ydC5zdG9wKCk7ICB9O1xyXG4vLyBsb29weSgpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdOb3RlVmFsdWUpID0+IHtcclxuICAgICAgICBzdGFydExvb3B5KCk7XHJcbiAgICB9O1xyXG5jb25zdCBoYW5kbGVTdGFydFN0b3BMb28gPSAoIGV2ZW50LCBuZXdWYWwgKSA9PiB7XHJcbiAgICBzd2l0Y2ggKG5ld1ZhbCkge1xyXG4gICAgICAgIGNhc2UgJ3N0YXJ0Jzogc3RhcnRhTG9vKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3RvcCc6IHN0b3BhTG9vKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8YnIgLz5cclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBleGNsdXNpdmVcclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgID5cclxuICAgIHtbJ2xvb3B5J10ubWFwKG5vdGU9PihcclxuICAgICAgPFRvZ2dsZUJ1dHRvbiBrZXk9eydub3RhJytub3RlfSB2YWx1ZT17bm90ZX0+XHJcbiAgICAgICAgICB7bm90ZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICA8RGlhbHBhZEljb24gLz5cclxuICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgKSl9XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG5cclxuICAgIDxiciAvPlxyXG5cclxuXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgZXhjbHVzaXZlXHJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydFN0b3BMb299XHJcbiAgICA+XHJcbiAgICB7WydzdGFydCcsJ3N0b3AnXS5tYXAobm90ZT0+KFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGtleT17J25vdGEnK25vdGV9IHZhbHVlPXtub3RlfT5cclxuICAgICAgICAgIHtub3RlLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgIDxEaWFscGFkSWNvbiAvPlxyXG4gICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICApKX1cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiVG9uZSIsIkxvb3B5IiwiYUxvb3AiLCJzZXRBTG9vcCIsInN0YXJ0TG9vcHkiLCJzeW50aEEiLCJGTVN5bnRoIiwidG9EZXN0aW5hdGlvbiIsImxvb3BBIiwiTG9vcCIsInRpbWUiLCJ0cmlnZ2VyQXR0YWNrUmVsZWFzZSIsInN0YXJ0IiwiVHJhbnNwb3J0Iiwic3RhcnRhTG9vIiwic3RvcGFMb28iLCJzdG9wIiwiaGFuZGxlQ2hhbmdlIiwibmV3Tm90ZVZhbHVlIiwiZXZlbnQiLCJoYW5kbGVTdGFydFN0b3BMb28iLCJuZXdWYWwiLCJiciIsImNvbG9yIiwiZXhjbHVzaXZlIiwib25DaGFuZ2UiLCJtYXAiLCJub3RlIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/loopy.js\n");

/***/ })

});