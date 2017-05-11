'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alpaca = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animal = require('./animal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpaca = exports.Alpaca = function (_Animal) {
    _inherits(Alpaca, _Animal);

    function Alpaca() {
        _classCallCheck(this, Alpaca);

        return _possibleConstructorReturn(this, (Alpaca.__proto__ || Object.getPrototypeOf(Alpaca)).apply(this, arguments));
    }

    _createClass(Alpaca, [{
        key: 'walk',
        value: function walk() {
            var _this2 = this;

            return new Promise(function (resolve) {
                return setTimeout(function () {
                    return resolve(_this2.species + ' ' + _this2.name + ' a fini de marcher');
                }, 500 / _this2.height);
            });
        }
    }, {
        key: 'species',
        get: function get() {
            return 'Alpaca';
        }
    }]);

    return Alpaca;
}(_animal.Animal);