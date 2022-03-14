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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InstrumentPicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n\n\n\n\n\nfunction InstrumentPicker(param) {\n    var setUserInstrument = param.setUserInstrument, userInstrument = param.userInstrument;\n    var _this = this;\n    // const [feedbackDelay,setFeedbackDelay]=useState(false);\n    var synths = [\n        'AMSynth',\n        'DuoSynth',\n        'FMSynth',\n        'MembraneSynth',\n        'MetalSynth',\n        'MonoSynth',\n        'PluckSynth',\n        'PolySynth',\n        'Synth', \n    ];\n    var rowGroups = function(ara, n) {\n        var tempRowGroups = [];\n        var numberOfRows = Math.ceil(ara.length / n);\n        for(var g = 0; g < numberOfRows; g++){\n            tempRowGroups.push([]);\n            for(var i = 0; i < n; i++){\n                console.log(g * n + i, ara[g + i]);\n                if (typeof ara[g * n + i] !== 'undefined') {\n                    tempRowGroups[g].push(ara[g * n + i]);\n                }\n                ;\n            }\n        }\n        ;\n        return tempRowGroups;\n    };\n    var groupedRows = rowGroups(synths, 4);\n    var handleChange = function(event, newInstrumentValue) {\n        setUserInstrument(newInstrumentValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: groupedRows.map(function(synthGroup) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                color: \"primary\",\n                value: userInstrument,\n                exclusive: true,\n                onChange: handleChange,\n                sx: {\n                    width: '100vw'\n                },\n                children: synthGroup.map(function(synth) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        value: synth,\n                        sx: {\n                            width: 100 / synthGroup.length + 'vw'\n                        },\n                        children: [\n                            synth,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                                lineNumber: 58,\n                                columnNumber: 28\n                            }, _this)\n                        ]\n                    }, 'nota' + synth, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n        lineNumber: 43,\n        columnNumber: 11\n    }, this));\n};\n_c = InstrumentPicker;\n;\nvar _c;\n$RefreshReg$(_c, \"InstrumentPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWVudHBpY2tlci5qcz80ZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwJztcclxuaW1wb3J0IERpYWxwYWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlhbHBhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnN0cnVtZW50UGlja2VyKHtzZXRVc2VySW5zdHJ1bWVudCx1c2VySW5zdHJ1bWVudH0pIHtcclxuXHJcbiAgICAvLyBjb25zdCBbZmVlZGJhY2tEZWxheSxzZXRGZWVkYmFja0RlbGF5XT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc3ludGhzPVtcclxuICAgICAgICAnQU1TeW50aCcsXHJcbiAgICAgICAgJ0R1b1N5bnRoJyxcclxuICAgICAgICAnRk1TeW50aCcsXHJcbiAgICAgICAgJ01lbWJyYW5lU3ludGgnLFxyXG4gICAgICAgICdNZXRhbFN5bnRoJyxcclxuICAgICAgICAnTW9ub1N5bnRoJyxcclxuICAgICAgICAnUGx1Y2tTeW50aCcsXHJcbiAgICAgICAgJ1BvbHlTeW50aCcsXHJcbiAgICAgICAgJ1N5bnRoJyxcclxuICAgIF07XHJcbiAgICBjb25zdCByb3dHcm91cHMgPSAoYXJhLG4pID0+IHtcclxuICAgICAgICBsZXQgdGVtcFJvd0dyb3Vwcz1bXTtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZSb3dzPU1hdGguY2VpbChhcmEubGVuZ3RoL24pO1xyXG4gICAgICAgIGZvciAobGV0IGc9MDtnPG51bWJlck9mUm93cztnKyspe1xyXG4gICAgICAgICAgICB0ZW1wUm93R3JvdXBzLnB1c2goW10pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxuO2krKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoZypuKStpLGFyYVtnK2ldKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJhWyhnKm4pK2ldIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBSb3dHcm91cHNbZ10ucHVzaChhcmFbKGcqbikraV0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRlbXBSb3dHcm91cHM7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdyb3VwZWRSb3dzPXJvd0dyb3VwcyhzeW50aHMsNCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3SW5zdHJ1bWVudFZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckluc3RydW1lbnQobmV3SW5zdHJ1bWVudFZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gIHJldHVybiAoPGRpdj5cclxuICAgICAge2dyb3VwZWRSb3dzLm1hcChzeW50aEdyb3VwPT4oXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VySW5zdHJ1bWVudH1cclxuICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHN4PXt7d2lkdGg6JzEwMHZ3J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge3N5bnRoR3JvdXAubWFwKHN5bnRoPT4oXHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXsnbm90YScrc3ludGh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N5bnRofVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7d2lkdGg6KDEwMC9zeW50aEdyb3VwLmxlbmd0aCkrJ3Z3J319XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzeW50aH08RGlhbHBhZEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPikpfVxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2Pik7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiSW5zdHJ1bWVudFBpY2tlciIsInNldFVzZXJJbnN0cnVtZW50IiwidXNlckluc3RydW1lbnQiLCJzeW50aHMiLCJyb3dHcm91cHMiLCJhcmEiLCJuIiwidGVtcFJvd0dyb3VwcyIsIm51bWJlck9mUm93cyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZyIsInB1c2giLCJpIiwiY29uc29sZSIsImxvZyIsImdyb3VwZWRSb3dzIiwiaGFuZGxlQ2hhbmdlIiwibmV3SW5zdHJ1bWVudFZhbHVlIiwiZXZlbnQiLCJkaXYiLCJtYXAiLCJzeW50aEdyb3VwIiwiY29sb3IiLCJ2YWx1ZSIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIiwic3giLCJ3aWR0aCIsInN5bnRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/instrumentpicker.js\n");

/***/ })

});