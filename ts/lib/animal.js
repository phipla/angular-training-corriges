"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(data) {
        this.name = data.name;
        this.height = data.height;
        this.age = data.age;
    }
    get species() {
        return 'Default';
    }
    walk() {
        return new Promise(resolve => setTimeout(() => resolve(`${this.species} ${this.name} a fini de marcher`), 1000 / this.height));
    }
}
exports.Animal = Animal;
