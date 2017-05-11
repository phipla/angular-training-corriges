export class Animal {
    constructor(data) {
        this.name = data.name;
        this.height = data.height;
    }

    get species() { 
        return 'Default';
    }

    walk() {
        return new Promise(
            resolve => setTimeout(
                () => resolve(`${this.species} ${this.name} a fini de marcher`),
                1000 / this.height
            )
        );
    }
}