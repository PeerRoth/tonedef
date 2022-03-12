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

/***/ "./components/lightbutton.js":
/*!***********************************!*\
  !*** ./components/lightbutton.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LightButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var _mui_icons_material_Gamepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Gamepad */ \"./node_modules/@mui/icons-material/Gamepad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\nfunction LightButton(param) {\n    var note = param.note, duration = param.duration, color = param.color, handler = param.handler;\n    //create a synth and connect it to the main output (your speakers)\n    var synth = new tone__WEBPACK_IMPORTED_MODULE_1__.Synth().toDestination();\n    //play a middle 'C' for the duration of an 8th note\n    // synth.triggerAttackRelease(\"C4\", \"8n\");\n    var now = tone__WEBPACK_IMPORTED_MODULE_1__.now();\n    // trigger the attack immediately\n    synth.triggerAttack(\"C4\", now);\n    // wait one second before triggering the release\n    synth.triggerRelease(now + 1);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\lightbutton.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Gamepad__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\lightbutton.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = LightButton;\nvar _c;\n$RefreshReg$(_c, \"LightButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpZ2h0YnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFDQTtBQUN6QjtBQUliLFFBQVEsQ0FBQ0csV0FBVyxDQUFDLEtBQTZCLEVBQUMsQ0FBQztRQUE5QkMsSUFBSSxHQUFMLEtBQTZCLENBQTVCQSxJQUFJLEVBQUNDLFFBQVEsR0FBZCxLQUE2QixDQUF2QkEsUUFBUSxFQUFDQyxLQUFLLEdBQXBCLEtBQTZCLENBQWRBLEtBQUssRUFBQ0MsT0FBTyxHQUE1QixLQUE2QixDQUFSQSxPQUFPO0lBRzVELEVBQWtFO0lBQ3RFLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ04sdUNBQVUsR0FBR1EsYUFBYTtJQUU1QyxFQUFtRDtJQUNuRCxFQUEwQztJQUUxQyxHQUFLLENBQUNDLEdBQUcsR0FBR1QscUNBQVE7SUFDcEIsRUFBaUM7SUFDakNNLEtBQUssQ0FBQ0ksYUFBYSxDQUFDLENBQUksS0FBRUQsR0FBRztJQUM3QixFQUFnRDtJQUNoREgsS0FBSyxDQUFDSyxjQUFjLENBQUNGLEdBQUcsR0FBRyxDQUFDO0lBSXhCLE1BQU07O3dGQUVHWCxtRUFBVzs7Ozs7d0ZBQ1hDLG1FQUFXOzs7Ozs7O0FBR3hCLENBQUM7S0F2QnVCRSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGlnaHRidXR0b24uanM/YjliYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbHBhZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaWFscGFkJztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR2FtZXBhZCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSAndG9uZSdcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlnaHRCdXR0b24oe25vdGUsZHVyYXRpb24sY29sb3IsaGFuZGxlcn0pe1xyXG5cclxuXHJcbiAgICAvL2NyZWF0ZSBhIHN5bnRoIGFuZCBjb25uZWN0IGl0IHRvIHRoZSBtYWluIG91dHB1dCAoeW91ciBzcGVha2VycylcclxuY29uc3Qgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcclxuXHJcbi8vcGxheSBhIG1pZGRsZSAnQycgZm9yIHRoZSBkdXJhdGlvbiBvZiBhbiA4dGggbm90ZVxyXG4vLyBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkM0XCIsIFwiOG5cIik7XHJcblxyXG5jb25zdCBub3cgPSBUb25lLm5vdygpXHJcbi8vIHRyaWdnZXIgdGhlIGF0dGFjayBpbW1lZGlhdGVseVxyXG5zeW50aC50cmlnZ2VyQXR0YWNrKFwiQzRcIiwgbm93KVxyXG4vLyB3YWl0IG9uZSBzZWNvbmQgYmVmb3JlIHRyaWdnZXJpbmcgdGhlIHJlbGVhc2Vcclxuc3ludGgudHJpZ2dlclJlbGVhc2Uobm93ICsgMSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPERpYWxwYWRJY29uIC8+XHJcbiAgICAgICAgICAgIDxHYW1lcGFkSWNvbiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkRpYWxwYWRJY29uIiwiR2FtZXBhZEljb24iLCJUb25lIiwiTGlnaHRCdXR0b24iLCJub3RlIiwiZHVyYXRpb24iLCJjb2xvciIsImhhbmRsZXIiLCJzeW50aCIsIlN5bnRoIiwidG9EZXN0aW5hdGlvbiIsIm5vdyIsInRyaWdnZXJBdHRhY2siLCJ0cmlnZ2VyUmVsZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lightbutton.js\n");

/***/ })

});