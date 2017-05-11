export type AnimalProperties = { name: string, height: number, age: number };

export class Animal {
    name: string;
    height: number;
    age: number;

    constructor(data: AnimalProperties) {
        this.name = data.name;
        this.height = data.height;
        this.age = data.age;
    }

    get species() { 
        return 'Default';
    }

    walk() {
        return new Promise<string>(
            resolve => setTimeout(
                () => resolve(`${this.species} ${this.name} a fini de marcher`),
                1000 / this.height
            )
        );
    }
}