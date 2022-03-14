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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstSoundBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_cuby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cuby */ \"./components/cuby.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Keys = function(param) {\n    var _colorStart = param.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param.notes, name = param.name, userInstrument = param.userInstrument, handler = param.handler;\n    var _this1 = _this;\n    var keyWidth = 35;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        children: notes.map(function(note, noteIdx, ara) {\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    borderRadius: keyWidth / 2,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                onMouseOver: function(ev) {\n                    // let prevStyle=window.getComputedStyle(ev.target).transform;\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                onTouchStart: function(ev) {\n                    console.log(ev);\n                    // let prevStyle=window.getComputedStyle(ev.target).transform;\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstSoundBoard() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), loop = ref2[0], setLoop = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n        var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n            var noteValue = 'C5';\n            synthA.triggerAttackRelease(noteValue, \"8n\", time);\n        }, \"4n\").start(0);\n        setLoop(loopA);\n    }, []);\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' AMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 40,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 192\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 3), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 90,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 90,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' BMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 90,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 192\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 8), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 91,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 91,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderBottom: '1px solid black',\n                    marginTop: '1rem',\n                    height: '200px'\n                },\n                children: [\n                    ' EMinor 7',\n                    (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup, ngIdx) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                                    handler: playNote,\n                                    colorStart: (1 + ngIdx) * 120,\n                                    userInstrument: userInstrument,\n                                    notes: noteGroup,\n                                    name: 'BMinor7'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 193\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 315\n                                }, _this2)\n                            ]\n                        }, 'chno' + (ngIdx + 14), true, {\n                            fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                            lineNumber: 92,\n                            columnNumber: 164\n                        }, _this2);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 92,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cuby__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                startHandler: function() {\n                    tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n                },\n                stopHandler: function() {\n                    tone__WEBPACK_IMPORTED_MODULE_2__.Transport.stop();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this));\n};\n_s(FirstSoundBoard, \"G/wefAoDrv4vk3IRxJSreZ9uo7E=\");\n_c1 = FirstSoundBoard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstSoundBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1I7QUFDSztBQUN3QjtBQUNaO0FBQ1M7OztBQUVqRSxHQUFLLENBQUNRLElBQUksR0FBRyxRQUFRLFFBQTZDLENBQUM7NEJBQXBEQyxVQUFVLEVBQVZBLFVBQVUsNEJBQUMsRUFBRSxnQkFBQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUNDLElBQUksU0FBSkEsSUFBSSxFQUFDQyxjQUFjLFNBQWRBLGNBQWMsRUFBQ0MsT0FBTyxTQUFQQSxPQUFPOztJQUMxRCxHQUFLLENBQUNDLFFBQVEsR0FBQyxFQUFFO0lBQ2pCLE1BQU0sNkVBQ0xDLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBQyxDQUFPO1lBQUNDLFNBQVMsRUFBQyxDQUFNO1FBQUMsQ0FBQztrQkFDNUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFDQyxPQUFPLEVBQUNDLEdBQUcsRUFBRyxDQUFDO1lBQzVCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFFVCxRQUFRLEdBQUNPLE9BQU8sR0FBR0EsT0FBTyxHQUFDLENBQUM7WUFDMUMsTUFBTSw2RUFDRE4sQ0FBRztnQkFDQUMsS0FBSyxFQUFFLENBQUM7b0JBQ0pRLFFBQVEsRUFBQyxDQUFVO29CQUNuQkQsSUFBSSxFQUFDQSxJQUFJO29CQUNURSxPQUFPLEVBQUMsQ0FBUTtvQkFDaEJSLEtBQUssRUFBQ0gsUUFBUTtvQkFDZFksTUFBTSxFQUFDWixRQUFRO29CQUNmYSxZQUFZLEVBQUNiLFFBQVEsR0FBQyxDQUFDO29CQUN2QmMsZUFBZSxFQUFFLENBQUksTUFBZ0IsTUFBd0IsQ0FBdENuQixVQUFVLEVBQUMsQ0FBQyxJQUEyQixNQUFJLENBQTVCLEdBQUcsR0FBQ2EsR0FBRyxDQUFDTyxNQUFNLEdBQUVSLE9BQU8sRUFBQyxDQUFJO29CQUNsRVMsU0FBUyxFQUFDLENBQVE7b0JBQ2xCQyxVQUFVLEVBQUMsR0FBRztvQkFDZEMsUUFBUSxFQUFDLENBQU87b0JBQ2hCQyxVQUFVLEVBQUNuQixRQUFRLEdBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRG9CLFdBQVcsRUFBRSxRQUFRLENBQVBDLEVBQUUsRUFBRyxDQUFDO29CQUNoQixFQUE4RDtvQkFDOURBLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDcEIsS0FBSyxDQUFDcUIsU0FBUyxHQUFDLENBQWU7b0JBQ3pDeEIsT0FBTyxDQUFDTyxJQUFJLEVBQUNSLGNBQWM7Z0JBQy9CLENBQUM7Z0JBQ0QwQixZQUFZLEVBQUUsUUFBUSxDQUFQSCxFQUFFLEVBQUcsQ0FBQztvQkFDakJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxFQUFFO29CQUNkLEVBQThEO29CQUM5REEsRUFBRSxDQUFDQyxNQUFNLENBQUNwQixLQUFLLENBQUNxQixTQUFTLEdBQUMsQ0FBZTtvQkFDekN4QixPQUFPLENBQUNPLElBQUksRUFBQ1IsY0FBYztnQkFDL0IsQ0FBQzswQkFFQVEsSUFBSTtlQURBLENBQU0sUUFBQ0EsSUFBSSxHQUFDVCxJQUFJOzs7OztRQUc1QixDQUFDOzs7Ozs7QUFDQyxDQUFDO0tBcENGSCxJQUFJO0FBc0NLLFFBQVEsQ0FBQ2lDLGVBQWUsR0FBRSxDQUFDOztRQVM3QkMsUUFBUSxHQUFqQixRQUFRLENBQUNBLFFBQVEsQ0FBQ0MsR0FBRyxFQUFvQixDQUFDO1lBQXBCQyxVQUFVLG9FQUFDLENBQU87UUFDcEMsR0FBSyxDQUFDQyxHQUFHLEdBQUcxQyxxQ0FBUTtRQUNwQjJDLE1BQUssQ0FBQ0EsS0FBSyxDQUFDQyxhQUFhLENBQUNKLEdBQUcsRUFBRUUsR0FBRztRQUNsQ0MsTUFBSyxDQUFDQSxLQUFLLENBQUNFLGNBQWMsQ0FBQ0gsR0FBRyxHQUFHLEdBQUU7SUFDdkMsQ0FBQzs7SUFaRCxHQUFLLENBQW9DM0MsR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsQ0FBTyxTQUFsRFUsY0FBYyxHQUFvQlYsR0FBaUIsS0FBcEMrQyxpQkFBaUIsR0FBRS9DLEdBQWlCO0lBQzFELEdBQUssQ0FBa0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTdCNEMsTUFBSyxHQUFXNUMsSUFBYyxLQUF4QmdELFFBQVEsR0FBRWhELElBQWM7SUFFckNELGdEQUFTLENBQUMsUUFDYixHQURpQixDQUFDO1FBQ1gsR0FBSyxDQUFDNkMsS0FBSyxHQUFHLEdBQUcsQ0FBQzNDLGlDQUFJLENBQUNTLGNBQWMsSUFBSXVDLGFBQWE7UUFDdERELFFBQVEsQ0FBQyxDQUFDSjtZQUFBQSxLQUFLLEVBQUNBLEtBQUs7UUFBQSxDQUFDO0lBQzFCLENBQUMsRUFBQyxDQUFDbEM7UUFBQUEsY0FBYztJQUFBLENBQUM7O0lBUWxCLEdBQUssQ0FBZ0JWLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTNCa0QsSUFBSSxHQUFVbEQsSUFBYyxLQUF2Qm1ELE9BQU8sR0FBRW5ELElBQWM7SUFDbkNELGdEQUFTLENBQUMsUUFDYixHQURpQixDQUFDO1FBQ1AsR0FBSyxDQUFDcUQsTUFBTSxHQUFHLEdBQUcsQ0FBQ25ELHlDQUFZLEdBQUdnRCxhQUFhO1FBQy9DLEdBQUssQ0FBQ0ssS0FBSyxHQUFJLEdBQUcsQ0FBQ3JELHNDQUFTLENBQUN1RCxRQUFRLENBQVJBLElBQUksRUFBSSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQ0MsU0FBUyxHQUFDLENBQUk7WUFDbEJMLE1BQU0sQ0FBQ00sb0JBQW9CLENBQUNELFNBQVMsRUFBRSxDQUFJLEtBQUVELElBQUk7UUFDckQsQ0FBQyxFQUFDLENBQUksS0FBRUcsS0FBSyxDQUFDLENBQUM7UUFDZlIsT0FBTyxDQUFDRyxLQUFLO0lBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFUixHQUFLLENBQUNNLGlCQUFpQixHQUFDLENBQUM7UUFBQSxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFJO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUMxRCxHQUFLLENBQUNDLGlCQUFpQixHQUFDLENBQUM7UUFBQSxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUN6RCxHQUFLLENBQUNDLGlCQUFpQixHQUFDLENBQUM7UUFBQSxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO1FBQUMsQ0FBQztZQUFBLENBQUc7QUFBQyxhQUFDO1FBQUEsQ0FBQztRQUFDLENBQUM7WUFBQSxDQUFHO0FBQUMsYUFBQztRQUFBLENBQUM7UUFBQyxDQUFDO1lBQUEsQ0FBRztBQUFDLGFBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUV6RCxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO1FBQzNCLEdBQUssQ0FBQ3hELEtBQUssR0FBQyxDQUFDLENBQUM7UUFDZCxHQUFLLENBQUN5RCxVQUFVLEdBQUMsQ0FBQztZQUFBLENBQUc7WUFBQyxDQUFHO1lBQUMsQ0FBRztZQUFDLENBQUc7UUFBQyxDQUFDO1FBQ25DQSxVQUFVLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBQ0MsS0FBSyxFQUFHLENBQUM7WUFDNUJKLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDRyxRQUMxQixDQUQwQkEsRUFBRSxFQUFFLENBQUM7Z0JBQ2hCN0QsS0FBSyxDQUFDOEQsSUFBSSxDQUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFHQSxFQUFFLENBQUMsQ0FBQyxJQUFFRCxLQUFLLEdBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQzVELEtBQUs7SUFDaEIsQ0FBQztJQUVELE1BQU0sNkVBQ0RLLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUNRO1lBQUFBLFFBQVEsRUFBQyxDQUFPO1lBQUNQLEtBQUssRUFBQyxDQUFPO1lBQUNTLE1BQU0sRUFBQyxDQUFPO1lBQUMrQyxHQUFHLEVBQUMsQ0FBSztZQUFDbEQsSUFBSSxFQUFDLENBQUs7WUFBQ0ssZUFBZSxFQUFDLENBQVc7UUFBQyxDQUFDOzt3RkFDeEd2QixvRUFBZ0I7Z0JBQUNPLGNBQWMsRUFBRUEsY0FBYztnQkFBRXFDLGlCQUFpQixFQUFFQSxpQkFBaUI7Ozs7Ozt3RkFDckZ5QixDQUFFOzs7Ozt3RkFDZDNELENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDMkQ7b0JBQUFBLFlBQVksRUFBQyxDQUFpQjtvQkFBQ3pELFNBQVMsRUFBQyxDQUFNO29CQUFDUSxNQUFNLEVBQUMsQ0FBTztnQkFBQyxDQUFDOztvQkFBRyxDQUFXO29CQUFFbkIsd0VBQWEsQ0FBQzBELFNBQVMsQ0FBQ0gsaUJBQWlCLEdBQUUsQ0FBQyxFQUFFM0MsR0FBRyxDQUFDLFFBQVEsQ0FBUHlELFNBQVMsRUFBQ0MsS0FBSztzQ0FBSSxNQUFNLCtEQUFMOUQsQ0FBRzs7NEdBQXlCUCxJQUFJO29DQUFDSyxPQUFPLEVBQUU2QixRQUFRO29DQUFFakMsVUFBVSxHQUFHLENBQUMsR0FBQ29FLEtBQUssSUFBRyxFQUFFO29DQUFJakUsY0FBYyxFQUFFQSxjQUFjO29DQUFFRixLQUFLLEVBQUVrRSxTQUFTO29DQUFFakUsSUFBSSxFQUFFLENBQVM7Ozs7Ozs0R0FBSytELENBQUU7Ozs7OzsyQkFBaEosQ0FBTSxTQUFFRyxLQUFLLEdBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O3dGQUMzTDlELENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDMkQ7b0JBQUFBLFlBQVksRUFBQyxDQUFpQjtvQkFBQ3pELFNBQVMsRUFBQyxDQUFNO29CQUFDUSxNQUFNLEVBQUMsQ0FBTztnQkFBQyxDQUFDOztvQkFBRyxDQUFXO29CQUFFbkIsd0VBQWEsQ0FBQzBELFNBQVMsQ0FBQ0YsaUJBQWlCLEdBQUUsQ0FBQyxFQUFFNUMsR0FBRyxDQUFDLFFBQVEsQ0FBUHlELFNBQVMsRUFBQ0MsS0FBSztzQ0FBSSxNQUFNLCtEQUFMOUQsQ0FBRzs7NEdBQXlCUCxJQUFJO29DQUFDSyxPQUFPLEVBQUU2QixRQUFRO29DQUFFakMsVUFBVSxHQUFHLENBQUMsR0FBQ29FLEtBQUssSUFBRyxFQUFFO29DQUFJakUsY0FBYyxFQUFFQSxjQUFjO29DQUFFRixLQUFLLEVBQUVrRSxTQUFTO29DQUFFakUsSUFBSSxFQUFFLENBQVM7Ozs7Ozs0R0FBSytELENBQUU7Ozs7OzsyQkFBaEosQ0FBTSxTQUFFRyxLQUFLLEdBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O3dGQUMzTDlELENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDMkQ7b0JBQUFBLFlBQVksRUFBQyxDQUFpQjtvQkFBQ3pELFNBQVMsRUFBQyxDQUFNO29CQUFDUSxNQUFNLEVBQUMsQ0FBTztnQkFBQyxDQUFDOztvQkFBRyxDQUFXO29CQUFFbkIsd0VBQWEsQ0FBQzBELFNBQVMsQ0FBQ0QsaUJBQWlCLEdBQUUsQ0FBQyxFQUFFN0MsR0FBRyxDQUFDLFFBQVEsQ0FBUHlELFNBQVMsRUFBQ0MsS0FBSztzQ0FBSSxNQUFNLCtEQUFMOUQsQ0FBRzs7NEdBQTBCUCxJQUFJO29DQUFDSyxPQUFPLEVBQUU2QixRQUFRO29DQUFFakMsVUFBVSxHQUFHLENBQUMsR0FBQ29FLEtBQUssSUFBRSxHQUFHO29DQUFHakUsY0FBYyxFQUFFQSxjQUFjO29DQUFFRixLQUFLLEVBQUVrRSxTQUFTO29DQUFFakUsSUFBSSxFQUFFLENBQVM7Ozs7Ozs0R0FBSytELENBQUU7Ozs7OzsyQkFBaEosQ0FBTSxTQUFFRyxLQUFLLEdBQUMsRUFBRTs7Ozs7Ozs7Ozs7O3dGQUVoTEgsQ0FBRTs7Ozs7d0ZBQ0ZBLENBQUU7Ozs7O3dGQUVGSSxDQUFFO3NHQUNFMUUsa0RBQUk7b0JBQUMyRSxJQUFJLEVBQUMsQ0FBRzswR0FDVEMsQ0FBQztrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUtkMUUsd0RBQUk7Z0JBQ0QyRSxZQUFZLEVBQUUsUUFBUSxHQUFKLENBQUM5RTtvQkFBQUEsaURBQW9CO2dCQUFFLENBQUM7Z0JBQzFDZ0YsV0FBVyxFQUFFLFFBQVEsR0FBSixDQUFDaEY7b0JBQUFBLGdEQUFtQjtnQkFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUFLeEQsQ0FBQztHQWpFdUJzQyxlQUFlO01BQWZBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc291bmRib2FyZHMvZmlyc3Rzb3VuZGJvYXJkLmpzP2FmZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgICAgICAgICAgICBmcm9tICd0b25lJ1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgICAgICAgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEluc3RydW1lbnRQaWNrZXIgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdHJ1bWVudHBpY2tlcic7XHJcbmltcG9ydCBDdWJ5ICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2N1YnknO1xyXG5pbXBvcnQgeyBhcnJheTJncm91cGVkIH0gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnJheTJncm91cGVkJztcclxuXHJcbmNvbnN0IEtleXMgPSAoe2NvbG9yU3RhcnQ9MjAsbm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxoYW5kbGVyfSk9PntcclxuICAgIGNvbnN0IGtleVdpZHRoPTM1O1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwdncnLG1hcmdpblRvcDonM3JlbScsfX0gPlxyXG4gICAge25vdGVzLm1hcCgobm90ZSxub3RlSWR4LGFyYSk9PntcclxuICAgICAgICBsZXQgbGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6a2V5V2lkdGgvMixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpgcmdiKCR7Y29sb3JTdGFydH0sJHsoMzYwL2FyYS5sZW5ndGgpKm5vdGVJZHh9LDIwKWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OjcwMCxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicuOHJlbScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOmtleVdpZHRoLzMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZXYpPT57XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcHJldlN0eWxlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGV2LnRhcmdldCkudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgZXYudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT0ncm90YXRlKDQwZGVnKSc7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG5vdGUsdXNlckluc3RydW1lbnQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ9eyhldik9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBwcmV2U3R5bGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZXYudGFyZ2V0KS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICBldi50YXJnZXQuc3R5bGUudHJhbnNmb3JtPSdyb3RhdGUoNDBkZWcpJztcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIobm90ZSx1c2VySW5zdHJ1bWVudCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17J25vdGEnK25vdGUrbmFtZX0gPlxyXG4gICAgICAgICAgICB7bm90ZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICl9KX1cclxuPC9kaXY+KX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJzdFNvdW5kQm9hcmQoKXtcclxuICAgIGNvbnN0IFt1c2VySW5zdHJ1bWVudCxzZXRVc2VySW5zdHJ1bWVudF09dXNlU3RhdGUoJ1N5bnRoJyk7XHJcbiAgICBjb25zdCBbc3ludGgsc2V0U3ludGhdPXVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHN5bnRoID0gbmV3IFRvbmVbdXNlckluc3RydW1lbnRdKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIHNldFN5bnRoKHtzeW50aDpzeW50aH0pO1xyXG4gICAgfSxbdXNlckluc3RydW1lbnRdKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcGxheU5vdGUodmFsLGluc3RydW1lbnQ9J1N5bnRoJyl7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gVG9uZS5ub3coKVxyXG4gICAgICAgIHN5bnRoLnN5bnRoLnRyaWdnZXJBdHRhY2sodmFsLCBub3cpXHJcbiAgICAgICAgc3ludGguc3ludGgudHJpZ2dlclJlbGVhc2Uobm93ICsgLjEpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgW2xvb3Asc2V0TG9vcF09dXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3ludGhBID0gbmV3IFRvbmUuRk1TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbG9vcEEgPSAgbmV3IFRvbmUuTG9vcCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBub3RlVmFsdWU9J0M1JztcclxuICAgICAgICAgICAgICAgIHN5bnRoQS50cmlnZ2VyQXR0YWNrUmVsZWFzZShub3RlVmFsdWUsIFwiOG5cIiwgdGltZSk7XHJcbiAgICAgICAgICAgIH0sXCI0blwiKS5zdGFydCgwKTtcclxuICAgICAgICAgICAgc2V0TG9vcChsb29wQSk7XHJcbiAgICAgICAgfSxbXSlcclxuICAgICAgICBcclxuICAgIGNvbnN0IGNob3JkTm90ZXNCTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydGIycsNV0sWydBJyw1XV07XHJcbiAgICBjb25zdCBjaG9yZE5vdGVzQU1pbm9yNz1bWydBJyw0XSxbJ0MnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcbiAgICBjb25zdCBjaG9yZE5vdGVzRU1pbm9yNz1bWydCJyw0XSxbJ0QnLDVdLFsnRScsNV0sWydHJyw1XV07XHJcblxyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gKGNob3JubykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdGVzPVtdO1xyXG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnM9WydhJywnYScsJ2EnLCdhJyxdO1xyXG4gICAgICAgIGl0ZXJhdGlvbnMuZm9yRWFjaCgoaXQsaXRJZHgpPT57XHJcbiAgICAgICAgICAgIGNob3Juby5mb3JFYWNoKGNuPT57XHJcbiAgICAgICAgICAgICAgICBub3Rlcy5wdXNoKGNuWzBdKyhjblsxXStpdElkeC0yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBub3RlcztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjonZml4ZWQnLHdpZHRoOicxMDB2dycsaGVpZ2h0OicxMDB2aCcsdG9wOicwcHgnLGxlZnQ6JzBweCcsYmFja2dyb3VuZENvbG9yOidsaWdodGJsdWUnLH19PlxyXG4gICAgICAgICAgICA8SW5zdHJ1bWVudFBpY2tlciB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IHNldFVzZXJJbnN0cnVtZW50PXtzZXRVc2VySW5zdHJ1bWVudH0gLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbjxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsbWFyZ2luVG9wOicxcmVtJyxoZWlnaHQ6JzIwMHB4Jyx9fT57JyBBTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNCTWlub3I3KSw4KS5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9Pig8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCszKX0+PEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSogNDB9ICAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+PC9kaXY+KSl9PC9kaXY+XHJcbjxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsbWFyZ2luVG9wOicxcmVtJyxoZWlnaHQ6JzIwMHB4Jyx9fT57JyBCTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNBTWlub3I3KSw4KS5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9Pig8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCs4KX0+PEtleXMgaGFuZGxlcj17cGxheU5vdGV9IGNvbG9yU3RhcnQ9eygxK25nSWR4KSogOTB9ICAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+PC9kaXY+KSl9PC9kaXY+XHJcbjxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsbWFyZ2luVG9wOicxcmVtJyxoZWlnaHQ6JzIwMHB4Jyx9fT57JyBFTWlub3IgNyd9e2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNFTWlub3I3KSw4KS5tYXAoKG5vdGVHcm91cCxuZ0lkeCk9Pig8ZGl2IGtleT17J2Nobm8nKyhuZ0lkeCsxNCl9PjxLZXlzIGhhbmRsZXI9e3BsYXlOb3RlfSBjb2xvclN0YXJ0PXsoMStuZ0lkeCkqMTIwfSAgdXNlckluc3RydW1lbnQ9e3VzZXJJbnN0cnVtZW50fSBub3Rlcz17bm90ZUdyb3VwfSBuYW1lPXsnQk1pbm9yNyd9IC8+PGJyIC8+PC9kaXY+KSl9PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPmhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDU+XHJcblxyXG5cclxuICAgICAgICAgICAgPEN1YnkgXHJcbiAgICAgICAgICAgICAgICBzdGFydEhhbmRsZXI9eygpPT57VG9uZS5UcmFuc3BvcnQuc3RhcnQoKX19IFxyXG4gICAgICAgICAgICAgICAgc3RvcEhhbmRsZXI9eygpPT57VG9uZS5UcmFuc3BvcnQuc3RvcCgpfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PilcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvbmUiLCJMaW5rIiwiSW5zdHJ1bWVudFBpY2tlciIsIkN1YnkiLCJhcnJheTJncm91cGVkIiwiS2V5cyIsImNvbG9yU3RhcnQiLCJub3RlcyIsIm5hbWUiLCJ1c2VySW5zdHJ1bWVudCIsImhhbmRsZXIiLCJrZXlXaWR0aCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXAiLCJub3RlIiwibm90ZUlkeCIsImFyYSIsImxlZnQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwib25Nb3VzZU92ZXIiLCJldiIsInRhcmdldCIsInRyYW5zZm9ybSIsIm9uVG91Y2hTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJGaXJzdFNvdW5kQm9hcmQiLCJwbGF5Tm90ZSIsInZhbCIsImluc3RydW1lbnQiLCJub3ciLCJzeW50aCIsInRyaWdnZXJBdHRhY2siLCJ0cmlnZ2VyUmVsZWFzZSIsInNldFVzZXJJbnN0cnVtZW50Iiwic2V0U3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwibG9vcCIsInNldExvb3AiLCJzeW50aEEiLCJGTVN5bnRoIiwibG9vcEEiLCJMb29wIiwidGltZSIsIm5vdGVWYWx1ZSIsInRyaWdnZXJBdHRhY2tSZWxlYXNlIiwic3RhcnQiLCJjaG9yZE5vdGVzQk1pbm9yNyIsImNob3JkTm90ZXNBTWlub3I3IiwiY2hvcmROb3Rlc0VNaW5vcjciLCJmdWxsQXJyYXkiLCJjaG9ybm8iLCJpdGVyYXRpb25zIiwiZm9yRWFjaCIsIml0IiwiaXRJZHgiLCJjbiIsInB1c2giLCJ0b3AiLCJiciIsImJvcmRlckJvdHRvbSIsIm5vdGVHcm91cCIsIm5nSWR4IiwiaDUiLCJocmVmIiwiYSIsInN0YXJ0SGFuZGxlciIsIlRyYW5zcG9ydCIsInN0b3BIYW5kbGVyIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});