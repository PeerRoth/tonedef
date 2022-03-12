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

/***/ "./components/togglebuttongroup.js":
/*!*****************************************!*\
  !*** ./components/togglebuttongroup.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleGroupie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ToggleGroupie() {\n    var _this = this;\n    var handleButtonOne = function handleButtonOne() {\n        //create a synth and connect it to the main output (your speakers)\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth().toDestination();\n        //play a middle 'C' for the duration of an 8th note\n        synth.triggerAttackRelease(\"C4\", \"8n\");\n    };\n    var playNote = function playNote(val) {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        // trigger the attack immediately\n        synth.triggerAttack(val, now);\n        // wait one second before triggering the release\n        synth.triggerRelease(now + 1);\n    };\n    _s();\n    var chordNotes = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var octaveMap = [\n        4,\n        5,\n        5,\n        5\n    ];\n    var preNotes = [];\n    chordNotes.forEach(function(cn) {\n        preNotes.push(cn[0] + cn[1]);\n    });\n    console.log(preNotes);\n    var notes = [\n        'B4',\n        'D5',\n        'F#5',\n        'A5',\n        'C5',\n        'C6',\n        'C7',\n        'C8', \n    ];\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState('D5'), 2), noteValue = ref[0], setNoteValue = ref[1];\n    var handleChange = function(event, newNoteValue) {\n        playNote(newNoteValue);\n        setNoteValue(newNoteValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        color: \"primary\",\n        value: noteValue,\n        exclusive: true,\n        onChange: handleChange,\n        children: notes.map(function(note) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                value: note,\n                children: [\n                    note,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this));\n};\n_s(ToggleGroupie, \"w3eqHWyzQfh0rXQtHeEHbJoO7BA=\");\n_c = ToggleGroupie;\nvar _c;\n$RefreshReg$(_c, \"ToggleGroupie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDdUI7QUFDVTtBQUNWO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixRQUFRLENBQUNLLGFBQWEsR0FBRyxDQUFDOztRQUdoQ0MsZUFBZSxHQUF4QixRQUFRLENBQUNBLGVBQWUsR0FBRSxDQUFDO1FBQ3ZCLEVBQWtFO1FBQ3RFLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0gsdUNBQVUsR0FBR0ssYUFBYTtRQUU1QyxFQUFtRDtRQUNuREYsS0FBSyxDQUFDRyxvQkFBb0IsQ0FBQyxDQUFJLEtBQUUsQ0FBSTtJQUNyQyxDQUFDO1FBd0JRQyxRQUFRLEdBQWpCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDQyxHQUFHLEVBQUMsQ0FBQztRQUN2QixHQUFLLENBQUNMLEtBQUssR0FBRyxHQUFHLENBQUNILHVDQUFVLEdBQUdLLGFBQWE7UUFFeEMsR0FBSyxDQUFDSSxHQUFHLEdBQUdULHFDQUFRO1FBQ3hCLEVBQWlDO1FBQ2pDRyxLQUFLLENBQUNPLGFBQWEsQ0FBQ0YsR0FBRyxFQUFFQyxHQUFHO1FBQzVCLEVBQWdEO1FBQ2hETixLQUFLLENBQUNRLGNBQWMsQ0FBQ0YsR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQzs7SUEvQkQsR0FBSyxDQUFDRyxVQUFVLEdBQUMsQ0FBQztRQUFBLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUk7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7SUFBQSxDQUFDO0lBRW5ELEdBQUssQ0FBQ0MsU0FBUyxHQUFDLENBQUM7QUFBQSxTQUFDO0FBQUMsU0FBQztBQUFDLFNBQUM7QUFBQyxTQUFDO0lBQUEsQ0FBQztJQUV6QixHQUFLLENBQUNDLFFBQVEsR0FBQyxDQUFDLENBQUM7SUFHakJGLFVBQVUsQ0FBQ0csT0FBTyxDQUFDQyxRQUNsQixDQURrQkEsRUFBRSxFQUFFLENBQUM7UUFDcEJGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFFQSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxRQUFRO0lBRXBCLEdBQUssQ0FBQ00sS0FBSyxHQUFDLENBQUM7UUFDVCxDQUFJO1FBQ0osQ0FBSTtRQUNKLENBQUs7UUFDTCxDQUFJO1FBQ0osQ0FBSTtRQUNKLENBQUk7UUFDSixDQUFJO1FBQ0osQ0FBSTtJQUNSLENBQUM7SUFjQyxHQUFLLENBQTZCeEIsR0FBb0Isa0JBQXBCQSwyQ0FBYyxDQUFDLENBQUksVUFBOUMwQixTQUFTLEdBQWtCMUIsR0FBb0IsS0FBcEMyQixZQUFZLEdBQUkzQixHQUFvQjtJQUV0RCxHQUFLLENBQUM0QixZQUFZLEdBQUcsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxZQUFZLEVBQUssQ0FBQztRQUMzQ2xCLFFBQVEsQ0FBQ2tCLFlBQVk7UUFDdkJGLFlBQVksQ0FBQ0UsWUFBWTtJQUMzQixDQUFDO0lBRUQsTUFBTSw2RUFDSDNCLHVFQUFpQjtRQUNoQjZCLEtBQUssRUFBQyxDQUFTO1FBQ2ZDLEtBQUssRUFBRU4sU0FBUztRQUNoQk8sU0FBUztRQUNUQyxRQUFRLEVBQUVOLFlBQVk7a0JBRW5CSixLQUFLLENBQUNXLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxJQUFJLEVBQUUsQ0FBQztZQUNkLE1BQU0sNkVBRVhuQyxrRUFBWTtnQkFBQytCLEtBQUssRUFBRUksSUFBSTs7b0JBQ3BCQSxJQUFJO2dHQUNSakMsbUVBQVc7Ozs7Ozs7Ozs7O1FBSWQsQ0FBQzs7Ozs7O0FBR0wsQ0FBQztHQXZFdUJFLGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzP2Y5ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgRGlhbHBhZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaWFscGFkJztcclxuaW1wb3J0ICogYXMgVG9uZSBmcm9tICd0b25lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9nZ2xlR3JvdXBpZSgpIHtcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gaGFuZGxlQnV0dG9uT25lKCl7XHJcbiAgICAvL2NyZWF0ZSBhIHN5bnRoIGFuZCBjb25uZWN0IGl0IHRvIHRoZSBtYWluIG91dHB1dCAoeW91ciBzcGVha2VycylcclxuY29uc3Qgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcclxuXHJcbi8vcGxheSBhIG1pZGRsZSAnQycgZm9yIHRoZSBkdXJhdGlvbiBvZiBhbiA4dGggbm90ZVxyXG5zeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkM0XCIsIFwiOG5cIik7XHJcbn1cclxuY29uc3QgY2hvcmROb3Rlcz1bWydCJyw0XSxbJ0QnLDVdLFsnRiMnLDVdLFsnQScsNV1dO1xyXG5cclxuY29uc3Qgb2N0YXZlTWFwPVs0LDUsNSw1XTtcclxuXHJcbmNvbnN0IHByZU5vdGVzPVtdO1xyXG5cclxuXHJcbmNob3JkTm90ZXMuZm9yRWFjaChjbj0+e1xyXG4gICAgcHJlTm90ZXMucHVzaChjblswXStjblsxXSk7XHJcbn0pO1xyXG5jb25zb2xlLmxvZyhwcmVOb3Rlcyk7XHJcblxyXG5jb25zdCBub3Rlcz1bXHJcbiAgICAnQjQnLFxyXG4gICAgJ0Q1JyxcclxuICAgICdGIzUnLFxyXG4gICAgJ0E1JyxcclxuICAgICdDNScsXHJcbiAgICAnQzYnLFxyXG4gICAgJ0M3JyxcclxuICAgICdDOCcsXHJcbl1cclxuXHJcbmZ1bmN0aW9uIHBsYXlOb3RlKHZhbCl7XHJcbmNvbnN0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XHJcblxyXG4gICAgY29uc3Qgbm93ID0gVG9uZS5ub3coKVxyXG4vLyB0cmlnZ2VyIHRoZSBhdHRhY2sgaW1tZWRpYXRlbHlcclxuc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuLy8gd2FpdCBvbmUgc2Vjb25kIGJlZm9yZSB0cmlnZ2VyaW5nIHRoZSByZWxlYXNlXHJcbnN5bnRoLnRyaWdnZXJSZWxlYXNlKG5vdyArIDEpXHJcbn1cclxuXHJcblxyXG5cclxuICBjb25zdCBbbm90ZVZhbHVlLCBzZXROb3RlVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJ0Q1Jyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3Tm90ZVZhbHVlKSA9PiB7XHJcbiAgICAgIHBsYXlOb3RlKG5ld05vdGVWYWx1ZSk7XHJcbiAgICBzZXROb3RlVmFsdWUobmV3Tm90ZVZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgIHZhbHVlPXtub3RlVmFsdWV9XHJcbiAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgPlxyXG4gICAgICAgIHtub3Rlcy5tYXAobm90ZT0+e1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgPFRvZ2dsZUJ1dHRvbiB2YWx1ZT17bm90ZX0+XHJcbiAgICAgICAgICB7bm90ZX1cclxuICAgICAgPERpYWxwYWRJY29uIC8+XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfSl9XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiVG9uZSIsIlRvZ2dsZUdyb3VwaWUiLCJoYW5kbGVCdXR0b25PbmUiLCJzeW50aCIsIlN5bnRoIiwidG9EZXN0aW5hdGlvbiIsInRyaWdnZXJBdHRhY2tSZWxlYXNlIiwicGxheU5vdGUiLCJ2YWwiLCJub3ciLCJ0cmlnZ2VyQXR0YWNrIiwidHJpZ2dlclJlbGVhc2UiLCJjaG9yZE5vdGVzIiwib2N0YXZlTWFwIiwicHJlTm90ZXMiLCJmb3JFYWNoIiwiY24iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwidXNlU3RhdGUiLCJub3RlVmFsdWUiLCJzZXROb3RlVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJuZXdOb3RlVmFsdWUiLCJldmVudCIsImNvbG9yIiwidmFsdWUiLCJleGNsdXNpdmUiLCJvbkNoYW5nZSIsIm1hcCIsIm5vdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/togglebuttongroup.js\n");

/***/ })

});