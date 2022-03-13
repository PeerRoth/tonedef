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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InstrumentPicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction InstrumentPicker(param) {\n    var chordNotes = param.chordNotes, name = param.name;\n    var _this = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : userInstrument;\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[instrument]().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(val, now);\n        synth.triggerRelease(now + 1);\n    };\n    _s();\n    var preNotes = [];\n    var a = 'a';\n    var iterations = [\n        a,\n        a,\n        a,\n        a,\n        a,\n        a,\n        a, \n    ];\n    iterations.forEach(function(it, itIdx) {\n        chordNotes.forEach(function(cn) {\n            preNotes.push(cn[0] + (cn[1] + itIdx - 2));\n        });\n    });\n    console.log(preNotes);\n    var notes = preNotes;\n    var instruments = [];\n    var ref = _slicedToArray(useState(false), 2), feedbackDelay = ref[0], setFeedbackDelay = ref[1];\n    var synths = [\n        'AMSynth',\n        'DuoSynth',\n        'FMSynth',\n        'MembraneSynth',\n        'MetalSynth',\n        'MonoSynth',\n        'NoiseSynth',\n        'PluckSynth',\n        'PolySynth',\n        'Sampler',\n        'Synth', \n    ];\n    // const fbd = () => {\n    //     const feedbackDelay = new Tone.FeedbackDelay(\"8n\", 0.5).toDestination();\n    //     const tom = new Tone.MembraneSynth({\n    //         octaves: 4,\n    //         pitchDecay: 0.1\n    //     }).connect(feedbackDelay);\n    //     tom.triggerAttackRelease(\"A2\", \"32n\");\n    // };\n    var ref1 = _slicedToArray(useState('Synth'), 2), userInstrument = ref1[0], setUserInstrument = ref1[1];\n    ;\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState('D5'), 2), noteValue = ref2[0], setNoteValue = ref2[1];\n    var handleChange = function(event, newNoteValue) {\n        playNote(newNoteValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                value: noteValue,\n                exclusive: true,\n                onChange: handleChange,\n                children: instruments.map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                                lineNumber: 77,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, 'nota' + note + name, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\instrumentpicker.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(InstrumentPicker, \"YI7dUatVT3SGwBpeMAojJ2FZk/Y=\");\n_c = InstrumentPicker;\nvar _c;\n$RefreshReg$(_c, \"InstrumentPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO2dCQUNoQk8sU0FBUztnQkFDVEMsUUFBUSxFQUFFTixZQUFZOzBCQUV2QlIsV0FBVyxDQUFDZSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTtrQ0FDbkIsTUFBTSwrREFBTDNDLGtFQUFZO3dCQUF3QnVDLEtBQUssRUFBRUksSUFBSTs7NEJBQzNDQSxJQUFJO3dHQUNSekMsbUVBQVc7Ozs7Ozt1QkFGTyxDQUFNLFFBQUN5QyxJQUFJLEdBQUNyQyxJQUFJOzs7Ozs7Ozs7Ozs7O0FBUXpDLENBQUM7R0E1RXVCRixnQkFBZ0I7S0FBaEJBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luc3RydW1lbnRwaWNrZXIuanM/NGRiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBEaWFscGFkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpYWxwYWQnO1xyXG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnN0cnVtZW50UGlja2VyKHtjaG9yZE5vdGVzLG5hbWV9KSB7XHJcblxyXG4gICAgXHJcbmNvbnN0IHByZU5vdGVzPVtdO1xyXG5sZXQgYSA9ICdhJztcclxuY29uc3QgaXRlcmF0aW9ucz1bYSxhLGEsYSxhLGEsYSxdO1xyXG5pdGVyYXRpb25zLmZvckVhY2goKGl0LGl0SWR4KT0+e1xyXG4gICAgY2hvcmROb3Rlcy5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgcHJlTm90ZXMucHVzaChjblswXSsoY25bMV0raXRJZHgtMikpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcmVOb3Rlcyk7XHJcblxyXG4gICAgY29uc3Qgbm90ZXM9cHJlTm90ZXM7XHJcblxyXG4gICAgY29uc3QgaW5zdHJ1bWVudHM9W1xyXG5cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgW2ZlZWRiYWNrRGVsYXksc2V0RmVlZGJhY2tEZWxheV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc3ludGhzPVtcclxuICAgICAgICAnQU1TeW50aCcsXHJcbidEdW9TeW50aCcsXHJcbidGTVN5bnRoJyxcclxuJ01lbWJyYW5lU3ludGgnLFxyXG4nTWV0YWxTeW50aCcsXHJcbidNb25vU3ludGgnLFxyXG4nTm9pc2VTeW50aCcsXHJcbidQbHVja1N5bnRoJyxcclxuJ1BvbHlTeW50aCcsXHJcbidTYW1wbGVyJyxcclxuJ1N5bnRoJyxcclxuICAgIF07XHJcblxyXG4gICAgLy8gY29uc3QgZmJkID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGZlZWRiYWNrRGVsYXkgPSBuZXcgVG9uZS5GZWVkYmFja0RlbGF5KFwiOG5cIiwgMC41KS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAvLyAgICAgY29uc3QgdG9tID0gbmV3IFRvbmUuTWVtYnJhbmVTeW50aCh7XHJcbiAgICAvLyAgICAgICAgIG9jdGF2ZXM6IDQsXHJcbiAgICAvLyAgICAgICAgIHBpdGNoRGVjYXk6IDAuMVxyXG4gICAgLy8gICAgIH0pLmNvbm5lY3QoZmVlZGJhY2tEZWxheSk7XHJcbiAgICAvLyAgICAgdG9tLnRyaWdnZXJBdHRhY2tSZWxlYXNlKFwiQTJcIiwgXCIzMm5cIik7XHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuICAgIGZ1bmN0aW9uIHBsYXlOb3RlKHZhbCxpbnN0cnVtZW50PXVzZXJJbnN0cnVtZW50KXtcclxuICAgICAgICBjb25zdCBzeW50aCA9IG5ldyBUb25lW2luc3RydW1lbnRdKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IFRvbmUubm93KClcclxuICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrKHZhbCwgbm93KVxyXG4gICAgICAgIHN5bnRoLnRyaWdnZXJSZWxlYXNlKG5vdyArIDEpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtub3RlVmFsdWUsIHNldE5vdGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnRDUnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld05vdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHBsYXlOb3RlKG5ld05vdGVWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICB7bmFtZX1cclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICB2YWx1ZT17bm90ZVZhbHVlfVxyXG4gICAgICBleGNsdXNpdmVcclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgID5cclxuICAgIHtpbnN0cnVtZW50cy5tYXAobm90ZT0+KFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGtleT17J25vdGEnK25vdGUrbmFtZX0gdmFsdWU9e25vdGV9PlxyXG4gICAgICAgICAge25vdGV9XHJcbiAgICAgIDxEaWFscGFkSWNvbiAvPlxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgKSl9XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvZ2dsZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbkdyb3VwIiwiRGlhbHBhZEljb24iLCJUb25lIiwiSW5zdHJ1bWVudFBpY2tlciIsImNob3JkTm90ZXMiLCJuYW1lIiwicGxheU5vdGUiLCJ2YWwiLCJpbnN0cnVtZW50IiwidXNlckluc3RydW1lbnQiLCJzeW50aCIsInRvRGVzdGluYXRpb24iLCJub3ciLCJ0cmlnZ2VyQXR0YWNrIiwidHJpZ2dlclJlbGVhc2UiLCJwcmVOb3RlcyIsImEiLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJpbnN0cnVtZW50cyIsInVzZVN0YXRlIiwiZmVlZGJhY2tEZWxheSIsInNldEZlZWRiYWNrRGVsYXkiLCJzeW50aHMiLCJzZXRVc2VySW5zdHJ1bWVudCIsIm5vdGVWYWx1ZSIsInNldE5vdGVWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5ld05vdGVWYWx1ZSIsImV2ZW50IiwiY29sb3IiLCJ2YWx1ZSIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIiwibWFwIiwibm90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/instrumentpicker.js\n");

/***/ }),

/***/ "./pages/soundboards/firstsoundboard.js":
/*!**********************************************!*\
  !*** ./pages/soundboards/firstsoundboard.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/togglebuttongroup */ \"./components/togglebuttongroup.js\");\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n\n\n// import LightButton from '../../components/lightbutton';\n\n\nfunction FirstPost() {\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"first board\"\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                chordNotes: chordNotesBMinor7,\n                name: 'BMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                chordNotes: chordNotesAMinor7,\n                name: 'AMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuttongroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                chordNotes: chordNotesEMinor7,\n                name: 'EMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = FirstPost;\nvar _c;\n$RefreshReg$(_c, \"FirstPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDNUIsRUFBMEQ7QUFDSTtBQUNFO0FBRWpELFFBQVEsQ0FBQ0csU0FBUyxHQUFFLENBQUM7SUFJcEMsR0FBSyxDQUFDQyxpQkFBaUIsR0FBQyxDQUFDO1FBQUEsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBSTtBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFDMUQsR0FBSyxDQUFDQyxpQkFBaUIsR0FBQyxDQUFDO1FBQUEsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFDekQsR0FBSyxDQUFDQyxpQkFBaUIsR0FBQyxDQUFDO1FBQUEsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFJckQsTUFBTSw2RUFBQzs7d0ZBSUVDLENBQUU7MEJBQUMsQ0FBVzs7Ozs7O3dGQUVkTCxvRUFBZ0I7Ozs7O3dGQUVoQkQscUVBQWE7Z0JBQUNPLFVBQVUsRUFBRUosaUJBQWlCO2dCQUFFSyxJQUFJLEVBQUUsQ0FBUzs7Ozs7O3dGQUU1RFIscUVBQWE7Z0JBQUNPLFVBQVUsRUFBRUgsaUJBQWlCO2dCQUFFSSxJQUFJLEVBQUUsQ0FBUzs7Ozs7O3dGQUU1RFIscUVBQWE7Z0JBQUNPLFVBQVUsRUFBRUYsaUJBQWlCO2dCQUFFRyxJQUFJLEVBQUUsQ0FBUzs7Ozs7O3dGQUM1REMsQ0FBRTtzR0FDRVYsa0RBQUk7b0JBQUNXLElBQUksRUFBQyxDQUFHOzBHQUNUQyxDQUFDO2tDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQixDQUFDO0tBOUJ1QlQsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanM/YWZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgTGlnaHRCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saWdodGJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVHcm91cGllIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdG9nZ2xlYnV0dG9uZ3JvdXAnO1xyXG5pbXBvcnQgSW5zdHJ1bWVudFBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luc3RydW1lbnRwaWNrZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyc3RQb3N0KCl7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNob3JkTm90ZXNCTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydGIycsNV0sWydBJyw1XV07XHJcbmNvbnN0IGNob3JkTm90ZXNBTWlub3I3PVtbJ0EnLDRdLFsnQycsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuY29uc3QgY2hvcmROb3Rlc0VNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0UnLDVdLFsnRycsNV1dO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8aDE+Zmlyc3QgYm9hcmQ8L2gxPlxyXG5cclxuICAgICAgICAgICAgPEluc3RydW1lbnRQaWNrZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxUb2dnbGVHcm91cGllIGNob3JkTm90ZXM9e2Nob3JkTm90ZXNCTWlub3I3fSBuYW1lPXsnQk1pbm9yNyd9IC8+XHJcblxyXG4gICAgICAgICAgICA8VG9nZ2xlR3JvdXBpZSBjaG9yZE5vdGVzPXtjaG9yZE5vdGVzQU1pbm9yN30gbmFtZT17J0FNaW5vcjcnfSAgLz5cclxuXHJcbiAgICAgICAgICAgIDxUb2dnbGVHcm91cGllIGNob3JkTm90ZXM9e2Nob3JkTm90ZXNFTWlub3I3fSBuYW1lPXsnRU1pbm9yNyd9ICAvPlxyXG4gICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPmhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPilcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiVG9nZ2xlR3JvdXBpZSIsIkluc3RydW1lbnRQaWNrZXIiLCJGaXJzdFBvc3QiLCJjaG9yZE5vdGVzQk1pbm9yNyIsImNob3JkTm90ZXNBTWlub3I3IiwiY2hvcmROb3Rlc0VNaW5vcjciLCJoMSIsImNob3JkTm90ZXMiLCJuYW1lIiwiaDUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});