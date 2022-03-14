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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InstrumentPicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n\n\n\n\n\nfunction InstrumentPicker(param) {\n    var setUserInstrument = param.setUserInstrument, userInstrument = param.userInstrument;\n    var _this = this;\n    // const [feedbackDelay,setFeedbackDelay]=useState(false);\n    var synths = [\n        'AMSynth',\n        'DuoSynth',\n        'FMSynth',\n        'MembraneSynth',\n        'MetalSynth',\n        'MonoSynth',\n        'PluckSynth',\n        'PolySynth',\n        'Synth', \n    ];\n    var rowGroups = function(ara, n) {\n        var tempRowGroups = [];\n        var numberOfRows = Math.ceil(ara.length / n);\n        for(var g = 0; g < numberOfRows; g++){\n            tempRowGroups.push([]);\n            for(var i = 0; i < n; i++){\n                tempRowGroups[g].push(ara[g + i]);\n            }\n        }\n        ;\n        return tempRowGroups;\n    };\n    console.log(rowGroups(synths, 4));\n    var handleChange = function(event, newInstrumentValue) {\n        setUserInstrument(newInstrumentValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            color: \"primary\",\n            value: userInstrument,\n            exclusive: true,\n            onChange: handleChange,\n            children: synths.map(function(synth) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    value: synth,\n                    children: [\n                        synth,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                            lineNumber: 49,\n                            columnNumber: 20\n                        }, _this)\n                    ]\n                }, 'nota' + synth, true, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, this)\n    }, void 0, false));\n};\n_c = InstrumentPicker;\n;\nvar _c;\n$RefreshReg$(_c, \"InstrumentPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luc3RydW1lbnRwaWNrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ2lCO0FBQ1U7QUFDVjtBQUV0QyxRQUFRLENBQUNLLGdCQUFnQixDQUFDLEtBQWtDLEVBQUUsQ0FBQztRQUFwQ0MsaUJBQWlCLEdBQWxCLEtBQWtDLENBQWpDQSxpQkFBaUIsRUFBQ0MsY0FBYyxHQUFqQyxLQUFrQyxDQUFmQSxjQUFjOztJQUV0RSxFQUEwRDtJQUUxRCxHQUFLLENBQUNDLE1BQU0sR0FBQyxDQUFDO1FBQ1YsQ0FBUztRQUNULENBQVU7UUFDVixDQUFTO1FBQ1QsQ0FBZTtRQUNmLENBQVk7UUFDWixDQUFXO1FBQ1gsQ0FBWTtRQUNaLENBQVc7UUFDWCxDQUFPO0lBQ1gsQ0FBQztJQUNELEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsR0FBRyxFQUFDQyxDQUFDLEVBQUssQ0FBQztRQUMxQixHQUFHLENBQUNDLGFBQWEsR0FBQyxDQUFDLENBQUM7UUFDcEIsR0FBRyxDQUFDQyxZQUFZLEdBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDTCxHQUFHLENBQUNNLE1BQU0sR0FBQ0wsQ0FBQztRQUN2QyxHQUFHLENBQUUsR0FBRyxDQUFDTSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNKLFlBQVksRUFBQ0ksQ0FBQyxHQUFHLENBQUM7WUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUUsR0FBRyxDQUFDQyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNSLENBQUMsRUFBQ1EsQ0FBQyxHQUFHLENBQUM7Z0JBQ2xCUCxhQUFhLENBQUNLLENBQUMsRUFBRUMsSUFBSSxDQUFDUixHQUFHLENBQUNPLENBQUMsR0FBQ0UsQ0FBQztZQUNqQyxDQUFDO1FBQ0wsQ0FBQzs7UUFDRCxNQUFNLENBQUNQLGFBQWE7SUFDeEIsQ0FBQztJQUVEUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osU0FBUyxDQUFDRCxNQUFNLEVBQUMsQ0FBQztJQUc5QixHQUFLLENBQUNjLFlBQVksR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELGtCQUFrQixFQUFLLENBQUM7UUFDakRqQixpQkFBaUIsQ0FBQ2lCLGtCQUFrQjtJQUN4QyxDQUFDO0lBRUgsTUFBTTs4RkFDSHBCLHVFQUFpQjtZQUNoQnNCLEtBQUssRUFBQyxDQUFTO1lBQ2ZDLEtBQUssRUFBRW5CLGNBQWM7WUFDckJvQixTQUFTO1lBQ1RDLFFBQVEsRUFBRU4sWUFBWTtzQkFFdkJkLE1BQU0sQ0FBQ3FCLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxLQUFLOzhCQUNiLE1BQU0sK0RBQUw1QixrRUFBWTtvQkFBb0J3QixLQUFLLEVBQUVJLEtBQUs7O3dCQUN4Q0EsS0FBSztvR0FBRTFCLG1FQUFXOzs7Ozs7bUJBREosQ0FBTSxRQUFDMEIsS0FBSzs7Ozs7Ozs7Ozs7O0FBS3ZDLENBQUM7S0EvQ3VCekIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlci5qcz80ZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwJztcclxuaW1wb3J0IERpYWxwYWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlhbHBhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnN0cnVtZW50UGlja2VyKHtzZXRVc2VySW5zdHJ1bWVudCx1c2VySW5zdHJ1bWVudH0pIHtcclxuXHJcbiAgICAvLyBjb25zdCBbZmVlZGJhY2tEZWxheSxzZXRGZWVkYmFja0RlbGF5XT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc3ludGhzPVtcclxuICAgICAgICAnQU1TeW50aCcsXHJcbiAgICAgICAgJ0R1b1N5bnRoJyxcclxuICAgICAgICAnRk1TeW50aCcsXHJcbiAgICAgICAgJ01lbWJyYW5lU3ludGgnLFxyXG4gICAgICAgICdNZXRhbFN5bnRoJyxcclxuICAgICAgICAnTW9ub1N5bnRoJyxcclxuICAgICAgICAnUGx1Y2tTeW50aCcsXHJcbiAgICAgICAgJ1BvbHlTeW50aCcsXHJcbiAgICAgICAgJ1N5bnRoJyxcclxuICAgIF07XHJcbiAgICBjb25zdCByb3dHcm91cHMgPSAoYXJhLG4pID0+IHtcclxuICAgICAgICBsZXQgdGVtcFJvd0dyb3Vwcz1bXTtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZSb3dzPU1hdGguY2VpbChhcmEubGVuZ3RoL24pO1xyXG4gICAgICAgIGZvciAobGV0IGc9MDtnPG51bWJlck9mUm93cztnKyspe1xyXG4gICAgICAgICAgICB0ZW1wUm93R3JvdXBzLnB1c2goW10pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxuO2krKyl7XHJcbiAgICAgICAgICAgICAgICB0ZW1wUm93R3JvdXBzW2ddLnB1c2goYXJhW2craV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGVtcFJvd0dyb3VwcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2cocm93R3JvdXBzKHN5bnRocyw0KSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdJbnN0cnVtZW50VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRVc2VySW5zdHJ1bWVudChuZXdJbnN0cnVtZW50VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgIHZhbHVlPXt1c2VySW5zdHJ1bWVudH1cclxuICAgICAgZXhjbHVzaXZlXHJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICA+XHJcbiAgICB7c3ludGhzLm1hcChzeW50aD0+KFxyXG4gICAgICAgIDxUb2dnbGVCdXR0b24ga2V5PXsnbm90YScrc3ludGh9IHZhbHVlPXtzeW50aH0+XHJcbiAgICAgICAgICAgIHtzeW50aH08RGlhbHBhZEljb24gLz5cclxuICAgICAgICA8L1RvZ2dsZUJ1dHRvbj4pKX1cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgICA8Lz4pO1xyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJEaWFscGFkSWNvbiIsIkluc3RydW1lbnRQaWNrZXIiLCJzZXRVc2VySW5zdHJ1bWVudCIsInVzZXJJbnN0cnVtZW50Iiwic3ludGhzIiwicm93R3JvdXBzIiwiYXJhIiwibiIsInRlbXBSb3dHcm91cHMiLCJudW1iZXJPZlJvd3MiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImciLCJwdXNoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuZXdJbnN0cnVtZW50VmFsdWUiLCJldmVudCIsImNvbG9yIiwidmFsdWUiLCJleGNsdXNpdmUiLCJvbkNoYW5nZSIsIm1hcCIsInN5bnRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/instrumentpicker.js\n");

/***/ })

});