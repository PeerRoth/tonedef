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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstSoundBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n// import Cuby                 from '../../components/cuby';\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import { Button } from '@mui/material';\nvar Keys = function(param1) {\n    var _colorStart = param1.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param1.notes, name = param1.name, userInstrument = param1.userInstrument, handler = param1.handler;\n    var _this1 = _this;\n    var keyWidth = 60;\n    var noteseys = notes.map(function(noteValue, noteIdx) {\n        var tempy = {};\n        tempy.note = noteValue;\n        tempy.left = keyWidth * noteIdx + noteIdx * 1;\n        tempy.right = keyWidth * noteIdx + noteIdx * 1 + keyWidth;\n        return tempy;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            height: keyWidth\n        },\n        children: noteseys.map(function(param, noteIdx, ara) {\n            var note = param.note, left = param.left;\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                onMouseOver: function(ev) {\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstSoundBoard() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    // const [onDesktop,setOnDesktop]=useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    // const [loop,setLoop]=useState(null);\n    // useEffect(()=>{\n    //         const synthA = new Tone.FMSynth().toDestination();\n    //         const loopA =  new Tone.Loop(time => {\n    //             let noteValue='C5';\n    //             synthA.triggerAttackRelease(noteValue, \"8n\", time);\n    //         },\"4n\").start(0);\n    //         setLoop(loopA);\n    //     },[])\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    var keyWiff = 60;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: keyWiff * 3.2,\n                    fontSize: '.9rem',\n                    fontWeight: 700\n                },\n                children: [\n                    ' AMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 40,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 21\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 143\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 3), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' BMinor 7',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this),\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 90,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 21\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 143\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 8), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 110,\n                            columnNumber: 17\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' EMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_5__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 120,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 46\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 141\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 14), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                        lineNumber: 128,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n                lineNumber: 126,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\soundboarddesktop.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this));\n};\n_s(FirstSoundBoard, \"2bwXf8FugDQa9Q4Ie3j4uIb1Z3A=\");\n_c1 = FirstSoundBoard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstSoundBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9zb3VuZGJvYXJkZGVza3RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQUNSO0FBQ0s7QUFDd0I7QUFDcEUsRUFBNEQ7QUFDSzs7O0FBQ2pFLEVBQTBDO0FBRTFDLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsU0FBNkMsQ0FBQzs2QkFBcERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBQyxFQUFFLGdCQUFDQyxLQUFLLFVBQUxBLEtBQUssRUFBQ0MsSUFBSSxVQUFKQSxJQUFJLEVBQUNDLGNBQWMsVUFBZEEsY0FBYyxFQUFDQyxPQUFPLFVBQVBBLE9BQU87O0lBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDakIsR0FBRyxDQUFDQyxRQUFRLEdBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFDQyxPQUFPLEVBQUcsQ0FBQztRQUN6QyxHQUFHLENBQUNDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDWkEsS0FBSyxDQUFDQyxJQUFJLEdBQUNILFNBQVM7UUFDcEJFLEtBQUssQ0FBQ0UsSUFBSSxHQUFFUCxRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7UUFDeENDLEtBQUssQ0FBQ0csS0FBSyxHQUFFUixRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUMsR0FBRUosUUFBUTtRQUNuRCxNQUFNLENBQUNLLEtBQUs7SUFDaEIsQ0FBQztJQUdELE1BQU0sNkVBQ0xJLENBQUc7UUFDQUMsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBQyxDQUFPO1lBQUNDLE1BQU0sRUFBQ1osUUFBUTtRQUFDLENBQUM7a0JBRTFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQyxRQUFRLFFBQUtFLE9BQU8sRUFBQ1MsR0FBRyxFQUFHLENBQUM7Z0JBQTFCUCxJQUFJLFNBQUpBLElBQUksRUFBQ0MsSUFBSSxTQUFKQSxJQUFJO1lBQ3JCLEdBQUcsQ0FB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Ly4vcGFnZXMvc291bmRib2FyZHMvc291bmRib2FyZGRlc2t0b3AuanM/MGZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVG9uZSAgICAgICAgICAgIGZyb20gJ3RvbmUnXHJcbmltcG9ydCBMaW5rICAgICAgICAgICAgICAgICBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW5zdHJ1bWVudFBpY2tlciAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN0cnVtZW50cGlja2VyJztcclxuLy8gaW1wb3J0IEN1YnkgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3VieSc7XHJcbmltcG9ydCB7IGFycmF5Mmdyb3VwZWQgfSAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FycmF5Mmdyb3VwZWQnO1xyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmNvbnN0IEtleXMgPSAoe2NvbG9yU3RhcnQ9MjAsbm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxoYW5kbGVyfSk9PntcclxuICAgIGNvbnN0IGtleVdpZHRoPTYwO1xyXG4gICAgbGV0IG5vdGVzZXlzPW5vdGVzLm1hcCgobm90ZVZhbHVlLG5vdGVJZHgpPT57XHJcbiAgICAgICAgbGV0IHRlbXB5PXt9O1xyXG4gICAgICAgIHRlbXB5Lm5vdGU9bm90ZVZhbHVlO1xyXG4gICAgICAgIHRlbXB5LmxlZnQ9KGtleVdpZHRoKm5vdGVJZHgpKyhub3RlSWR4KjEpO1xyXG4gICAgICAgIHRlbXB5LnJpZ2h0PShrZXlXaWR0aCpub3RlSWR4KSsobm90ZUlkeCoxKStrZXlXaWR0aDtcclxuICAgICAgICByZXR1cm4gdGVtcHk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e3dpZHRoOicxMDB2dycsaGVpZ2h0OmtleVdpZHRoLH19IFxyXG4gICAgPlxyXG4gICAge25vdGVzZXlzLm1hcCgoe25vdGUsbGVmdH0sbm90ZUlkeCxhcmEpPT57XHJcbiAgICAgICAgbGV0IGxlZnQ9KGtleVdpZHRoKm5vdGVJZHgpKyhub3RlSWR4KjEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDpsZWZ0LFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTonaW5saW5lJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOmtleVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OmtleVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOmByZ2IoJHtjb2xvclN0YXJ0fSwkeygzNjAvYXJhLmxlbmd0aCkqbm90ZUlkeH0sMjApYCxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6NzAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6Jy44cmVtJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6a2V5V2lkdGgvMyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhldik9PntcclxuICAgICAgICAgICAgICAgICAgICBldi50YXJnZXQuc3R5bGUudHJhbnNmb3JtPSdyb3RhdGUoNDBkZWcpJztcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIobm90ZSx1c2VySW5zdHJ1bWVudCk7fX1cclxuICAgICAgICBrZXk9eydub3RhJytub3RlK25hbWV9ID57bm90ZX08L2Rpdj5cclxuKX0pfVxyXG48L2Rpdj4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcnN0U291bmRCb2FyZCgpe1xyXG4gICAgY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuICAgIGNvbnN0IFtzeW50aCxzZXRTeW50aF09dXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBjb25zdCBbb25EZXNrdG9wLHNldE9uRGVza3RvcF09dXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVt1c2VySW5zdHJ1bWVudF0oKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgc2V0U3ludGgoe3N5bnRoOnN5bnRofSk7XHJcbiAgICB9LFt1c2VySW5zdHJ1bWVudF0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwbGF5Tm90ZSh2YWwsaW5zdHJ1bWVudD0nU3ludGgnKXtcclxuICAgICAgICBjb25zdCBub3cgPSBUb25lLm5vdygpXHJcbiAgICAgICAgc3ludGguc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBbbG9vcCxzZXRMb29wXT11c2VTdGF0ZShudWxsKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgICAgICBjb25zdCBzeW50aEEgPSBuZXcgVG9uZS5GTVN5bnRoKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBsb29wQSA9ICBuZXcgVG9uZS5Mb29wKHRpbWUgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IG5vdGVWYWx1ZT0nQzUnO1xyXG4gICAgLy8gICAgICAgICAgICAgc3ludGhBLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG5vdGVWYWx1ZSwgXCI4blwiLCB0aW1lKTtcclxuICAgIC8vICAgICAgICAgfSxcIjRuXCIpLnN0YXJ0KDApO1xyXG4gICAgLy8gICAgICAgICBzZXRMb29wKGxvb3BBKTtcclxuICAgIC8vICAgICB9LFtdKVxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgY2hvcmROb3Rlc0JNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0YjJyw1XSxbJ0EnLDVdXTtcclxuICAgIGNvbnN0IGNob3JkTm90ZXNBTWlub3I3PVtbJ0EnLDRdLFsnQycsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuICAgIGNvbnN0IGNob3JkTm90ZXNFTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuXHJcbiAgICBjb25zdCBmdWxsQXJyYXkgPSAoY2hvcm5vKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXM9W107XHJcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucz1bJ2EnLCdhJywnYScsJ2EnLF07XHJcbiAgICAgICAgaXRlcmF0aW9ucy5mb3JFYWNoKChpdCxpdElkeCk9PntcclxuICAgICAgICAgICAgY2hvcm5vLmZvckVhY2goY249PntcclxuICAgICAgICAgICAgICAgIG5vdGVzLnB1c2goY25bMF0rKGNuWzFdK2l0SWR4LTIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBrZXlXaWZmPTYwO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J2ZpeGVkJyx3aWR0aDonMTAwdncnLGhlaWdodDonMTAwdmgnLHRvcDonMHB4JyxsZWZ0OicwcHgnLGJhY2tncm91bmRDb2xvcjonbGlnaHRibHVlJyx9fT5cclxuXHJcbiAgICAgICAgICAgIDxJbnN0cnVtZW50UGlja2VyIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gc2V0VXNlckluc3RydW1lbnQ9e3NldFVzZXJJbnN0cnVtZW50fSAvPlxyXG5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snLG1hcmdpblRvcDonMXJlbScsaGVpZ2h0OmtleVdpZmYqMy4yLGZvbnRTaXplOicuOXJlbScsZm9udFdlaWdodDo3MDAsfX0+XHJcbiAgICAgICAgICAgICAgICB7JyBBTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNCTWlub3I3KSw4KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobm90ZUdyb3VwLG5nSWR4KT0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eydjaG5vJysobmdJZHgrMyl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17KDErbmdJZHgpKiA0MH0gIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gbm90ZXM9e25vdGVHcm91cH0gbmFtZT17J0JNaW5vcjcnfSAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PlxyXG4gICAgICAgICAgICAgICAgeycgQk1pbm9yIDcnfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0FNaW5vcjcpLDgpXHJcbiAgICAgICAgICAgICAgICAubWFwKChub3RlR3JvdXAsbmdJZHgpPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCs4KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBjb2xvclN0YXJ0PXsoMStuZ0lkeCkqIDkwfSAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snLG1hcmdpblRvcDonMXJlbScsaGVpZ2h0OicyMDBweCcsfX0+XHJcbiAgICAgICAgICAgICAgICB7JyBFTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNFTWlub3I3KSw4KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobm90ZUdyb3VwLG5nSWR4KT0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eydjaG5vJysobmdJZHgrMTQpfT48XHJcbiAgICAgICAgICAgICAgICAgICAgS2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17KDErbmdJZHgpKjEyMH0gdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgPGg1PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oNT5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPEN1YnkgXHJcbiAgICAgICAgICAgICAgICBzdGFydEhhbmRsZXI9eygpPT57VG9uZS5UcmFuc3BvcnQuc3RhcnQoKX19IFxyXG4gICAgICAgICAgICAgICAgc3RvcEhhbmRsZXI9eygpPT57VG9uZS5UcmFuc3BvcnQuc3RvcCgpfX1cclxuICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj4pXHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb25lIiwiTGluayIsIkluc3RydW1lbnRQaWNrZXIiLCJhcnJheTJncm91cGVkIiwiS2V5cyIsImNvbG9yU3RhcnQiLCJub3RlcyIsIm5hbWUiLCJ1c2VySW5zdHJ1bWVudCIsImhhbmRsZXIiLCJrZXlXaWR0aCIsIm5vdGVzZXlzIiwibWFwIiwibm90ZVZhbHVlIiwibm90ZUlkeCIsInRlbXB5Iiwibm90ZSIsImxlZnQiLCJyaWdodCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhcmEiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwib25Nb3VzZU92ZXIiLCJldiIsInRhcmdldCIsInRyYW5zZm9ybSIsIkZpcnN0U291bmRCb2FyZCIsInBsYXlOb3RlIiwidmFsIiwiaW5zdHJ1bWVudCIsIm5vdyIsInN5bnRoIiwidHJpZ2dlckF0dGFjayIsInRyaWdnZXJSZWxlYXNlIiwic2V0VXNlckluc3RydW1lbnQiLCJzZXRTeW50aCIsInRvRGVzdGluYXRpb24iLCJjaG9yZE5vdGVzQk1pbm9yNyIsImNob3JkTm90ZXNBTWlub3I3IiwiY2hvcmROb3Rlc0VNaW5vcjciLCJmdWxsQXJyYXkiLCJjaG9ybm8iLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJrZXlXaWZmIiwidG9wIiwiYnIiLCJib3JkZXJCb3R0b20iLCJtYXJnaW5Ub3AiLCJub3RlR3JvdXAiLCJuZ0lkeCIsImg1IiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/soundboards/soundboarddesktop.js\n");

/***/ })

});