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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstSoundBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n// import Cuby                 from '../../components/cuby';\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import { Button } from '@mui/material';\nvar Keys = function(param1) {\n    var _colorStart = param1.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param1.notes, name = param1.name, userInstrument = param1.userInstrument, handler = param1.handler;\n    var _this1 = _this;\n    var keyWidth = 60;\n    var noteseys = notes.map(function(noteValue, noteIdx) {\n        var tempy = {};\n        tempy.note = noteValue;\n        tempy.left = keyWidth * noteIdx + noteIdx * 1;\n        tempy.right = keyWidth * noteIdx + noteIdx * 1 + keyWidth;\n        return tempy;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            height: keyWidth + 20\n        },\n        children: noteseys.map(function(param, noteIdx, ara) {\n            var note = param.note, left = param.left;\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                onMouseOver: function(ev) {\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstSoundBoard() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    // const [onDesktop,setOnDesktop]=useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    // const [loop,setLoop]=useState(null);\n    // useEffect(()=>{\n    //         const synthA = new Tone.FMSynth().toDestination();\n    //         const loopA =  new Tone.Loop(time => {\n    //             let noteValue='C5';\n    //             synthA.triggerAttackRelease(noteValue, \"8n\", time);\n    //         },\"4n\").start(0);\n    //         setLoop(loopA);\n    //     },[])\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    var keyWiff = 60;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: keyWiff * 3.2\n                },\n                children: [\n                    ' AMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 40,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 21\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 143\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 3), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' BMinor 7',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this),\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 90,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 21\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 143\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 8), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 110,\n                            columnNumber: 17\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' EMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 120,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 46\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 141\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 14), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                        lineNumber: 128,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 126,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this));\n};\n_s(FirstSoundBoard, \"2bwXf8FugDQa9Q4Ie3j4uIb1Z3A=\");\n_c1 = FirstSoundBoard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstSoundBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9zb3VuZGJvYXJkZGVza3RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQUNSO0FBQ0s7QUFDd0I7QUFDcEUsRUFBNEQ7QUFDSzs7O0FBQ2pFLEVBQTBDO0FBRTFDLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsU0FBNkMsQ0FBQzs2QkFBcERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBQyxFQUFFLGdCQUFDQyxLQUFLLFVBQUxBLEtBQUssRUFBQ0MsSUFBSSxVQUFKQSxJQUFJLEVBQUNDLGNBQWMsVUFBZEEsY0FBYyxFQUFDQyxPQUFPLFVBQVBBLE9BQU87O0lBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDakIsR0FBRyxDQUFDQyxRQUFRLEdBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFDQyxPQUFPLEVBQUcsQ0FBQztRQUN6QyxHQUFHLENBQUNDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDWkEsS0FBSyxDQUFDQyxJQUFJLEdBQUNILFNBQVM7UUFDcEJFLEtBQUssQ0FBQ0UsSUFBSSxHQUFFUCxRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7UUFDeENDLEtBQUssQ0FBQ0csS0FBSyxHQUFFUixRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUMsR0FBRUosUUFBUTtRQUNuRCxNQUFNLENBQUNLLEtBQUs7SUFDaEIsQ0FBQztJQUdELE1BQU0sNkVBQ0xJLENBQUc7UUFDQUMsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBQyxDQUFPO1lBQUNDLE1BQU0sRUFBQ1osUUFBUSxHQUFDLEVBQUU7UUFBQyxDQUFDO2tCQUU3Q0MsUUFBUSxDQUFDQyxHQUFHLENBQUMsUUFBUSxRQUFLRSxPQUFPLEVBQUNTLEdBQUcsRUFBRyxDQUFDO2dCQUExQlAsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLElBQUksU0FBSkEsSUFBSTtZQUNy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dG9wLmpzPzBmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgICAgICAgICAgICBmcm9tICd0b25lJ1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgICAgICAgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEluc3RydW1lbnRQaWNrZXIgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlcic7XHJcbi8vIGltcG9ydCBDdWJ5ICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2N1YnknO1xyXG5pbXBvcnQgeyBhcnJheTJncm91cGVkIH0gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnJheTJncm91cGVkJztcclxuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBLZXlzID0gKHtjb2xvclN0YXJ0PTIwLG5vdGVzLG5hbWUsdXNlckluc3RydW1lbnQsaGFuZGxlcn0pPT57XHJcbiAgICBjb25zdCBrZXlXaWR0aD02MDtcclxuICAgIGxldCBub3Rlc2V5cz1ub3Rlcy5tYXAoKG5vdGVWYWx1ZSxub3RlSWR4KT0+e1xyXG4gICAgICAgIGxldCB0ZW1weT17fTtcclxuICAgICAgICB0ZW1weS5ub3RlPW5vdGVWYWx1ZTtcclxuICAgICAgICB0ZW1weS5sZWZ0PShrZXlXaWR0aCpub3RlSWR4KSsobm90ZUlkeCoxKTtcclxuICAgICAgICB0ZW1weS5yaWdodD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSkra2V5V2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHRlbXB5O1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwdncnLGhlaWdodDprZXlXaWR0aCsyMCx9fSBcclxuICAgID5cclxuICAgIHtub3Rlc2V5cy5tYXAoKHtub3RlLGxlZnR9LG5vdGVJZHgsYXJhKT0+e1xyXG4gICAgICAgIGxldCBsZWZ0PShrZXlXaWR0aCpub3RlSWR4KSsobm90ZUlkeCoxKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6bGVmdCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6J2lubGluZScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDprZXlXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDprZXlXaWR0aCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpgcmdiKCR7Y29sb3JTdGFydH0sJHsoMzYwL2FyYS5sZW5ndGgpKm5vdGVJZHh9LDIwKWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OjcwMCxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicuOHJlbScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOmtleVdpZHRoLzMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZXYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZXYudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT0ncm90YXRlKDQwZGVnKSc7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG5vdGUsdXNlckluc3RydW1lbnQpO319XHJcbiAgICAgICAga2V5PXsnbm90YScrbm90ZStuYW1lfSA+e25vdGV9PC9kaXY+XHJcbil9KX1cclxuPC9kaXY+KX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJzdFNvdW5kQm9hcmQoKXtcclxuICAgIGNvbnN0IFt1c2VySW5zdHJ1bWVudCxzZXRVc2VySW5zdHJ1bWVudF09dXNlU3RhdGUoJ1N5bnRoJyk7XHJcbiAgICBjb25zdCBbc3ludGgsc2V0U3ludGhdPXVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gY29uc3QgW29uRGVza3RvcCxzZXRPbkRlc2t0b3BdPXVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHN5bnRoID0gbmV3IFRvbmVbdXNlckluc3RydW1lbnRdKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIHNldFN5bnRoKHtzeW50aDpzeW50aH0pO1xyXG4gICAgfSxbdXNlckluc3RydW1lbnRdKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcGxheU5vdGUodmFsLGluc3RydW1lbnQ9J1N5bnRoJyl7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gVG9uZS5ub3coKVxyXG4gICAgICAgIHN5bnRoLnN5bnRoLnRyaWdnZXJBdHRhY2sodmFsLCBub3cpXHJcbiAgICAgICAgc3ludGguc3ludGgudHJpZ2dlclJlbGVhc2Uobm93ICsgLjEpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gY29uc3QgW2xvb3Asc2V0TG9vcF09dXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICAgICAgY29uc3Qgc3ludGhBID0gbmV3IFRvbmUuRk1TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgbG9vcEEgPSAgbmV3IFRvbmUuTG9vcCh0aW1lID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBub3RlVmFsdWU9J0M1JztcclxuICAgIC8vICAgICAgICAgICAgIHN5bnRoQS50cmlnZ2VyQXR0YWNrUmVsZWFzZShub3RlVmFsdWUsIFwiOG5cIiwgdGltZSk7XHJcbiAgICAvLyAgICAgICAgIH0sXCI0blwiKS5zdGFydCgwKTtcclxuICAgIC8vICAgICAgICAgc2V0TG9vcChsb29wQSk7XHJcbiAgICAvLyAgICAgfSxbXSlcclxuICAgICAgICBcclxuICAgIGNvbnN0IGNob3JkTm90ZXNCTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydGIycsNV0sWydBJyw1XV07XHJcbiAgICBjb25zdCBjaG9yZE5vdGVzQU1pbm9yNz1bWydBJyw0XSxbJ0MnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcbiAgICBjb25zdCBjaG9yZE5vdGVzRU1pbm9yNz1bWydCJyw0XSxbJ0QnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcblxyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gKGNob3JubykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdGVzPVtdO1xyXG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnM9WydhJywnYScsJ2EnLCdhJyxdO1xyXG4gICAgICAgIGl0ZXJhdGlvbnMuZm9yRWFjaCgoaXQsaXRJZHgpPT57XHJcbiAgICAgICAgICAgIGNob3Juby5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgICAgICAgICBub3Rlcy5wdXNoKGNuWzBdKyhjblsxXStpdElkeC0yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBub3RlcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qga2V5V2lmZj02MDtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOidmaXhlZCcsd2lkdGg6JzEwMHZ3JyxoZWlnaHQ6JzEwMHZoJyx0b3A6JzBweCcsbGVmdDonMHB4JyxiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Ymx1ZScsfX0+XHJcblxyXG4gICAgICAgICAgICA8SW5zdHJ1bWVudFBpY2tlciB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IHNldFVzZXJJbnN0cnVtZW50PXtzZXRVc2VySW5zdHJ1bWVudH0gLz5cclxuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDprZXlXaWZmKjMuMix9fT5cclxuICAgICAgICAgICAgICAgIHsnIEFNaW5vciA3J317YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0JNaW5vcjcpLDgpXHJcbiAgICAgICAgICAgICAgICAubWFwKChub3RlR3JvdXAsbmdJZHgpPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCszKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBjb2xvclN0YXJ0PXsoMStuZ0lkeCkqIDQwfSAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snLG1hcmdpblRvcDonMXJlbScsaGVpZ2h0OicyMDBweCcsfX0+XHJcbiAgICAgICAgICAgICAgICB7JyBCTWlub3IgNyd9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHthcnJheTJncm91cGVkKGZ1bGxBcnJheShjaG9yZE5vdGVzQU1pbm9yNyksOClcclxuICAgICAgICAgICAgICAgIC5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9PihcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSogOTB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PikpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsbWFyZ2luVG9wOicxcmVtJyxoZWlnaHQ6JzIwMHB4Jyx9fT5cclxuICAgICAgICAgICAgICAgIHsnIEVNaW5vciA3J317YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0VNaW5vcjcpLDgpXHJcbiAgICAgICAgICAgICAgICAubWFwKChub3RlR3JvdXAsbmdJZHgpPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCsxNCl9PjxcclxuICAgICAgICAgICAgICAgICAgICBLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBjb2xvclN0YXJ0PXsoMStuZ0lkeCkqMTIwfSB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PikpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICA8aDU+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5ob21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8Q3VieSBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SGFuZGxlcj17KCk9PntUb25lLlRyYW5zcG9ydC5zdGFydCgpfX0gXHJcbiAgICAgICAgICAgICAgICBzdG9wSGFuZGxlcj17KCk9PntUb25lLlRyYW5zcG9ydC5zdG9wKCl9fVxyXG4gICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PilcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvbmUiLCJMaW5rIiwiSW5zdHJ1bWVudFBpY2tlciIsImFycmF5Mmdyb3VwZWQiLCJLZXlzIiwiY29sb3JTdGFydCIsIm5vdGVzIiwibmFtZSIsInVzZXJJbnN0cnVtZW50IiwiaGFuZGxlciIsImtleVdpZHRoIiwibm90ZXNleXMiLCJtYXAiLCJub3RlVmFsdWUiLCJub3RlSWR4IiwidGVtcHkiLCJub3RlIiwibGVmdCIsInJpZ2h0IiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFyYSIsInBvc2l0aW9uIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImxlbmd0aCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJvbk1vdXNlT3ZlciIsImV2IiwidGFyZ2V0IiwidHJhbnNmb3JtIiwiRmlyc3RTb3VuZEJvYXJkIiwicGxheU5vdGUiLCJ2YWwiLCJpbnN0cnVtZW50Iiwibm93Iiwic3ludGgiLCJ0cmlnZ2VyQXR0YWNrIiwidHJpZ2dlclJlbGVhc2UiLCJzZXRVc2VySW5zdHJ1bWVudCIsInNldFN5bnRoIiwidG9EZXN0aW5hdGlvbiIsImNob3JkTm90ZXNCTWlub3I3IiwiY2hvcmROb3Rlc0FNaW5vcjciLCJjaG9yZE5vdGVzRU1pbm9yNyIsImZ1bGxBcnJheSIsImNob3JubyIsIml0ZXJhdGlvbnMiLCJmb3JFYWNoIiwiaXQiLCJpdElkeCIsImNuIiwicHVzaCIsImtleVdpZmYiLCJ0b3AiLCJiciIsImJvcmRlckJvdHRvbSIsIm1hcmdpblRvcCIsIm5vdGVHcm91cCIsIm5nSWR4IiwiaDUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/soundboards/soundboarddesktop.js\n");

/***/ })

});