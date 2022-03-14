"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/soundboards/soundboardmobile",{

/***/ "./pages/soundboards/soundboardmobile.js":
/*!***********************************************!*\
  !*** ./pages/soundboards/soundboardmobile.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SoundboardMobile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Keys = function(param1) {\n    var _colorStart = param1.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param1.notes, name = param1.name, userInstrument = param1.userInstrument, handler = param1.handler;\n    var _this1 = _this;\n    _s();\n    var keyWidth = 60;\n    var noteseys = notes.map(function(noteValue, noteIdx) {\n        var tempy = {};\n        tempy.note = noteValue;\n        tempy.left = keyWidth * noteIdx + noteIdx * 1;\n        tempy.right = keyWidth * noteIdx + noteIdx * 1 + keyWidth;\n        return tempy;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        note: 'A5'\n    }), touchNote = ref[0], setTouchNote = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (touchNote && touchNote.note) {\n            console.log(touchNote, userInstrument);\n            handler(touchNote.note, userInstrument);\n        }\n    }, [\n        touchNote\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        onTouchMove: function(ev) {\n            var currentTouchingNote = noteseys[Math.floor(ev.touches[0].clientX / keyWidth)];\n            console.log(currentTouchingNote);\n            if (currentTouchingNote !== touchNote) {\n                setTouchNote(currentTouchingNote);\n            }\n        },\n        children: noteseys.map(function(param, noteIdx, ara) {\n            var note = param.note, left = param.left;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(Keys, \"NlHmiJYDkmV69KY/45iUMMgSauw=\");\n_c = Keys;\nfunction SoundboardMobile() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        console.log(synth1);\n        if (synth1 && synth1['synth']) {\n            var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n            console.log(now);\n            synth1.synth.triggerAttack(val, now);\n            synth1.synth.triggerRelease(now + 0.1);\n        }\n        ;\n    };\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' AMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 40,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 193\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 316\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 3), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                            lineNumber: 96,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 96,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' BMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 90,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 193\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 316\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 8), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                            lineNumber: 97,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 97,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' EMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 120,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 193\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 14), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                            lineNumber: 98,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 98,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 100,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboardmobile.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this));\n};\n_s1(SoundboardMobile, \"2bwXf8FugDQa9Q4Ie3j4uIb1Z3A=\");\n_c1 = SoundboardMobile;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"SoundboardMobile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9zb3VuZGJvYXJkbW9iaWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1I7QUFDSztBQUN3QjtBQUNIOzs7QUFFakUsR0FBSyxDQUFDTyxJQUFJLEdBQUcsUUFBUSxTQUE2QyxDQUFDOzZCQUFwREMsVUFBVSxFQUFWQSxVQUFVLDRCQUFDLEVBQUUsZ0JBQUNDLEtBQUssVUFBTEEsS0FBSyxFQUFDQyxJQUFJLFVBQUpBLElBQUksRUFBQ0MsY0FBYyxVQUFkQSxjQUFjLEVBQUNDLE9BQU8sVUFBUEEsT0FBTzs7O0lBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDakIsR0FBRyxDQUFDQyxRQUFRLEdBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFDQyxPQUFPLEVBQUcsQ0FBQztRQUN6QyxHQUFHLENBQUNDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDWkEsS0FBSyxDQUFDQyxJQUFJLEdBQUNILFNBQVM7UUFDcEJFLEtBQUssQ0FBQ0UsSUFBSSxHQUFFUCxRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7UUFDeENDLEtBQUssQ0FBQ0csS0FBSyxHQUFFUixRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUMsR0FBRUosUUFBUTtRQUNuRCxNQUFNLENBQUNLLEtBQUs7SUFDaEIsQ0FBQztJQUVELEdBQUssQ0FBMEJoQixHQUFxQixHQUFyQkEsK0NBQVEsQ0FBQyxDQUFDaUI7UUFBQUEsSUFBSSxFQUFDLENBQUk7SUFBQSxDQUFDLEdBQTVDRyxTQUFTLEdBQWVwQixHQUFxQixLQUFuQ3FCLFlBQVksR0FBRXJCLEdBQXFCO0lBQ3BERCxnREFBUyxDQUFDLFFBQ2IsR0FEaUIsQ0FBQztRQUNYLEVBQUUsRUFBRXFCLFNBQVMsSUFBR0EsU0FBUyxDQUFDSCxJQUFJLEVBQUUsQ0FBQztZQUM3QkssT0FBTyxDQUFDQyxHQUFHLENBQUNI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QUssSUFBRSxHQUFHO29DQUFHOUQsY0FBYyxFQUFFQSxjQUFjO29DQUFFRixLQUFLLEVBQUUrRCxTQUFTO29DQUFFOUQsSUFBSSxFQUFFLENBQVM7Ozs7Ozs0R0FBSzRELENBQUU7Ozs7OzsyQkFBaEosQ0FBTSxTQUFFRyxLQUFLLEdBQUMsRUFBRTs7Ozs7Ozs7Ozs7O3dGQUVoTEgsQ0FBRTs7Ozs7d0ZBQUlBLENBQUU7Ozs7O3dGQUVSSSxDQUFFO3NHQUNFdEUsa0RBQUk7b0JBQUN1RSxJQUFJLEVBQUMsQ0FBRzswR0FDVEMsQ0FBQztrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCLENBQUM7SUFwRHVCN0IsZ0JBQWdCO01BQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc291bmRib2FyZHMvc291bmRib2FyZG1vYmlsZS5qcz80YmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUb25lICAgICAgICAgICAgZnJvbSAndG9uZSdcclxuaW1wb3J0IExpbmsgICAgICAgICAgICAgICAgIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbnN0cnVtZW50UGlja2VyICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luc3RydW1lbnRwaWNrZXInO1xyXG5pbXBvcnQgeyBhcnJheTJncm91cGVkIH0gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnJheTJncm91cGVkJztcclxuXHJcbmNvbnN0IEtleXMgPSAoe2NvbG9yU3RhcnQ9MjAsbm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxoYW5kbGVyfSk9PntcclxuICAgIGNvbnN0IGtleVdpZHRoPTYwO1xyXG4gICAgbGV0IG5vdGVzZXlzPW5vdGVzLm1hcCgobm90ZVZhbHVlLG5vdGVJZHgpPT57XHJcbiAgICAgICAgbGV0IHRlbXB5PXt9O1xyXG4gICAgICAgIHRlbXB5Lm5vdGU9bm90ZVZhbHVlO1xyXG4gICAgICAgIHRlbXB5LmxlZnQ9KGtleVdpZHRoKm5vdGVJZHgpKyhub3RlSWR4KjEpO1xyXG4gICAgICAgIHRlbXB5LnJpZ2h0PShrZXlXaWR0aCpub3RlSWR4KSsobm90ZUlkeCoxKStrZXlXaWR0aDtcclxuICAgICAgICByZXR1cm4gdGVtcHk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbdG91Y2hOb3RlLHNldFRvdWNoTm90ZV09dXNlU3RhdGUoe25vdGU6J0E1J30pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHRvdWNoTm90ZSYmIHRvdWNoTm90ZS5ub3RlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvdWNoTm90ZSx1c2VySW5zdHJ1bWVudClcclxuICAgICAgICAgICAgaGFuZGxlcih0b3VjaE5vdGUubm90ZSx1c2VySW5zdHJ1bWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbdG91Y2hOb3RlXSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMHZ3JyxtYXJnaW5Ub3A6JzNyZW0nLH19IFxyXG4gICAgICAgIG9uVG91Y2hNb3ZlPXsoZXYpPT57XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VG91Y2hpbmdOb3RlPW5vdGVzZXlzW01hdGguZmxvb3IoZXYudG91Y2hlc1swXS5jbGllbnRYL2tleVdpZHRoKV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUb3VjaGluZ05vdGUpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFRvdWNoaW5nTm90ZSE9PXRvdWNoTm90ZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3VjaE5vdGUoY3VycmVudFRvdWNoaW5nTm90ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgPlxyXG4gICAge25vdGVzZXlzLm1hcCgoe25vdGUsbGVmdH0sbm90ZUlkeCxhcmEpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6YHJnYigke2NvbG9yU3RhcnR9LCR7KDM2MC9hcmEubGVuZ3RoKSpub3RlSWR4fSwyMClgLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDo3MDAsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTonLjhyZW0nLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDprZXlXaWR0aC8zLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIGtleT17J25vdGEnK25vdGUrbmFtZX0gPntub3RlfTwvZGl2PlxyXG4pfSl9XHJcbjwvZGl2Pil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291bmRib2FyZE1vYmlsZSgpe1xyXG4gICAgY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuICAgIGNvbnN0IFtzeW50aCxzZXRTeW50aF09dXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVt1c2VySW5zdHJ1bWVudF0oKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgc2V0U3ludGgoe3N5bnRoOnN5bnRofSk7XHJcbiAgICB9LFt1c2VySW5zdHJ1bWVudF0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwbGF5Tm90ZSh2YWwsaW5zdHJ1bWVudD0nU3ludGgnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhzeW50aCk7XHJcbiAgICAgICAgaWYgKHN5bnRoICYmIHN5bnRoWydzeW50aCddKXtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gVG9uZS5ub3coKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3cpO1xyXG4gICAgICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyQXR0YWNrKHZhbCwgbm93KVxyXG4gICAgICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGNob3JkTm90ZXNCTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydGIycsNV0sWydBJyw1XV07XHJcbiAgICBjb25zdCBjaG9yZE5vdGVzQU1pbm9yNz1bWydBJyw0XSxbJ0MnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcbiAgICBjb25zdCBjaG9yZE5vdGVzRU1pbm9yNz1bWydCJyw0XSxbJ0QnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcblxyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gKGNob3JubykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdGVzPVtdO1xyXG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnM9WydhJywnYScsJ2EnLCdhJyxdO1xyXG4gICAgICAgIGl0ZXJhdGlvbnMuZm9yRWFjaCgoaXQsaXRJZHgpPT57XHJcbiAgICAgICAgICAgIGNob3Juby5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgICAgICAgICBub3Rlcy5wdXNoKGNuWzBdKyhjblsxXStpdElkeC0yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBub3RlcztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjonZml4ZWQnLHdpZHRoOicxMDB2dycsaGVpZ2h0OicxMDB2aCcsdG9wOicwcHgnLGxlZnQ6JzBweCcsYmFja2dyb3VuZENvbG9yOidsaWdodGJsdWUnLH19PlxyXG5cclxuICAgICAgICAgICAgPEluc3RydW1lbnRQaWNrZXIgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBzZXRVc2VySW5zdHJ1bWVudD17c2V0VXNlckluc3RydW1lbnR9IC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG48ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snLG1hcmdpblRvcDonMXJlbScsaGVpZ2h0OicyMDBweCcsfX0+eycgQU1pbm9yIDcnfXthcnJheTJncm91cGVkKGZ1bGxBcnJheShjaG9yZE5vdGVzQk1pbm9yNyksOCkubWFwKChub3RlR3JvdXAsbmdJZHgpPT4oPGRpdiBrZXk9eydjaG5vJysobmdJZHgrMyl9ID48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17KDErbmdJZHgpKiA0MH0gICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz48L2Rpdj4pKX08L2Rpdj5cclxuPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PnsnIEJNaW5vciA3J317YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0FNaW5vcjcpLDgpLm1hcCgobm90ZUdyb3VwLG5nSWR4KT0+KDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzgpfSA+PEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSogOTB9ICAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+PC9kaXY+KSl9PC9kaXY+XHJcbjxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsbWFyZ2luVG9wOicxcmVtJyxoZWlnaHQ6JzIwMHB4Jyx9fT57JyBFTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNFTWlub3I3KSw4KS5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9Pig8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCsxNCl9PjxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBjb2xvclN0YXJ0PXsoMStuZ0lkeCkqMTIwfSAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+PC9kaXY+KSl9PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgPC9kaXY+KVxyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9uZSIsIkxpbmsiLCJJbnN0cnVtZW50UGlja2VyIiwiYXJyYXkyZ3JvdXBlZCIsIktleXMiLCJjb2xvclN0YXJ0Iiwibm90ZXMiLCJuYW1lIiwidXNlckluc3RydW1lbnQiLCJoYW5kbGVyIiwia2V5V2lkdGgiLCJub3Rlc2V5cyIsIm1hcCIsIm5vdGVWYWx1ZSIsIm5vdGVJZHgiLCJ0ZW1weSIsIm5vdGUiLCJsZWZ0IiwicmlnaHQiLCJ0b3VjaE5vdGUiLCJzZXRUb3VjaE5vdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm9uVG91Y2hNb3ZlIiwiZXYiLCJjdXJyZW50VG91Y2hpbmdOb3RlIiwiTWF0aCIsImZsb29yIiwidG91Y2hlcyIsImNsaWVudFgiLCJhcmEiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwiU291bmRib2FyZE1vYmlsZSIsInBsYXlOb3RlIiwidmFsIiwiaW5zdHJ1bWVudCIsInN5bnRoIiwibm93IiwidHJpZ2dlckF0dGFjayIsInRyaWdnZXJSZWxlYXNlIiwic2V0VXNlckluc3RydW1lbnQiLCJzZXRTeW50aCIsInRvRGVzdGluYXRpb24iLCJjaG9yZE5vdGVzQk1pbm9yNyIsImNob3JkTm90ZXNBTWlub3I3IiwiY2hvcmROb3Rlc0VNaW5vcjciLCJmdWxsQXJyYXkiLCJjaG9ybm8iLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJ0b3AiLCJiciIsImJvcmRlckJvdHRvbSIsIm5vdGVHcm91cCIsIm5nSWR4IiwiaDUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/soundboards/soundboardmobile.js\n");

/***/ })

});