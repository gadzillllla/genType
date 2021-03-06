// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function testTuple(param) {
  return param[0] + param[1] | 0;
}

function computeArea(param) {
  return Caml_int32.imul(Caml_int32.imul(param[0], param[1]), Belt_Option.mapWithDefault(param[2], 1, (function (n) {
                    return n;
                  })));
}

function computeAreaWithIdent(param) {
  return Caml_int32.imul(Caml_int32.imul(param[0], param[1]), Belt_Option.mapWithDefault(param[2], 1, (function (n) {
                    return n;
                  })));
}

function computeAreaNoConverters(param) {
  return Caml_int32.imul(param[0], param[1]);
}

function coord2d(x, y) {
  return /* tuple */[
          x,
          y,
          undefined
        ];
}

function getFirstName(param) {
  return param[0][/* name */0];
}

function marry(first, second) {
  return /* tuple */[
          first,
          second
        ];
}

function changeSecondAge(param) {
  var second = param[1];
  return /* tuple */[
          param[0],
          /* record */[
            /* name */second[/* name */0],
            /* age */second[/* age */1] + 1 | 0
          ]
        ];
}

var origin = /* tuple */[
  0,
  0,
  0
];

exports.testTuple = testTuple;
exports.origin = origin;
exports.computeArea = computeArea;
exports.computeAreaWithIdent = computeAreaWithIdent;
exports.computeAreaNoConverters = computeAreaNoConverters;
exports.coord2d = coord2d;
exports.getFirstName = getFirstName;
exports.marry = marry;
exports.changeSecondAge = changeSecondAge;
/* No side effect */
