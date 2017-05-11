import { Animal } from './animal'

export class Alpaca extends Animal {
    get species() {
        return 'Alpaca';
    }

    walk() {
        return new Promise<string>(
            resolve => setTimeout(
                () => resolve(`${this.species} ${this.name} a fini de marcher`),
                500 / this.height 
            )
        );
    }
}