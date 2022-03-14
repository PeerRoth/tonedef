"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/soundboards/soundboarddesktop",{

/***/ "./pages/soundboards/soundboarddesktop.js":
/*!************************************************!*\
  !*** ./pages/soundboards/soundboarddesktop.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstSoundBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n// import Cuby                 from '../../components/cuby';\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import { Button } from '@mui/material';\nvar Keys = function(param1) {\n    var _colorStart = param1.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param1.notes, name = param1.name, userInstrument = param1.userInstrument, handler = param1.handler;\n    var _this1 = _this;\n    var keyWidth = 60;\n    var noteseys = notes.map(function(noteValue, noteIdx) {\n        var tempy = {};\n        tempy.note = noteValue;\n        tempy.left = keyWidth * noteIdx + noteIdx * 1;\n        tempy.right = keyWidth * noteIdx + noteIdx * 1 + keyWidth;\n        return tempy;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        children: noteseys.map(function(param, noteIdx, ara) {\n            var note = param.note, left = param.left;\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                onMouseOver: function(ev) {\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstSoundBoard() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    // const [onDesktop,setOnDesktop]=useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    // const [loop,setLoop]=useState(null);\n    // useEffect(()=>{\n    //         const synthA = new Tone.FMSynth().toDestination();\n    //         const loopA =  new Tone.Loop(time => {\n    //             let noteValue='C5';\n    //             synthA.triggerAttackRelease(noteValue, \"8n\", time);\n    //         },\"4n\").start(0);\n    //         setLoop(loopA);\n    //     },[])\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' AMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 40,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 139\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 3), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 92,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' BMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 90,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 9\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 131\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 8), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 102,\n                            columnNumber: 5\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 99,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' EMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 120,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 34\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 129\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 14), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 109,\n                            columnNumber: 5\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 106,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                        lineNumber: 119,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 117,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this));\n};\n_s(FirstSoundBoard, \"2bwXf8FugDQa9Q4Ie3j4uIb1Z3A=\");\n_c1 = FirstSoundBoard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstSoundBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9zb3VuZGJvYXJkZGVza3RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQUNSO0FBQ0s7QUFDd0I7QUFDcEUsRUFBNEQ7QUFDSzs7O0FBQ2pFLEVBQTBDO0FBRTFDLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsU0FBNkMsQ0FBQzs2QkFBcERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBQyxFQUFFLGdCQUFDQyxLQUFLLFVBQUxBLEtBQUssRUFBQ0MsSUFBSSxVQUFKQSxJQUFJLEVBQUNDLGNBQWMsVUFBZEEsY0FBYyxFQUFDQyxPQUFPLFVBQVBBLE9BQU87O0lBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDakIsR0FBRyxDQUFDQyxRQUFRLEdBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFDQyxPQUFPLEVBQUcsQ0FBQztRQUN6QyxHQUFHLENBQUNDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDWkEsS0FBSyxDQUFDQyxJQUFJLEdBQUNILFNBQVM7UUFDcEJFLEtBQUssQ0FBQ0UsSUFBSSxHQUFFUCxRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7UUFDeENDLEtBQUssQ0FBQ0csS0FBSyxHQUFFUixRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUMsR0FBRUosUUFBUTtRQUNuRCxNQUFNLENBQUNLLEtBQUs7SUFDaEIsQ0FBQztJQUdELE1BQU0sNkVBQ0xJLENBQUc7UUFDQUMsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBQyxDQUFPO1lBQUNDLFNBQVMsRUFBQyxDQUFNO1FBQUMsQ0FBQztrQkFFM0NYLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsUUFBS0UsT0FBTyxFQUFDUyxHQUFHLEVBQUcsQ0FBQztnQkFBMUJQLElBQUksU0FBSkEsSUFBSSxFQUFDQyxJQUFJLFNBQUpBLElBQUk7WUFDckIsR0FBRyxDQUFD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R3ZELGNBQWMsRUFBRUEsY0FBYztvQ0FBRUYsS0FBSyxFQUFFd0QsU0FBUztvQ0FBRXZELElBQUksRUFBRSxDQUFTOzs7Ozs7NEdBQUtxRCxDQUFFOzs7Ozs7MkJBRHZILENBQU0sU0FBRUcsS0FBSyxHQUFDLENBQUM7Ozs7Ozs7Ozs7Ozt3RkFJNUI1QyxDQUFHO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ3lDO29CQUFBQSxZQUFZLEVBQUMsQ0FBaUI7b0JBQUN2QyxTQUFTLEVBQUMsQ0FBTTtvQkFBQ0ksTUFBTSxFQUFDLENBQU87Z0JBQUMsQ0FBQzs7b0JBQ3hFLENBQVc7b0JBQUV2Qix3RUFBYSxDQUFDZ0QsU0FBUyxDQUFDRCxpQkFBaUIsR0FBRSxDQUFDLEVBQ3pEdEMsR0FBRyxDQUFDLFFBQVEsQ0FBUGtELFNBQVMsRUFBQ0MsS0FBSztzQ0FDckIsTUFBTSwrREFBTDVDLENBQUc7OzRHQUNBZixJQUFJO29DQUFDSyxPQUFPLEVBQUU2QixRQUFRO29DQUFFakMsVUFBVSxHQUFHLENBQUMsR0FBQzBELEtBQUssSUFBRSxHQUFHO29DQUFFdkQsY0FBYyxFQUFFQSxjQUFjO29DQUFFRixLQUFLLEVBQUV3RCxTQUFTO29DQUFFdkQsSUFBSSxFQUFFLENBQVM7Ozs7Ozs0R0FBS3FELENBQUU7Ozs7OzsyQkFEckgsQ0FBTSxTQUFFRyxLQUFLLEdBQUMsRUFBRTs7Ozs7Ozs7Ozs7O3dGQUtqQkgsQ0FBRTs7Ozs7d0ZBQ05BLENBQUU7Ozs7O3dGQUVOSSxDQUFFO3NHQUNFL0Qsa0RBQUk7b0JBQUNnRSxJQUFJLEVBQUMsQ0FBRzswR0FDREMsQ0FBQztrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTNCLENBQUM7R0FwRnVCN0IsZUFBZTtNQUFmQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NvdW5kYm9hcmRzL3NvdW5kYm9hcmRkZXNrdG9wLmpzPzBmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgICAgICAgICAgICBmcm9tICd0b25lJ1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgICAgICAgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEluc3RydW1lbnRQaWNrZXIgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlcic7XHJcbi8vIGltcG9ydCBDdWJ5ICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2N1YnknO1xyXG5pbXBvcnQgeyBhcnJheTJncm91cGVkIH0gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnJheTJncm91cGVkJztcclxuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBLZXlzID0gKHtjb2xvclN0YXJ0PTIwLG5vdGVzLG5hbWUsdXNlckluc3RydW1lbnQsaGFuZGxlcn0pPT57XHJcbiAgICBjb25zdCBrZXlXaWR0aD02MDtcclxuICAgIGxldCBub3Rlc2V5cz1ub3Rlcy5tYXAoKG5vdGVWYWx1ZSxub3RlSWR4KT0+e1xyXG4gICAgICAgIGxldCB0ZW1weT17fTtcclxuICAgICAgICB0ZW1weS5ub3RlPW5vdGVWYWx1ZTtcclxuICAgICAgICB0ZW1weS5sZWZ0PShrZXlXaWR0aCpub3RlSWR4KSsobm90ZUlkeCoxKTtcclxuICAgICAgICB0ZW1weS5yaWdodD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSkra2V5V2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHRlbXB5O1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwdncnLG1hcmdpblRvcDonM3JlbScsfX0gXHJcbiAgICA+XHJcbiAgICB7bm90ZXNleXMubWFwKCh7bm90ZSxsZWZ0fSxub3RlSWR4LGFyYSk9PntcclxuICAgICAgICBsZXQgbGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6YHJnYigke2NvbG9yU3RhcnR9LCR7KDM2MC9hcmEubGVuZ3RoKSpub3RlSWR4fSwyMClgLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDo3MDAsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTonLjhyZW0nLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDprZXlXaWR0aC8zLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGV2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LnRhcmdldC5zdHlsZS50cmFuc2Zvcm09J3JvdGF0ZSg0MGRlZyknO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihub3RlLHVzZXJJbnN0cnVtZW50KTt9fVxyXG4gICAgICAgIGtleT17J25vdGEnK25vdGUrbmFtZX0gPntub3RlfTwvZGl2PlxyXG4pfSl9XHJcbjwvZGl2Pil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyc3RTb3VuZEJvYXJkKCl7XHJcbiAgICBjb25zdCBbdXNlckluc3RydW1lbnQsc2V0VXNlckluc3RydW1lbnRdPXVzZVN0YXRlKCdTeW50aCcpO1xyXG4gICAgY29uc3QgW3N5bnRoLHNldFN5bnRoXT11c2VTdGF0ZShudWxsKTtcclxuICAgIC8vIGNvbnN0IFtvbkRlc2t0b3Asc2V0T25EZXNrdG9wXT11c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBzeW50aCA9IG5ldyBUb25lW3VzZXJJbnN0cnVtZW50XSgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgICAgICBzZXRTeW50aCh7c3ludGg6c3ludGh9KTtcclxuICAgIH0sW3VzZXJJbnN0cnVtZW50XSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHBsYXlOb3RlKHZhbCxpbnN0cnVtZW50PSdTeW50aCcpe1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IFRvbmUubm93KClcclxuICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyQXR0YWNrKHZhbCwgbm93KVxyXG4gICAgICAgIHN5bnRoLnN5bnRoLnRyaWdnZXJSZWxlYXNlKG5vdyArIC4xKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IFtsb29wLHNldExvb3BdPXVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHN5bnRoQSA9IG5ldyBUb25lLkZNU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGxvb3BBID0gIG5ldyBUb25lLkxvb3AodGltZSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgbm90ZVZhbHVlPSdDNSc7XHJcbiAgICAvLyAgICAgICAgICAgICBzeW50aEEudHJpZ2dlckF0dGFja1JlbGVhc2Uobm90ZVZhbHVlLCBcIjhuXCIsIHRpbWUpO1xyXG4gICAgLy8gICAgICAgICB9LFwiNG5cIikuc3RhcnQoMCk7XHJcbiAgICAvLyAgICAgICAgIHNldExvb3AobG9vcEEpO1xyXG4gICAgLy8gICAgIH0sW10pXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBjaG9yZE5vdGVzQk1pbm9yNz1bWydCJyw0XSxbJ0QnLDVdLFsnRiMnLDVdLFsnQScsNV1dO1xyXG4gICAgY29uc3QgY2hvcmROb3Rlc0FNaW5vcjc9W1snQScsNF0sWydDJyw1XSxbJ0UnLDVdLFsnRycsNV1dO1xyXG4gICAgY29uc3QgY2hvcmROb3Rlc0VNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0UnLDVdLFsnRycsNV1dO1xyXG5cclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IChjaG9ybm8pID0+IHtcclxuICAgICAgICBjb25zdCBub3Rlcz1bXTtcclxuICAgICAgICBjb25zdCBpdGVyYXRpb25zPVsnYScsJ2EnLCdhJywnYScsXTtcclxuICAgICAgICBpdGVyYXRpb25zLmZvckVhY2goKGl0LGl0SWR4KT0+e1xyXG4gICAgICAgICAgICBjaG9ybm8uZm9yRWFjaChjbj0+e1xyXG4gICAgICAgICAgICAgICAgbm90ZXMucHVzaChjblswXSsoY25bMV0raXRJZHgtMikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90ZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J2ZpeGVkJyx3aWR0aDonMTAwdncnLGhlaWdodDonMTAwdmgnLHRvcDonMHB4JyxsZWZ0OicwcHgnLGJhY2tncm91bmRDb2xvcjonbGlnaHRibHVlJyx9fT5cclxuICAgICAgICAgICAgPEluc3RydW1lbnRQaWNrZXIgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBzZXRVc2VySW5zdHJ1bWVudD17c2V0VXNlckluc3RydW1lbnR9IC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG48ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snLG1hcmdpblRvcDonMXJlbScsaGVpZ2h0OicyMDBweCcsfX0+XHJcbiAgICB7JyBBTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNCTWlub3I3KSw4KVxyXG4gICAgICAgIC5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9PihcclxuICAgICAgICAgICAgPGRpdiBrZXk9eydjaG5vJysobmdJZHgrMyl9ID5cclxuICAgICAgICAgICAgICAgIDxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBjb2xvclN0YXJ0PXsoMStuZ0lkeCkqIDQwfSAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PikpfVxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PlxyXG4gICAgeycgQk1pbm9yIDcnfXthcnJheTJncm91cGVkKGZ1bGxBcnJheShjaG9yZE5vdGVzQU1pbm9yNyksOClcclxuICAgIC5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9PihcclxuICAgIDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzgpfSA+XHJcbiAgICAgICAgPEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSogOTB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz5cclxuICAgIDwvZGl2PikpfVxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PlxyXG4gICAgeycgRU1pbm9yIDcnfXthcnJheTJncm91cGVkKGZ1bGxBcnJheShjaG9yZE5vdGVzRU1pbm9yNyksOClcclxuICAgIC5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9PihcclxuICAgIDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzE0KX0+PFxyXG4gICAgICAgIEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSoxMjB9IHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gbm90ZXM9e25vdGVHcm91cH0gbmFtZT17J0JNaW5vcjcnfSAvPjxiciAvPlxyXG4gICAgPC9kaXY+KSl9XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgPGg1PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oNT5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPEN1YnkgXHJcbiAgICAgICAgICAgICAgICBzdGFydEhhbmRsZXI9eygpPT57VG9uZS5UcmFuc3BvcnQuc3RhcnQoKX19IFxyXG4gICAgICAgICAgICAgICAgc3RvcEhhbmRsZXI9eygpPT57VG9uZS5UcmFuc3BvcnQuc3RvcCgpfX1cclxuICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj4pXHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb25lIiwiTGluayIsIkluc3RydW1lbnRQaWNrZXIiLCJhcnJheTJncm91cGVkIiwiS2V5cyIsImNvbG9yU3RhcnQiLCJub3RlcyIsIm5hbWUiLCJ1c2VySW5zdHJ1bWVudCIsImhhbmRsZXIiLCJrZXlXaWR0aCIsIm5vdGVzZXlzIiwibWFwIiwibm90ZVZhbHVlIiwibm90ZUlkeCIsInRlbXB5Iiwibm90ZSIsImxlZnQiLCJyaWdodCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJhcmEiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwib25Nb3VzZU92ZXIiLCJldiIsInRhcmdldCIsInRyYW5zZm9ybSIsIkZpcnN0U291bmRCb2FyZCIsInBsYXlOb3RlIiwidmFsIiwiaW5zdHJ1bWVudCIsIm5vdyIsInN5bnRoIiwidHJpZ2dlckF0dGFjayIsInRyaWdnZXJSZWxlYXNlIiwic2V0VXNlckluc3RydW1lbnQiLCJzZXRTeW50aCIsInRvRGVzdGluYXRpb24iLCJjaG9yZE5vdGVzQk1pbm9yNyIsImNob3JkTm90ZXNBTWlub3I3IiwiY2hvcmROb3Rlc0VNaW5vcjciLCJmdWxsQXJyYXkiLCJjaG9ybm8iLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJ0b3AiLCJiciIsImJvcmRlckJvdHRvbSIsIm5vdGVHcm91cCIsIm5nSWR4IiwiaDUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/soundboards/soundboarddesktop.js\n");

/***/ })

});