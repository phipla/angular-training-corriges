"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Alpaca extends animal_1.Animal {
    get species() {
        return 'Alpaca';
    }
    walk() {
        return new Promise(resolve => setTimeout(() => resolve(`${this.species} ${this.name} a fini de marcher`), 500 / this.height));
    }
}
exports.Alpaca = Alpaca;
