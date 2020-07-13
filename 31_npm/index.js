let readlineSync = require('readline-sync');

let pet = {};

let name = readlineSync.question('Your pet name: ');
let gender = readlineSync.question('Your pet gender \'Male/Female\': ');
let weight = readlineSync.question('Weight: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);
console.log(pet);