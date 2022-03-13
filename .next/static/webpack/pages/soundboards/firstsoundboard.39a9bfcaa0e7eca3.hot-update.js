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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ToggleButton */ \"./node_modules/@mui/material/ToggleButton/index.js\");\n/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ \"./node_modules/@mui/material/ToggleButtonGroup/index.js\");\n/* harmony import */ var _mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Dialpad */ \"./node_modules/@mui/icons-material/Dialpad.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import Loopy from '../../components/loopy';\nvar Keys = function(param) {\n    var _colorStart = param.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param.notes, name = param.name, userInstrument = param.userInstrument, handler = param.handler;\n    var _this1 = _this;\n    var keyWidth = 60;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        children: notes.map(function(note, noteIdx, ara) {\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    borderRadius: keyWidth / 2,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center'\n                },\n                onMouseOver: function(ev) {\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstPost() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    var Buttons = function(param) {\n        var handleChange = param.handleChange, notes = param.notes, name = param.name;\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            color: \"primary\",\n            exclusive: true,\n            onChange: handleChange,\n            children: notes.map(function(note) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    value: note,\n                    children: [\n                        note,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dialpad__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 56,\n                            columnNumber: 27\n                        }, _this2)\n                    ]\n                }, 'nota' + note + name, true, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, _this2);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, _this2);\n    };\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    console.log(userInstrument);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('C3'), topNote = ref2[0], setTopNote = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                handler: playNote,\n                setTopNote: setTopNote,\n                colorStart: 40,\n                userInstrument: userInstrument,\n                notes: fullArray(chordNotesBMinor7),\n                name: 'BMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 88,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 88,\n                columnNumber: 156\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                handler: playNote,\n                setTopNote: setTopNote,\n                colorStart: 140,\n                userInstrument: userInstrument,\n                notes: fullArray(chordNotesAMinor7),\n                name: 'AMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 89,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 89,\n                columnNumber: 157\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                handler: playNote,\n                setTopNote: setTopNote,\n                colorStart: 240,\n                userInstrument: userInstrument,\n                notes: fullArray(chordNotesEMinor7),\n                name: 'EMinor7'\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 90,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 90,\n                columnNumber: 157\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(FirstPost, \"RYDuER3Gtf0eZoJWu9mTyLAcy8k=\");\n_c1 = FirstPost;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNuQjtBQUN5QjtBQUNVO0FBQ1Y7QUFDekI7QUFDb0M7OztBQUNoRSxFQUE4QztBQUU5QyxHQUFLLENBQUNTLElBQUksR0FBRyxRQUFRLFFBQTZDLENBQUM7NEJBQXBEQyxVQUFVLEVBQVZBLFVBQVUsNEJBQUMsRUFBRSxnQkFBQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUNDLElBQUksU0FBSkEsSUFBSSxFQUFDQyxjQUFjLFNBQWRBLGNBQWMsRUFBQ0MsT0FBTyxTQUFQQSxPQUFPOztJQUMxRCxHQUFLLENBQUNDLFFBQVEsR0FBQyxFQUFFO0lBQ2pCLE1BQU0sNkVBQ0xDLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBQyxDQUFPO1lBQUNDLFNBQVMsRUFBQyxDQUFNO1FBQUMsQ0FBQztrQkFDNUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFDQyxPQUFPLEVBQUNDLEdBQUcsRUFBRyxDQUFDO1lBQzVCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFFVCxRQUFRLEdBQUNPLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7WUFDMUMsTUFBTSw2RUFDRE4sQ0FBRztnQkFDQUMsS0FBSyxFQUFFLENBQUM7b0JBQ0pRLFFBQVEsRUFBQyxDQUFVO29CQUNuQkQsSUFBSSxFQUFDQSxJQUFJO29CQUNURSxPQUFPLEVBQUMsQ0FBUTtvQkFDaEJSLEtBQUssRUFBQ0gsUUFBUTtvQkFDZFksTUFBTSxFQUFDWixRQUFRO29CQUNmYSxZQUFZLEVBQUNiLFFBQVEsR0FBQyxDQUFDO29CQUN2QmMsZUFBZSxFQUFFLENBQUksTUFBZ0IsTUFBd0IsQ0FBdENuQixVQUFVLEVBQUMsQ0FBQyxJQUEyQixNQUFJLENBQTVCLEdBQUcsR0FBQ2EsR0FBRyxDQUFDTyxNQUFNLEdBQUVSLE9BQU8sRUFBQyxDQUFJ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S3NELENBQUU7Ozs7O3dGQUM3SnpELElBQUk7Z0JBQUNLLE9BQU8sRUFBRXFCLFFBQVE7Z0JBQUU4QixVQUFVLEVBQUVBLFVBQVU7Z0JBQUd2RCxVQUFVLEVBQUUsR0FBRztnQkFBRUcsY0FBYyxFQUFFQSxjQUFjO2dCQUFFRixLQUFLLEVBQUUyQyxTQUFTLENBQUNGLGlCQUFpQjtnQkFBR3hDLElBQUksRUFBRSxDQUFTOzs7Ozs7d0ZBQU1zRCxDQUFFOzs7Ozt3RkFDOUp6RCxJQUFJO2dCQUFDSyxPQUFPLEVBQUVxQixRQUFRO2dCQUFFOEIsVUFBVSxFQUFFQSxVQUFVO2dCQUFHdkQsVUFBVSxFQUFFLEdBQUc7Z0JBQUVHLGNBQWMsRUFBRUEsY0FBYztnQkFBRUYsS0FBSyxFQUFFMkMsU0FBUyxDQUFDRCxpQkFBaUI7Z0JBQUd6QyxJQUFJLEVBQUUsQ0FBUzs7Ozs7O3dGQUFNc0QsQ0FBRTs7Ozs7d0ZBRWxKQSxDQUFFOzs7Ozt3RkFFRkEsQ0FBRTs7Ozs7d0ZBQ0ZBLENBQUU7Ozs7O3dGQUVGQyxDQUFFO3NHQUNFNUQsa0RBQUk7b0JBQUM2RCxJQUFJLEVBQUMsQ0FBRzswR0FDVEMsQ0FBQztrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0IsQ0FBQztHQW5FdUJuQyxTQUFTO01BQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc291bmRib2FyZHMvZmlyc3Rzb3VuZGJvYXJkLmpzP2FmZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSAndG9uZSdcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwJztcclxuaW1wb3J0IERpYWxwYWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlhbHBhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbnN0cnVtZW50UGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlcic7XHJcbi8vIGltcG9ydCBMb29weSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvb3B5JztcclxuXHJcbmNvbnN0IEtleXMgPSAoe2NvbG9yU3RhcnQ9MjAsbm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxoYW5kbGVyfSk9PntcclxuICAgIGNvbnN0IGtleVdpZHRoPTYwO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwdncnLG1hcmdpblRvcDonM3JlbScsfX0gPlxyXG4gICAge25vdGVzLm1hcCgobm90ZSxub3RlSWR4LGFyYSk9PntcclxuICAgICAgICBsZXQgbGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6a2V5V2lkdGgvMixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpgcmdiKCR7Y29sb3JTdGFydH0sJHsoMzYwL2FyYS5sZW5ndGgpKm5vdGVJZHh9LDIwKWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZXYpPT57XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG5vdGUsdXNlckluc3RydW1lbnQpO1xyXG4gICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAga2V5PXsnbm90YScrbm90ZStuYW1lfSA+XHJcbiAgICAgICAgICAgIHtub3RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKX0pfVxyXG48L2Rpdj4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcnN0UG9zdCgpe1xyXG4gICAgY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuICAgIGNvbnN0IFtzeW50aCxzZXRTeW50aF09dXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVt1c2VySW5zdHJ1bWVudF0oKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgc2V0U3ludGgoe3N5bnRoOnN5bnRofSk7XHJcbiAgICB9LFt1c2VySW5zdHJ1bWVudF0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwbGF5Tm90ZSh2YWwsaW5zdHJ1bWVudD0nU3ludGgnKXtcclxuICAgICAgICBjb25zdCBub3cgPSBUb25lLm5vdygpXHJcbiAgICAgICAgc3ludGguc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IEJ1dHRvbnMgPSAoe2hhbmRsZUNoYW5nZSxub3RlcyxuYW1lfSk9PihcclxuICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXAgY29sb3I9XCJwcmltYXJ5XCIgZXhjbHVzaXZlIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ID5cclxuICAgICAgICAgICAge25vdGVzLm1hcChub3RlPT4oXHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIGtleT17J25vdGEnK25vdGUrbmFtZX0gdmFsdWU9e25vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RlfTxEaWFscGFkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgICk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNob3JkTm90ZXNCTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydGIycsNV0sWydBJyw1XV07XHJcbmNvbnN0IGNob3JkTm90ZXNBTWlub3I3PVtbJ0EnLDRdLFsnQycsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuY29uc3QgY2hvcmROb3Rlc0VNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0UnLDVdLFsnRycsNV1dO1xyXG5cclxuY29uc3QgZnVsbEFycmF5ID0gKGNob3JubykgPT4ge1xyXG4gICAgY29uc3Qgbm90ZXM9W107XHJcbiAgICBjb25zdCBpdGVyYXRpb25zPVsnYScsJ2EnLCdhJywnYScsXTtcclxuICAgIGl0ZXJhdGlvbnMuZm9yRWFjaCgoaXQsaXRJZHgpPT57XHJcbiAgICAgICAgY2hvcm5vLmZvckVhY2goY249PntcclxuICAgICAgICAgICAgbm90ZXMucHVzaChjblswXSsoY25bMV0raXRJZHgtMikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbm90ZXM7XHJcbn07XHJcblxyXG5cclxuY29uc29sZS5sb2codXNlckluc3RydW1lbnQpO1xyXG5jb25zdCBbdG9wTm90ZSxzZXRUb3BOb3RlXT11c2VTdGF0ZSgnQzMnKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEluc3RydW1lbnRQaWNrZXIgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBzZXRVc2VySW5zdHJ1bWVudD17c2V0VXNlckluc3RydW1lbnR9IC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuPEtleXMgaGFuZGxlcj17cGxheU5vdGV9IHNldFRvcE5vdGU9e3NldFRvcE5vdGV9ICBjb2xvclN0YXJ0PXs0MH0gIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gbm90ZXM9e2Z1bGxBcnJheShjaG9yZE5vdGVzQk1pbm9yNyl9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz5cclxuPEtleXMgaGFuZGxlcj17cGxheU5vdGV9IHNldFRvcE5vdGU9e3NldFRvcE5vdGV9ICBjb2xvclN0YXJ0PXsxNDB9IHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gbm90ZXM9e2Z1bGxBcnJheShjaG9yZE5vdGVzQU1pbm9yNyl9IG5hbWU9eydBTWlub3I3J30gIC8+PGJyIC8+XHJcbjxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBzZXRUb3BOb3RlPXtzZXRUb3BOb3RlfSAgY29sb3JTdGFydD17MjQwfSB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtmdWxsQXJyYXkoY2hvcmROb3Rlc0VNaW5vcjcpfSBuYW1lPXsnRU1pbm9yNyd9ICAvPjxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8TG9vcHkgbm90ZVZhbHVlPXt0b3BOb3RlfSAvPiAqL31cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5ob21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz4pXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvbmUiLCJUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b25Hcm91cCIsIkRpYWxwYWRJY29uIiwiTGluayIsIkluc3RydW1lbnRQaWNrZXIiLCJLZXlzIiwiY29sb3JTdGFydCIsIm5vdGVzIiwibmFtZSIsInVzZXJJbnN0cnVtZW50IiwiaGFuZGxlciIsImtleVdpZHRoIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcCIsIm5vdGUiLCJub3RlSWR4IiwiYXJhIiwibGVmdCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxlbmd0aCIsInRleHRBbGlnbiIsIm9uTW91c2VPdmVyIiwiZXYiLCJGaXJzdFBvc3QiLCJwbGF5Tm90ZSIsInZhbCIsImluc3RydW1lbnQiLCJub3ciLCJzeW50aCIsInRyaWdnZXJBdHRhY2siLCJ0cmlnZ2VyUmVsZWFzZSIsInNldFVzZXJJbnN0cnVtZW50Iiwic2V0U3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwiQnV0dG9ucyIsImhhbmRsZUNoYW5nZSIsImNvbG9yIiwiZXhjbHVzaXZlIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImNob3JkTm90ZXNCTWlub3I3IiwiY2hvcmROb3Rlc0FNaW5vcjciLCJjaG9yZE5vdGVzRU1pbm9yNyIsImZ1bGxBcnJheSIsImNob3JubyIsIml0ZXJhdGlvbnMiLCJmb3JFYWNoIiwiaXQiLCJpdElkeCIsImNuIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0b3BOb3RlIiwic2V0VG9wTm90ZSIsImJyIiwiaDUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});