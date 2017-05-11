"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpaca_1 = require("./alpaca");
const cache_1 = require("./cache");
const cache = new cache_1.Cache(data => data && new alpaca_1.Alpaca(data));
const range7 = [0, 1, 2, 3, 4, 5, 6];
Promise.all(range7.map(i => cache.get(i)))
    .then(alpacaArray => {
    console.log(alpacaArray);
    const babyAlpaca = new alpaca_1.Alpaca({ name: 'Alice', height: 0.4, age: 0.01 });
    return cache.add(babyAlpaca);
})
    .then(newAlpaca => {
    console.log(newAlpaca);
    return Promise.all(range7.map(i => cache.get(i)));
})
    .then(alpacaArray => {
    console.log(alpacaArray);
    const monicaIsAllGrownUp = new alpaca_1.Alpaca({ name: 'Monica', height: 0.66, age: 2 });
    return cache.set(1, monicaIsAllGrownUp);
})
    .then(newAlpaca => {
    console.log(newAlpaca);
    return Promise.all(range7.map(i => cache.get(i)));
})
    .then(alpacaArray => {
    console.log(alpacaArray);
    return cache.erase(2);
})
    .then(newAlpaca => {
    console.log(newAlpaca);
    return Promise.all(range7.map(i => cache.get(i)));
})
    .then(alpacaArray => {
    console.log(alpacaArray);
});
