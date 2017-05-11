import { Llama } from './llama';
import { Alpaca } from './alpaca';

const animalArray = {
    llamas: [
        { name: 'Ludwig', height: 1.74 },
        { name: 'Brunhilde', height: 1.84 },
        { name: 'Sigrid', height: 1.72 },
        { name: 'Wolfgang', height: 1.8 },
    ],
    alpacas: [
        { name: 'Roberto', height: 0.67 },
        { name: 'Monica', height: 0.56 },
        { name: 'Bobby', height: 0.98 },
        { name: 'Marcel', height: 0.87 },
        { name: 'Albert', height: 0.89 },
        { name: 'Madeline', height: 0.76 },
    ]
}

const allAnimals = animalArray.llamas.map(data => new Llama(data))
    .concat(animalArray.alpacas.map(data => new Alpaca(data)));

Promise
    .race(allAnimals.map(animal => animal.walk()))
    .then(winner => console.log(winner));