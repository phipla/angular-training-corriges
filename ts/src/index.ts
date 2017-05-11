import { Alpaca } from './alpaca';
import { Cache } from './cache';

const cache = new Cache(data => data && new Alpaca(data));

const range7 = [ 0, 1, 2, 3, 4, 5, 6 ];

Promise.all(range7.map(i => cache.get(i)))
    .then(alpacaArray => {
        console.log(alpacaArray);
        const babyAlpaca = new Alpaca({ name: 'Alice', height: 0.4, age: 0.01 })
        return cache.add(babyAlpaca);
    })
    .then(newAlpaca => {
        console.log(newAlpaca);
        return Promise.all(range7.map(i => cache.get(i)))
    })
    .then(alpacaArray => {
        console.log(alpacaArray);
        const monicaIsAllGrownUp = new Alpaca({ name: 'Monica', height: 0.66, age: 2 })
        return cache.set(1, monicaIsAllGrownUp);
    })
    .then(newAlpaca => {
        console.log(newAlpaca);
        return Promise.all(range7.map(i => cache.get(i)))
    })
    .then(alpacaArray => {
        console.log(alpacaArray);
        return cache.erase(2);
    })
    .then(newAlpaca => {
        console.log(newAlpaca);
        return Promise.all(range7.map(i => cache.get(i)))
    })
    .then(alpacaArray => {
        console.log(alpacaArray);
    })