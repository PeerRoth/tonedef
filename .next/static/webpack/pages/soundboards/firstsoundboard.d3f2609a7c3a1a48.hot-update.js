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

/***/ "./pages/soundboards/firstsoundboard.js":
/*!**********************************************!*\
  !*** ./pages/soundboards/firstsoundboard.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/togglebuttongroup */ \"./components/togglebuttongroup.js\");\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n\n\n// import LightButton from '../../components/lightbutton';\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction FirstPost() {\n    _s();\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var ref = _slicedToArray(useState('Synth'), 2), userInstrument = ref[0], setUserInstrument = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"first board\"\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userInstrument: userInstrument,\n                chordNotes: chordNotesBMinor7,\n                name: 'BMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userInstrument: userInstrument,\n                chordNotes: chordNotesAMinor7,\n                name: 'AMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userInstrument: userInstrument,\n                chordNotes: chordNotesEMinor7,\n                name: 'EMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(FirstPost, \"zIRlT7pwGLM9aye9tWGN7vZHBuQ=\");\n_c = FirstPost;\nvar _c;\n$RefreshReg$(_c, \"FirstPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDNUIsRUFBMEQ7QUFDSTtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsUUFBUSxDQUFDRyxTQUFTLEdBQUUsQ0FBQzs7SUFJcEMsR0FBSyxDQUFDQyxpQkFBaUIsR0FBQyxDQUFDO1FBQUEsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBSTtBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFDMUQsR0FBSyxDQUFDQyxpQkFBaUIsR0FBQyxDQUFDO1FBQUEsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFDekQsR0FBSyxDQUFDQyxpQkFBaUIsR0FBQyxDQUFDO1FBQUEsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFFekQsR0FBSyxDQUFvQ0MsR0FBaUIsa0JBQWpCQSxRQUFRLENBQUMsQ0FBTyxhQUFsREMsY0FBYyxHQUFvQkQsR0FBaUIsS0FBcENFLGlCQUFpQixHQUFFRixHQUFpQjtJQUV0RCxNQUFNLDZFQUFDOzt3RkFJRUcsQ0FBRTswQkFBQyxDQUFXOzs7Ozs7d0ZBRWRSLG9FQUFnQjtnQkFBQ08saUJBQWlCLEVBQUVBLGlCQUFpQjs7Ozs7O3dGQUVyRFIscUVBQWE7Z0JBQUNPLGNBQWMsRUFBRUEsY0FBYztnQkFBRUcsVUFBVSxFQUFFUCxpQkFBaUI7Z0JBQUVRLElBQUksRUFBRSxDQUFTOzs7Ozs7d0ZBQzVGWCxxRUFBYTtnQkFBQ08sY0FBYyxFQUFFQSxjQUFjO2dCQUFFRyxVQUFVLEVBQUVOLGlCQUFpQjtnQkFBRU8sSUFBSSxFQUFFLENBQVM7Ozs7Ozt3RkFDNUZYLHFFQUFhO2dCQUFDTyxjQUFjLEVBQUVBLGNBQWM7Z0JBQUVHLFVBQVUsRUFBRUwsaUJBQWlCO2dCQUFFTSxJQUFJLEVBQUUsQ0FBUzs7Ozs7O3dGQUM1RkMsQ0FBRTtzR0FDRWIsa0RBQUk7b0JBQUNjLElBQUksRUFBQyxDQUFHOzBHQUNUQyxDQUFDO2tDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQixDQUFDO0dBNUJ1QlosU0FBUztLQUFUQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NvdW5kYm9hcmRzL2ZpcnN0c291bmRib2FyZC5qcz9hZmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBMaWdodEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpZ2h0YnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUdyb3VwaWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b2dnbGVidXR0b25ncm91cCc7XHJcbmltcG9ydCBJbnN0cnVtZW50UGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJzdFBvc3QoKXtcclxuXHJcblxyXG5cclxuY29uc3QgY2hvcmROb3Rlc0JNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0YjJyw1XSxbJ0EnLDVdXTtcclxuY29uc3QgY2hvcmROb3Rlc0FNaW5vcjc9W1snQScsNF0sWydDJyw1XSxbJ0UnLDVdLFsnRycsNV1dO1xyXG5jb25zdCBjaG9yZE5vdGVzRU1pbm9yNz1bWydCJyw0XSxbJ0QnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcblxyXG5jb25zdCBbdXNlckluc3RydW1lbnQsc2V0VXNlckluc3RydW1lbnRdPXVzZVN0YXRlKCdTeW50aCcpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPGgxPmZpcnN0IGJvYXJkPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxJbnN0cnVtZW50UGlja2VyIHNldFVzZXJJbnN0cnVtZW50PXtzZXRVc2VySW5zdHJ1bWVudH0gLz5cclxuXHJcbiAgICAgICAgICAgIDxUb2dnbGVHcm91cGllIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gY2hvcmROb3Rlcz17Y2hvcmROb3Rlc0JNaW5vcjd9IG5hbWU9eydCTWlub3I3J30gLz5cclxuICAgICAgICAgICAgPFRvZ2dsZUdyb3VwaWUgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBjaG9yZE5vdGVzPXtjaG9yZE5vdGVzQU1pbm9yN30gbmFtZT17J0FNaW5vcjcnfSAgLz5cclxuICAgICAgICAgICAgPFRvZ2dsZUdyb3VwaWUgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBjaG9yZE5vdGVzPXtjaG9yZE5vdGVzRU1pbm9yN30gbmFtZT17J0VNaW5vcjcnfSAgLz5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5ob21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz4pXHJcbn0iXSwibmFtZXMiOlsiTGluayIsIlRvZ2dsZUdyb3VwaWUiLCJJbnN0cnVtZW50UGlja2VyIiwiRmlyc3RQb3N0IiwiY2hvcmROb3Rlc0JNaW5vcjciLCJjaG9yZE5vdGVzQU1pbm9yNyIsImNob3JkTm90ZXNFTWlub3I3IiwidXNlU3RhdGUiLCJ1c2VySW5zdHJ1bWVudCIsInNldFVzZXJJbnN0cnVtZW50IiwiaDEiLCJjaG9yZE5vdGVzIiwibmFtZSIsImg1IiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});