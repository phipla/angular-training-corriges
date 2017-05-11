'use strict';

var _llama = require('./llama');

var _alpaca = require('./alpaca');

var animalArray = {
    llamas: [{ name: 'Ludwig', height: 1.74 }, { name: 'Brunhilde', height: 1.84 }, { name: 'Sigrid', height: 1.72 }, { name: 'Wolfgang', height: 1.8 }],
    alpacas: [{ name: 'Roberto', height: 0.67 }, { name: 'Monica', height: 0.56 }, { name: 'Bobby', height: 0.98 }, { name: 'Marcel', height: 0.87 }, { name: 'Albert', height: 0.89 }, { name: 'Madeline', height: 0.76 }]
};

var allAnimals = animalArray.llamas.map(function (data) {
    return new _llama.Llama(data);
}).concat(animalArray.alpacas.map(function (data) {
    return new _alpaca.Alpaca(data);
}));

Promise.race(allAnimals.map(function (animal) {
    return animal.walk();
})).then(function (winner) {
    return console.log(winner);
});