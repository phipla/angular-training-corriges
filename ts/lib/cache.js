"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws = require("./webservice");
class Cache {
    constructor(factory) {
        this.factory = factory;
        this.data = [];
    }
    get(i) {
        return this.data[i]
            ? Promise.resolve(this.data[i])
            : ws.get(i).then(data => {
                if (!data)
                    return data;
                const item = this.factory(data);
                this.data[i] = item;
                return item;
            });
    }
    add(item) {
        return ws.add(item).then(data => {
            if (!data)
                return data;
            const item = this.factory(data);
            this.data.push(item);
            return item;
        });
    }
    set(i, item) {
        return ws.set(i, item).then(data => {
            if (!data)
                return data;
            const item = this.factory(data);
            this.data[i] = item;
            return item;
        });
    }
    erase(i) {
        return ws.erase(i).then(data => {
            if (!data)
                return data;
            const item = this.factory(data);
            this.data.splice(i, 1);
            return item;
        });
    }
}
exports.Cache = Cache;
