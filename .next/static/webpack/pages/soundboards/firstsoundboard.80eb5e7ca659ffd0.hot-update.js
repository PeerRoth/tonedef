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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleGroupie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n\n\n\n\n\n\nfunction ToggleGroupie(param1) {\n    var chordNotes = param1.chordNotes, name1 = param1.name, userInstrument = param1.userInstrument, setTopNote = param1.setTopNote;\n    var _this = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[instrument]().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(val, now);\n        synth.triggerRelease(now + 0.1);\n    };\n    var notes1 = [];\n    var iterations = [\n        'a',\n        'a',\n        'a',\n        'a', \n    ];\n    iterations.forEach(function(it, itIdx) {\n        chordNotes.forEach(function(cn) {\n            notes1.push(cn[0] + (cn[1] + itIdx - 2));\n        });\n    });\n    ;\n    var handleChange1 = function(event, newNoteValue) {\n        console.log(event);\n        var varul = event.target;\n        console.log(varul);\n        var varuli = varul.innerHTML;\n        console.log(varuli);\n        playNote(varul, userInstrument);\n    // playNote(newNoteValue,userInstrument);\n    // setTopNote(newNoteValue)\n    };\n    var Keys = function(param) {\n        var _colorStart = param.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param.notes, name = param.name;\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: notes.map(function(note, noteIdx, ara) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: '40px',\n                        height: '40px',\n                        borderRadius: '10px',\n                        backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\")\n                    },\n                    // value={note}\n                    onMouseOver: function() {\n                        playNote(note, userInstrument);\n                    },\n                    children: note\n                }, 'nota' + note + name, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, _this);\n    };\n    var Buttons = function(param) {\n        var handleChange = param.handleChange, notes = param.notes, name = param.name;\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            color: \"primary\",\n            exclusive: true,\n            onChange: handleChange,\n            children: notes.map(function(note) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    value: note,\n                    children: [\n                        note,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, 'nota' + note + name, true, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n            lineNumber: 54,\n            columnNumber: 5\n        }, _this);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            name1,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                colorStart: 80,\n                handler: handleChange1,\n                notes: notes1,\n                name: name1\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\components\\\\togglebuttongroup.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = ToggleGroupie;\nvar _c;\n$RefreshReg$(_c, \"ToggleGroupie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzhCLElBQUk7bUJBREEsQ0FBTSxRQUFDQSxJQUFJLEdBQUMvQixJQUFJOzs7Ozs7Ozs7Ozs7SUFNckMsR0FBSyxDQUFDeUMsT0FBTyxHQUFHLFFBQVE7WUFBTnZCLFlBQVksU0FBWkEsWUFBWSxFQUFDUCxLQUFLLFNBQUxBLEtBQUssRUFBQ1gsSUFBSSxTQUFKQSxJQUFJO3NCQUNyQyxNQUFNLCtEQUFMTCx1RUFBaUI7WUFDbEIrQyxLQUFLLEVBQUMsQ0FBUztZQUNmQyxTQUFTO1lBQ1RDLFFBQVEsRUFBRTFCLFlBQVk7c0JBRWpCUCxLQUFLLENBQUNtQixHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTs4QkFDakIsTUFBTSwrREFBTHJDLGtFQUFZO29CQUF3Qm1ELEtBQUssRUFBRWQsSUFBSTs7d0JBQzNDQSxJQUFJO29HQUNSbkMsbUVBQVc7Ozs7OzttQkFGTyxDQUFNLFFBQUNtQyxJQUFJLEdBQUMvQixJQUFJOzs7Ozs7Ozs7Ozs7SUFRdkMsTUFBTTs7d0ZBRUQ4QyxDQUFFOzs7Ozt3RkFDRkEsQ0FBRTs7Ozs7WUFDRjlDLEtBQUk7d0ZBQ0o4QyxDQUFFOzs7Ozt3RkFDRm5CLElBQUk7Z0JBQ0hDLFVBQVUsRUFBRSxFQUFFO2dCQUNkbUIsT0FBTyxFQUFFN0IsYUFBWTtnQkFDckJQLEtBQUssRUFBRUEsTUFBSztnQkFDWlgsSUFBSSxFQUFFQSxLQUFJOzs7Ozs7OztBQWVsQixDQUFDO0tBckZ1QkYsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZ2dsZWJ1dHRvbmdyb3VwLmpzP2Y5ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgRGlhbHBhZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaWFscGFkJztcclxuaW1wb3J0ICogYXMgVG9uZSBmcm9tICd0b25lJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZ2dsZUdyb3VwaWUoe2Nob3JkTm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxzZXRUb3BOb3RlfSkge1xyXG4gICAgY29uc3Qgbm90ZXM9W107XHJcbiAgICBjb25zdCBpdGVyYXRpb25zPVsnYScsJ2EnLCdhJywnYScsXTtcclxuICAgIGl0ZXJhdGlvbnMuZm9yRWFjaCgoaXQsaXRJZHgpPT57XHJcbiAgICAgICAgY2hvcmROb3Rlcy5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgICAgIG5vdGVzLnB1c2goY25bMF0rKGNuWzFdK2l0SWR4LTIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gcGxheU5vdGUodmFsLGluc3RydW1lbnQ9J1N5bnRoJyl7XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVtpbnN0cnVtZW50XSgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgICAgICBjb25zdCBub3cgPSBUb25lLm5vdygpXHJcbiAgICAgICAgc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuICAgICAgICBzeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdOb3RlVmFsdWUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgICAgICBsZXQgdmFydWwgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFydWwpO1xyXG4gICAgICAgIGxldCB2YXJ1bGkgPSB2YXJ1bC5pbm5lckhUTUw7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFydWxpKTtcclxuICAgICAgICBwbGF5Tm90ZSh2YXJ1bCx1c2VySW5zdHJ1bWVudClcclxuICAgICAgICAvLyBwbGF5Tm90ZShuZXdOb3RlVmFsdWUsdXNlckluc3RydW1lbnQpO1xyXG4gICAgICAgIC8vIHNldFRvcE5vdGUobmV3Tm90ZVZhbHVlKVxyXG4gICAgfTtcclxuY29uc3QgS2V5cyA9ICh7Y29sb3JTdGFydD0yMCxub3RlcyxuYW1lfSk9PihcclxuICAgIDxkaXYgPlxyXG4gICAgICAgIHtub3Rlcy5tYXAoKG5vdGUsbm90ZUlkeCxhcmEpPT4oXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDonNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOicxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6YHJnYigke2NvbG9yU3RhcnR9LCR7KDM2MC9hcmEubGVuZ3RoKSpub3RlSWR4fSwyMClgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT57cGxheU5vdGUobm90ZSx1c2VySW5zdHJ1bWVudCl9fSBcclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpPT57aGFuZGxlQ2hhbmdlKCdhJyxub3RlKX19IFxyXG4gICAgICAgICAgICAgICAga2V5PXsnbm90YScrbm90ZStuYW1lfSA+XHJcbiAgICAgICAgICAgICAgICB7bm90ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj4pXHJcblxyXG5jb25zdCBCdXR0b25zID0gKHtoYW5kbGVDaGFuZ2Usbm90ZXMsbmFtZX0pPT4oXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICBleGNsdXNpdmVcclxuICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgPlxyXG4gICAgICAgIHtub3Rlcy5tYXAobm90ZT0+KFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGtleT17J25vdGEnK25vdGUrbmFtZX0gdmFsdWU9e25vdGV9PlxyXG4gICAgICAgICAge25vdGV9XHJcbiAgICAgIDxEaWFscGFkSWNvbiAvPlxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgKSl9XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPEtleXMgXHJcbiAgICAgICAgY29sb3JTdGFydD17ODB9XHJcbiAgICAgICAgaGFuZGxlcj17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICBub3Rlcz17bm90ZXN9IFxyXG4gICAgICAgIG5hbWU9e25hbWV9IC8+XHJcbiAgICB7LyogPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgPlxyXG4gICAge25vdGVzLm1hcChub3RlPT4oXHJcbiAgICAgIDxUb2dnbGVCdXR0b24ga2V5PXsnbm90YScrbm90ZStuYW1lfSB2YWx1ZT17bm90ZX0+XHJcbiAgICAgICAgICB7bm90ZX1cclxuICAgICAgPERpYWxwYWRJY29uIC8+XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICApKX1cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvZ2dsZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbkdyb3VwIiwiRGlhbHBhZEljb24iLCJUb25lIiwiVG9nZ2xlR3JvdXBpZSIsImNob3JkTm90ZXMiLCJuYW1lIiwidXNlckluc3RydW1lbnQiLCJzZXRUb3BOb3RlIiwicGxheU5vdGUiLCJ2YWwiLCJpbnN0cnVtZW50Iiwic3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwibm93IiwidHJpZ2dlckF0dGFjayIsInRyaWdnZXJSZWxlYXNlIiwibm90ZXMiLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuZXdOb3RlVmFsdWUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ2YXJ1bCIsInRhcmdldCIsInZhcnVsaSIsImlubmVySFRNTCIsIktleXMiLCJjb2xvclN0YXJ0IiwiZGl2IiwibWFwIiwibm90ZSIsIm5vdGVJZHgiLCJhcmEiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwibGVuZ3RoIiwib25Nb3VzZU92ZXIiLCJCdXR0b25zIiwiY29sb3IiLCJleGNsdXNpdmUiLCJvbkNoYW5nZSIsInZhbHVlIiwiYnIiLCJoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/togglebuttongroup.js\n");

/***/ })

});