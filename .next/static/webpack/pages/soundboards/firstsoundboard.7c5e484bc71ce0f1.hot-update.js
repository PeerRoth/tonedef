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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleGroupie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ToggleGroupie() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState('web'), 2), alignment = ref[0], setAlignment = ref[1];\n    var handleChange = function(event, newAlignment) {\n        setAlignment(newAlignment);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        color: \"primary\",\n        value: alignment,\n        exclusive: true,\n        onChange: handleChange,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            value: \"web\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_s(ToggleGroupie, \"5IWaRY2bn2HKOdC6ulgX34LLpec=\");\n_c = ToggleGroupie;\nvar _c;\n$RefreshReg$(_c, \"ToggleGroupie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUN1QjtBQUNVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxRQUFRLENBQUNJLGFBQWEsR0FBRyxDQUFDOztJQUN2QyxHQUFLLENBQTZCSixHQUFxQixrQkFBckJBLDJDQUFjLENBQUMsQ0FBSyxXQUEvQ00sU0FBUyxHQUFrQk4sR0FBcUIsS0FBckNPLFlBQVksR0FBSVAsR0FBcUI7SUFFdkQsR0FBSyxDQUFDUSxZQUFZLEdBQUcsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxZQUFZLEVBQUssQ0FBQztRQUM3Q0YsWUFBWSxDQUFDRSxZQUFZO0lBQzNCLENBQUM7SUFFRCxNQUFNLDZFQUNIUCx1RUFBaUI7UUFDaEJTLEtBQUssRUFBQyxDQUFTO1FBQ2ZDLEtBQUssRUFBRU4sU0FBUztRQUNoQk8sU0FBUztRQUNUQyxRQUFRLEVBQUVOLFlBQVk7OEZBRXJCUCxrRUFBWTtZQUFDVyxLQUFLLEVBQUMsQ0FBSztrR0FFeEJULG1FQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUFJbEIsQ0FBQztHQXBCdUJDLGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzP2Y5ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgRGlhbHBhZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaWFscGFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZ2dsZUdyb3VwaWUoKSB7XHJcbiAgY29uc3QgW2FsaWdubWVudCwgc2V0QWxpZ25tZW50XSA9IFJlYWN0LnVzZVN0YXRlKCd3ZWInKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdBbGlnbm1lbnQpID0+IHtcclxuICAgIHNldEFsaWdubWVudChuZXdBbGlnbm1lbnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgdmFsdWU9e2FsaWdubWVudH1cclxuICAgICAgZXhjbHVzaXZlXHJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICA+XHJcbiAgICAgIDxUb2dnbGVCdXR0b24gdmFsdWU9XCJ3ZWJcIj5cclxuICAgICAgICAgIHsvKiA8TGlnaHRCdXR0b24gLz4gKi99XHJcbiAgICAgIDxEaWFscGFkSWNvbiAvPlxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJEaWFscGFkSWNvbiIsIlRvZ2dsZUdyb3VwaWUiLCJ1c2VTdGF0ZSIsImFsaWdubWVudCIsInNldEFsaWdubWVudCIsImhhbmRsZUNoYW5nZSIsIm5ld0FsaWdubWVudCIsImV2ZW50IiwiY29sb3IiLCJ2YWx1ZSIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/togglebuttongroup.js\n");

/***/ })

});