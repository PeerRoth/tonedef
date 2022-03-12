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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleGroupie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ToggleGroupie(param) {\n    var chordNotes = param.chordNotes, name = param.name;\n    var _this = this;\n    var playNote = function playNote(val) {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(val, now);\n        synth.triggerRelease(now + 1);\n    };\n    _s();\n    var preNotes = [];\n    var a = 'a';\n    var iterations = [\n        a,\n        a,\n        a,\n        a,\n        a,\n        a,\n        a, \n    ];\n    iterations.forEach(function(it, itIdx) {\n        chordNotes.forEach(function(cn) {\n            preNotes.push(cn[0] + (cn[1] + itIdx - 2));\n        });\n    });\n    console.log(preNotes);\n    var notes = preNotes;\n    ;\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState('D5'), 2), noteValue = ref[0], setNoteValue = ref[1];\n    var handleChange = function(event, newNoteValue) {\n        playNote(newNoteValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"primary\",\n                value: noteValue,\n                exclusive: true,\n                onChange: handleChange,\n                children: notes.map(function(note) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: note,\n                        children: [\n                            note,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                                lineNumber: 49,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(ToggleGroupie, \"w3eqHWyzQfh0rXQtHeEHbJoO7BA=\");\n_c = ToggleGroupie;\nvar _c;\n$RefreshReg$(_c, \"ToggleGroupie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDdUI7QUFDVTtBQUNWO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixRQUFRLENBQUNLLGFBQWEsQ0FBQyxLQUFpQixFQUFFLENBQUM7UUFBbkJDLFVBQVUsR0FBWCxLQUFpQixDQUFoQkEsVUFBVSxFQUFDQyxJQUFJLEdBQWhCLEtBQWlCLENBQUxBLElBQUk7O1FBaUJ6Q0MsUUFBUSxHQUFqQixRQUFRLENBQUNBLFFBQVEsQ0FBQ0MsR0FBRyxFQUFDLENBQUM7UUFDbkIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsR0FBRyxDQUFDTix1Q0FBVSxHQUFHUSxhQUFhO1FBQzVDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHVCxxQ0FBUTtRQUNwQk0sS0FBSyxDQUFDSSxhQUFhLENBQUNMLEdBQUcsRUFBRUksR0FBRztRQUM1QkgsS0FBSyxDQUFDSyxjQUFjLENBQUNGLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLENBQUM7O0lBbkJMLEdBQUssQ0FBQ0csUUFBUSxHQUFDLENBQUMsQ0FBQztJQUNqQixHQUFHLENBQUNDLENBQUMsR0FBRyxDQUFHO0lBQ1gsR0FBSyxDQUFDQyxVQUFVLEdBQUMsQ0FBQ0Q7UUFBQUEsQ0FBQztRQUFDQSxDQUFDO1FBQUNBLENBQUM7UUFBQ0EsQ0FBQztRQUFDQSxDQUFDO1FBQUNBLENBQUM7UUFBQ0EsQ0FBQztJQUFDLENBQUM7SUFDakNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsRUFBRSxFQUFDQyxLQUFLLEVBQUcsQ0FBQztRQUM1QmYsVUFBVSxDQUFDYSxPQUFPLENBQUNHLFFBQ3RCLENBRHNCQSxFQUFFLEVBQUUsQ0FBQztZQUNwQk4sUUFBUSxDQUFDTyxJQUFJLENBQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUdBLEVBQUUsQ0FBQyxDQUFDLElBQUVELEtBQUssR0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBR0dHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxRQUFRO0lBRXBCLEdBQUssQ0FBQ1UsS0FBSyxHQUFDVixRQUFROztJQVNwQixHQUFLLENBQTZCaEIsR0FBb0Isa0JBQXBCQSwyQ0FBYyxDQUFDLENBQUksVUFBOUM0QixTQUFTLEdBQWtCNUIsR0FBb0IsS0FBcEM2QixZQUFZLEdBQUk3QixHQUFvQjtJQUV0RCxHQUFLLENBQUM4QixZQUFZLEdBQUcsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxZQUFZLEVBQUssQ0FBQztRQUMzQ3ZCLFFBQVEsQ0FBQ3VCLFlBQVk7SUFDekIsQ0FBQztJQUVILE1BQU07O1lBRUR4QixJQUFJO3dGQUNOTCx1RUFBaUI7Z0JBQ2hCK0IsS0FBSyxFQUFDLENBQVM7Z0JBQ2ZDLEtBQUssRUFBRU4sU0FBUztnQkFDaEJPLFNBQVM7Z0JBQ1RDLFFBQVEsRUFBRU4sWUFBWTswQkFFdkJKLEtBQUssQ0FBQ1csR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7a0NBQ2IsTUFBTSwrREFBTHJDLGtFQUFZO3dCQUFDaUMsS0FBSyxFQUFFSSxJQUFJOzs0QkFDcEJBLElBQUk7d0dBQ1JuQyxtRUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQixDQUFDO0dBaER1QkUsYUFBYTtLQUFiQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9nZ2xlYnV0dG9uZ3JvdXAuanM/ZjlkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBEaWFscGFkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpYWxwYWQnO1xyXG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2dnbGVHcm91cGllKHtjaG9yZE5vdGVzLG5hbWV9KSB7XHJcblxyXG4gICAgXHJcbmNvbnN0IHByZU5vdGVzPVtdO1xyXG5sZXQgYSA9ICdhJztcclxuY29uc3QgaXRlcmF0aW9ucz1bYSxhLGEsYSxhLGEsYSxdO1xyXG5pdGVyYXRpb25zLmZvckVhY2goKGl0LGl0SWR4KT0+e1xyXG4gICAgY2hvcmROb3Rlcy5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgcHJlTm90ZXMucHVzaChjblswXSsoY25bMV0raXRJZHgtMikpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcmVOb3Rlcyk7XHJcblxyXG4gICAgY29uc3Qgbm90ZXM9cHJlTm90ZXM7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheU5vdGUodmFsKXtcclxuICAgICAgICBjb25zdCBzeW50aCA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IFRvbmUubm93KClcclxuICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrKHZhbCwgbm93KVxyXG4gICAgICAgIHN5bnRoLnRyaWdnZXJSZWxlYXNlKG5vdyArIDEpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtub3RlVmFsdWUsIHNldE5vdGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnRDUnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld05vdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHBsYXlOb3RlKG5ld05vdGVWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICB7bmFtZX1cclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICB2YWx1ZT17bm90ZVZhbHVlfVxyXG4gICAgICBleGNsdXNpdmVcclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgID5cclxuICAgIHtub3Rlcy5tYXAobm90ZT0+KFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPXtub3RlfT5cclxuICAgICAgICAgIHtub3RlfVxyXG4gICAgICA8RGlhbHBhZEljb24gLz5cclxuICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICkpfVxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiVG9uZSIsIlRvZ2dsZUdyb3VwaWUiLCJjaG9yZE5vdGVzIiwibmFtZSIsInBsYXlOb3RlIiwidmFsIiwic3ludGgiLCJTeW50aCIsInRvRGVzdGluYXRpb24iLCJub3ciLCJ0cmlnZ2VyQXR0YWNrIiwidHJpZ2dlclJlbGVhc2UiLCJwcmVOb3RlcyIsImEiLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJ1c2VTdGF0ZSIsIm5vdGVWYWx1ZSIsInNldE5vdGVWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5ld05vdGVWYWx1ZSIsImV2ZW50IiwiY29sb3IiLCJ2YWx1ZSIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIiwibWFwIiwibm90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/togglebuttongroup.js\n");

/***/ })

});