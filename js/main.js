const cities = [
  { name: "Москва", population: 12506468 },
  { name: "Санкт-Петербург", population: 5351935 },
  { name: "Новосибирск", population: 1612833 },
  { name: "Калиниград", population: 482443 },
  { name: "Калуга", population: 336726 },
];
cities.unshift({ name: "Grozny", population: 145555 });
cities.push({ name: "Нью-йорк", population: 1230000 });
console.log(cities);
cities.forEach((item, index) => {
  console.log(item);
});
let a = cities.filter((item, index) => {
  return item.population > 1000000;
});
console.log(a);
//Из практики последние две не сделал
//То ,что внизу это не сделанные две задачи ,из прошлой домашки
let dog = [
  {
    a: 10,
    b: 5,
  },
  {
    a: 20,
    b: 22,
  },
  {
    a: 131,
    b: 55,
  },
];
let dog1 = dog.map((item, index) => {
  return item.a + item.b;
});
console.log(dog1);

let cat = [
  {
    x: 10,
    y: "lorem",
  },
  {
    x: 21,
    y: "lorem",
  },
  {
    x: -17,
    y: "lorem",
  },
  {
    x: 156,
    y: "lorem",
  },
];
let result = cat.reduce((sum, item, index, arr) => {
  return sum + item.x;
}, 0);
console.log(result);
