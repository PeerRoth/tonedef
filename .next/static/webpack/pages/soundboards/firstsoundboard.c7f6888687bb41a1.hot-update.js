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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import Loopy from '../../components/loopy';\nvar Keys = function(param) {\n    var _colorStart = param.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param.notes, name = param.name, userInstrument = param.userInstrument, handler = param.handler;\n    var _this1 = _this;\n    var keyWidth = 60;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        children: notes.map(function(note, noteIdx, ara) {\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    borderRadius: keyWidth / 2,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center'\n                },\n                onMouseOver: function() {\n                    var remof = function remof(ev) {\n                        console.log(ev.target);\n                        ev.target.removeEventListener('onmouseover', handler);\n                    };\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstPost() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[instrument]().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(val, now);\n        synth.triggerRelease(now + 0.1);\n    // synth.dispose();\n    };\n    _s();\n    ;\n    // const handleChange = (event, newNoteValue) => {\n    //     console.log(event)\n    //     let varul = event.target;\n    //     console.log(varul);\n    //     let varuli = varul.innerHTML;\n    //     console.log(varuli);\n    //     playNote(varul,userInstrument)\n    //     // playNote(newNoteValue,userInstrument);\n    //     // setTopNote(newNoteValue)\n    // };\n    var Buttons = function(param) {\n        var handleChange = param.handleChange, notes = param.notes, name = param.name;\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            color: \"primary\",\n            exclusive: true,\n            onChange: handleChange,\n            children: notes.map(function(note) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    value: note,\n                    children: [\n                        note,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, _this2)\n                    ]\n                }, 'nota' + note + name, true, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, _this2);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n            lineNumber: 67,\n            columnNumber: 5\n        }, _this2);\n    };\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    console.log(userInstrument);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('C3'), topNote = ref1[0], setTopNote = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                handler: playNote,\n                setTopNote: setTopNote,\n                colorStart: 40,\n                userInstrument: userInstrument,\n                notes: fullArray(chordNotesBMinor7),\n                name: 'BMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 107,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 107,\n                columnNumber: 156\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                handler: playNote,\n                setTopNote: setTopNote,\n                colorStart: 140,\n                userInstrument: userInstrument,\n                notes: fullArray(chordNotesAMinor7),\n                name: 'AMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 108,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 108,\n                columnNumber: 157\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                handler: playNote,\n                setTopNote: setTopNote,\n                colorStart: 240,\n                userInstrument: userInstrument,\n                notes: fullArray(chordNotesEMinor7),\n                name: 'EMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 109,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 109,\n                columnNumber: 157\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(FirstPost, \"Ewtko4sgUWCHGcJSDlGyEAQjfxk=\");\n_c1 = FirstPost;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNSO0FBQ3lCO0FBQ1U7QUFDVjtBQUN6QjtBQUNvQzs7O0FBQ2hFLEVBQThDO0FBRTlDLEdBQUssQ0FBQ1EsSUFBSSxHQUFHLFFBQVEsUUFBNkMsQ0FBQzs0QkFBcERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBQyxFQUFFLGdCQUFDQyxLQUFLLFNBQUxBLEtBQUssRUFBQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLGNBQWMsU0FBZEEsY0FBYyxFQUFDQyxPQUFPLFNBQVBBLE9BQU87O0lBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDakIsTUFBTSw2RUFDTEMsQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsS0FBSyxFQUFDLENBQU87WUFBQ0MsU0FBUyxFQUFDLENBQU07UUFBQyxDQUFDO2tCQUM1Q1IsS0FBSyxDQUFDUyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUNDLE9BQU8sRUFBQ0MsR0FBRyxFQUFHLENBQUM7WUFDNUIsR0FBRyxDQUFDQyxJQUFJLEdBQUVULFFBQVEsR0FBQ08sT0FBTyxHQUFHQSxPQUFPLEdBQUMsQ0FBQztZQUMxQyxNQUFNLDZFQUNETixDQUFHO2dCQUNBQyxLQUFLLEVBQUUsQ0FBQztvQkFDSlEsUUFBUSxFQUFDLENBQVU7b0JBQ25CRCxJQUFJLEVBQUNBLElBQUk7b0JBQ1RFLE9BQU8sRUFBQyxDQUFRO29CQUNoQlIsS0FBSyxFQUFDSCxRQUFRO29CQUNkWSxNQUFNLEVBQUNaLFFBQVE7b0JBQ2ZhLFlBQVksRUFBQ2IsUUFBUSxHQUFDLENBQUM7b0JBQ3ZCYyxlQUFlLEVBQUUsQ0FBSSxNQUFnQixNQUF3QixDQUF0Q25CLFVBQVUsRUFBQyxDQUFDLElBQTJCLE1BQUksQ0FBNUIsR0FBRyxHQUFDYSxHQUFHLENBQUNPLE1BQU0sR0FBRVIsT0FBTyxFQUFDLENBQUk7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aUI7Z0JBQUcxQyxJQUFJLEVBQUUsQ0FBUzs7Ozs7O3dGQUFLd0QsQ0FBRTs7Ozs7d0ZBQzdKM0QsSUFBSTtnQkFBQ0ssT0FBTyxFQUFFMEIsUUFBUTtnQkFBRTJCLFVBQVUsRUFBRUEsVUFBVTtnQkFBR3pELFVBQVUsRUFBRSxHQUFHO2dCQUFFRyxjQUFjLEVBQUVBLGNBQWM7Z0JBQUVGLEtBQUssRUFBRThDLFNBQVMsQ0FBQ0YsaUJBQWlCO2dCQUFHM0MsSUFBSSxFQUFFLENBQVM7Ozs7Ozt3RkFBTXdELENBQUU7Ozs7O3dGQUM5SjNELElBQUk7Z0JBQUNLLE9BQU8sRUFBRTBCLFFBQVE7Z0JBQUUyQixVQUFVLEVBQUVBLFVBQVU7Z0JBQUd6RCxVQUFVLEVBQUUsR0FBRztnQkFBRUcsY0FBYyxFQUFFQSxjQUFjO2dCQUFFRixLQUFLLEVBQUU4QyxTQUFTLENBQUNELGlCQUFpQjtnQkFBRzVDLElBQUksRUFBRSxDQUFTOzs7Ozs7d0ZBQU13RCxDQUFFOzs7Ozt3RkFFbEpBLENBQUU7Ozs7O3dGQUVGQSxDQUFFOzs7Ozt3RkFDRkEsQ0FBRTs7Ozs7d0ZBRUZDLENBQUU7c0dBQ0U5RCxrREFBSTtvQkFBQytELElBQUksRUFBQyxDQUFHOzBHQUNUQyxDQUFDO2tDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQixDQUFDO0dBaEZ1QmhDLFNBQVM7TUFBVEEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanM/YWZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSAndG9uZSdcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwJztcclxuaW1wb3J0IERpYWxwYWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlhbHBhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbnN0cnVtZW50UGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlcic7XHJcbi8vIGltcG9ydCBMb29weSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvb3B5JztcclxuXHJcbmNvbnN0IEtleXMgPSAoe2NvbG9yU3RhcnQ9MjAsbm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxoYW5kbGVyfSk9PntcclxuICAgIGNvbnN0IGtleVdpZHRoPTYwO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwdncnLG1hcmdpblRvcDonM3JlbScsfX0gPlxyXG4gICAge25vdGVzLm1hcCgobm90ZSxub3RlSWR4LGFyYSk9PntcclxuICAgICAgICBsZXQgbGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6a2V5V2lkdGgvMixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpgcmdiKCR7Y29sb3JTdGFydH0sJHsoMzYwL2FyYS5sZW5ndGgpKm5vdGVJZHh9LDIwKWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihub3RlLHVzZXJJbnN0cnVtZW50KTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW9mKGV2KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldi50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdvbm1vdXNlb3ZlcicsaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICBrZXk9eydub3RhJytub3RlK25hbWV9ID5cclxuICAgICAgICAgICAge25vdGV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApfSl9XHJcbjwvZGl2Pil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyc3RQb3N0KCl7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheU5vdGUodmFsLGluc3RydW1lbnQ9J1N5bnRoJyl7XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVtpbnN0cnVtZW50XSgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgICAgICBjb25zdCBub3cgPSBUb25lLm5vdygpXHJcbiAgICAgICAgc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuICAgICAgICBzeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc3ludGguZGlzcG9zZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld05vdGVWYWx1ZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgLy8gICAgIGxldCB2YXJ1bCA9IGV2ZW50LnRhcmdldDtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YXJ1bCk7XHJcbiAgICAvLyAgICAgbGV0IHZhcnVsaSA9IHZhcnVsLmlubmVySFRNTDtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YXJ1bGkpO1xyXG4gICAgLy8gICAgIHBsYXlOb3RlKHZhcnVsLHVzZXJJbnN0cnVtZW50KVxyXG4gICAgLy8gICAgIC8vIHBsYXlOb3RlKG5ld05vdGVWYWx1ZSx1c2VySW5zdHJ1bWVudCk7XHJcbiAgICAvLyAgICAgLy8gc2V0VG9wTm90ZShuZXdOb3RlVmFsdWUpXHJcbiAgICAvLyB9O1xyXG5cclxuXHJcbmNvbnN0IEJ1dHRvbnMgPSAoe2hhbmRsZUNoYW5nZSxub3RlcyxuYW1lfSk9PihcclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgZXhjbHVzaXZlXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAge25vdGVzLm1hcChub3RlPT4oXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b24ga2V5PXsnbm90YScrbm90ZStuYW1lfSB2YWx1ZT17bm90ZX0+XHJcbiAgICAgICAgICAgICAgICB7bm90ZX1cclxuICAgICAgICAgICAgICAgIDxEaWFscGFkSWNvbiAvPlxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICkpfVxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD4pO1xyXG5cclxuXHJcblxyXG5jb25zdCBjaG9yZE5vdGVzQk1pbm9yNz1bWydCJyw0XSxbJ0QnLDVdLFsnRiMnLDVdLFsnQScsNV1dO1xyXG5jb25zdCBjaG9yZE5vdGVzQU1pbm9yNz1bWydBJyw0XSxbJ0MnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcbmNvbnN0IGNob3JkTm90ZXNFTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuXHJcbmNvbnN0IGZ1bGxBcnJheSA9IChjaG9ybm8pID0+IHtcclxuICAgIGNvbnN0IG5vdGVzPVtdO1xyXG4gICAgY29uc3QgaXRlcmF0aW9ucz1bJ2EnLCdhJywnYScsJ2EnLF07XHJcbiAgICBpdGVyYXRpb25zLmZvckVhY2goKGl0LGl0SWR4KT0+e1xyXG4gICAgICAgIGNob3Juby5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgICAgIG5vdGVzLnB1c2goY25bMF0rKGNuWzFdK2l0SWR4LTIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5vdGVzO1xyXG59O1xyXG5cclxuY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuXHJcbmNvbnNvbGUubG9nKHVzZXJJbnN0cnVtZW50KTtcclxuY29uc3QgW3RvcE5vdGUsc2V0VG9wTm90ZV09dXNlU3RhdGUoJ0MzJyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxJbnN0cnVtZW50UGlja2VyIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gc2V0VXNlckluc3RydW1lbnQ9e3NldFVzZXJJbnN0cnVtZW50fSAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbjxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBzZXRUb3BOb3RlPXtzZXRUb3BOb3RlfSAgY29sb3JTdGFydD17NDB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtmdWxsQXJyYXkoY2hvcmROb3Rlc0JNaW5vcjcpfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+XHJcbjxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBzZXRUb3BOb3RlPXtzZXRUb3BOb3RlfSAgY29sb3JTdGFydD17MTQwfSB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtmdWxsQXJyYXkoY2hvcmROb3Rlc0FNaW5vcjcpfSBuYW1lPXsnQU1pbm9yNyd9ICAvPjxiciAvPlxyXG48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gc2V0VG9wTm90ZT17c2V0VG9wTm90ZX0gIGNvbG9yU3RhcnQ9ezI0MH0gdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17ZnVsbEFycmF5KGNob3JkTm90ZXNFTWlub3I3KX0gbmFtZT17J0VNaW5vcjcnfSAgLz48YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7LyogPExvb3B5IG5vdGVWYWx1ZT17dG9wTm90ZX0gLz4gKi99XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+KVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb25lIiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJEaWFscGFkSWNvbiIsIkxpbmsiLCJJbnN0cnVtZW50UGlja2VyIiwiS2V5cyIsImNvbG9yU3RhcnQiLCJub3RlcyIsIm5hbWUiLCJ1c2VySW5zdHJ1bWVudCIsImhhbmRsZXIiLCJrZXlXaWR0aCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXAiLCJub3RlIiwibm90ZUlkeCIsImFyYSIsImxlZnQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJvbk1vdXNlT3ZlciIsInJlbW9mIiwiZXYiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZpcnN0UG9zdCIsInBsYXlOb3RlIiwidmFsIiwiaW5zdHJ1bWVudCIsInN5bnRoIiwidG9EZXN0aW5hdGlvbiIsIm5vdyIsInRyaWdnZXJBdHRhY2siLCJ0cmlnZ2VyUmVsZWFzZSIsIkJ1dHRvbnMiLCJoYW5kbGVDaGFuZ2UiLCJjb2xvciIsImV4Y2x1c2l2ZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJjaG9yZE5vdGVzQk1pbm9yNyIsImNob3JkTm90ZXNBTWlub3I3IiwiY2hvcmROb3Rlc0VNaW5vcjciLCJmdWxsQXJyYXkiLCJjaG9ybm8iLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJzZXRVc2VySW5zdHJ1bWVudCIsInRvcE5vdGUiLCJzZXRUb3BOb3RlIiwiYnIiLCJoNSIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});