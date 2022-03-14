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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstSoundBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_cuby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cuby */ \"./components/cuby.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Keys = function(param) {\n    var _colorStart = param.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param.notes, name = param.name, userInstrument = param.userInstrument, handler = param.handler;\n    var _this1 = _this;\n    var keyWidth = 35;\n    var noteseys = notes.map(function(note, noteIdx) {\n        var tempy = {};\n        Object.assign(tempy, note);\n        tempy.left = keyWidth * noteIdx + noteIdx * 1;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        onTouchMove: function(ev) {\n            console.log([\n                ev.touches[0].clientX,\n                ev.touches[0].clientY,\n                note\n            ]);\n        },\n        onTouchStart: function(ev) {\n            console.log(ev);\n        // let prevStyle=window.getComputedStyle(ev.target).transform;\n        // ev.target.style.transform='rotate(40deg)';\n        // handler(note,userInstrument);\n        },\n        children: notes.map(function(note, noteIdx, ara) {\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    borderRadius: keyWidth / 2,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                onMouseOver: function(ev) {\n                    // let prevStyle=window.getComputedStyle(ev.target).transform;\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstSoundBoard() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), loop = ref2[0], setLoop = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n        var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n            var noteValue = 'C5';\n            synthA.triggerAttackRelease(noteValue, \"8n\", time);\n        }, \"4n\").start(0);\n        setLoop(loopA);\n    }, []);\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' AMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 40,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 192\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 3), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 106,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 106,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' BMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 90,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 192\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 8), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 107,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 107,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' EMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 120,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 193\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 14), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 108,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 108,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 115,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cuby__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                startHandler: function() {\n                    tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n                },\n                stopHandler: function() {\n                    tone__WEBPACK_IMPORTED_MODULE_2__.Transport.stop();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this));\n};\n_s(FirstSoundBoard, \"G/wefAoDrv4vk3IRxJSreZ9uo7E=\");\n_c1 = FirstSoundBoard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstSoundBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1I7QUFDSztBQUN3QjtBQUNaO0FBQ1M7OztBQUVqRSxHQUFLLENBQUNRLElBQUksR0FBRyxRQUFRLFFBQTZDLENBQUM7NEJBQXBEQyxVQUFVLEVBQVZBLFVBQVUsNEJBQUMsRUFBRSxnQkFBQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUNDLElBQUksU0FBSkEsSUFBSSxFQUFDQyxjQUFjLFNBQWRBLGNBQWMsRUFBQ0MsT0FBTyxTQUFQQSxPQUFPOztJQUMxRCxHQUFLLENBQUNDLFFBQVEsR0FBQyxFQUFFO0lBQ2pCLEdBQUcsQ0FBQ0MsUUFBUSxHQUFDTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBQ0MsT0FBTyxFQUFHLENBQUM7UUFDcEMsR0FBRyxDQUFDQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ1pDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixLQUFLLEVBQUNGLElBQUk7UUFDeEJFLEtBQUssQ0FBQ0csSUFBSSxHQUFFUixRQUFRLEdBQUNJLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELE1BQU0sNkVBQ0xLLENBQUc7UUFDQUMsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBQyxDQUFPO1lBQUNDLFNBQVMsRUFBQyxDQUFNO1FBQUMsQ0FBQztRQUN4Q0MsV0FBVyxFQUFFLFFBQVEsQ0FBUEMsRUFBRSxFQUFHLENBQUNDO1lBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNGO2dCQUFBQSxFQUFFLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLE9BQU87Z0JBQUNKLEVBQUUsQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUUsT0FBTztnQkFBQ2hCLElBQUk7WUFBQSxDQUFDO1FBQUMsQ0FBQztRQUNwRmlCLFlBQVksRUFBRSxRQUFRLENBQVBOLEVBQUUsRUFB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UyxFQUFDQyxLQUFLO3NDQUFJLE1BQU0sK0RBQUw5RCxDQUFHOzs0R0FBMEJmLElBQUk7b0NBQUNLLE9BQU8sRUFBRXFDLFFBQVE7b0NBQUV6QyxVQUFVLEdBQUcsQ0FBQyxHQUFDNEUsS0FBSyxJQUFFLEdBQUc7b0NBQUd6RSxjQUFjLEVBQUVBLGNBQWM7b0NBQUVGLEtBQUssRUFBRTBFLFNBQVM7b0NBQUV6RSxJQUFJLEVBQUUsQ0FBUzs7Ozs7OzRHQUFLdUUsQ0FBRTs7Ozs7OzJCQUFoSixDQUFNLFNBQUVHLEtBQUssR0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7d0ZBRWhMSCxDQUFFOzs7Ozt3RkFDRkEsQ0FBRTs7Ozs7d0ZBRUZJLENBQUU7c0dBQ0VsRixrREFBSTtvQkFBQ21GLElBQUksRUFBQyxDQUFHOzBHQUNUQyxDQUFDO2tDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS2RsRix3REFBSTtnQkFDRG1GLFlBQVksRUFBRSxRQUFRLEdBQUosQ0FBQ3RGO29CQUFBQSxpREFBb0I7Z0JBQUUsQ0FBQztnQkFDMUN3RixXQUFXLEVBQUUsUUFBUSxHQUFKLENBQUN4RjtvQkFBQUEsZ0RBQW1CO2dCQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQUt4RCxDQUFDO0dBakV1QjhDLGVBQWU7TUFBZkEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanM/YWZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVG9uZSAgICAgICAgICAgIGZyb20gJ3RvbmUnXHJcbmltcG9ydCBMaW5rICAgICAgICAgICAgICAgICBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW5zdHJ1bWVudFBpY2tlciAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN0cnVtZW50cGlja2VyJztcclxuaW1wb3J0IEN1YnkgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3VieSc7XHJcbmltcG9ydCB7IGFycmF5Mmdyb3VwZWQgfSAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FycmF5Mmdyb3VwZWQnO1xyXG5cclxuY29uc3QgS2V5cyA9ICh7Y29sb3JTdGFydD0yMCxub3RlcyxuYW1lLHVzZXJJbnN0cnVtZW50LGhhbmRsZXJ9KT0+e1xyXG4gICAgY29uc3Qga2V5V2lkdGg9MzU7XHJcbiAgICBsZXQgbm90ZXNleXM9bm90ZXMubWFwKChub3RlLG5vdGVJZHgpPT57XHJcbiAgICAgICAgbGV0IHRlbXB5PXt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGVtcHksbm90ZSk7XHJcbiAgICAgICAgdGVtcHkubGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e3dpZHRoOicxMDB2dycsbWFyZ2luVG9wOiczcmVtJyx9fSBcclxuICAgICAgICBvblRvdWNoTW92ZT17KGV2KT0+e2NvbnNvbGUubG9nKFtldi50b3VjaGVzWzBdLmNsaWVudFgsZXYudG91Y2hlc1swXS5jbGllbnRZLG5vdGVdKX19XHJcbiAgICAgICAgb25Ub3VjaFN0YXJ0PXsoZXYpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgLy8gbGV0IHByZXZTdHlsZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShldi50YXJnZXQpLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgLy8gZXYudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT0ncm90YXRlKDQwZGVnKSc7XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZXIobm90ZSx1c2VySW5zdHJ1bWVudCk7XHJcbiAgICAgICAgfX1cclxuICAgIFxyXG4gICAgPlxyXG4gICAge25vdGVzLm1hcCgobm90ZSxub3RlSWR4LGFyYSk9PntcclxuICAgICAgICBsZXQgbGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6a2V5V2lkdGgvMixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpgcmdiKCR7Y29sb3JTdGFydH0sJHsoMzYwL2FyYS5sZW5ndGgpKm5vdGVJZHh9LDIwKWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OjcwMCxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicuOHJlbScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOmtleVdpZHRoLzMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZXYpPT57XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcHJldlN0eWxlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGV2LnRhcmdldCkudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgZXYudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT0ncm90YXRlKDQwZGVnKSc7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG5vdGUsdXNlckluc3RydW1lbnQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvLyBvblRvdWNoU3RhcnQ9eyhldik9PntcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBwcmV2U3R5bGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZXYudGFyZ2V0KS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIC8vICAgICBldi50YXJnZXQuc3R5bGUudHJhbnNmb3JtPSdyb3RhdGUoNDBkZWcpJztcclxuICAgICAgICAgICAgLy8gICAgIGhhbmRsZXIobm90ZSx1c2VySW5zdHJ1bWVudCk7XHJcbiAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgIC8vIG9uVG91Y2hNb3ZlPXsoZXYpPT57Y29uc29sZS5sb2coW2V2LnRvdWNoZXNbMF0uY2xpZW50WCxldi50b3VjaGVzWzBdLmNsaWVudFksbm90ZV0pfX1cclxuICAgICAgICAgICAga2V5PXsnbm90YScrbm90ZStuYW1lfSA+XHJcbiAgICAgICAgICAgIHtub3RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKX0pfVxyXG48L2Rpdj4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcnN0U291bmRCb2FyZCgpe1xyXG4gICAgY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuICAgIGNvbnN0IFtzeW50aCxzZXRTeW50aF09dXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVt1c2VySW5zdHJ1bWVudF0oKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgc2V0U3ludGgoe3N5bnRoOnN5bnRofSk7XHJcbiAgICB9LFt1c2VySW5zdHJ1bWVudF0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwbGF5Tm90ZSh2YWwsaW5zdHJ1bWVudD0nU3ludGgnKXtcclxuICAgICAgICBjb25zdCBub3cgPSBUb25lLm5vdygpXHJcbiAgICAgICAgc3ludGguc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBbbG9vcCxzZXRMb29wXT11c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzeW50aEEgPSBuZXcgVG9uZS5GTVN5bnRoKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBsb29wQSA9ICBuZXcgVG9uZS5Mb29wKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vdGVWYWx1ZT0nQzUnO1xyXG4gICAgICAgICAgICAgICAgc3ludGhBLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG5vdGVWYWx1ZSwgXCI4blwiLCB0aW1lKTtcclxuICAgICAgICAgICAgfSxcIjRuXCIpLnN0YXJ0KDApO1xyXG4gICAgICAgICAgICBzZXRMb29wKGxvb3BBKTtcclxuICAgICAgICB9LFtdKVxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgY2hvcmROb3Rlc0JNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0YjJyw1XSxbJ0EnLDVdXTtcclxuICAgIGNvbnN0IGNob3JkTm90ZXNBTWlub3I3PVtbJ0EnLDRdLFsnQycsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuICAgIGNvbnN0IGNob3JkTm90ZXNFTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuXHJcbiAgICBjb25zdCBmdWxsQXJyYXkgPSAoY2hvcm5vKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXM9W107XHJcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucz1bJ2EnLCdhJywnYScsJ2EnLF07XHJcbiAgICAgICAgaXRlcmF0aW9ucy5mb3JFYWNoKChpdCxpdElkeCk9PntcclxuICAgICAgICAgICAgY2hvcm5vLmZvckVhY2goY249PntcclxuICAgICAgICAgICAgICAgIG5vdGVzLnB1c2goY25bMF0rKGNuWzFdK2l0SWR4LTIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOidmaXhlZCcsd2lkdGg6JzEwMHZ3JyxoZWlnaHQ6JzEwMHZoJyx0b3A6JzBweCcsbGVmdDonMHB4JyxiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Ymx1ZScsfX0+XHJcbiAgICAgICAgICAgIDxJbnN0cnVtZW50UGlja2VyIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gc2V0VXNlckluc3RydW1lbnQ9e3NldFVzZXJJbnN0cnVtZW50fSAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PnsnIEFNaW5vciA3J317YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0JNaW5vcjcpLDgpLm1hcCgobm90ZUdyb3VwLG5nSWR4KT0+KDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzMpfT48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17KDErbmdJZHgpKiA0MH0gICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz48L2Rpdj4pKX08L2Rpdj5cclxuPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PnsnIEJNaW5vciA3J317YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0FNaW5vcjcpLDgpLm1hcCgobm90ZUdyb3VwLG5nSWR4KT0+KDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzgpfT48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17KDErbmdJZHgpKiA5MH0gICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz48L2Rpdj4pKX08L2Rpdj5cclxuPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxtYXJnaW5Ub3A6JzFyZW0nLGhlaWdodDonMjAwcHgnLH19PnsnIEVNaW5vciA3J317YXJyYXkyZ3JvdXBlZChmdWxsQXJyYXkoY2hvcmROb3Rlc0VNaW5vcjcpLDgpLm1hcCgobm90ZUdyb3VwLG5nSWR4KT0+KDxkaXYga2V5PXsnY2hubycrKG5nSWR4KzE0KX0+PEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSoxMjB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48YnIgLz48L2Rpdj4pKX08L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oNT5cclxuXHJcblxyXG4gICAgICAgICAgICA8Q3VieSBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SGFuZGxlcj17KCk9PntUb25lLlRyYW5zcG9ydC5zdGFydCgpfX0gXHJcbiAgICAgICAgICAgICAgICBzdG9wSGFuZGxlcj17KCk9PntUb25lLlRyYW5zcG9ydC5zdG9wKCl9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KVxyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9uZSIsIkxpbmsiLCJJbnN0cnVtZW50UGlja2VyIiwiQ3VieSIsImFycmF5Mmdyb3VwZWQiLCJLZXlzIiwiY29sb3JTdGFydCIsIm5vdGVzIiwibmFtZSIsInVzZXJJbnN0cnVtZW50IiwiaGFuZGxlciIsImtleVdpZHRoIiwibm90ZXNleXMiLCJtYXAiLCJub3RlIiwibm90ZUlkeCIsInRlbXB5IiwiT2JqZWN0IiwiYXNzaWduIiwibGVmdCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJvblRvdWNoTW92ZSIsImV2IiwiY29uc29sZSIsImxvZyIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hTdGFydCIsImFyYSIsInBvc2l0aW9uIiwiZGlzcGxheSIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxlbmd0aCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJvbk1vdXNlT3ZlciIsInRhcmdldCIsInRyYW5zZm9ybSIsIkZpcnN0U291bmRCb2FyZCIsInBsYXlOb3RlIiwidmFsIiwiaW5zdHJ1bWVudCIsIm5vdyIsInN5bnRoIiwidHJpZ2dlckF0dGFjayIsInRyaWdnZXJSZWxlYXNlIiwic2V0VXNlckluc3RydW1lbnQiLCJzZXRTeW50aCIsInRvRGVzdGluYXRpb24iLCJsb29wIiwic2V0TG9vcCIsInN5bnRoQSIsIkZNU3ludGgiLCJsb29wQSIsIkxvb3AiLCJ0aW1lIiwibm90ZVZhbHVlIiwidHJpZ2dlckF0dGFja1JlbGVhc2UiLCJzdGFydCIsImNob3JkTm90ZXNCTWlub3I3IiwiY2hvcmROb3Rlc0FNaW5vcjciLCJjaG9yZE5vdGVzRU1pbm9yNyIsImZ1bGxBcnJheSIsImNob3JubyIsIml0ZXJhdGlvbnMiLCJmb3JFYWNoIiwiaXQiLCJpdElkeCIsImNuIiwicHVzaCIsInRvcCIsImJyIiwiYm9yZGVyQm90dG9tIiwibm90ZUdyb3VwIiwibmdJZHgiLCJoNSIsImhyZWYiLCJhIiwic3RhcnRIYW5kbGVyIiwiVHJhbnNwb3J0Iiwic3RvcEhhbmRsZXIiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});