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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/instrumentpicker */ \"./components/instrumentpicker.js\");\n/* harmony import */ var _components_cuby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cuby */ \"./components/cuby.js\");\n/* harmony import */ var _components_array2grouped__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/array2grouped */ \"./components/array2grouped.js\");\n\n\n\n\n\n// import Loopy from '../../components/loopy';\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Keys = function(param) {\n    var _colorStart = param.colorStart, colorStart = _colorStart === void 0 ? 20 : _colorStart, notes = param.notes, name = param.name, userInstrument = param.userInstrument, handler = param.handler;\n    var _this1 = _this;\n    var keyWidth = 35;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            marginTop: '3rem'\n        },\n        children: notes.map(function(note, noteIdx, ara) {\n            var left = keyWidth * noteIdx + noteIdx * 1;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: 'absolute',\n                    left: left,\n                    display: 'inline',\n                    width: keyWidth,\n                    height: keyWidth,\n                    borderRadius: keyWidth / 2,\n                    backgroundColor: \"rgb(\".concat(colorStart, \",\").concat(360 / ara.length * noteIdx, \",20)\"),\n                    textAlign: 'center',\n                    fontWeight: 700,\n                    fontSize: '.8rem',\n                    paddingTop: keyWidth / 3\n                },\n                onMouseOver: function(ev) {\n                    // let prevStyle=window.getComputedStyle(ev.target).transform;\n                    ev.target.style.transform = 'rotate(40deg)';\n                    handler(note, userInstrument);\n                },\n                children: note\n            }, 'nota' + note + name, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = Keys;\nfunction FirstPost() {\n    var _this2 = this;\n    var playNote = function playNote(val) {\n        var instrument = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Synth';\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth1.synth.triggerAttack(val, now);\n        synth1.synth.triggerRelease(now + 0.1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Synth'), userInstrument = ref[0], setUserInstrument = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), synth1 = ref1[0], setSynth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__[userInstrument]().toDestination();\n        setSynth({\n            synth: synth\n        });\n    }, [\n        userInstrument\n    ]);\n    ;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), loop = ref2[0], setLoop = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var synthA = new tone__WEBPACK_IMPORTED_MODULE_2__.FMSynth().toDestination();\n        var loopA = new tone__WEBPACK_IMPORTED_MODULE_2__.Loop(function(time) {\n            var noteValue = 'C5';\n            synthA.triggerAttackRelease(noteValue, \"8n\", time);\n        }, \"4n\").start(0);\n        setLoop(loopA);\n    }, []);\n    var chordNotesBMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'F#',\n            5\n        ],\n        [\n            'A',\n            5\n        ]\n    ];\n    var chordNotesAMinor7 = [\n        [\n            'A',\n            4\n        ],\n        [\n            'C',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var chordNotesEMinor7 = [\n        [\n            'B',\n            4\n        ],\n        [\n            'D',\n            5\n        ],\n        [\n            'E',\n            5\n        ],\n        [\n            'G',\n            5\n        ]\n    ];\n    var fullArray = function(chorno) {\n        var notes = [];\n        var iterations = [\n            'a',\n            'a',\n            'a',\n            'a', \n        ];\n        iterations.forEach(function(it, itIdx) {\n            chorno.forEach(function(cn) {\n                notes.push(cn[0] + (cn[1] + itIdx - 2));\n            });\n        });\n        return notes;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            width: '100vw',\n            height: '100vh',\n            top: '0px',\n            left: '0px',\n            backgroundColor: 'lightblue'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_instrumentpicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userInstrument: userInstrument,\n                setUserInstrument: setUserInstrument\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesBMinor7), 8).map(function(noteGroup) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                        handler: playNote,\n                        colorStart: 40,\n                        userInstrument: userInstrument,\n                        notes: noteGroup,\n                        name: 'BMinor7'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 85,\n                        columnNumber: 66\n                    }, _this2)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 85,\n                columnNumber: 183\n            }, this),\n            (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesAMinor7), 8).map(function(noteGroup) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                        handler: playNote,\n                        colorStart: 40,\n                        userInstrument: userInstrument,\n                        notes: noteGroup,\n                        name: 'BMinor7'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 86,\n                        columnNumber: 66\n                    }, _this2)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 86,\n                columnNumber: 183\n            }, this),\n            (0,_components_array2grouped__WEBPACK_IMPORTED_MODULE_6__.array2grouped)(fullArray(chordNotesEMinor7), 8).map(function(noteGroup) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Keys, {\n                        handler: playNote,\n                        colorStart: 40,\n                        userInstrument: userInstrument,\n                        notes: noteGroup,\n                        name: 'BMinor7'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 87,\n                        columnNumber: 66\n                    }, _this2)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 87,\n                columnNumber: 183\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                        lineNumber: 94,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cuby__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                startHandler: function() {\n                    tone__WEBPACK_IMPORTED_MODULE_2__.Transport.start();\n                },\n                stopHandler: function() {\n                    tone__WEBPACK_IMPORTED_MODULE_2__.Transport.stop();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\_ROOT\\\\tonedef\\\\tonedef\\\\pages\\\\soundboards\\\\firstsoundboard.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this));\n};\n_s(FirstPost, \"G/wefAoDrv4vk3IRxJSreZ9uo7E=\");\n_c1 = FirstPost;\nvar _c, _c1;\n$RefreshReg$(_c, \"Keys\");\n$RefreshReg$(_c1, \"FirstPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zb3VuZGJvYXJkcy9maXJzdHNvdW5kYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ25CO0FBQ0E7QUFDb0M7QUFDaEUsRUFBOEM7QUFDTjtBQUNzQjs7O0FBRTlELEdBQUssQ0FBQ1EsSUFBSSxHQUFHLFFBQVEsUUFBNkMsQ0FBQzs0QkFBcERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBQyxFQUFFLGdCQUFDQyxLQUFLLFNBQUxBLEtBQUssRUFBQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLGNBQWMsU0FBZEEsY0FBYyxFQUFDQyxPQUFPLFNBQVBBLE9BQU87O0lBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDakIsTUFBTSw2RUFDTEMsQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsS0FBSyxFQUFDLENBQU87WUFBQ0MsU0FBUyxFQUFDLENBQU07UUFBQyxDQUFDO2tCQUM1Q1IsS0FBSyxDQUFDUyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUNDLE9BQU8sRUFBQ0MsR0FBRyxFQUFHLENBQUM7WUFDNUIsR0FBRyxDQUFDQyxJQUFJLEdBQUVULFFBQVEsR0FBQ08sT0FBTyxHQUFHQSxPQUFPLEdBQUMsQ0FBQztZQUMxQyxNQUFNLDZFQUNETixDQUFHO2dCQUNBQyxLQUFLLEVBQUUsQ0FBQztvQkFDSlEsUUFBUSxFQUFDLENBQVU7b0JBQ25CRCxJQUFJLEVBQUNBLElBQUk7b0JBQ1RFLE9BQU8sRUFBQyxDQUFRO29CQUNoQlIsS0FBSyxFQUFDSCxRQUFRO29CQUNkWSxNQUFNLEVBQUNaLFFBQVE7b0JBQ2ZhLFlBQVksRUFBQ2IsUUFBUSxHQUFDLENBQUM7b0JBQ3ZCYyxlQUFlLEVBQUUsQ0FBSSxNQUFnQixNQUF3QixDQUF0Q25CLFVBQVUsRUFBQyxDQUFDLElBQTJCLE1BQUksQ0FBNUIsR0FBRyxHQUFDYSxHQUFHLENBQUNPLE1BQU0sR0FBRVIsT0FBTyxFQUFDLENBQUk7b0JBQ2xF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QUNzRSxJQUFJLEVBQUMsQ0FBRzswR0FDVEMsQ0FBQztrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUtkckUsd0RBQUk7Z0JBQ0RzRSxZQUFZLEVBQUUsUUFBUSxHQUFKLENBQUN6RTtvQkFBQUEsaURBQW9CO2dCQUFFLENBQUM7Z0JBQzFDMkUsV0FBVyxFQUFFLFFBQVEsR0FBSixDQUFDM0U7b0JBQUFBLGdEQUFtQjtnQkFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUFLeEQsQ0FBQztHQWpFdUJtQyxTQUFTO01BQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc291bmRib2FyZHMvZmlyc3Rzb3VuZGJvYXJkLmpzP2FmZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSAndG9uZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEluc3RydW1lbnRQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN0cnVtZW50cGlja2VyJztcclxuLy8gaW1wb3J0IExvb3B5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9vcHknO1xyXG5pbXBvcnQgQ3VieSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2N1YnknO1xyXG5pbXBvcnQgeyBhcnJheTJncm91cGVkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnJheTJncm91cGVkJztcclxuXHJcbmNvbnN0IEtleXMgPSAoe2NvbG9yU3RhcnQ9MjAsbm90ZXMsbmFtZSx1c2VySW5zdHJ1bWVudCxoYW5kbGVyfSk9PntcclxuICAgIGNvbnN0IGtleVdpZHRoPTM1O1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwdncnLG1hcmdpblRvcDonM3JlbScsfX0gPlxyXG4gICAge25vdGVzLm1hcCgobm90ZSxub3RlSWR4LGFyYSk9PntcclxuICAgICAgICBsZXQgbGVmdD0oa2V5V2lkdGgqbm90ZUlkeCkrKG5vdGVJZHgqMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmxlZnQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OidpbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6a2V5V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6a2V5V2lkdGgvMixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpgcmdiKCR7Y29sb3JTdGFydH0sJHsoMzYwL2FyYS5sZW5ndGgpKm5vdGVJZHh9LDIwKWAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OjcwMCxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicuOHJlbScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOmtleVdpZHRoLzMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZXYpPT57XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcHJldlN0eWxlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGV2LnRhcmdldCkudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgZXYudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT0ncm90YXRlKDQwZGVnKSc7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG5vdGUsdXNlckluc3RydW1lbnQpO1xyXG4gICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAga2V5PXsnbm90YScrbm90ZStuYW1lfSA+XHJcbiAgICAgICAgICAgIHtub3RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKX0pfVxyXG48L2Rpdj4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcnN0UG9zdCgpe1xyXG4gICAgY29uc3QgW3VzZXJJbnN0cnVtZW50LHNldFVzZXJJbnN0cnVtZW50XT11c2VTdGF0ZSgnU3ludGgnKTtcclxuICAgIGNvbnN0IFtzeW50aCxzZXRTeW50aF09dXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZVt1c2VySW5zdHJ1bWVudF0oKS50b0Rlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgc2V0U3ludGgoe3N5bnRoOnN5bnRofSk7XHJcbiAgICB9LFt1c2VySW5zdHJ1bWVudF0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwbGF5Tm90ZSh2YWwsaW5zdHJ1bWVudD0nU3ludGgnKXtcclxuICAgICAgICBjb25zdCBub3cgPSBUb25lLm5vdygpXHJcbiAgICAgICAgc3ludGguc3ludGgudHJpZ2dlckF0dGFjayh2YWwsIG5vdylcclxuICAgICAgICBzeW50aC5zeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAuMSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBbbG9vcCxzZXRMb29wXT11c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzeW50aEEgPSBuZXcgVG9uZS5GTVN5bnRoKCkudG9EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBsb29wQSA9ICBuZXcgVG9uZS5Mb29wKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vdGVWYWx1ZT0nQzUnO1xyXG4gICAgICAgICAgICAgICAgc3ludGhBLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG5vdGVWYWx1ZSwgXCI4blwiLCB0aW1lKTtcclxuICAgICAgICAgICAgfSxcIjRuXCIpLnN0YXJ0KDApO1xyXG4gICAgICAgICAgICBzZXRMb29wKGxvb3BBKTtcclxuICAgICAgICB9LFtdKVxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgY2hvcmROb3Rlc0JNaW5vcjc9W1snQicsNF0sWydEJyw1XSxbJ0YjJyw1XSxbJ0EnLDVdXTtcclxuICAgIGNvbnN0IGNob3JkTm90ZXNBTWlub3I3PVtbJ0EnLDRdLFsnQycsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuICAgIGNvbnN0IGNob3JkTm90ZXNFTWlub3I3PVtbJ0InLDRdLFsnRCcsNV0sWydFJyw1XSxbJ0cnLDVdXTtcclxuXHJcbiAgICBjb25zdCBmdWxsQXJyYXkgPSAoY2hvcm5vKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXM9W107XHJcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucz1bJ2EnLCdhJywnYScsJ2EnLF07XHJcbiAgICAgICAgaXRlcmF0aW9ucy5mb3JFYWNoKChpdCxpdElkeCk9PntcclxuICAgICAgICAgICAgY2hvcm5vLmZvckVhY2goY249PntcclxuICAgICAgICAgICAgICAgIG5vdGVzLnB1c2goY25bMF0rKGNuWzFdK2l0SWR4LTIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOidmaXhlZCcsd2lkdGg6JzEwMHZ3JyxoZWlnaHQ6JzEwMHZoJyx0b3A6JzBweCcsbGVmdDonMHB4JyxiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Ymx1ZScsfX0+XHJcbiAgICAgICAgICAgIDxJbnN0cnVtZW50UGlja2VyIHVzZXJJbnN0cnVtZW50PXt1c2VySW5zdHJ1bWVudH0gc2V0VXNlckluc3RydW1lbnQ9e3NldFVzZXJJbnN0cnVtZW50fSAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxue2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNCTWlub3I3KSw4KS5tYXAobm90ZUdyb3VwPT4oPD48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17NDB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48Lz4pKX08YnIgLz5cclxue2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNBTWlub3I3KSw4KS5tYXAobm90ZUdyb3VwPT4oPD48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17NDB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48Lz4pKX08YnIgLz5cclxue2FycmF5Mmdyb3VwZWQoZnVsbEFycmF5KGNob3JkTm90ZXNFTWlub3I3KSw4KS5tYXAobm90ZUdyb3VwPT4oPD48S2V5cyBoYW5kbGVyPXtwbGF5Tm90ZX0gY29sb3JTdGFydD17NDB9ICB1c2VySW5zdHJ1bWVudD17dXNlckluc3RydW1lbnR9IG5vdGVzPXtub3RlR3JvdXB9IG5hbWU9eydCTWlub3I3J30gLz48Lz4pKX08YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oNT5cclxuXHJcblxyXG4gICAgICAgICAgICA8Q3VieSBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SGFuZGxlcj17KCk9PntUb25lLlRyYW5zcG9ydC5zdGFydCgpfX0gXHJcbiAgICAgICAgICAgICAgICBzdG9wSGFuZGxlcj17KCk9PntUb25lLlRyYW5zcG9ydC5zdG9wKCl9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KVxyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9uZSIsIkxpbmsiLCJJbnN0cnVtZW50UGlja2VyIiwiQ3VieSIsImFycmF5Mmdyb3VwZWQiLCJLZXlzIiwiY29sb3JTdGFydCIsIm5vdGVzIiwibmFtZSIsInVzZXJJbnN0cnVtZW50IiwiaGFuZGxlciIsImtleVdpZHRoIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcCIsIm5vdGUiLCJub3RlSWR4IiwiYXJhIiwibGVmdCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxlbmd0aCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJvbk1vdXNlT3ZlciIsImV2IiwidGFyZ2V0IiwidHJhbnNmb3JtIiwiRmlyc3RQb3N0IiwicGxheU5vdGUiLCJ2YWwiLCJpbnN0cnVtZW50Iiwibm93Iiwic3ludGgiLCJ0cmlnZ2VyQXR0YWNrIiwidHJpZ2dlclJlbGVhc2UiLCJzZXRVc2VySW5zdHJ1bWVudCIsInNldFN5bnRoIiwidG9EZXN0aW5hdGlvbiIsImxvb3AiLCJzZXRMb29wIiwic3ludGhBIiwiRk1TeW50aCIsImxvb3BBIiwiTG9vcCIsInRpbWUiLCJub3RlVmFsdWUiLCJ0cmlnZ2VyQXR0YWNrUmVsZWFzZSIsInN0YXJ0IiwiY2hvcmROb3Rlc0JNaW5vcjciLCJjaG9yZE5vdGVzQU1pbm9yNyIsImNob3JkTm90ZXNFTWlub3I3IiwiZnVsbEFycmF5IiwiY2hvcm5vIiwiaXRlcmF0aW9ucyIsImZvckVhY2giLCJpdCIsIml0SWR4IiwiY24iLCJwdXNoIiwidG9wIiwiYnIiLCJub3RlR3JvdXAiLCJoNSIsImhyZWYiLCJhIiwic3RhcnRIYW5kbGVyIiwiVHJhbnNwb3J0Iiwic3RvcEhhbmRsZXIiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/soundboards/firstsoundboard.js\n");

/***/ })

});