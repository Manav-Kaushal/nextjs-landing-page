webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\nvar _jsxFileName = \"/media/manav/Work/VS Code Folder/ReactJS Projects/nextjs-landing-page/src/components/list.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction List(_ref) {\n  var _this = this;\n\n  var _ref$items = _ref.items,\n      items = _ref$items === void 0 ? [] : _ref$items,\n      parentStyle = _ref.parentStyle,\n      childStyle = _ref.childStyle;\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    as: \"ul\",\n    sx: _objectSpread({\n      listStyleType: \"none\",\n      margin: 0,\n      padding: 0\n    }, parentStyle),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, items.map(function (item) {\n    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }\n    });\n  }));\n}\n_c = List;\nvar styles = {\n  listIcon: {\n    width: [\"25px\", \"35px\"],\n    height: \"auto\",\n    color: \"primary\",\n    padding: 0,\n    fontSize: [3, 5],\n    ml: \"-1px\",\n    flexShrink: 0,\n    justifyContent: \"flex-start\",\n    mt: \"2px\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcz83ZDMxIl0sIm5hbWVzIjpbIkxpc3QiLCJpdGVtcyIsInBhcmVudFN0eWxlIiwiY2hpbGRTdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwibWFwIiwiaXRlbSIsInN0eWxlcyIsImxpc3RJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwibWwiLCJmbGV4U2hyaW5rIiwianVzdGlmeUNvbnRlbnQiLCJtdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUF1RDtBQUFBOztBQUFBLHdCQUF2Q0MsS0FBdUM7QUFBQSxNQUF2Q0EsS0FBdUMsMkJBQS9CLEVBQStCO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUNwRSxTQUNFLE1BQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLE1BQUU7QUFBSUMsbUJBQWEsRUFBRSxNQUFuQjtBQUEyQkMsWUFBTSxFQUFFLENBQW5DO0FBQXNDQyxhQUFPLEVBQUU7QUFBL0MsT0FBcURKLFdBQXJELENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHRCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQVYsQ0FKSCxDQURGO0FBVUQ7S0FYdUJSLEk7QUFheEIsSUFBTVMsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRTtBQUNSQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQURDO0FBRVJDLFVBQU0sRUFBRSxNQUZBO0FBR1JDLFNBQUssRUFBRSxTQUhDO0FBSVJQLFdBQU8sRUFBRSxDQUpEO0FBS1JRLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEY7QUFNUkMsTUFBRSxFQUFFLE1BTkk7QUFPUkMsY0FBVSxFQUFFLENBUEo7QUFRUkMsa0JBQWMsRUFBRSxZQVJSO0FBU1JDLE1BQUUsRUFBRTtBQVRJO0FBREcsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbGV4LCBCb3gsIEljb25CdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGl0ZW1zID0gW10sIHBhcmVudFN0eWxlLCBjaGlsZFN0eWxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBhcz1cInVsXCJcbiAgICAgIHN4PXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLCBtYXJnaW46IDAsIHBhZGRpbmc6IDAsIC4uLnBhcmVudFN0eWxlIH19XG4gICAgPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8RmxleD48L0ZsZXg+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBsaXN0SWNvbjoge1xuICAgIHdpZHRoOiBbXCIyNXB4XCIsIFwiMzVweFwiXSxcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBwYWRkaW5nOiAwLFxuICAgIGZvbnRTaXplOiBbMywgNV0sXG4gICAgbWw6IFwiLTFweFwiLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgIG10OiBcIjJweFwiLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/list.js\n");

/***/ })

})