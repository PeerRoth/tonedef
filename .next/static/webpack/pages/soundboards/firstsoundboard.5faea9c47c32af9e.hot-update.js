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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction Loopy(param) {\n    var _noteValue = param.noteValue, noteValue = _noteValue === void 0 ? 'C2' : _noteValue;\n    var _this = this;\n    var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n    var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n        synthA.triggerAttackRelease(noteValue, \"8n\", time);\n    }, \"4n\").start(0);\n    var startaLoo = function() {\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n    };\n    var stopaLoo = function() {\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.stop();\n    };\n    // loopy();\n    var handleChange = function(event, newNoteValue) {\n        startLoopy();\n    };\n    var handleStartStopLoo = function(event, newVal) {\n        switch(newVal){\n            case 'start':\n                startaLoo();\n                break;\n            case 'stop':\n                stopaLoo();\n                break;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                exclusive: true,\n                onChange: handleStartStopLoo,\n                children: [\n                    'start',\n                    'stop'\n                ].map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note.toUpperCase(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = Loopy;\nvar _c;\n$RefreshReg$(_c, \"Loopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvb3B5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDaUI7QUFDVTtBQUNWO0FBQ3pCO0FBRWIsUUFBUSxDQUFDTSxLQUFLLENBQUMsS0FBZ0IsRUFBQyxDQUFDO3FCQUFsQixLQUFnQixDQUFmQyxTQUFTLEVBQVRBLFNBQVMsMkJBQUMsQ0FBSTs7SUFDekMsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDSCx5Q0FBWSxHQUFHSyxhQUFhO0lBQy9DLEdBQUssQ0FBQ0MsS0FBSyxHQUFJLEdBQUcsQ0FBQ04sc0NBQVMsQ0FBQ1EsUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztRQUNsQ0wsTUFBTSxDQUFDTSxvQkFBb0IsQ0FBQ1AsU0FBUyxFQUFFLENBQUksS0FBRU0sSUFBSTtJQUNyRCxDQUFDLEVBQUMsQ0FBSSxLQUFFRSxLQUFLLENBQUMsQ0FBQztJQUNmLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVFYLEdBQUYsQ0FBQztRQUFDQSxpREFBb0I7SUFBSSxDQUFDO0lBQ25ELEdBQUssQ0FBQ2EsUUFBUSxHQUFJLFFBQVFiLEdBQUYsQ0FBQztRQUFDQSxnREFBbUI7SUFBSyxDQUFDO0lBQ3ZELEVBQVc7SUFDUCxHQUFLLENBQUNlLFlBQVksR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELFlBQVksRUFBSyxDQUFDO1FBQzNDRSxVQUFVO0lBQ2QsQ0FBQztJQUNMLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUcsUUFBUSxDQUFORixLQUFLLEVBQUVHLE1BQU0sRUFBTSxDQUFDO1FBQzdDLE1BQU0sQ0FBRUEsTUFBTTtZQUNWLElBQUksQ0FBQyxDQUFPO2dCQUFFVCxTQUFTO2dCQUN2QixLQUFLO1lBQ0wsSUFBSSxDQUFDLENBQU07Z0JBQUVFLFFBQVE7Z0JBQ3JCLEtBQUs7O0lBRWIsQ0FBQztJQUNDLE1BQU07O3dGQUVIUSxDQUFFOzs7Ozt3RkFFRnZCLHVFQUFpQjtnQkFDaEJ3QixLQUFLLEVBQUMsQ0FBUztnQkFDZkMsU0FBUztnQkFDVEMsUUFBUSxFQUFFTCxrQkFBa0I7MEJBRTdCLENBQUM7b0JBQUEsQ0FBTztvQkFBQyxDQUFNO2dCQUFBLENBQUMsQ0FBQ00sR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7a0NBQ3hCLE1BQU0sK0RBQUw3QixrRUFBWTt3QkFBbUI4QixLQUFLLEVBQUVELElBQUk7OzRCQUN0Q0EsSUFBSSxDQUFDRSxXQUFXO3dHQUNwQjdCLG1FQUFXOzs7Ozs7dUJBRk8sQ0FBTSxRQUFDMkIsSUFBSTs7Ozs7Ozs7Ozs7OztBQVFwQyxDQUFDO0tBckN1QnpCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb29weS5qcz8wZDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwJztcclxuaW1wb3J0IERpYWxwYWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlhbHBhZCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSAndG9uZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvb3B5KHtub3RlVmFsdWU9J0MyJ30pe1xyXG4gICAgY29uc3Qgc3ludGhBID0gbmV3IFRvbmUuRk1TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgIGNvbnN0IGxvb3BBID0gIG5ldyBUb25lLkxvb3AodGltZSA9PiB7XHJcbiAgICAgICAgc3ludGhBLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG5vdGVWYWx1ZSwgXCI4blwiLCB0aW1lKTtcclxuICAgIH0sXCI0blwiKS5zdGFydCgwKTtcclxuICAgIGNvbnN0IHN0YXJ0YUxvbyA9ICgpID0+IHsgVG9uZS5UcmFuc3BvcnQuc3RhcnQoKTsgfTtcclxuICAgIGNvbnN0IHN0b3BhTG9vICA9ICgpID0+IHsgVG9uZS5UcmFuc3BvcnQuc3RvcCgpOyAgfTtcclxuLy8gbG9vcHkoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3Tm90ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgc3RhcnRMb29weSgpO1xyXG4gICAgfTtcclxuY29uc3QgaGFuZGxlU3RhcnRTdG9wTG9vID0gKCBldmVudCwgbmV3VmFsICkgPT4ge1xyXG4gICAgc3dpdGNoIChuZXdWYWwpIHtcclxuICAgICAgICBjYXNlICdzdGFydCc6IHN0YXJ0YUxvbygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N0b3AnOiBzdG9wYUxvbygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgIDxiciAvPlxyXG5cclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBleGNsdXNpdmVcclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXJ0U3RvcExvb31cclxuICAgID5cclxuICAgIHtbJ3N0YXJ0Jywnc3RvcCddLm1hcChub3RlPT4oXHJcbiAgICAgIDxUb2dnbGVCdXR0b24ga2V5PXsnbm90YScrbm90ZX0gdmFsdWU9e25vdGV9PlxyXG4gICAgICAgICAge25vdGUudG9VcHBlckNhc2UoKX1cclxuICAgICAgPERpYWxwYWRJY29uIC8+XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICkpfVxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZ2dsZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbkdyb3VwIiwiRGlhbHBhZEljb24iLCJUb25lIiwiTG9vcHkiLCJub3RlVmFsdWUiLCJzeW50aEEiLCJGTVN5bnRoIiwidG9EZXN0aW5hdGlvbiIsImxvb3BBIiwiTG9vcCIsInRpbWUiLCJ0cmlnZ2VyQXR0YWNrUmVsZWFzZSIsInN0YXJ0Iiwic3RhcnRhTG9vIiwiVHJhbnNwb3J0Iiwic3RvcGFMb28iLCJzdG9wIiwiaGFuZGxlQ2hhbmdlIiwibmV3Tm90ZVZhbHVlIiwiZXZlbnQiLCJzdGFydExvb3B5IiwiaGFuZGxlU3RhcnRTdG9wTG9vIiwibmV3VmFsIiwiYnIiLCJjb2xvciIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIiwibWFwIiwibm90ZSIsInZhbHVlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loopy.js\n");

/***/ })

});