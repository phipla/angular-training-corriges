'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = exports.Animal = function () {
    function Animal(data) {
        _classCallCheck(this, Animal);

        this.name = data.name;
        this.height = data.height;
    }

    _createClass(Animal, [{
        key: 'walk',
        value: function walk() {
            var _this = this;

            return new Promise(function (resolve) {
                return setTimeout(function () {
                    return resolve(_this.species + ' ' + _this.name + ' a fini de marcher');
                }, 1000 / _this.height);
            });
        }
    }, {
        key: 'species',
        get: function get() {
            return 'Default';
        }
    }]);

    return Animal;
}();