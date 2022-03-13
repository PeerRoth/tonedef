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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction Loopy(param) {\n    var _noteValue = param.noteValue, noteValue = _noteValue === void 0 ? 'C2' : _noteValue;\n    var _this = this;\n    var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n    var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n        synthA.triggerAttackRelease(noteValue, \"8n\", time);\n    }, \"4n\").start(0);\n    var startaLoo = function() {\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n    };\n    var stopaLoo = function() {\n        tone__WEBPACK_IMPORTED_MODULE_2__.Transport.stop();\n    };\n    // loopy();\n    var handleChange = function(event, newNoteValue) {\n        startLoopy();\n    };\n    var handleStartStopLoo = function(event, newVal) {\n        switch(newVal){\n            case 'start':\n                startaLoo();\n                break;\n            case 'stop':\n                stopaLoo();\n                break;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                exclusive: true,\n                onChange: handleStartStopLoo,\n                children: [\n                    'start',\n                    'stop'\n                ].map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note.toUpperCase(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\loopy.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = Loopy;\nvar _c;\n$RefreshReg$(_c, \"Loopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvb3B5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDNEI7QUFDVTtBQUNWO0FBQ3pCO0FBRWIsUUFBUSxDQUFDSyxLQUFLLENBQUMsS0FBZ0IsRUFBQyxDQUFDO3FCQUFsQixLQUFnQixDQUFmQyxTQUFTLEVBQVRBLFNBQVMsMkJBQUMsQ0FBSTs7SUFDekMsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDSCx5Q0FBWSxHQUFHSyxhQUFhO0lBQy9DLEdBQUssQ0FBQ0MsS0FBSyxHQUFJLEdBQUcsQ0FBQ04sc0NBQVMsQ0FBQ1EsUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztRQUNsQ0wsTUFBTSxDQUFDTSxvQkFBb0IsQ0FBQ1AsU0FBUyxFQUFFLENBQUksS0FBRU0sSUFBSTtJQUNyRCxDQUFDLEVBQUMsQ0FBSSxLQUFFRSxLQUFLLENBQUMsQ0FBQztJQUNmLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVFYLEdBQUYsQ0FBQztRQUFDQSxpREFBb0I7SUFBSSxDQUFDO0lBQ25ELEdBQUssQ0FBQ2EsUUFBUSxHQUFJLFFBQVFiLEdBQUYsQ0FBQztRQUFDQSxnREFBbUI7SUFBSyxDQUFDO0lBQ3ZELEVBQVc7SUFDUCxHQUFLLENBQUNlLFlBQVksR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELFlBQVksRUFBSyxDQUFDO1FBQzNDRSxVQUFVO0lBQ2QsQ0FBQztJQUNMLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUcsUUFBUSxDQUFORixLQUFLLEVBQUVHLE1BQU0sRUFBTSxDQUFDO1FBQzdDLE1BQU0sQ0FBRUEsTUFBTTtZQUNWLElBQUksQ0FBQyxDQUFPO2dCQUFFVCxTQUFTO2dCQUN2QixLQUFLO1lBQ0wsSUFBSSxDQUFDLENBQU07Z0JBQUVFLFFBQVE7Z0JBQ3JCLEtBQUs7O0lBRWIsQ0FBQztJQUNDLE1BQU07O3dGQUVIUSxDQUFFOzs7Ozt3RkFFRnZCLHVFQUFpQjtnQkFDaEJ3QixLQUFLLEVBQUMsQ0FBUztnQkFDZkMsU0FBUztnQkFDVEMsUUFBUSxFQUFFTCxrQkFBa0I7MEJBRTdCLENBQUM7b0JBQUEsQ0FBTztvQkFBQyxDQUFNO2dCQUFBLENBQUMsQ0FBQ00sR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7a0NBQ3hCLE1BQU0sK0RBQUw3QixrRUFBWTt3QkFBbUI4QixLQUFLLEVBQUVELElBQUk7OzRCQUN0Q0EsSUFBSSxDQUFDRSxXQUFXO3dHQUNwQjdCLG1FQUFXOzs7Ozs7dUJBRk8sQ0FBTSxRQUFDMkIsSUFBSTs7Ozs7Ozs7Ozs7OztBQVFwQyxDQUFDO0tBckN1QnpCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb29weS5qcz8wZDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBEaWFscGFkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpYWxwYWQnO1xyXG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb29weSh7bm90ZVZhbHVlPSdDMid9KXtcclxuICAgIGNvbnN0IHN5bnRoQSA9IG5ldyBUb25lLkZNU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICBjb25zdCBsb29wQSA9ICBuZXcgVG9uZS5Mb29wKHRpbWUgPT4ge1xyXG4gICAgICAgIHN5bnRoQS50cmlnZ2VyQXR0YWNrUmVsZWFzZShub3RlVmFsdWUsIFwiOG5cIiwgdGltZSk7XHJcbiAgICB9LFwiNG5cIikuc3RhcnQoMCk7XHJcbiAgICBjb25zdCBzdGFydGFMb28gPSAoKSA9PiB7IFRvbmUuVHJhbnNwb3J0LnN0YXJ0KCk7IH07XHJcbiAgICBjb25zdCBzdG9wYUxvbyAgPSAoKSA9PiB7IFRvbmUuVHJhbnNwb3J0LnN0b3AoKTsgIH07XHJcbi8vIGxvb3B5KCk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld05vdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0TG9vcHkoKTtcclxuICAgIH07XHJcbmNvbnN0IGhhbmRsZVN0YXJ0U3RvcExvbyA9ICggZXZlbnQsIG5ld1ZhbCApID0+IHtcclxuICAgIHN3aXRjaCAobmV3VmFsKSB7XHJcbiAgICAgICAgY2FzZSAnc3RhcnQnOiBzdGFydGFMb28oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdG9wJzogc3RvcGFMb28oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICA8YnIgLz5cclxuXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgZXhjbHVzaXZlXHJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydFN0b3BMb299XHJcbiAgICA+XHJcbiAgICB7WydzdGFydCcsJ3N0b3AnXS5tYXAobm90ZT0+KFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGtleT17J25vdGEnK25vdGV9IHZhbHVlPXtub3RlfT5cclxuICAgICAgICAgIHtub3RlLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgIDxEaWFscGFkSWNvbiAvPlxyXG4gICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICApKX1cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJEaWFscGFkSWNvbiIsIlRvbmUiLCJMb29weSIsIm5vdGVWYWx1ZSIsInN5bnRoQSIsIkZNU3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwibG9vcEEiLCJMb29wIiwidGltZSIsInRyaWdnZXJBdHRhY2tSZWxlYXNlIiwic3RhcnQiLCJzdGFydGFMb28iLCJUcmFuc3BvcnQiLCJzdG9wYUxvbyIsInN0b3AiLCJoYW5kbGVDaGFuZ2UiLCJuZXdOb3RlVmFsdWUiLCJldmVudCIsInN0YXJ0TG9vcHkiLCJoYW5kbGVTdGFydFN0b3BMb28iLCJuZXdWYWwiLCJiciIsImNvbG9yIiwiZXhjbHVzaXZlIiwib25DaGFuZ2UiLCJtYXAiLCJub3RlIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/loopy.js\n");

/***/ })

});