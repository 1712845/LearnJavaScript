let Mouse = require('./mouse');
let Cat = require('./cat');

let mickey = new Mouse('black');
let jerry  = new Mouse('white');

console.log(mickey);
let tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);