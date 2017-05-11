import * as ws from './webservice';

export type CachedItemFactory<T> = (input: any) => T;

export class Cache<T> {
    private data: Array<T> = [];

    constructor(
        private factory: CachedItemFactory<T>
    ) {}

    get(i: number): Promise<T> {
        return this.data[i]
            ? Promise.resolve(this.data[i])
            : ws.get(i).then(data => {
                if (!data) return data;
                const item = this.factory(data);
                this.data[i] = item;
                return item;
            })
    }

    add(item: T): Promise<T> {
        return ws.add(item).then(data => {
            if (!data) return data;
            const item = this.factory(data);
            this.data.push(item);
            return item;
        })
    }

    set(i: number, item: T): Promise<T> {
        return ws.set(i, item).then(data => {
            if (!data) return data;
            const item = this.factory(data);
            this.data[i] = item;
            return item;
        })
    }

    erase(i: number): Promise<T> {
        return ws.erase(i).then(data => {
            if (!data) return data;
            const item = this.factory(data);
            this.data.splice(i, 1);
            return item;
        })
    }
}