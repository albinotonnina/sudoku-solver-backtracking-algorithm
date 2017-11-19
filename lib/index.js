'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseBoard = function parseBoard(board) {
  return board.split('\n').filter(function (word) {
    return word.length;
  }).map(function (row) {
    return row.split(' ').map(function (num) {
      return +num;
    });
  });
};

exports.parseBoard = parseBoard;