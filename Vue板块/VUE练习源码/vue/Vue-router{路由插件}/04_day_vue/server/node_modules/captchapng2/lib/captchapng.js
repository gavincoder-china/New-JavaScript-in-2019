'use strict';

var _nodePnglib = require('node-pnglib');

var _nodePnglib2 = _interopRequireDefault(_nodePnglib);

var _font = require('./font');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function captchapng(width, height, dispNumber) {
  _classCallCheck(this, captchapng);

  this.width = width;
  this.height = height;
  this.depth = 8;
  this.dispNumber = '' + dispNumber.toString();
  this.widthAvg = parseInt(this.width / this.dispNumber.length);

  var png = new _nodePnglib2.default(this.width, this.height, this.depth, '#FFF');

  for (var i = 0; i < 7; i++) {
    png.color(randomColor());
  }

  for (var section = 0; section < this.dispNumber.length; section++) {
    var curNum = this.dispNumber[section].valueOf();
    var n = parseInt(Math.random() * _font.numMask.length);
    n = n >= _font.numMask.length ? 0 : n;

    var mask = _font.numMask[n];
    var curMask = _font.numMask[n][curNum];

    var random_x_offs = parseInt(Math.random() * (this.widthAvg - curMask[0].length));
    var random_y_offs = parseInt(Math.random() * (this.height - curMask.length));

    random_x_offs = random_x_offs < 0 ? 0 : random_x_offs;
    random_y_offs = random_y_offs < 0 ? 0 : random_y_offs;

    var r = random(1, 7);
    for (var _i = 0; _i < curMask.length && _i + random_y_offs < this.height; _i++) {
      var lineIndex = png.index(this.widthAvg * section + random_x_offs, _i + random_y_offs);
      for (var j = 0; j < curMask[_i].length; j++) {
        if (curMask[_i][j] == '1' && this.widthAvg * section + random_x_offs + j < this.width) {
          png.buffer[lineIndex + j] = r;
        }
      }
    }
  }
  return png;
};

function randomColor() {
  return [random(0, 255), random(0, 255), random(0, 255), random(100, 255)];
}

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};