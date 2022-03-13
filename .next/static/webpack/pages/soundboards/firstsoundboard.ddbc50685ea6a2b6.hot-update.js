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

/***/ "./components/instrumentpicker.js":
/*!****************************************!*\
  !*** ./components/instrumentpicker.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InstrumentPicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction InstrumentPicker(param) {\n    var setUserInstrument = param.setUserInstrument, userInstrument = param.userInstrument;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), feedbackDelay = ref[0], setFeedbackDelay = ref[1];\n    var synths = [\n        'AMSynth',\n        'DuoSynth',\n        'FMSynth',\n        'MembraneSynth',\n        'MetalSynth',\n        'MonoSynth',\n        'NoiseSynth',\n        'PluckSynth',\n        'PolySynth',\n        'Sampler',\n        'Synth', \n    ];\n    var handleChange = function(event, newInstrumentValue) {\n        setUserInstrument(newInstrumentValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            color: \"primary\",\n            value: userInstrument,\n            exclusive: true,\n            onChange: handleChange,\n            children: synths.map(function(synth) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    value: synth,\n                    children: [\n                        synth,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, 'nota' + synth, true, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, this)\n    }, void 0, false));\n};\n_s(InstrumentPicker, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = InstrumentPicker;\nvar _c;\n$RefreshReg$(_c, \"InstrumentPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luc3RydW1lbnRwaWNrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ2lCO0FBQ1U7QUFDVjs7QUFFdEMsUUFBUSxDQUFDSyxnQkFBZ0IsQ0FBQyxLQUFrQyxFQUFFLENBQUM7UUFBcENDLGlCQUFpQixHQUFsQixLQUFrQyxDQUFqQ0EsaUJBQWlCLEVBQUNDLGNBQWMsR0FBakMsS0FBa0MsQ0FBZkEsY0FBYzs7O0lBRXRFLEdBQUssQ0FBa0NOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQTlDTyxhQUFhLEdBQW1CUCxHQUFlLEtBQWpDUSxnQkFBZ0IsR0FBRVIsR0FBZTtJQUV0RCxHQUFLLENBQUNTLE1BQU0sR0FBQyxDQUFDO1FBQ1YsQ0FBUztRQUNqQixDQUFVO1FBQ1YsQ0FBUztRQUNULENBQWU7UUFDZixDQUFZO1FBQ1osQ0FBVztRQUNYLENBQVk7UUFDWixDQUFZO1FBQ1osQ0FBVztRQUNYLENBQVM7UUFDVCxDQUFPO0lBQ0gsQ0FBQztJQUdELEdBQUssQ0FBQ0MsWUFBWSxHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsa0JBQWtCLEVBQUssQ0FBQztRQUNqRE4saUJBQWlCLENBQUNNLGtCQUFrQjtJQUN4QyxDQUFDO0lBRUgsTUFBTTs4RkFFSFQsdUVBQWlCO1lBQ2hCVyxLQUFLLEVBQUMsQ0FBUztZQUNmQyxLQUFLLEVBQUVSLGNBQWM7WUFDckJTLFNBQVM7WUFDVEMsUUFBUSxFQUFFTixZQUFZO3NCQUV2QkQsTUFBTSxDQUFDUSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsS0FBSzs4QkFDZixNQUFNLCtEQUFMakIsa0VBQVk7b0JBQW9CYSxLQUFLLEVBQUVJLEtBQUs7O3dCQUN4Q0EsS0FBSztvR0FDVGYsbUVBQVc7Ozs7OzttQkFGTyxDQUFNLFFBQUNlLEtBQUs7Ozs7Ozs7Ozs7OztBQVFyQyxDQUFDO0dBeEN1QmQsZ0JBQWdCO0tBQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnN0cnVtZW50cGlja2VyLmpzPzRkYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgRGlhbHBhZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaWFscGFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RydW1lbnRQaWNrZXIoe3NldFVzZXJJbnN0cnVtZW50LHVzZXJJbnN0cnVtZW50fSkge1xyXG5cclxuICAgIGNvbnN0IFtmZWVkYmFja0RlbGF5LHNldEZlZWRiYWNrRGVsYXldPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzeW50aHM9W1xyXG4gICAgICAgICdBTVN5bnRoJyxcclxuJ0R1b1N5bnRoJyxcclxuJ0ZNU3ludGgnLFxyXG4nTWVtYnJhbmVTeW50aCcsXHJcbidNZXRhbFN5bnRoJyxcclxuJ01vbm9TeW50aCcsXHJcbidOb2lzZVN5bnRoJyxcclxuJ1BsdWNrU3ludGgnLFxyXG4nUG9seVN5bnRoJyxcclxuJ1NhbXBsZXInLFxyXG4nU3ludGgnLFxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdJbnN0cnVtZW50VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRVc2VySW5zdHJ1bWVudChuZXdJbnN0cnVtZW50VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICB2YWx1ZT17dXNlckluc3RydW1lbnR9XHJcbiAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgPlxyXG4gICAge3N5bnRocy5tYXAoc3ludGg9PihcclxuICAgICAgPFRvZ2dsZUJ1dHRvbiBrZXk9eydub3RhJytzeW50aH0gdmFsdWU9e3N5bnRofT5cclxuICAgICAgICAgIHtzeW50aH1cclxuICAgICAgPERpYWxwYWRJY29uIC8+XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICApKX1cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiSW5zdHJ1bWVudFBpY2tlciIsInNldFVzZXJJbnN0cnVtZW50IiwidXNlckluc3RydW1lbnQiLCJmZWVkYmFja0RlbGF5Iiwic2V0RmVlZGJhY2tEZWxheSIsInN5bnRocyIsImhhbmRsZUNoYW5nZSIsIm5ld0luc3RydW1lbnRWYWx1ZSIsImV2ZW50IiwiY29sb3IiLCJ2YWx1ZSIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIiwibWFwIiwic3ludGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/instrumentpicker.js\n");

/***/ })

});