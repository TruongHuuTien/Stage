"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function Stage(element) {
  _classCallCheck(this, Stage);

  console.log("Stage is starting");
  this.ctx = element.getContext('webgl');
};

exports.default = Stage;