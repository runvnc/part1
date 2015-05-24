"use strict";

var _Promise = require("babel-runtime/core-js/promise")["default"];

exports.pr = function (func) {
  return new _Promise(function (res) {
    func();
    res();
  });
};