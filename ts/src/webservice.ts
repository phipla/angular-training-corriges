const data = [
  { name: 'Roberto', height: 0.67, age: 2 },
  { name: 'Monica', height: 0.56, age: 1 },
  { name: 'Bobby', height: 0.9, age: 5 },
  { name: 'Marcel', height: 0.87, age: 1.2 },
  { name: 'Albert', height: 0.89, age: 10 },
];
let rnd = () => Math.random() * 1000;

export const get = (i: number) =>
  new Promise(r => setTimeout(() => r(data[i]), rnd()));
export const getAll = () =>
  new Promise(r => setTimeout(() => r(data), rnd()));
export const add = (item: any) =>
  new Promise(r => setTimeout(() => {data.push(item); r(item)}, rnd()));
export const set = (i: number, item: any) =>
  new Promise(r => setTimeout(() => r(data[i] = item), rnd()));
export const erase = (i: number) =>
  new Promise(r => setTimeout(() => r(data.splice(i, 1)[0]), rnd()));