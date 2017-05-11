"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    { name: 'Roberto', height: 0.67, age: 2 },
    { name: 'Monica', height: 0.56, age: 1 },
    { name: 'Bobby', height: 0.9, age: 5 },
    { name: 'Marcel', height: 0.87, age: 1.2 },
    { name: 'Albert', height: 0.89, age: 10 },
];
let rnd = () => Math.random() * 1000;
exports.get = (i) => new Promise(r => setTimeout(() => r(data[i]), rnd()));
exports.getAll = () => new Promise(r => setTimeout(() => r(data), rnd()));
exports.add = (item) => new Promise(r => setTimeout(() => { data.push(item); r(item); }, rnd()));
exports.set = (i, item) => new Promise(r => setTimeout(() => r(data[i] = item), rnd()));
exports.erase = (i) => new Promise(r => setTimeout(() => r(data.splice(i, 1)[0]), rnd()));
